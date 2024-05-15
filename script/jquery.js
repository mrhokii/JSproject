$(document).ready(function(){
// header responsive
//slideDown
    $(".fa-bars").click(function(){
      
      $(".menu-mob").slideDown();
      $(".fa-bars").css("display", "none")
      $(".bx-minus").css("display", "block")
      
    })
//slideUp
    $(".bx-minus").click(function(){
      $(".menu-mob").slideUp();
      $(".fa-bars").css("display", "block")
      $(".bx-minus").css("display", "none")

      
    })








//show-pages &  show-blog
    $("#show-pages").click(function(){
      $(".pages").slideToggle()
  
    })
    $("#show-blog").click(function(){
      $(".blog").slideToggle()
    })

//show-pages &  show-blog responsive
    $("#show-pages2").click(function(){
      $(".pages2").slideToggle()
      $("#down").toggleClass("bx bx-chevron-down")
      $("#down").toggleClass("bx bx-chevron-up")
  
    })
    $("#show-blog2").click(function(){
      $(".blog2").slideToggle()
      $("#up").toggleClass("bx bx-chevron-down")
      $("#up").toggleClass("bx bx-chevron-up")
    })





/// question-box

    $(".question-1").click(function(){
      $(".reply-1").slideToggle()
      $(".reply-2").slideUp()
      $(".reply-3").slideUp()
    })


    $(".question-2").click(function(){
      $(".reply-2").slideToggle()
      $(".reply-1").slideUp()
      $(".reply-3").slideUp()
    })

    $(".question-3").click(function(){
      $(".reply-3").slideToggle()
      $(".reply-2").slideUp()
      $(".reply-1").slideUp()
    })




    $(".question-4").click(function(){
      $(".reply-4").slideToggle()
      $(".reply-5").slideUp()
      $(".reply-6").slideUp()
    })


    $(".question-5").click(function(){
      $(".reply-5").slideToggle()
      $(".reply-4").slideUp()
      $(".reply-6").slideUp()
    })

    $(".question-6").click(function(){
      $(".reply-6").slideToggle()
      $(".reply-5").slideUp()
      $(".reply-4").slideUp()
    })

  });
  
