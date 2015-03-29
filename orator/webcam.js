if(navigator.webkitGetUserMedia!=null) {
	var options = {
	video:true,
	audio:false
  };
  
  navigator.webkitGetUserMedia(options,
  function(stream) {
  var video = document.querySelector('video');
  video.src = window.webkitURL.createObjectURL(stream);
  },
  function(e) {
  console.log("There was a problem with webkitGetUserMedia");
  }
  );
}