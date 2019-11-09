$('#myVideo').on('click', function() {
  const $myVideo = $(this);

  navigator.mediaDevices
  .getDisplayMedia({video: true, audio:true})
  .then(function (mediaStream) {
    $myVideo[0].srcObject = mediaStream;
  })
  .catch(function (error) {
    console.log("navigator.getUserMedia error: ", error);
  });

});
