document.addEventListener('DOMContentLoaded', () => {
    //Header Logo Update
    const headerLogo = document.querySelector('.header-logos.items-center.header-logos a.w-full img.image');
    if (headerLogo) {
        headerLogo.src = 'https://assets.airtrfx.com/media-em/kl/logos/kl-small-default4.svg';
    }

    // Apps Logos Update
    const observer = new MutationObserver((mutations, obs) => {
        const appStoreImage = document.querySelector('img[alt="App Store"]');
        const googlePlayImage = document.querySelector('img[alt="Google Play"]');
        if (appStoreImage) {
            appStoreImage.src = "https://assets.airtrfx.com/media-em/kl/custom_assets/redesign_icons/app_store_badge.svg";
            if (googlePlayImage) {
                googlePlayImage.src = "https://assets.airtrfx.com/media-em/kl/custom_assets/redesign_icons/google_play_badge.svg";
            }

            obs.disconnect();
        }
    });

    const observerConfig = { childList: true, subtree: true };
    observer.observe(document.body, observerConfig);
});
