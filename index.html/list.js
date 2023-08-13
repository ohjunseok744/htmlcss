var products = [
  { id : 0, price : 70000, title : 'Blossom Dress' },
  { id : 1, price : 50000, title : 'Springfield Shirt' },
  { id : 2, price : 60000, title : 'Black Monastery' }
];
for(var i=0 ;i<3;i++){
  $('.card-body h5').eq(i).text(products[i].title);
  $('.card-body p').eq(i).text('가격 :'+products[i].price);
}