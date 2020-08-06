

const videoGrid = document.getElementById('video-grid');
const userVideo = document.createElement('video');
userVideo.muted = true;

let userVideoSteam;
// Get user permission
navigator.mediaDevices.getUserMedia({
    video: true,
    audio: true
}).then( stream => {
    userVideoSteam = stream;
    addVideoStream(userVideo, stream);
});

const addVideoStream = (video, stream) => {
    video.srcObject = stream;
    video.addEventListener('loadedmetadata', () => {
        video.play();
    });
    videoGrid.append(video);
}