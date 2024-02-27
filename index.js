document.addEventListener('DOMContentLoaded', function() {
    const video = document.getElementById('video');
    const observer = new IntersectionObserver(entries => {
        if (entries[0].isIntersecting) {
            video.play();
        } else {
            video.pause();
        }
    });
    observer.observe(video);
});
