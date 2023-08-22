// Get the modal
var modal = document.getElementById("modal-container");

// Get the button that opens the modal
var btn = document.getElementById("submit-btn");

var pagePreview = document.getElementById("page-preview");

// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close")[0];

// When the user clicks the button, open the modal 
btn.onclick = function(displayUserRating) {
  modal.style.visibility = "visible";
  pagePreview.style.display = "none";
}

// When the user clicks on <span> (x), close the modal
span.onclick = function() {
  modal.style.visibility = "hidden";
  pagePreview.style.display = "block";
}

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
  if (event.target == modal) {
    modal.style.visibility = "hidden";
    pagePreview.style.display = "block";
  }
}

// active state
let buttons = document.querySelectorAll('button');

buttons.forEach(button => {
    button.addEventListener('click', function () {
        buttons.forEach(btn => btn.classList.remove('active'));
        this.classList.add('active');        
    });
});


// Display user rating number on modal
const RatingItems = document.querySelectorAll(".rating-item");
const ratingList = document.getElementById("rating-list");
const appreciationContainer = document.getElementById("modal-container");
const ratePick = document.getElementById("user-rating");


function displayUserRating() {
  ratingList.style.display = "none";
  appreciationContainer.style.display = "flex";
}

for (let x of RatingItems) {
  x.addEventListener("click", () => {
    ratePick.innerHTML = `You selected ${x.value} out of 5`
  });
}





