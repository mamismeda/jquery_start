$(function(){


    $('.slidy').click(function(){
        event.preventDefault();
        $('.greeny').slideToggle();
    })

    $('.signy').click(function(){
        event.preventDefault();
        $('.inp').hide();
        $('.format').animate({
            "width": "20%",
            "border-radius": "15px",
        })
        $('.hr').animate({
            "padding-top" : "30px"
        });
    })
    $('.hr').click(function(){
        event.preventDefault();
        $('.inp').show();
        $('.format').animate({
            "width": "100%",
            "border-radius" : "0",
            "padding": "25px",
        })

      
    })

});

let mark = document.querySelector('.mark');
let model = document.querySelector('.model');

let models = [
    {
        id : 1,
        model : "Ford",
        
    }
]

