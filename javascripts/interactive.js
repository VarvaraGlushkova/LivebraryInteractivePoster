$(document).ready(function(){

    //Функция для появления собаки по клику
    $(".blob").click(function(){
        $(".doggie1").addClass("appear");
        setTimeout (function(){
            $(".doggie1").removeClass("appear");
          }, 3500);

    });

    //Функция для появления кролика по клику
    $(".blob").click(function(){
        $(".rabbit1").addClass("appearR");
        setTimeout (function(){
            $(".rabbit1").removeClass("appearR");
          }, 3000);

    });

    // Функция для падения книжки
    $(".b2").click(function(){
        $(".b2").toggleClass("jumpinganim");
    });

    // Функция  для перемены цвета лапок
    
     $(".paws1").click(function() {
        $(".paws1c, .paw2c, .paw3c").addClass("pawshow");
        setTimeout (function () {
            $(".paws1c, .paw2c, .paw3c").removeClass("pawshow"); 
        }, 3000);

     });

     $(".paws4").click(function() {
        $(".paws4c, .paw5c").addClass("pawshow");
        setTimeout (function () {
            $(".paws4c, .paw5c").removeClass("pawshow"); 
        }, 3000);

     });     


     $(".paw6").click(function() {
        $(".paw6c, .paw7c, .paw8c").addClass("pawshow");
        setTimeout (function () {
            $(".paw6c, .paw7c, .paw8c").removeClass("pawshow"); 
        }, 3000);

     });


     $(".paw9").click(function() {
        $(".paw9c, .paw10c, .paw11c").addClass("pawshow");
        setTimeout (function () {
            $(".paw9c, .paw10c, .paw11c").removeClass("pawshow"); 
        }, 3000);

     });
     
     

     $(".Secpaw1").click(function() {
      $(".Secpaw1c, .Secpaw2c, .Secpaw3c, .Secpaw4c, .Secpaw5c").addClass("pawshow");
      setTimeout (function () {
          $(".Secpaw1c, .Secpaw2c, .Secpaw3c, .Secpaw4c, .Secpaw5c").removeClass("pawshow"); 
      }, 3000);

   });


   $(".Secpaw6").click(function() {
      $(".Secpaw6c, .Secpaw7c, .Secpaw8c, .Secpaw9c, .Secpaw10c, .Secpaw11c").addClass("pawshow");
      setTimeout (function () {
          $(".Secpaw6c, .Secpaw7c, .Secpaw8c, .Secpaw9c, .Secpaw10c, .Secpaw11c").removeClass("pawshow"); 
      }, 3000);

   });

   $(".Secpaw12").click(function() {
      $(".Secpaw12c,.Secpaw13c,.Secpaw14c, .Secpaw15c, .Secpaw16c, .Secpaw17c, .Secpaw18c").addClass("pawshow");
      setTimeout (function () {
          $(".Secpaw12c, .Secpaw13c, .Secpaw14c, .Secpaw15c, .Secpaw16c, .Secpaw17c, .Secpaw18c ").removeClass("pawshow"); 
      }, 3000);

   });





    //Функция для открытия первой игры
     $(".firstg, .igra1").click(function(){
        $(".main_ecran").addClass("sectionHide");
        $(".IgraOdin").removeClass("sectionHide");
        $(".IgraOdin").addClass("ShowSection");
     });


     $(".arrowBack").click(function(){
        $(".IgraOdin").addClass("sectionHide");
        $(".IgraOdin").removeClass("ShowSection");
        $(".main_ecran").removeClass("sectionHide");
     });


    //  Функция для перетаскивания комков грязи
     $( function() {
        $( ".draggable" ).draggable();
      } );



    //   Функция для открытия второй игры
      $(".secondg, .igra2").click(function(){
        $(".main_ecran").addClass("sectionHide");
        $(".IgraDva").removeClass("sectionHide");
        $(".IgraDva").addClass("ShowSection");
     });


     $(".arrBack").click(function(){
        $(".IgraDva").addClass("sectionHide");
        $(".IgraDva").removeClass("ShowSection");
        $(".main_ecran").removeClass("sectionHide");
     });


// Для смены хвостов
     $(".arrClick3").click(function(){
      if ($('.hvost').hasClass('hvost1')) {
         $('.hvost').removeClass('hvost1').addClass('hvost2');
      } else if ($('.hvost').hasClass('hvost2')) {
         $('.hvost').removeClass('hvost2').addClass('hvost3');
      } else if ($('.hvost').hasClass('hvost3')) {
         $('.hvost').removeClass('hvost3').addClass('hvost1');
      }
   });


   $(".arrClick1").click(function(){
      if ($('.hvost').hasClass('hvost1')) {
         $('.hvost').removeClass('hvost1').addClass('hvost3');
      } else if ($('.hvost').hasClass('hvost3')) {
         $('.hvost').removeClass('hvost3').addClass('hvost2');
      } else if ($('.hvost').hasClass('hvost2')) {
         $('.hvost').removeClass('hvost2').addClass('hvost1');
      }
   });


// Для смены ушей
   $(".arrClick4").click(function(){
      if ($('.ushi').hasClass('ushi1')) {
         $('.ushi').removeClass('ushi1').addClass('ushi3');
      } else if ($('.ushi').hasClass('ushi3')) {
         $('.ushi').removeClass('ushi3').addClass('ushi1');
      }
   });



   $(".arrClick2").click(function(){
      if ($('.ushi').hasClass('ushi1')) {
         $('.ushi').removeClass('ushi1').addClass('ushi3');
      } else if ($('.ushi').hasClass('ushi3')) {
         $('.ushi').removeClass('ushi3').addClass('ushi1');
      } 
   });





// Функция для открытия третьей игры
   $(".thirdg, .igra3").click(function(){
      $(".main_ecran").addClass("sectionHide");
      $(".IgraTri").removeClass("sectionHide");
      $(".IgraTri").addClass("ShowSection");
   });


   $(".arrBack").click(function(){
      $(".IgraTri").addClass("sectionHide");
      $(".IgraTri").removeClass("ShowSection");
      $(".main_ecran").removeClass("sectionHide");
   });



   // Функция для переворачивания карточек

   $(".flip-card1").click(function(){
      $(".flip-card1, .flip-card-inner1").toggleClass("perevorot");  
   });

   $(".flip-card2").click(function(){
      $(".flip-card2, .flip-card-inner2").toggleClass("perevorot");  
   });

   $(".flip-card3").click(function(){
      $(".flip-card3, .flip-card-inner3").toggleClass("perevorot");  
   });

   $(".flip-card4").click(function(){
      $(".flip-card4, .flip-card-inner4").toggleClass("perevorot");  
   });

   $(".flip-card5").click(function(){
      $(".flip-card5, .flip-card-inner5").toggleClass("perevorot");  
   });

   $(".flip-card6").click(function(){
      $(".flip-card6, .flip-card-inner6").toggleClass("perevorot");  
   });

   $(".flip-card7").click(function(){
      $(".flip-card7, .flip-card-inner7").toggleClass("perevorot");  
   });

   $(".flip-card8").click(function(){
      $(".flip-card8, .flip-card-inner8").toggleClass("perevorot");  
   });

   $(".flip-card9").click(function(){
      $(".flip-card9, .flip-card-inner9").toggleClass("perevorot");  
   });





});

function setup() {
   createCanvas(493, 299);
   background(214, 121, 150);
 }
 
 function draw() {
   stroke(255, 0, 0);
   strokeWeight(5);
   if (mouseIsPressed === true) {
     line(mouseX, mouseY, pmouseX, pmouseY);
   }
 }
