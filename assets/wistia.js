window._wq = window._wq || [];
window._wq.push({
  id: "_all",
  onReady: function(video) {
    // for all existing and future videos, run this function
    video.bind("play", function() {
      // when one video plays, iterate over all the videos and pause each,
      // unless it's the video that just started playing.
      var allVideos = Wistia.api.all();
      for (var i = 0; i < allVideos.length; i++) {
        if (allVideos[i].hashedId() !== video.hashedId()) {
          allVideos[i].pause();
        }
      }
    });
  }
});