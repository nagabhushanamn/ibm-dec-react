

// using DOM API

// document.addEventListener('DOMContentLoaded', function (e) {
   
//     // query
//     let box = document.querySelector('.alert-danger');
//     let showBtn = document.querySelector('.btn-success');
//     let hideBtn = document.querySelector('.btn-danger');

//     // bind event listeners  Then react to events

//     showBtn.addEventListener('click', function (e) {
//         box.style.display = 'block';
//     })

//     hideBtn.addEventListener('click', function (e) {
//         box.style.display = 'none';
//     })

// })


// Using DOM with Jquery

$(document).ready(function(){
    let box=$('.alert-danger');
    $('.btn-danger').click(function(){
        box.hide();
    });
    $('.btn-success').click(function(){
        box.show();
    });
});