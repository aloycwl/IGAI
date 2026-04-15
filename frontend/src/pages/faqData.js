const faqData = [
    {
        accordion: '1. General Overview',
        questions: [
            {
                question: 'What is Insight Genesis?',
                answer: 'Insight Genesis is a DPI (Decentralized Personal Insight) infrastructure that enables users to control, monetize, and govern their personal data.'
            },
            {
                question: 'What is DPI?',
                answer: 'DPI stands for Decentralized Personal Insight—a framework that returns ownership of data and AI insights to the individual.'
            },
            {
                question: 'How is Insight Genesis different from traditional AI platforms?',
                answer: 'Instead of extracting user data, Insight Genesis turns it into a secure, tokenized asset within a privacy-first DPI ecosystem.'
            },
            {
                question: "What\'s the vision of Insight Genesis?",
                answer: 'To replace AI-as-a-service with AI-as-an-economy—where people own, govern, and profit from their insights.'
            },
            {
                question: 'Who can use Insight Genesis?',
                answer: 'Anyone—individuals, researchers, institutions—who wants to own and monetize their personal data.'
            }
        ]
    },
    {
        accordion: '2. Data Ownership & Control',
        questions: [
            {
                question: 'Can I earn from my personal data?',
                answer: 'Yes. Users earn through tokenized data transactions on the DPI.'
            },
            {
                question: 'What types of data can I tokenize?',
                answer: 'Biometric, behavioral, contextual, educational, financial—nearly all personal data types.'
            },
            {
                question: 'Can I choose who uses my data?',
                answer: 'Absolutely. DPI allows full user-controlled permissions.'
            },
            {
                question: 'Can I revoke access to my data?',
                answer: 'Yes. Permissions are adjustable and revocable anytime.'
            },
            {
                question: 'How do I store my data?',
                answer: 'Encrypted and tokenized in your personal DPI Wallet.'
            },
            {
                question: 'What is a DPI Wallet?',
                answer: 'Your private vault to manage, store, and track your tokenized data assets and usage.'
            },
            {
                question: 'What happens if someone misuses my data?',
                answer: 'Smart contracts enforce permissions and trigger penalties for misuse, with full traceability.'
            },
            {
                question: 'Can I share my data with multiple platforms?',
                answer: 'Yes, and each access is independently logged, tracked, and verified.'
            },
            {
                question: 'Can I view who accessed my data?',
                answer: "Yes. You\'ll have a complete on-chain log of all data interactions."
            },
            {
                question: "What\'s the difference between DPI and Web2 data systems?",
                answer: 'Web2 systems extract and own your data. DPI systems let you own, control, and monetize it.'
            }
        ]
    },
    {
        accordion: '3. DPI',
        questions: [
            {
                question: 'What is Insight Genesis built around?',
                answer: 'Insight Genesis is powered by DPI—Decentralized Personal Insight. It\'s a system that lets users control, manage, and monetize their personal data while maintaining full privacy and consent.'
            },
            {
                question: 'Who can participate in the DPI ecosystem?',
                answer: 'Anyone. Whether you\'re a data owner, validator, or developer, Insight Genesis allows transparent interaction under a permissioned and privacy-preserving framework.'
            },
            {
                question: 'How is data liquidity achieved with DPI?',
                answer: 'DPI introduces tokenized permissions, where data can be accessed securely through cryptographic proofs. This allows seamless, value-driven collaboration without data ever being exposed.'
            },
            {
                question: 'Can users monetize their data?',
                answer: 'Yes. Users retain ownership and can grant access to their insights on their own terms. Each interaction is permissioned and compensated fairly through the Insight Genesis network.'
            },
            {
                question: 'Does DPI protect user identity?',
                answer: 'Absolutely. DPI ensures all transactions are encrypted and pseudonymous by design. Your insights are shared, but your identity is always protected.'
            }
        ]
    },
    {
        accordion: '4. Oracles & Validation',
        questions: [
            {
                question: 'What are oracles in Insight Genesis?',
                answer: 'They are staked, trusted validators that confirm data accuracy and enforce DPI integrity.'
            },
            {
                question: 'What makes these oracles different?',
                answer: 'They\'re not just data feeds—they are active, reputationally staked agents.'
            },
            {
                question: 'How are oracles selected?',
                answer: 'Based on their expertise, technical contribution, stake, and reputation.'
            },
            {
                question: 'Can oracles be held accountable?',
                answer: 'Yes. Misbehavior results in slashing, penalties, and governance intervention.'
            },
            {
                question: 'What kind of data do oracles validate?',
                answer: 'Everything from identity and education to finance, health, and behavioral scores.'
            },
            {
                question: 'How is data bias prevented?',
                answer: 'Diverse oracle participation and weighted voting prevent systemic bias.'
            }
        ]
    },
    {
        accordion: '5. Governance',
        questions: [
            {
                question: 'How is Insight Genesis governed?',
                answer: 'Through a three-chamber DAO: Data Owners, Contributors, and Technical Oracles.'
            },
            {
                question: 'What\'s unique about the DAO model?',
                answer: 'It caps influence per chamber to prevent centralized power.'
            },
            {
                question: 'Can anyone participate in governance?',
                answer: 'Yes. Based on your contribution, stake, or validator role.'
            },
            {
                question: 'What\'s the benefit of tokenized governance?',
                answer: 'It ensures that every decision reflects merit and contribution—not popularity.'
            }
        ]
    },
    {
        accordion: '6. User Experience & Tools',
        questions: [
            {
                question: 'Do I need coding skills?',
                answer: 'Not at all. Insight Genesis is designed for both non-technical and technical users.'
            },
            {
                question: 'How do I start using Insight Genesis?',
                answer: 'Create a DPI Wallet, upload your data, and define your permissions. That\'s it.'
            },
            {
                question: 'Is there a mobile version?',
                answer: 'Yes. DPI tools are being optimized across web and mobile interfaces.'
            },
            {
                question: 'Can I integrate my existing apps?',
                answer: 'Yes. Insight Genesis supports modular DPI layers for external app integration.'
            },
            {
                question: 'Can I build on Insight Genesis?',
                answer: 'Yes. Developers can deploy AI models, oracle services, and front-end tools.'
            }
        ]
    },
    {
        accordion: '7. AI Models & Customization',
        questions: [
            {
                question: 'Can I train AI models on my own data?',
                answer: 'Yes. DPI allows you to build personal AI models using only your own consented data.'
            },
            {
                question: 'Is my data exposed during training?',
                answer: 'No. Training happens in a privacy-preserving enclave, with zero data leakage.'
            },
            {
                question: 'Can I sell or license my AI model?',
                answer: 'Yes. You can monetize your AI models as NFT-based Insight Assets.'
            },
            {
                question: 'Can models be retrained over time?',
                answer: 'Absolutely. Your model evolves as new data is added.'
            },
            {
                question: 'Can I use external models with my data?',
                answer: 'Yes, with tokenized permission layers applied to safeguard your data.'
            }
        ]
    },
    {
        accordion: '8. Monetization',
        questions: [
            {
                question: 'How do I earn from my insights?',
                answer: 'You can tokenize your insights and receive compensation via DPI tokens when others access or use them.'
            },
            {
                question: 'Who buys or rents data insights?',
                answer: 'Researchers, institutions, AI developers, and service platforms.'
            },
            {
                question: 'What determines insight value?',
                answer: 'Rarity, relevance, quality, and validation from oracles.'
            },
            {
                question: 'Can I set prices on my insights?',
                answer: 'Yes. You define licensing fees and usage rights.'
            },
            {
                question: 'Are there royalties on reuse?',
                answer: 'Yes. Smart contracts ensure automatic royalty payments on secondary usage.'
            }
        ]
    },
    {
        accordion: '9. Security & Privacy',
        questions: [
            {
                question: 'Is my data ever stored on-chain?',
                answer: 'No. Only metadata, proofs, and permissions are on-chain. Your actual data stays encrypted off-chain.'
            },
            {
                question: 'How is data secured?',
                answer: 'Using end-to-end encryption, multi-sig DPI Wallets, and access-token protocols.'
            },
            {
                question: 'Can DPI be hacked?',
                answer: 'The system uses decentralized consensus and zero-knowledge proofs to minimize risk. No system is invulnerable, but DPI dramatically reduces surface attack vectors.'
            },
            {
                question: 'Is there a recovery system for DPI Wallets?',
                answer: 'Yes. You can set up trusted contacts or hardware-based recovery mechanisms.'
            },
            {
                question: 'Do I remain anonymous while using Insight Genesis?',
                answer: 'Yes. Users can operate pseudonymously while retaining full control over real-world identity links.'
            }
        ]
    },
    {
        accordion: '10. Ecosystem and Partnerships',
        questions: [
            {
                question: 'Is Insight Genesis interoperable with other chains?',
                answer: 'Yes. It uses cross-chain bridges and DID protocols to interface with other Web3 systems.'
            },
            {
                question: 'Are there real-world partners using this?',
                answer: 'Yes. Pilot programs include academic institutions, health organizations, and Web3 platforms.'
            },
            {
                question: 'What kinds of applications are being built?',
                answer: 'Education credentials, health diagnostics, financial scoring tools, personalized assistants, and more.'
            },
            {
                question: 'Is Insight Genesis open-source?',
                answer: 'Parts of it are open-source, especially tooling for developers.'
            },
            {
                question: 'Can I contribute to the ecosystem?',
                answer: 'Yes. As a developer, validator, or contributor to governance and adoption.'
            }
        ]
    },
    {
        accordion: '11. Tokenomics',
        questions: [
            {
                question: 'What token does Insight Genesis use?',
                answer: 'The IGAI token, which powers transactions, governance, and staking.'
            },
            {
                question: 'How is the token distributed?',
                answer: 'Split across community incentives, validator rewards, ecosystem grants, and governance pools.'
            },
            {
                question: 'Can I stake IGAI tokens?',
                answer: 'Yes. Users can stake tokens for governance rights or to run validator/oracle nodes.'
            },
            {
                question: 'What are staking rewards?',
                answer: 'Participants earn tokens for validating data, participating in governance, and maintaining infrastructure.'
            },
            {
                question: 'Is there a maximum supply of DPI tokens?',
                answer: 'Yes. The tokenomics model includes a fixed max supply of 50 billion tokens with deflationary mechanics.'
            }
        ]
    },
    {
        accordion: '12. Future Vision',
        questions: [
            {
                question: 'What\'s next for Insight Genesis?',
                answer: 'Expansion into decentralized AI marketplaces, native AI agents, and global governance networks.'
            },
            {
                question: 'Will Insight Genesis support real-time AI?',
                answer: 'Yes. The roadmap includes integration with real-time decision engines and AI co-pilots.'
            },
            {
                question: 'Can enterprises adopt DPI infrastructure?',
                answer: 'Yes. White-labeled DPI stacks will be available for businesses.'
            },
            {
                question: 'Will users own their AI agents?',
                answer: 'Yes. Agents are individually owned, governed, and trained per user\'s preferences.'
            },
            {
                question: 'Can Insight Genesis scale globally?',
                answer: 'That\'s the goal. With modular layers, multilingual support, and cross-border compliance baked into the protocol.'
            }
        ]
    },
    {
        accordion: '13. Human Resource',
        questions: [
            {
                question: 'How does Insight Genesis help with hiring?',
                answer: 'Our AI evaluates a candidate\'s personality fit, emotional intelligence, and communication style—not just a CV.'
            },
            {
                question: 'Can DPI reduce bias in recruitment?',
                answer: 'Yes. Our AI profiles traits, not demographics. This levels the hiring field and promotes fairer evaluations.'
            },
            {
                question: 'How does voice analysis help HR?',
                answer: 'Your voice reveals stress, confidence, and honesty. Our AI decodes that to offer deeper behavioral insights.'
            },
            {
                question: 'Is this AI replacing human HR?',
                answer: 'No. It\'s an enhancement. Our AI helps HR teams focus on meaningful human interactions, not guesswork.'
            },
            {
                question: 'How can employees use DPI for growth?',
                answer: 'DPI identifies your strengths and growth areas—allowing AI to recommend skills and roles that fit your evolving potential.'
            }
        ]
    },
    {
        accordion: '14. Health & Wellness',
        questions: [
            {
                question: 'Can my voice say something about my health?',
                answer: 'Yes. Our AI detects stress, anxiety, and even burnout indicators—so you can get ahead of issues before they escalate.'
            },
            {
                question: 'How does AI track emotional wellness?',
                answer: 'By decoding tone, pitch, and rhythm, our AI identifies emotional patterns over time, nudging you toward better self-care.'
            },
            {
                question: 'Is this AI a therapist?',
                answer: 'No. It\'s an early detection assistant—flagging trends, providing insights, and recommending next steps.'
            },
            {
                question: 'How do I access these wellness insights?',
                answer: 'Through your DPI dashboard, which displays AI-curated behavioral and emotional trends in real-time.'
            },
            {
                question: 'Is this wellness AI intrusive?',
                answer: 'Never. It listens only when you choose and returns insights that empower, not expose.'
            }
        ]
    },
    {
        accordion: '15. Education',
        questions: [
            {
                question: 'How does DPI personalize learning?',
                answer: 'Our AI maps how you learn best—from your tone, pace, and interaction patterns—and recommends optimized content accordingly.'
            },
            {
                question: 'Can DPI identify learning disabilities?',
                answer: 'Yes. Voice-based biomarkers can hint at challenges like ADHD or anxiety. Our AI flags these early for supportive intervention.'
            },
            {
                question: 'Does Insight Genesis help educators too?',
                answer: 'Absolutely. Teachers receive AI-generated insights into student focus, comprehension, and engagement levels.'
            },
            {
                question: 'How does AI measure comprehension?',
                answer: 'By analyzing voice stress, speed, and rhythm, our AI identifies confusion or confidence—even before test scores.'
            },
            {
                question: 'Is DPI useful in skill development?',
                answer: 'Yes. It tracks your engagement and learning pace, suggesting content that matches your evolving strengths.'
            }
        ]
    },
    {
        accordion: '16. IGAI Token Utility',
        questions: [
            {
                question: 'What is the IGAI token?',
                answer: 'IGAI is the fuel of Insight Genesis. It powers your access to AI services, incentivizes participation, and rewards contribution.'
            },
            {
                question: 'Can I earn IGAI by sharing my DPI data?',
                answer: 'Only with your consent. You control your insights, and you\'re rewarded when others benefit from them.'
            },
            {
                question: 'How does IGAI support financial services?',
                answer: 'It grants access to AI tools, allows micro-payments for assessments, and underpins transparent reputation models.'
            },
            {
                question: 'Can IGAI be used for staking or rewards?',
                answer: 'Yes. Holders can stake tokens to validate AI models or earn yield from ecosystem activity.'
            },
            {
                question: 'How does IGAI benefit users, not just investors?',
                answer: 'It creates real-world utility—letting users unlock insights, prove reputation, and engage the ecosystem meaningfully.'
            }
        ]
    },
    {
        accordion: '17. AI Benefits: Cross-Cutting',
        questions: [
            {
                question: 'How does Insight Genesis AI help me personally?',
                answer: 'It adapts to you, learns how you think and behave, and offers insights to improve your decisions across work, money, and life.'
            },
            {
                question: 'What does the AI do with my voice?',
                answer: 'It decodes emotional and behavioral patterns—helping assess credit, wellness, or even fit for a new job.'
            },
            {
                question: 'Can Insight Genesis AI tell if I\'m trustworthy?',
                answer: 'Yes. Traits like reliability and self-control are visible in your voice patterns and digital behaviors.'
            },
            {
                question: 'Is this AI for banks or for people?',
                answer: 'For people. It makes banks smarter about you, but you remain the central beneficiary.'
            },
            {
                question: 'Why is Insight Genesis different from other AI?',
                answer: 'Most AI systems analyze you for others. Ours analyzes you for you.'
            }
        ]
    },
    {
        accordion: '18. Privacy & Ethics',
        questions: [
            {
                question: 'Is my data sold to third parties?',
                answer: 'No. Your data is processed by AI to build insights that you own and control. We never sell it.'
            },
            {
                question: 'Can I revoke my data anytime?',
                answer: 'Yes. DPI is designed for user sovereignty. Revoke access anytime.'
            },
            {
                question: 'What ethical safeguards are in place?',
                answer: 'Bias audits, privacy protections, and transparent model training are built into our AI systems.'
            },
            {
                question: 'How is bias in AI prevented?',
                answer: 'We use global datasets, de-biasing algorithms, and constant validation to ensure fair, equitable outcomes.'
            },
            {
                question: 'Is DPI compliant with global data laws?',
                answer: 'Yes. GDPR, CCPA, and other standards are foundational to how DPI is built.'
            }
        ]
    },
    {
        accordion: '19. Use Cases in Action',
        questions: [
            {
                question: 'Can I use DPI to get a microloan?',
                answer: 'Yes. Even without a credit history, DPI helps you unlock small loans based on behavioral credibility.'
            },
            {
                question: 'How can DPI help freelancers?',
                answer: 'It builds a trust score from your behavior and communication—helping you land gigs with less friction.'
            },
            {
                question: 'Can DPI be used across borders?',
                answer: 'Absolutely. Your voice and behavior go with you—making DPI a portable identity.'
            },
            {
                question: 'Does DPI work offline?',
                answer: 'Yes. Much of the AI operates locally and syncs once you reconnect.'
            },
            {
                question: "What if I don\'t use social media?",
                answer: 'No problem. Voice and device patterns alone are enough for our AI to build a reliable profile.'
            }
        ]
    }
];

export default faqData; 