const rowdiv = document.querySelectorAll(".row div")



// Open the Modal
function openModal() {
  document.getElementById("myModal").style.display = "block";
}

// Close the Modal
function closeModal() {
  document.getElementById("myModal").style.display = "none";
}

// Thumbnail image controls
function currentSlide(n) {
  showSlides(slideIndex = n);
}
function showSlides(n) {
  var i;
  var slides = document.getElementsByClassName("mySlides");
  var dots = document.getElementsByClassName("demo");
  var captionText = document.getElementById("caption");
  if (n > slides.length) {slideIndex = 1;console.log(slideIndex)}
  if (n < 1) {slideIndex = slides.length}
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex-1].style.display = "block";
  dots[slideIndex-1].className += " active";
  captionText.innerHTML = dots[slideIndex-1].alt;
}

var slideIndex = 1;
(showSlides(slideIndex));


function plusSlides(n) {
  showSlides(slideIndex += n);
}

const next = document.getElementById("next");
const prev = document.getElementById("prev")
const row = document.getElementById("row")
const thumbnail = document.getElementById("thumbnail")

// To open the correct slideIndex when you click the img
let num;
row.addEventListener("click", function(e){
    var target = e.target.closest("div");
    var parent = target.parentNode;
    const index = [].indexOf.call(parent.children, target)
    num = index + 1
    currentSlide(num)
    

})
// for the thumbnail display
thumbnail.addEventListener("click", function(e){
  // console.log("hello")
  // console.log(thumbnail)
  var target = e.target.closest("div");
  var parent = target.parentNode;
  const index = [].indexOf.call(parent.children, target)
  // console.log(index)
  num = index + 1
  
  currentSlide(num)
  
  
})
// This is just to open the Modal
rowdiv.forEach(div => {
  
  div.addEventListener("click", ()=>{
    openModal()

  })
});


const modalcontent = document.querySelectorAll(".modal-content img")


// modalcontent.forEach(img => {
//   img.addEventListener("touchmove", ()=>{
//     plusSlides(+1)
//   })

// })
// Element.setCapture()


