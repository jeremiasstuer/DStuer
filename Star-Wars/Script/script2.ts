const video = document.getElementById("video") as HTMLVideoElement;


video.addEventListener('ended', (event) => {
    console.log('Video stopped either because 1) it was over, ' +
        'or 2) no further data is available.');
  });
