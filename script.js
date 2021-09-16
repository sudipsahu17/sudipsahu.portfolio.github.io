$(document).ready(function(){

  $('#menu').click(function(){
    $(this).toggleClass('fa-times');
    $('header').toggleClass('toggle');
  });

  $(window).on('scroll load',function(){

    $('#menu').removeClass('fa-times');
    $('header').removeClass('toggle');

    if($(window).scrollTop() > 0){
      $('.top').show();
    }else{
      $('.top').hide();
    }

  });

  // smooth scrolling 

  $('a[href*="#"]').on('click',function(e){

    e.preventDefault();

    $('html, body').animate({

      scrollTop : $($(this).attr('href')).offset().top,

    },
      500, 
      'linear'
    );

  });
  
});

function sendEmail() {
	var name = document.getElementById("name").value.toUpperCase();
	var email = document.getElementById("email").value;
	var company = document.getElementById("com").value;
	var msg = document.getElementById("msg").value;
	var sub  = name + " - Mail from Portfolio Portal";
	var body = "Name : " + name + "<br>Email ID : " + email + "<br>Company : " + company + "<br>Message : " + msg;
	Email.send({
		SecureToken : "8ef6b0a5-93be-4111-b023-91aaa59d7707",
		To : "sudipsahu17@gmail.com",
		From : "sudip.auto.mails@gmail.com",
		Subject: sub,
		Body: body
	});
	window.location.href = "https://sudipsahu17.github.io/sudipsahu.portfolio.github.io/index.html";
	alert("Thanks for the message. Will reach out soon !!");
}

function openCity(evt, category) {
	  // Declare all variables
	  var i, tabcontent, tablinks;

	  // Get all elements with class="tabcontent" and hide them
	  tabcontent = document.getElementsByClassName("tabcontent");
	  for (i = 0; i < tabcontent.length; i++) {
		tabcontent[i].style.display = "none";
	  }

	  // Get all elements with class="tablinks" and remove the class "active"
	  tablinks = document.getElementsByClassName("tablinks");
	  for (i = 0; i < tablinks.length; i++) {
		tablinks[i].className = tablinks[i].className.replace(" active", "");
	  }

	  // Show the current tab, and add an "active" class to the button that opened the tab
	  document.getElementById(category).style.display = "block";
	  evt.currentTarget.className += " active";
}
// Get the element with id="defaultOpen" and click on it
document.getElementById("defaultOpen").click();
