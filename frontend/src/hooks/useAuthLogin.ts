import { useEffect } from "react";
import { Magic } from "magic-sdk";
import { OAuthExtension } from "@magic-ext/oauth2";
import { r } from "../pages/util";
import { mp } from "../config";

type OAuthProvider =
  | "google"
  | "facebook"
  | "apple"
  | "github"
  | "linkedin"
  | "twitter"
  | "bitbucket"
  | "gitlab"
  | "twitch"
  | "microsoft"
  | "discord";

declare global {
  interface Window {
    ethereum?: any;
  }
}

export const useAuthLogin = () => {
  useEffect(() => {
    (async () => {
      const urlParams = new URLSearchParams(window.location.search);
      const providerType = urlParams.get("t");
      const email = urlParams.get("email");
      const redirectUrl = urlParams.get("u");

      if (!localStorage.getItem("r")) {
        localStorage.setItem("r", redirectUrl ? redirectUrl : window.location.origin);
      }

      if (providerType === "metamask" && window.ethereum) {
        try {
          const accounts = await window.ethereum.request({
            method: "eth_requestAccounts",
          });
          if (accounts && accounts.length > 0) {
            localStorage.setItem("a", accounts[0]);
            r();
          }
        } catch (error) {
          console.error("MetaMask login error:", error);
        }
        return;
      }

      const magic = new Magic(mp, { extensions: [new OAuthExtension()] });

      if (email) {
        try {
          await magic.auth.loginWithMagicLink({ email });
          const idToken = await magic.user.getIdToken();
          const response = await fetch("/les", { headers: { m: idToken } });
          const address = await response.text();
          localStorage.setItem("a", address);
          r();
        } catch (error) {
          console.error("Magic Link login error:", error);
        }
        return;
      }

      if (providerType === "telegram") {
        try {
          await magic.oauth2.loginWithPopup({ provider: "telegram" });
          const userInfo = await magic.user.getInfo();
          localStorage.setItem("a", userInfo.publicAddress ?? "");
          r();
        } catch (error) {
          console.error("Telegram login error:", error);
        }
        return;
      }

      const storedProvider = (providerType || localStorage.getItem("p")) as OAuthProvider | null;
      if (storedProvider) {
        localStorage.setItem("p", storedProvider);
      }

      try {
        await magic.oauth2.getRedirectResult({});
      } catch (e) {
        // Ignored redirect result error
      }

      try {
        const isLoggedIn = await magic.user.isLoggedIn();
        if (isLoggedIn) {
          const userInfo = await magic.user.getInfo();
          localStorage.setItem("a", userInfo.publicAddress ?? "");
          localStorage.removeItem("p");
          r();
        } else if (storedProvider) {
          magic.oauth2.loginWithRedirect({
            provider: storedProvider,
            redirectURI: `${window.location.origin}/lg`,
          });
        }
      } catch (error) {
        console.error("Auth status check error:", error);
      }
    })();
  }, []);
};
