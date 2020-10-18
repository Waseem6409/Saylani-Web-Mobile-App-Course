// Scroll Function

window.onscroll = function() {scrollFunction()};

function scrollFunction() {
  if (document.body.scrollTop > 80 || document.documentElement.scrollTop > 80) {
    document.getElementById("navbar-custom").classList.add('navi')
  } else {
    document.getElementById("navbar-custom").classList.remove('navi')
  }
}

// Focus Function

const inputs = document.querySelectorAll(".input");


function addcl(){
	let parent = this.parentNode;
	parent.classList.add("focus");
}

function remcl(){
	let parent = this.parentNode;
	if(this.value == ""){
		parent.classList.remove("focus");
	}
}

inputs.forEach(input => {
	input.addEventListener("focus", addcl);
	input.addEventListener("blur", remcl);
});

// Scroll Functions

function home(){
	$("#home-section")[0].scrollIntoView();
}
function about(){
	$("#about-section")[0].scrollIntoView();
}
function services(){
	$("#services-section")[0].scrollIntoView();
}
function contact(){
	$("#contact-section")[0].scrollIntoView();
}