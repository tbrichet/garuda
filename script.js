// StickyNav
window.onscroll = function() {stickyNav()};

var navbar = document.getElementById("navbar");

var sticky = navbar.offsetTop;

function stickyNav() {
  if (window.pageYOffset >= sticky) {
    navbar.classList.add("sticky")
  } else {
    navbar.classList.remove("sticky");
  }
}

//Specialties - Collapsible Function

var coll = document.getElementsByClassName("collapsible");
var i;

for (i = 0; i < coll.length; i++) {
  coll[i].addEventListener("click", function() {
    this.classList.toggle("active");
    var content = this.nextElementSibling;
    if (content.style.maxHeight){
      content.style.maxHeight = null;
    } else {
      content.style.maxHeight = content.scrollHeight + "px";
    }
  });
}

//Scheduling Form Submissions

var modal = document.getElementById("errorModal");
var span = document.getElementsByClassName("close")[0];

document.getElementById("schedule-button").addEventListener("click", residentCheck);

function residentCheck() {
  if (document.getElementById("resident").checked) {
    formDirect();
  }
  else {
    formError();
  }
}

//Error - Not a Resident of Georgia or Florida
function formError() {
  modal.style.display = "block";
}

//Close Error Modal - X
span.onclick = function() {
  modal.style.display = "none";
}

// Close Error Modal - Click Outside Box
window.onclick = function(event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
}

// Direct to Correct Scheduling Page
function formDirect() {
  //Insurance Pay
  if (document.getElementById("insurance").checked) {
    window.open(
      "https://headway.co/providers/abilash-pulicken", "_blank");
  }
  //Cash Pay New Patient
  else if (document.getElementById("newpatient").checked) {
    window.open(
      "https://abilash-pulicken.clientsecure.me/request/service", "_blank");
  }
  //Cash Pay Existing Patient
  else if (document.getElementById("cash").checked){
    window.open(
      "https://abilash-pulicken.clientsecure.me/sign-in", "_blank");
  }
  else {
    alert("Please indicate your payment method")
  }
}




