var dropdown = document.getElementsByClassName("dropdown-btn");

var i;



for (i = 0; i < dropdown.length; i++) {

  dropdown[i].addEventListener("click", function () {

    this.classList.toggle("active");

    var dropdownContent = this.nextElementSibling;

    if (dropdownContent.style.display === "block") {

      dropdownContent.style.display = "none";

    } else {

      dropdownContent.style.display = "block";

    }

  });

}


$(document).ready(function () {

  $(".ClsBtn").click(function () {

    $(".dropdown-menu,.dropdown-toggle").removeClass("show");

    $(".backdrop").removeClass("active");

  });

  $(".More").click(function () {

    $(".FilterBoxContent .DescriptTxt").addClass("Active");

  });



  $(".FilterOpenMobile").click(function () {

    $(".FIlterMobileWrap").addClass("Active");

    $("nav.navbar.navbar-expand-lg").hide();

    $("body").addClass("FilterActive");



  });



  $(".FIlterMobileWrap .TopBarBox h5.Clo").click(function () {

    $(".FIlterMobileWrap").removeClass("Active");

    $("nav.navbar.navbar-expand-lg").show();

    $("body").removeClass("FilterActive");

  });





  $("#InnerPage .DashBoardWrap .FilterBoxContent .ApplyBtn .Btn").click(function () {

    $(".SaveFilterPopUpBox").addClass("Active");

  });

  $("#InnerPage .SaveFilterPopUpBox .PopUpContentBox .HeaderBoxSection .CloPoBtn").click(function () {

    $(".SaveFilterPopUpBox").removeClass("Active");

  });



  $("#InnerPage .InnerPopUp .PopUpContentBox .close").click(function () {

    $(".InnerPopUp").removeClass("show");

  });



});


$(document).ready(function () {
  $(".suginput").keypress(function () {
    $(".sugresult").css("display", "flex");
  });

  if ($('.suginput').val().length === 0) {
    alert('Enter your name!');
  }
});

$(document).ready(function () {

  $("#InnerPage .SubmissionListBox .BottomBox .LoadMoreBtnBox .LoadMoreBtn").click(function () {

    $(this).parent().parent().toggleClass('Active');

    $(this).parent().toggleClass("Active");

  });

});

$(document).ready(function () {

  $("#InnerPage .Subs .SubscribeBox.BOttom .BottomStrip.LoadMoreBtn").click(function () {

    $("#InnerPage .Subs .SubscribeBox.BOttom .moreinfo").toggleClass('Active');

  });

});


$(function () {
  var availableTags = [
    "ActionScript",
    "AppleScript",
    "Asp",
    "BASIC",
    "C",
    "C++",
    "Clojure",
    "COBOL",
    "ColdFusion",
    "Erlang",
    "Fortran",
    "Groovy",
    "Haskell",
    "Java",
    "JavaScript",
    "Lisp",
    "Perl",
    "PHP",
    "Python",
    "Ruby",
    "Scala",
    "Scheme"
  ];
  $("#searchfield").autocomplete({
    source: availableTags
  });
});

$(function () {
  var NTID = [
    "12345",
    "67890",
    "13579"
  ];
  $("#ntidoptions").autocomplete({
    source: NTID
  });
});

$(function () {
  var organization = [
    "organization1",
    "organization2",
    "organization3"
  ];
  $("#orgoption").autocomplete({
    source: organization
  });
});


$(".slider-content").slick({
  slidesToShow: 1,
  slidesToScroll: 1,
  infinite: true,
  speed: 1000,
  asNavFor: ".slider-thumb",
  arrows: false,
  autoplay: true,
  adaptiveHeight: false,
});

$(".slider-thumb").slick({
  slidesToShow: 1,
  slidesToScroll: 1,
  asNavFor: ".slider-content",
  dots: true,
  speed: 1000,
  infinite: true,
  arrows: false,
  autoplay: true,
  adaptiveHeight: false,
});

$('.logoslider').slick({
  dots: false,
  infinite: true,
  speed: 300,
  slidesToShow: 4,
  slidesToScroll: 1,
  centerMode: true,
  autoplay: true,
  autoplaySpeed: 2000,
  responsive: [
    {
      breakpoint: 1024,
      settings: {
        slidesToShow: 4,
        slidesToScroll: 1,
        infinite: true,
        dots: true
      }
    },
    {
      breakpoint: 600,
      settings: {
        slidesToShow: 3,
        slidesToScroll: 1
      }
    },
    {
      breakpoint: 480,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 1
      }
    }
    // You can unslick at a given breakpoint now by adding:
    // settings: "unslick"
    // instead of a settings object
  ]
});


$('.screenslider').slick({
  infinite: true,
  slidesToShow: 1,
  slidesToScroll: 1,
  autoplay: true,
  dots: true,
  autoplaySpeed: 2000
});









/*********side nav toggle for mobile ***********/



function openNav() {

  document.getElementById("mySidenav").style.width = "320px";

}



function closeNav() {

  document.getElementById("mySidenav").style.width = "0";

}



/*********************/



/*********filter tab of tender info***********/



function FilterTab(evt, TabName) {

  var i, tabcontent, tablinks;

  tabcontent = document.getElementsByClassName("tabcontentfilter");

  for (i = 0; i < tabcontent.length; i++) {

    tabcontent[i].style.display = "none";

  }

  tablinks = document.getElementsByClassName("tablinksfilter");

  for (i = 0; i < tablinks.length; i++) {

    tablinks[i].className = tablinks[i].className.replace(" active", "");

  }

  document.getElementById(TabName).style.display = "block";

  evt.currentTarget.className += " active";

}



/*********************************/



/*********sidebar tab menu for bid result page***********/



function MenuTab(evt, TabName) {

  var i, tabcontent, tablinks;

  tabcontent = document.getElementsByClassName("menucontentfilter");

  for (i = 0; i < tabcontent.length; i++) {

    tabcontent[i].style.display = "none";

  }

  tablinks = document.getElementsByClassName("menulinksfilter");

  for (i = 0; i < tablinks.length; i++) {

    tablinks[i].className = tablinks[i].className.replace(" active", "");

  }

  document.getElementById(TabName).style.display = "block";

  evt.currentTarget.className += " active";

}



/***************************************************/





/*********Event page tab box ***********/



function EventTab(evt, TabName) {

  var i, tabcontent, tablinks;

  tabcontent = document.getElementsByClassName("eventcontentfilter");

  for (i = 0; i < tabcontent.length; i++) {

    tabcontent[i].style.display = "none";

  }

  tablinks = document.getElementsByClassName("eventlinksfilter");

  for (i = 0; i < tablinks.length; i++) {

    tablinks[i].className = tablinks[i].className.replace(" active", "");

  }

  document.getElementById(TabName).style.display = "block";

  evt.currentTarget.className += " active";

}



function EventTabn(evt, TabName) {

  var i, tabcontent, tablinks;

  tabcontent = document.getElementsByClassName("eventcontentfilter");

  for (i = 0; i < tabcontent.length; i++) {

    tabcontent[i].style.display = "none";

  }

  tablinks = document.getElementsByClassName("eventlinksfiltern");

  for (i = 0; i < tablinks.length; i++) {

    tablinks[i].className = tablinks[i].className.replace(" active", "");

  }

  document.getElementById(TabName).style.display = "block";

  evt.currentTarget.className += " active";

}









/***************************************************/



/*********side nav close on sidebar tab menu click***********/



$(document).ready(function () {

  $(window).on("resize", function (e) {

    checkScreenSize();

  });



  checkScreenSize();



  function checkScreenSize() {

    var newWindowWidth = $(window).width();

    if (newWindowWidth < 991) {

      $("#InnerPage .DashBoardWrap .VerticleMenuWrap li .TabBoxMenu .menulinksfilter").click(function () {

        $("#mySidenav").css("width", "0");

      });

    } else {

      $("#InnerPage .DashBoardWrap .VerticleMenuWrap li .TabBoxMenu .menulinksfilter").click(function () {

        $("#mySidenav").css("width", "100%");

      });

    }

  }

});





function best_solu(evt, best_solu) {

  var i, tabcontent, tablinks;

  tabcontent = document.getElementsByClassName("tabcontent");

  for (i = 0; i < tabcontent.length; i++) {

    tabcontent[i].style.display = "none";

  }

  tablinks = document.getElementsByClassName("tablinks");

  for (i = 0; i < tablinks.length; i++) {

    tablinks[i].className = tablinks[i].className.replace(" active", "");

  }

  document.getElementById(best_solu).style.display = "block";

  evt.currentTarget.className += " active";

}



function Plan(evt, PlanName) {

  var i, tabcontent, tablinks;

  tabcontent = document.getElementsByClassName("tabcontentnew");

  for (i = 0; i < tabcontent.length; i++) {

    tabcontent[i].style.display = "none";

  }

  tablinks = document.getElementsByClassName("tablinksnew");

  for (i = 0; i < tablinks.length; i++) {

    tablinks[i].className = tablinks[i].className.replace(" active", "");

  }

  document.getElementById(PlanName).style.display = "block";

  evt.currentTarget.className += " active";

}





$('.review').owlCarousel({

  loop: true,

  margin: 0,

  autoplay: true,

  autoplayTimeout: 3000,

  autoplayHoverPause: true,

  smartSpeed: 750,

  nav: true,

  dots: true,

  responsiveClass: true,

  responsive: {

    0: {

      items: 1,



    },

    600: {

      items: 1,



    },

    1000: {

      items: 1,



    }

  }

});







$(function () {

  $("#date").datepicker({

    dateFormat: "dd-M",

    minDate: 1

  });



  $(".date-icon").on("click", function () {

    $("#date").focus();

  });

});











/**********review*************/

$('.review').owlCarousel({

  loop: true,

  margin: 0,

  autoplay: true,

  autoplayTimeout: 3000,

  autoplayHoverPause: true,

  smartSpeed: 750,

  nav: true,

  dots: true,

  responsiveClass: true,

  responsive: {

    0: {

      items: 1,



    },

    600: {

      items: 1,



    },

    1000: {

      items: 1,



    }

  }

});





$(document).ready(function () {

  $(".owl-carousel .owl-next").html('<i class="fas fa-chevron-right"></i>');

  $(".owl-carousel .owl-prev").html('<i class="fas fa-chevron-left"></i>');

});



document.getElementById("uploadBtn").onchange = function () {



  document.getElementById("uploadFile").value = this.value.replace(

    "C:\\fakepath\\",

    ""

  );

};



document.getElementById("uploadBtn2").onchange = function () {

  document.getElementById("uploadFile2").value = this.value.replace(

    "C:\\fakepath\\",

    ""

  );

};



document.getElementById("uploadBtn3").onchange = function () {

  document.getElementById("uploadFile3").value = this.value.replace(

    "C:\\fakepath\\",

    ""

  );

};



















