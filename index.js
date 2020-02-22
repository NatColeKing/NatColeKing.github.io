function topFunction()
{
  document.body.scrollTop = 0; // For Safari
  document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
}

$('#linkedin').on('click', ()=>{
  window.open("https://www.linkedin.com/in/natalie-van-maerssen-845924148", "_blank");
});

$('#instagram').on('click', ()=>{
  window.open("https://www.instagram.com/artxnat_/", "_blank");
});

$('#github').on('click', ()=>{
  window.open("https://github.com/NatColeKing/", "_blank");
});

// $('#work_cat_name').on('click', ()=>{
//   hideAllMainViewBut('#gallery_inner');
// });
//
// function hideAllMainViewBut(query){
//   $('.main_view').addClass('hide');
//   $(query).removeClass('hide');
// }
