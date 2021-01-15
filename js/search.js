function headernavFunction() {
  var x = document.getElementById("myTopnav");
  if (x.className === "header-nav-vaidam") {
    x.className += " responsive";
  } else {
    x.className = "header-nav-vaidam";
  }
}

$("#divtoggle").delegate("a", "click", function(e) {
var toggled = ($(this).prop("id"));
$("div#wrap").prop("class", toggled);
});


/* When the user clicks on the button,
toggle between hiding and showing the dropdown content */
function myFunction() {
document.getElementById("myDropdown").classList.toggle("show");
}

function displayBlock(className, idName, menuClass, menuId, selectedcountry, countryselection){
  $('.'+className).css("display","none");
   $('.'+countryselection).css({"background-color": "transparent"});
  $('.'+selectedcountry).css({"background-color": "#fff"});
  $('#'+idName).css("display","block");
  
  $('.'+menuClass).removeClass("activecity")
  $('.'+menuClass).css({"background-color": "transparent"});
  
  
  $('#'+menuId).css({"background-color": "#005897"});
 $('#'+menuId).addClass("activecity")
}

 

$('.toggle').click(function() {
  $('#link-box').toggle('slow');
});

 

    $(document).on('show','.accordion', function (e) {
         //$('.accordion-heading i').toggleClass(' ');
         $(e.target).prev('.accordion-heading').addClass('accordion-opened');
    });
    
    $(document).on('hide','.accordion', function (e) {
        $(this).find('.accordion-heading').not($(e.target)).removeClass('accordion-opened');
        //$('.accordion-heading i').toggleClass('fa-chevron-right fa-chevron-down');
    });
  
  
  var coll = document.getElementsByClassName("collapsible-searchpage");
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