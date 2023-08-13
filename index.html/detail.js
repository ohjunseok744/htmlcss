// $('.tab-button').eq(0).on('click',function(){
//   $('.orange').removeClass('orange');
//   $('.tab-button').eq(0).addClass('orange');
//   $('.show').removeClass('show');
//   $('.tab-content').eq(0).addClass('show');
// })
// $('.tab-button').eq(1).on('click',function(){
//   $('.orange').removeClass('orange');
//   $('.tab-button').eq(1).addClass('orange');
//   $('.show').removeClass('show');
//   $('.tab-content').eq(1).addClass('show');
// })
// $('.tab-button').eq(2).on('click',function(){
//   $('.orange').removeClass('orange');
//   $('.tab-button').eq(2).addClass('orange');
//   $('.show').removeClass('show');
//   $('.tab-content').eq(2).addClass('show');
// })
for(let i=0;i<3;i++){
  $('.tab-button').eq(i).on('click',function(){
    $('.orange').removeClass('orange');
    $('.tab-button').eq(i).addClass('orange');
    $('.show').removeClass('show');
    $('.tab-content').eq(i).addClass('show');
  })
}

var car=['소나타',50000]
$('.car-title').text(car[0]);
$('.car-price').text(car[1]);

$('.form-select').eq(0).on('input', function(){
  var value = $('.form-select').eq(0).val();
  if (value == '셔츠') {
    $('.form-select').eq(1).removeClass('cap');
  }
});

$('.form-select').eq(0).on('input', function(){
  var value = $('.form-select').eq(0).val();
  if (value == '모자') {
    $('.form-select').eq(1).addClass('cap');
  }
});