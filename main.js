let speedHide = 200;
let speedShow = 300;

let summary = 50;
let currency = 'грн';

$('.total').html('Оплатити: ' + summary + currency);

$('.item1').hide(0);
$('.choseOpen').hide(0);

// chease
$('#chease').click(function () {
    $('#chooseChease').slideToggle(speedShow);
    $('#chooseMeet').slideUp(speedShow);
    $('#chooseVeg').slideUp(speedShow);
    $('#chooseSous').slideUp(speedShow);

}) 

// meet
$('#meet').click(function () {
    $('#chooseChease').slideUp(speedShow);
    $('#chooseMeet').slideToggle(speedShow);
    $('#chooseVeg').slideUp(speedShow);
    $('#chooseSous').slideUp(speedShow);

}) 

// sous
$('#sous').click(function () {
    $('#chooseChease').slideUp(speedShow);
    $('#chooseMeet').slideUp(speedShow);
    $('#chooseVeg').slideUp(speedShow);
    $('#chooseSous').slideToggle(speedShow);

}) 

// vegitables
$('#veg').click(function () {
    $('#chooseChease').slideUp(speedShow);
    $('#chooseMeet').slideUp(speedShow);
    $('#chooseVeg').slideToggle(speedShow);
    $('#chooseSous').slideUp(speedShow);

}) 

// feta
$('#feta').click(function () {
    $('.fetaGroup').fadeToggle(speedHide);
    $('#fetaHide').fadeToggle(speedShow);

    summary += 30;
    $('.total').html('Оплатити: ' + summary + currency);
    doBounce($('#bounce'), 5, '10px', 500);
})
 
$('#fetaHide').click(function () {
    $('.fetaGroup').fadeToggle(speedHide);
    $('#fetaHide').fadeToggle(speedShow);

    summary -= 30;
    $('.total').html('Оплатити: ' + summary + currency);
})

// mozarela
$('#moza').click(function () {
    $('.mozaGroup').fadeToggle(speedHide);
    $('#mozaHide').fadeToggle(speedShow);

    summary += 30;
    $('.total').html('Оплатити: ' + summary + currency);
    doBounce($('#bounce'), 5, '10px', 500);
})
 
$('#mozaHide').click(function () {
    $('.mozaGroup').fadeToggle(speedHide);
    $('#mozaHide').fadeToggle(speedShow);

    summary -= 30;
    $('.total').html('Оплатити: ' + summary + currency);
})

// cheder
$('#cheder').click(function () {
    $('.chederGroup').fadeToggle(speedHide);
    $('#chederHide').fadeToggle(speedShow);

    summary += 30;
    $('.total').html('Оплатити: ' + summary + currency);
    doBounce($('#bounce'), 5, '10px', 500);
})
 
$('#chederHide').click(function () {
    $('.chederGroup').fadeToggle(speedHide);
    $('#chederHide').fadeToggle(speedShow);

    summary -= 30;
    $('.total').html('Оплатити: ' + summary + currency);
})

// bergader 
$('#blu').click(function () {
    $('.bluGroup').fadeToggle(speedHide);
    $('#bluHide').fadeToggle(speedShow);

    summary += 30;
    $('.total').html('Оплатити: ' + summary + currency);
    doBounce($('#bounce'), 5, '10px', 500);
})
 
$('#bluHide').click(function () {
    $('.bluGroup').fadeToggle(speedHide);
    $('#bluHide').fadeToggle(speedShow);

    summary -= 30;
    $('.total').html('Оплатити: ' + summary + currency);
})

// parm 
$('#parm').click(function () {
    $('.parmGroup').fadeToggle(speedHide);
    $('#parmHide').fadeToggle(speedShow);

    summary += 30;
    $('.total').html('Оплатити: ' + summary + currency);
    doBounce($('#bounce'), 5, '10px', 500);
})
 
$('#parmHide').click(function () {
    $('.parmGroup').fadeToggle(speedHide);
    $('#parmHide').fadeToggle(speedShow);

    summary -= 30;
    $('.total').html('Оплатити: ' + summary + currency);
})

// chicken 
$('#chicken').click(function () {
    $('.chickenGroup').fadeToggle(speedHide);
    $('#chickenHide').fadeToggle(speedShow);

    summary += 30;
    $('.total').html('Оплатити: ' + summary + currency);
    doBounce($('#bounce'), 5, '10px', 500);
})
 
$('#chickenHide').click(function () {
    $('.chickenGroup').fadeToggle(speedHide);
    $('#chickenHide').fadeToggle(speedShow);

    summary -= 30;
    $('.total').html('Оплатити: ' + summary + currency);
})

// bekon 
$('#bekon').click(function () {
    $('.bekonGroup').fadeToggle(speedHide);
    $('#bekonHide').fadeToggle(speedShow);

    summary += 30;
    $('.total').html('Оплатити: ' + summary + currency);
    doBounce($('#bounce'), 5, '10px', 500);
})
 
$('#bekonHide').click(function () {
    $('.bekonGroup').fadeToggle(speedHide);
    $('#bekonHide').fadeToggle(speedShow);

    summary -= 30;
    $('.total').html('Оплатити: ' + summary + currency);
})

// shynka 
$('#shynka').click(function () {
    $('.shynkaGroup').fadeToggle(speedHide);
    $('#shynkaHide').fadeToggle(speedShow);

    summary += 30;
    $('.total').html('Оплатити: ' + summary + currency);
    doBounce($('#bounce'), 5, '10px', 500);
})
 
$('#shynkaHide').click(function () {
    $('.shynkaGroup').fadeToggle(speedHide);
    $('#shynkaHide').fadeToggle(speedShow);

    summary -= 30;
    $('.total').html('Оплатити: ' + summary + currency);
})

// paperoni 
$('#paperoni').click(function () {
    $('.paperoniGroup').fadeToggle(speedHide);
    $('#paperoniHide').fadeToggle(speedShow);

    summary += 30;
    $('.total').html('Оплатити: ' + summary + currency);
    doBounce($('#bounce'), 5, '10px', 500);
})
 
$('#paperoniHide').click(function () {
    $('.paperoniGroup').fadeToggle(speedHide);
    $('#paperoniHide').fadeToggle(speedShow);

    summary -= 30;
    $('.total').html('Оплатити: ' + summary + currency);
})

// alfredo 
$('#alfredo').click(function () {
    $('.alfredoGroup').fadeToggle(speedHide);
    $('#alfredoHide').fadeToggle(speedShow);

    summary += 30;
    $('.total').html('Оплатити: ' + summary + currency);
    doBounce($('#bounce'), 5, '10px', 500);
})
 
$('#alfredoHide').click(function () {
    $('.alfredoGroup').fadeToggle(speedHide);
    $('#alfredoHide').fadeToggle(speedShow);

    summary -= 30;
    $('.total').html('Оплатити: ' + summary + currency);
})

// barbequ 
$('#barbequ').click(function () {
    $('.barbequGroup').fadeToggle(speedHide);
    $('#barbequHide').fadeToggle(speedShow);

    summary += 30;
    $('.total').html('Оплатити: ' + summary + currency);
    doBounce($('#bounce'), 5, '10px', 500);
})
 
$('#barbequHide').click(function () {
    $('.barbequGroup').fadeToggle(speedHide);
    $('#barbequHide').fadeToggle(speedShow);

    summary -= 30;
    $('.total').html('Оплатити: ' + summary + currency);
})

// chasnyk 
$('#chasnyk').click(function () {
    $('.chasnykGroup').fadeToggle(speedHide);
    $('#chasnykHide').fadeToggle(speedShow);

    summary += 30;
    $('.total').html('Оплатити: ' + summary + currency);
    doBounce($('#bounce'), 5, '10px', 500);
})
 
$('#chasnykHide').click(function () {
    $('.chasnykGroup').fadeToggle(speedHide);
    $('#chasnykHide').fadeToggle(speedShow);

    summary -= 30;
    $('.total').html('Оплатити: ' + summary + currency);
})

// kukurudza 
$('#kukurudza').click(function () {
    $('.kukurudzaGroup').fadeToggle(speedHide);
    $('#kukurudzaHide').fadeToggle(speedShow);

    summary += 30;
    $('.total').html('Оплатити: ' + summary + currency);
    doBounce($('#bounce'), 5, '10px', 500);
})
 
$('#kukurudzaHide').click(function () {
    $('.kukurudzaGroup').fadeToggle(speedHide);
    $('#kukurudzaHide').fadeToggle(speedShow);

    summary -= 30;
    $('.total').html('Оплатити: ' + summary + currency);
})

// ananas
$('#ananas').click(function () {
    $('.ananasGroup').fadeToggle(speedHide);
    $('#ananasHide').fadeToggle(speedShow);

    summary += 30;
    $('.total').html('Оплатити: ' + summary + currency);
    doBounce($('#bounce'), 5, '10px', 500);
})
 
$('#ananasHide').click(function () {
    $('.ananasGroup').fadeToggle(speedHide);
    $('#ananasHide').fadeToggle(speedShow);

    summary -= 30;
    $('.total').html('Оплатити: ' + summary + currency);
})

// tomato
$('#tomato').click(function () {
    $('.tomatoGroup').fadeToggle(speedHide);
    $('#tomatoHide').fadeToggle(speedShow);

    summary += 30;
    $('.total').html('Оплатити: ' + summary + currency);
    doBounce($('#bounce'), 5, '10px', 500);
})
 
$('#tomatoHide').click(function () {
    $('.tomatoGroup').fadeToggle(speedHide);
    $('#tomatoHide').fadeToggle(speedShow);

    summary -= 30;
    $('.total').html('Оплатити: ' + summary + currency);
})

// grub
$('#grub').click(function () {
    $('.grubGroup').fadeToggle(speedHide);
    $('#grubHide').fadeToggle(speedShow);

    summary += 30;
    $('.total').html('Оплатити: ' + summary + currency);
    doBounce($('#bounce'), 5, '10px', 500);
})
 
$('#grubHide').click(function () {
    $('.grubGroup').fadeToggle(speedHide);
    $('#grubHide').fadeToggle(speedShow);

    summary -= 30;
    $('.total').html('Оплатити: ' + summary + currency);
})

// shpunat
$('#shpunat').click(function () {
    $('.shpunatGroup').fadeToggle(speedHide);
    $('#shpunatHide').fadeToggle(speedShow);

    summary += 30;
    $('.total').html('Оплатити: ' + summary + currency);
    doBounce($('#bounce'), 5, '10px', 500);
})
 
$('#shpunatHide').click(function () {
    $('.shpunatGroup').fadeToggle(speedHide);
    $('#shpunatHide').fadeToggle(speedShow);

    summary -= 30;
    $('.total').html('Оплатити: ' + summary + currency);
})

// perets
$('#perets').click(function () {
    $('.peretsGroup').fadeToggle(speedHide);
    $('#peretsHide').fadeToggle(speedShow);

    summary += 30;
    $('.total').html('Оплатити: ' + summary + currency);
    doBounce($('#bounce'), 5, '10px', 500);
})
 
$('#peretsHide').click(function () {
    $('.peretsGroup').fadeToggle(speedHide);
    $('#peretsHide').fadeToggle(speedShow);

    summary -= 30;
    $('.total').html('Оплатити: ' + summary + currency);
})


function doBounce(element, times, distance, speed) {
    for (let i = 0; i < times; i++) {
        element.animate({
                marginTop: '-=' + distance
            }, speed)
            .animate({
                marginTop: '+=' + distance
            })
    }
}

