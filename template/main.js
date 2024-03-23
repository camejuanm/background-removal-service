function allowDrop(event) {
    event.preventDefault();
  }
// function dropHandler(event) {
//     console.log("Drop");
//     event.preventDefault();
//     var files = event.dataTransfer.files;
//     if (files.length > 0) {
//       var file = files[0]; // Only handle the first file
//       if (file.type.match('image.*')) {
//         console.log("Image dropped:", file.name);
//       } else {
//         console.log("Please drop an image file.");
//       }
//     }
//   }
  function dropHandler(event) {
    event.preventDefault();
    
    var files = event.dataTransfer.files;
    if (files.length > 0) {
      var file = files[0]; // Only handle the first file
      if (file.type.match('image.*')) {
        var reader = new FileReader();
        reader.onload = function(e) {
          setTimeout(function() {
            console.log("Image dropped:", file.name);
          }, 0);
        };
        reader.readAsDataURL(file);
      } else {
        console.log("Please drop an image file.");
      }
    }
  }
//   function dropHandler(event) {
//     console.log("Drop");
//     event.preventDefault();
//     var files = event.dataTransfer.files;
//       var file = files[0]; // Only handle the first file
//       if (file.type.match("^image/")) {
//         console.log("Image dropped:", file.name);
//       } else {
//         console.log("Please drop an image file.");
//       }
//   }

  