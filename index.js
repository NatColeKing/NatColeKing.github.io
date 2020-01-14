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

$('#work_cat_name').on('click', ()=>{
  hideAllMainViewBut('gallery');
});

$('#vr_cat_name').on('click', ()=>{
  hideAllMainViewBut('vr_portfolio');
});

$('#mod_cat_name').on('click', ()=>{
  hideAllMainViewBut('mod_portfolio');
});

$('#photo_cat_name').on('click', ()=>{
  hideAllMainViewBut('photo_portfolio');
});

$('#vect_cat_name').on('click', ()=>{
  hideAllMainViewBut('vect_portfolio');
});

$('#dig_cat_name').on('click', ()=>{
  hideAllMainViewBut('dig_portfolio');
});

$('#personal_cat_name').on('click', ()=>{
  hideAllMainViewBut('personal_info');
});

$('#contact_cat_name').on('click', ()=>{
  hideAllMainViewBut('contact');
});

$('#cv_cat_name').on('click', ()=>{
  hideAllMainViewBut('cv');
});

function hideAllMainViewBut(idName){
  $('.main_view').addClass('hide');
  $('#'+idName).removeClass('hide');
}
