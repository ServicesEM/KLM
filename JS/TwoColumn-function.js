document.addEventListener('DOMContentLoaded', () => {
    const bodyObserverConfig = {
        childList: true,
        subtree: true,
    };

    const bodyCallback = (mutationsList, bodyObserver) => {
        const cardContainer = document.querySelector('div[data-em-sfm-type="COLUMNS"] div[data-test="card-container"]');
        if (cardContainer) {
            const originTextSpan = cardContainer.querySelector('p[data-test="origin-text"] span');
            if (originTextSpan) {
                const copiedValue = originTextSpan.textContent.trim();
                const styleElement = document.createElement('style');
                styleElement.textContent = `
                    div[data-test="destination-text"]::before {
                        content: '${copiedValue}';
                        padding-right: 5px;
                        text-transform: capitalize;
                    }
                `;
                document.head.appendChild(styleElement);

                bodyObserver.disconnect();
            }
        }
    };

    const bodyObserver = new MutationObserver(bodyCallback);
    bodyObserver.observe(document.body, bodyObserverConfig);
});
