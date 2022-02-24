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

// let mark = document.querySelector('.mark');
// let model = document.querySelector('.model');

let Cars = [
    {
        id : 1,
        name : "Ford",
        model : ['F-150', 'Focus', 'Kuga'],
    },
    {
        id : 2,
        name : 'Toyota',
        model : ['Camry', 'Corola', 'Vitz'],
    },

    {
        id : 3,
        name : 'Wolkswagen',
        model : ['Polo', 'Golf', 'Tiguan'],

    }
]

Cars.forEach(car =>{
    $('#make').append(`<option value="${car.id}"> ${car.name} </option>`)
})

$('#make').change(function (e) { 
    e.preventDefault();

    $('#model').empty();

    let id = $(this).val();

    let Models = Cars.find(el =>{
        return el.id == id;
    });

    Models.model.forEach(mod=>{
        $('#model').append(`<option value="${mod}"> ${mod} </option>`)
    })
    
});



// $('.f').click(function(){
//     $('.model').append(`<option></option>`);
// })

