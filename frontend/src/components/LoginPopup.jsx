import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import './LoginPopup.css';

const LoginPopup = ({ isOpen, onClose }) => {
  const [formData, setFormData] = useState({
    age: '',
    gender: 'M/F',
    email: ''
  });
  const [showWalletSelection, setShowWalletSelection] = useState(false);
  const [scanLoading, setScanLoading] = useState(false);

  // Kiểm tra trạng thái đăng nhập ngay khi component render
  const isLoggedIn = localStorage.getItem('a');
  
  // Nếu đã đăng nhập, không hiển thị popup
  if (isLoggedIn) {
    return null;
  }

  useEffect(() => {
    const urlParams = new URLSearchParams(window.location.search);
    const addressFromUrl = urlParams.get("a");
    
    if (addressFromUrl) {
      // Lưu địa chỉ từ URL vào localStorage
      localStorage.setItem('a', addressFromUrl);
      
      // Xóa parameter khỏi URL để clean up
      const newUrl = new URL(window.location);
      newUrl.searchParams.delete('a');
      window.history.replaceState({}, '', newUrl);
      
      // Hiển thị thông báo thành công và đóng popup
      alert('Login successful!');
      onClose();
    }
  }, [onClose]);

  // Thêm useEffect để load script igai.min.js khi popup mở
// useEffect(() => {
//   if (!document.querySelector('script[src="/igai.min.js"]')) {
//     // Load script igai.min.js khi popup mở
//     const script = document.createElement('script');
//     script.src = '/igai.min.js'; // hoặc từ CDN
//     script.async = true;
//     document.head.appendChild(script);
//   }
// }, []);

// Thêm vào useEffect để kiểm tra kết quả đăng nhập
useEffect(() => {
  // Kiểm tra xem có địa chỉ ví trong localStorage không
  const walletAddress = localStorage.getItem('a');
  const savedFormData = localStorage.getItem('formData');
  
  if (walletAddress && savedFormData) {
    onClose();
  }
}, [onClose]);

  const wallets = [
    // Crypto Wallets
    { name: 'MetaMask', icon: (
<svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 142 137"
          >
            <path
              fill="#FF5C16"
              d="m132.24 131.751-30.481-9.076-22.986 13.741-16.038-.007-23-13.734-30.467 9.076L0 100.465l9.268-34.723L0 36.385 9.268 0l47.607 28.443h27.757L132.24 0l9.268 36.385-9.268 29.357 9.268 34.723-9.268 31.286Z"
            />
            <path
              fill="#FF5C16"
              d="m9.274 0 47.608 28.463-1.893 19.534L9.274 0Zm30.468 100.478 20.947 15.957-20.947 6.24v-22.197Zm19.273-26.381L54.989 48.01l-25.77 17.74-.014-.007v.013l.08 18.26 10.45-9.918h19.28ZM132.24 0 84.632 28.463l1.887 19.534L132.24 0Zm-30.467 100.478-20.948 15.957 20.948 6.24v-22.197Zm10.529-34.723h.007-.007v-.013l-.006.007-25.77-17.739L82.5 74.097h19.272l10.457 9.917.073-18.259Z"
            />
            <path
              fill="#E34807"
              d="m39.735 122.675-30.467 9.076L0 100.478h39.735v22.197ZM59.008 74.09l5.82 37.714-8.066-20.97-27.49-6.82 10.456-9.923h19.28Zm42.764 48.585 30.468 9.076 9.268-31.273h-39.736v22.197ZM82.5 74.09l-5.82 37.714 8.065-20.97 27.491-6.82-10.463-9.923H82.5Z"
            />
            <path
              fill="#FF8D5D"
              d="m0 100.465 9.268-34.723h19.93l.073 18.266 27.492 6.82 8.065 20.969-4.146 4.618-20.947-15.957H0v.007Zm141.508 0-9.268-34.723h-19.931l-.073 18.266-27.49 6.82-8.066 20.969 4.145 4.618 20.948-15.957h39.735v.007ZM84.632 28.443H56.875L54.99 47.977l9.839 63.8H76.68l9.845-63.8-1.893-19.534Z"
            />
            <path
              fill="#661800"
              d="M9.268 0 0 36.385l9.268 29.357h19.93l25.784-17.745L9.268 0Zm43.98 81.665h-9.029l-4.916 4.819 17.466 4.33-3.521-9.155v.006ZM132.24 0l9.268 36.385-9.268 29.357h-19.931L86.526 47.997 132.24 0ZM88.273 81.665h9.042l4.916 4.825-17.486 4.338 3.528-9.17v.007Zm-9.507 42.305 2.06-7.542-4.146-4.618H64.82l-4.145 4.618 2.059 7.542"
            />
            <path
              fill="#C0C4CD"
              d="M78.766 123.969v12.453H62.735v-12.453h16.03Z"
            />
            <path
              fill="#E7EBF6"
              d="m39.742 122.662 23.006 13.754v-12.453l-2.06-7.541-20.946 6.24Zm62.031 0-23.007 13.754v-12.453l2.06-7.541 20.947 6.24Z"
            />
          </svg>  ), installed: true, type: 'wallet' },
    // { name: 'Abstract', icon: '🟢', installed: false, type: 'wallet' },
    // { name: 'Ronin Wallet', icon: '🔷', installed: true, type: 'wallet' },
    // { name: 'Nightly', icon: '🌙', installed: true, type: 'wallet' },
    // { name: 'Coinbase Wallet', icon: '🔵', installed: false, type: 'wallet' },
    // { name: 'WalletConnect', icon: '🌊', installed: false, type: 'wallet' },
    
    // Social Login Options
    { name: 'Google', icon: (
      <svg
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M22.556 12.2409C22.556 11.3365 22.4826 10.6766 22.3238 9.99219H11.9968V14.074H18.0585C17.9364 15.0884 17.2764 16.6161 15.8098 17.6426L15.7893 17.7793L19.0545 20.3088L19.2807 20.3314C21.3583 18.4126 22.556 15.5895 22.556 12.2409Z"
        fill="#4285F4"
      ></path>
      <path
        d="M11.9987 23C14.9684 23 17.4615 22.0223 19.2825 20.3358L15.8117 17.6471C14.8829 18.2948 13.6363 18.747 11.9987 18.747C9.09006 18.747 6.62139 16.8283 5.74137 14.1763L5.61238 14.1873L2.21719 16.8148L2.17279 16.9383C3.98152 20.5313 7.69678 23 11.9987 23Z"
        fill="#34A853"
      ></path>
      <path
        d="M5.74179 14.1771C5.5096 13.4927 5.37521 12.7594 5.37521 12.0017C5.37521 11.2439 5.5096 10.5107 5.72958 9.82631L5.72343 9.68055L2.28569 7.01077L2.17321 7.06427C1.42775 8.55528 1 10.2296 1 12.0017C1 13.7738 1.42775 15.448 2.17321 16.939L5.74179 14.1771Z"
        fill="#FBBC05"
      ></path>
      <path
        d="M11.9987 5.25296C14.0641 5.25296 15.4572 6.14511 16.2517 6.89066L19.3558 3.85977C17.4494 2.0877 14.9684 1 11.9987 1C7.69678 1 3.98152 3.46867 2.17279 7.06169L5.72916 9.82373C6.62139 7.17172 9.09006 5.25296 11.9987 5.25296Z"
        fill="#EB4335"
      ></path>
    </svg>
    ), installed: true, type: 'social' },
    { name: 'Facebook', icon: (
      <svg viewBox="0 0 24 25" xmlns="http://www.w3.org/2000/svg">
      <path
        d="M17.9214 14.3997L18.582 10.0883H14.4467V7.29096C14.4467 6.11245 15.0234 4.96121 16.8771 4.96121H18.7581V1.29148C18.7581 1.29148 17.0512 1 15.4197 1C12.0142 1 9.78718 3.06343 9.78718 6.80236V10.0883H6V14.3997H9.78718V24.8197C10.5463 24.9392 11.3243 25 12.1169 25C12.9096 25 13.6876 24.9371 14.4467 24.8197V14.3997H17.9214Z"
        fill="#1977F3"
      ></path>
    </svg>
    ), installed: true, type: 'social' },
    { name: 'Apple', icon: (
      <svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" fill="#000000" height="800px" width="800px" version="1.1" id="Capa_1" viewBox="0 0 22.773 22.773" xml:space="preserve">
<g>
	<g>
		<path d="M15.769,0c0.053,0,0.106,0,0.162,0c0.13,1.606-0.483,2.806-1.228,3.675c-0.731,0.863-1.732,1.7-3.351,1.573    c-0.108-1.583,0.506-2.694,1.25-3.561C13.292,0.879,14.557,0.16,15.769,0z"/>
		<path d="M20.67,16.716c0,0.016,0,0.03,0,0.045c-0.455,1.378-1.104,2.559-1.896,3.655c-0.723,0.995-1.609,2.334-3.191,2.334    c-1.367,0-2.275-0.879-3.676-0.903c-1.482-0.024-2.297,0.735-3.652,0.926c-0.155,0-0.31,0-0.462,0    c-0.995-0.144-1.798-0.932-2.383-1.642c-1.725-2.098-3.058-4.808-3.306-8.276c0-0.34,0-0.679,0-1.019    c0.105-2.482,1.311-4.5,2.914-5.478c0.846-0.52,2.009-0.963,3.304-0.765c0.555,0.086,1.122,0.276,1.619,0.464    c0.471,0.181,1.06,0.502,1.618,0.485c0.378-0.011,0.754-0.208,1.135-0.347c1.116-0.403,2.21-0.865,3.652-0.648    c1.733,0.262,2.963,1.032,3.723,2.22c-1.466,0.933-2.625,2.339-2.427,4.74C17.818,14.688,19.086,15.964,20.67,16.716z"/>
	</g>
	<g>
	</g>
	<g>
	</g>
	<g>
	</g>
	<g>
	</g>
	<g>
	</g>
	<g>
	</g>
	<g>
	</g>
	<g>
	</g>
	<g>
	</g>
	<g>
	</g>
	<g>
	</g>
	<g>
	</g>
	<g>
	</g>
	<g>
	</g>
</g>
</svg>
    ), installed: true, type: 'social' },
    { name: 'Microsoft', icon: (
      <svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><g clip-path="url(#clip0_8934_233)"><path d="M1.95654 1.95651H11.5218V11.5217H1.95654V1.95651Z" fill="#F35325"></path><path d="M12.4782 1.95651H22.0435V11.5217H12.4782V1.95651Z" fill="#81BC06"></path><path d="M1.95654 12.4783H11.5218V22.0435H1.95654V12.4783Z" fill="#05A6F0"></path><path d="M12.4782 12.4783H22.0435V22.0435H12.4782V12.4783Z" fill="#FFBA08"></path></g><defs><clipPath id="clip0_8934_233"><rect width="22" height="22" fill="white" transform="translate(1 1)"></rect></clipPath></defs></svg>
    ), installed: true, type: 'social' },
    { name: 'Discord', icon: (
      <svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="M20.3303 4.52336C18.7535 3.80145 17.0888 3.2893 15.3789 3C15.1449 3.41829 14.9332 3.84865 14.7446 4.28928C12.9232 4.01482 11.071 4.01482 9.24961 4.28928C9.06095 3.84869 8.84924 3.41834 8.61535 3C6.90433 3.29174 5.2386 3.80511 3.66019 4.52713C0.526644 9.16327 -0.322811 13.6843 0.101917 18.1411C1.937 19.4969 3.99098 20.5281 6.17458 21.1897C6.66626 20.5284 7.10134 19.8268 7.47519 19.0925C6.76511 18.8273 6.07975 18.5001 5.42706 18.1146C5.59884 17.9901 5.76684 17.8617 5.92918 17.7371C7.82837 18.6303 9.90124 19.0933 12 19.0933C14.0987 19.0933 16.1715 18.6303 18.0707 17.7371C18.235 17.8711 18.403 17.9995 18.5729 18.1146C17.9189 18.5007 17.2323 18.8285 16.5209 19.0944C16.8943 19.8284 17.3294 20.5293 17.8216 21.1897C20.007 20.5307 22.0626 19.5001 23.898 18.143C24.3963 12.9745 23.0467 8.49503 20.3303 4.52336ZM8.01318 15.4002C6.82961 15.4002 5.85179 14.3261 5.85179 13.0047C5.85179 11.6833 6.79563 10.5998 8.0094 10.5998C9.22318 10.5998 10.1934 11.6833 10.1727 13.0047C10.1519 14.3261 9.21941 15.4002 8.01318 15.4002ZM15.9867 15.4002C14.8013 15.4002 13.8272 14.3261 13.8272 13.0047C13.8272 11.6833 14.7711 10.5998 15.9867 10.5998C17.2024 10.5998 18.1651 11.6833 18.1444 13.0047C18.1236 14.3261 17.193 15.4002 15.9867 15.4002Z" fill="#5865F2"></path></svg>
    ), installed: true, type: 'social' },
    { name: 'Twitter', icon: (
      <svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><g clip-path="url(#clip0_8934_240)"><path d="M13.6408 10.4643L20.9224 2H19.1969L12.8743 9.34942L7.82442 2H2L9.63638 13.1136L2 21.9897H3.72561L10.4025 14.2285L15.7355 21.9897H21.5599L13.6404 10.4643H13.6408ZM11.2773 13.2115L10.5036 12.1049L4.34737 3.29901H6.9978L11.966 10.4056L12.7397 11.5123L19.1977 20.7498H16.5473L11.2773 13.212V13.2115Z" fill="black"></path></g><defs><clipPath id="clip0_8934_240"><rect width="19.5599" height="20" fill="white" transform="translate(2 2)"></rect></clipPath></defs></svg>
    ), installed: true, type: 'social' },
    
    // Developer Platforms
    { name: 'GitHub', icon: (
      <svg viewBox="0 0 25 24" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" clip-rule="evenodd" d="M12.3159 6.36074e-06C9.39213 -0.00296524 6.5629 1.03535 4.33518 2.92889C2.10746 4.82242 0.626879 7.4474 0.158754 10.3334C-0.30937 13.2194 0.265566 16.1778 1.78053 18.6784C3.29549 21.179 5.65146 23.0584 8.42622 23.9798C9.04554 24.0931 9.26457 23.7079 9.26457 23.3831C9.26457 23.0584 9.26457 22.3182 9.26457 21.291C5.8281 22.0387 5.10304 19.637 5.10304 19.637C4.87506 18.8926 4.39073 18.2531 3.73601 17.8319C2.62576 17.0766 3.82664 17.0766 3.82664 17.0766C4.21583 17.1316 4.5874 17.2744 4.91323 17.4942C5.23905 17.7141 5.51058 18.0052 5.70726 18.3455C5.87437 18.6485 6.09967 18.9155 6.37023 19.1312C6.64079 19.347 6.95129 19.5071 7.28391 19.6026C7.61653 19.698 7.96472 19.7268 8.3085 19.6874C8.65228 19.6479 8.98488 19.541 9.28723 19.3726C9.33463 18.7513 9.60249 18.1674 10.0425 17.7262C7.30843 17.4165 4.43841 16.3591 4.43841 11.684C4.41963 10.4627 4.87123 9.28099 5.6997 8.38349C5.33072 7.3216 5.37385 6.15988 5.82055 5.12828C5.82055 5.12828 6.85526 4.79596 9.20415 6.38958C11.2212 5.83579 13.3501 5.83579 15.3671 6.38958C17.716 4.79596 18.7432 5.12828 18.7432 5.12828C19.1961 6.14897 19.25 7.30235 18.8942 8.36083C19.7227 9.25834 20.1743 10.4401 20.1555 11.6614C20.1555 16.3893 17.278 17.424 14.5363 17.7035C14.8303 17.999 15.0573 18.3543 15.202 18.7452C15.3466 19.1361 15.4055 19.5536 15.3747 19.9693C15.3747 21.6158 15.3747 22.9451 15.3747 23.3454C15.3747 23.7456 15.5937 24.0553 16.2206 23.9345C18.9638 22.9888 21.2844 21.1041 22.7727 18.6132C24.2609 16.1223 24.8208 13.1856 24.3536 10.3219C23.8864 7.45814 22.4221 4.85167 20.2194 2.96295C18.0167 1.07422 15.2173 0.024771 12.3159 6.36074e-06Z" fill="#191717"></path></svg>
    ), installed: true, type: 'developer' },
    { name: 'GitLab', icon: (
      <svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="M22.6338 9.38662L22.6029 9.30758L19.6085 1.49288C19.5476 1.33972 19.4397 1.20979 19.3004 1.12174C19.1609 1.03518 18.9983 0.993493 18.8344 1.0023C18.6705 1.01111 18.5133 1.06999 18.3839 1.171C18.256 1.2749 18.1632 1.41569 18.1182 1.57422L16.0964 7.75999H7.90937L5.88754 1.57422C5.84369 1.41483 5.75069 1.27333 5.62178 1.16985C5.49243 1.06885 5.3352 1.00996 5.17132 1.00116C5.00744 0.992348 4.8448 1.03404 4.70537 1.12059C4.56633 1.209 4.45855 1.33882 4.39722 1.49174L1.39712 9.303L1.36734 9.38204C0.936285 10.5083 0.883079 11.7442 1.21574 12.9034C1.5484 14.0625 2.2489 15.0821 3.21162 15.8084L3.22193 15.8164L3.24942 15.8359L7.81085 19.2518L10.0675 20.9597L11.4421 21.9976C11.6029 22.1197 11.7993 22.1858 12.0011 22.1858C12.203 22.1858 12.3994 22.1197 12.5602 21.9976L13.9348 20.9597L16.1914 19.2518L20.7804 15.8152L20.7918 15.8061C21.7524 15.0797 22.4512 14.0611 22.7834 12.9035C23.1156 11.746 23.0631 10.5118 22.6338 9.38662Z" fill="#E24329"></path><path d="M22.6338 9.38663L22.6029 9.30759C21.1438 9.60707 19.7689 10.2251 18.5764 11.1175L12 16.0902C14.2395 17.7844 16.1891 19.2564 16.1891 19.2564L20.7781 15.8198L20.7895 15.8107C21.7515 15.0843 22.4514 14.0651 22.784 12.9065C23.1166 11.7479 23.0639 10.5127 22.6338 9.38663Z" fill="#FC6D26"></path><path d="M7.81085 19.2564L10.0675 20.9643L11.4421 22.0022C11.6029 22.1243 11.7993 22.1903 12.0011 22.1903C12.203 22.1903 12.3994 22.1243 12.5602 22.0022L13.9348 20.9643L16.1914 19.2564C16.1914 19.2564 14.2395 17.7798 12 16.0902C9.76052 17.7798 7.81085 19.2564 7.81085 19.2564Z" fill="#FCA326"></path><path d="M5.42246 11.1175C4.23089 10.2233 2.85628 9.60363 1.39712 9.30301L1.36734 9.38205C0.936285 10.5083 0.883079 11.7442 1.21574 12.9034C1.5484 14.0625 2.2489 15.0821 3.21162 15.8084L3.22193 15.8164L3.24942 15.8359L7.81085 19.2518C7.81085 19.2518 9.75823 17.7798 12 16.0856L5.42246 11.1175Z" fill="#FC6D26"></path></svg>
    ), installed: true, type: 'developer' },
    { name: 'Bitbucket', icon: (
      <svg width="36" height="36" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="M1.71397 2.00006C1.6111 1.99873 1.50919 2.01994 1.41539 2.06219C1.32159 2.10444 1.23817 2.16672 1.171 2.24464C1.10382 2.32256 1.05452 2.41424 1.02655 2.51324C0.998581 2.61225 0.992621 2.71617 1.00909 2.81772L4.00132 20.9826C4.03861 21.2049 4.15302 21.4069 4.32447 21.5532C4.49592 21.6995 4.71344 21.7808 4.93882 21.7826H19.2938C19.4627 21.7848 19.6269 21.7262 19.7562 21.6175C19.8856 21.5089 19.9717 21.3573 19.9987 21.1905L22.9909 2.82125C23.0074 2.7197 23.0014 2.61577 22.9734 2.51677C22.9455 2.41776 22.8962 2.32608 22.829 2.24816C22.7618 2.17024 22.6784 2.10797 22.5846 2.06572C22.4908 2.02346 22.3889 2.00226 22.286 2.00358L1.71397 2.00006ZM14.3138 15.1285H9.73203L8.49144 8.64712H15.424L14.3138 15.1285Z" fill="#2684FF"></path><path d="M22.0389 8.64706H15.4236L14.3134 15.1285H9.73166L4.32167 21.55C4.49314 21.6982 4.71176 21.7807 4.93844 21.7826H19.2969C19.4659 21.7848 19.63 21.7262 19.7594 21.6175C19.8888 21.5088 19.9748 21.3573 20.0018 21.1905L22.0389 8.64706Z" fill="url(#paint0_linear_8934_282)"></path><defs><linearGradient id="paint0_linear_8934_282" x1="23.5685" y1="10.4621" x2="12.6358" y2="18.9948" gradientUnits="userSpaceOnUse"><stop offset="0.18" stop-color="#0052CC"></stop><stop offset="1" stop-color="#2684FF"></stop></linearGradient></defs></svg>
    ), installed: true, type: 'developer' },
    
    // Gaming/Streaming
    { name: 'Twitch', icon: (
      <svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="M20.8571 11.1428L17.4286 14.5714H14L11 17.5714V14.5714H7.14285V1.71426H20.8571V11.1428Z" fill="white"></path><path d="M6.28571 0L2 4.28571V19.7143H7.14286V24L11.4286 19.7143H14.8571L22.5714 12V0H6.28571ZM20.8571 11.1429L17.4286 14.5714H14L11 17.5714V14.5714H7.14286V1.71429H20.8571V11.1429Z" fill="#9146FF"></path><path d="M18.2857 4.71429H16.5714V9.85715H18.2857V4.71429Z" fill="#9146FF"></path><path d="M13.5714 4.71429H11.8571V9.85715H13.5714V4.71429Z" fill="#9146FF"></path></svg>
    ), installed: true, type: 'gaming' },
    // { name: 'LinkedIn', icon: '💼', installed: true, type: 'professional' }
  ];

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleConnectWallet = () => {
    // Kiểm tra validation
    if (!formData.age || formData.gender === 'M/F') {
      alert('Please fill in Age and Gender information completely before connecting wallet!');
      return;
    }
    
    // Hiển thị popup wallet selection
    setShowWalletSelection(true);
  };

  const handleWalletSelect = (wallet) => {    
    
    // Lưu form data vào localStorage trước khi chuyển hướng
    localStorage.setItem('formData', JSON.stringify(formData));
    
    // Xác định loại đăng nhập dựa trên wallet
    let loginType;
    switch(wallet.name.toLowerCase()) {
      case 'metamask':
        loginType = 'metamask';
        break;
      case 'google':
        loginType = 'google';
        break;
      case 'facebook':
        loginType = 'facebook';
        break;
      case 'apple':
        loginType = 'apple';
        break;
      case 'github':
        loginType = 'github';
        break;
      case 'linkedin':
        loginType = 'linkedin';
        break;
      case 'twitter':
        loginType = 'twitter';
        break;
      case 'bitbucket':
        loginType = 'bitbucket';
        break;
      case 'gitlab':
        loginType = 'gitlab';
        break;
      case 'twitch':
        loginType = 'twitch';
        break;
      case 'microsoft':
        loginType = 'microsoft';
        break;
      case 'discord':
        loginType = 'discord';
        break;
      case 'coinbase wallet':
        loginType = 'metamask'; // hoặc có thể dùng 'coinbase' nếu API hỗ trợ
        break;
      case 'walletconnect':
        loginType = 'metamask'; // WalletConnect thường dùng chung với metamask
        break;
      default:
        loginType = 'metamask'; // fallback cho các ví crypto khác
    }
    // const currentUrl = new URL(location.href);
    // currentUrl.search = "";
    // const apiUrl = `https://api.insightgenesis.ai/lg?t=${loginType}&u=${currentUrl.toString()}`;

    const baseUrl = window.location.origin;
    const redirectPath = "/insights-form"; // hoặc trang bạn muốn
    const redirectUrl = baseUrl + redirectPath;
    const apiUrl = `https://api.insightgenesis.ai/lg?t=${loginType}&u=${redirectUrl}`;
    
    // Thêm các tham số từ form data
    const url = new URL(apiUrl);
    if (formData.age) {
      url.searchParams.set('age', formData.age);
    }
    if (formData.gender && formData.gender !== 'M/F') {
      url.searchParams.set('gender', formData.gender.toLowerCase());
    }
    
    window.location.href = url.toString();
  };

  const handleSubmit = (e) => {
    e.preventDefault();    
  };

  const handleManualWalletAddress = () => {
    const walletAddress = prompt('Nhập địa chỉ ví BIP44 của bạn:');
    
    if (walletAddress && walletAddress.trim()) {
      // Kiểm tra định dạng cơ bản (bắt đầu bằng 0x và có độ dài phù hợp)
      if (walletAddress.startsWith('0x') && walletAddress.length === 42) {
        // Lưu địa chỉ ví vào localStorage
        localStorage.setItem('a', walletAddress);
        
        // Lưu thông tin form
        localStorage.setItem('formData', JSON.stringify(formData));
        
        alert('Wallet address saved successfully!');
        onClose();
      } else {
        alert('Invalid wallet address. Please enter a valid Ethereum address.');
      }
    }
  };

  if (!isOpen) return null;

  return (
    <div className="popup-overlay popup-login" onClick={onClose}>
      <div className="popup-container" onClick={(e) => e.stopPropagation()}>
        {/* <button className="popup-close" onClick={onClose}>
          ×
        </button> */}
        
        {!showWalletSelection ? (
          <div className="popup-content">
            <button className="popup-back" onClick={() => window.history.back()}>
              &lt;
            </button>
            <h2 className="popup-title">GET STARTED</h2>
            
            <form onSubmit={handleSubmit} className="popup-form">
              <div className="form-group">
                <label className="form-label">Your Age</label>
                <input
                  type="number"
                  name="age"
                  value={formData.age}
                  onChange={handleInputChange}
                  className="form-input"
                  placeholder="40"
                  required
                />
              </div>
              
              <div className="form-group">
                <label className="form-label">Your Gender</label>
                <div className="select-wrapper">
                  <select
                    name="gender"
                    value={formData.gender}
                    onChange={handleInputChange}
                    className="form-select"
                    required
                  >
                    <option value="M/F">M/F</option>
                    <option value="Male">Male</option>
                    <option value="Female">Female</option>
                    {/* <option value="Other">Other</option> */}
                  </select>
                  <div className="select-arrow">▼</div>
                </div>
              </div>
              
              <div className="form-divider">
                <span className="divider-text">THEN</span>
              </div>
              
              <button 
                type="button" 
                className={`connect-wallet-btn ${
                  !formData.age || formData.gender === 'M/F' ? 'disabled' : ''
                }`}
                onClick={handleConnectWallet}
                disabled={!formData.age || formData.gender === 'M/F'}
              >
                Connect Wallet
              </button>

              {/* <Link 
                to="/form" className="connect-wallet-btn" style={{lineHeight: '22px'}}
                onClick={onClose}
              >
                Scan Now
              </Link> */}
              
              <div className="form-divider">
                <span className="divider-text">OR</span>
              </div>
              
              <div className="form-group">
                <label className="form-label">Your email</label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleInputChange}
                  className="form-input"
                  placeholder="david@gmail.com"
                />
              </div>

              <button
                type="button"
                className={`connect-wallet-btn ${
                  !formData.email || !formData.age || formData.gender === 'M/F' ? 'disabled' : ''
                }`}
                onClick={async () => {
                  if (!formData.email || !formData.age || formData.gender === 'M/F') {
                    alert('Please fill in all required fields: Age, Gender, and Email!');
                    return;
                  }
                  setScanLoading(true);
                  try {
                    // Lưu form data vào localStorage trước
                    localStorage.setItem('formData', JSON.stringify(formData));
                    
                    // Dynamically import Magic SDK if not already
                    let Magic;
                    try {
                      Magic = (await import('magic-sdk')).Magic;
                    } catch (e) {
                      alert('Bạn cần cài magic-sdk: npm install magic-sdk');
                      setScanLoading(false);
                      return;
                    }
                    const magic = new Magic('pk_live_394B77698E7E6DBC');
                    const result = await magic.auth.loginWithMagicLink({ email: formData.email });
                    const userInfo = await magic.user.getInfo();
                    if (userInfo.publicAddress) {
                      localStorage.setItem('a', userInfo.publicAddress);
                      localStorage.setItem('formData', JSON.stringify(formData));
                      // Save handle (wallet name) if available
                      if (userInfo.handle) {
                        localStorage.setItem('handle', userInfo.handle);
                      } else if (userInfo.email) {
                        localStorage.setItem('handle', userInfo.email.split('@')[0]);
                      }
                      alert('Wallet created and address saved!');
                      onClose();
                      window.location.reload();
                    } else {
                      alert('Could not get wallet address!');
                    }
                  } catch (err) {
                    alert('MagicLink error: ' + err.message);
                  }
                  setScanLoading(false);
                }}
                disabled={!formData.email || !formData.age || formData.gender === 'M/F'}
              >
                {scanLoading ? 'Loading...' : 'Start'}
              </button>
            </form>
          </div>
        ) : (
          <div className="popup-content wallet-selection" id='wallet-selection'>
            <h2 className="popup-title">SELECT WALLET</h2>
            <button 
              className="back-button"
              onClick={() => setShowWalletSelection(false)}
            >
              ← Back
            </button>
            <div className="wallet-list">
              {wallets.map((wallet, index) => (
                <div 
                  key={index}
                  className="wallet-item"
                  onClick={() => handleWalletSelect(wallet)}
                >
                  <div className="wallet-info">
                    <span className="wallet-icon">{wallet.icon}</span>
                    <span className="wallet-name">{wallet.name}</span>
                  </div>
                  {wallet.installed && (
                    <span className="wallet-status">Installed</span>
                  )}
                </div>
              ))}
              
              {/* <div className="wallet-item manual-wallet" onClick={handleManualWalletAddress}>
                <div className="wallet-info">
                  <span className="wallet-icon">✏️</span>
                  <span className="wallet-name">Manual Wallet Address</span>
                </div>
              </div> */}
              
              <div className="wallet-item more-options">
                <span className="wallet-name">More Wallet Options</span>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default LoginPopup;