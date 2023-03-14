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

    // Функция  для перемены цвета лапок пока под вопросом
    
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
     
     

     $(".paw9").click(function() {
        $(".paw9c, .paw10c, .paw11c").addClass("pawshow");
        setTimeout (function () {
            $(".paw9c, .paw10c, .paw11c").removeClass("pawshow"); 
        }, 3000);

     });





    //Функция для открытия первой игры
     $(".firstg, .igra1").click(function(){
        $(".main_ecran").addClass("sectionHide");
        $(".IgraOdin").removeClass("sectionHide");
        $(".IgraOdin").addClass("ShowSection");
     });


    //  Функция для перетаскивания комков грязи
     $( function() {
        $( "#draggable" ).draggable();
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




  










});
