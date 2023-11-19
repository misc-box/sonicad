function checkForAd() {
    const adElement = document.querySelector("div.ad-showing .video-stream");
    if (adElement) {
        adElement.playbackRate = 16;
    } else {
        const videoElement = document.querySelector(".video-stream");
        if (videoElement && videoElement.playbackRate === 16) {
            videoElement.playbackRate = 1;
        }
    }
}

checkForAd();

const observer = new MutationObserver(checkForAd);
observer.observe(document.body, {
    childList: true,
    subtree: true,
});
