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

    // Функция  для перемены цвета лапок пока под вопросом
    
     $(".paws1").click(function() {
        $(".paws1c").addClass("pawshow");
        setTimeout (function () {
            $(".paws1c").removeClass("pawshow"); 
        }, 5000);

     });


  










});
