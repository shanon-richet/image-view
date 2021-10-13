function openImage() {
    var x = document.querySelector(".image_opened");
    if (x.style.display === "none") {
      x.style.display = "block";
    } else {
      x.style.display = "none";
    }
  }

  function closeImage(){
    var x = document.querySelector(".image_opened");
    if (x.style.display === "block") {
        x.style.display = "none";
      }
      else{
          x.style.display = "block";
      }
  }


  

