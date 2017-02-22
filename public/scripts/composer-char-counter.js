$(document).ready( function() {
  $('.new-tweet textarea').on('input', function(){
    let texts = $(this).val().length;
    let textsLeft= 140-texts;
    $(this).closest('.new-tweet').find('.counter').text(textsLeft);
    console.log(textsLeft);
    if(textsLeft<0){
      $(this).closest('.new-tweet').find('.counter').css("color", "red");
    }
  });
});