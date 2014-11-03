$(document).ready(function() {

  //mixpanel track
  $('[track]').click(function () {
    mixpanel.track($(this).attr("track"))  
  });

  //signup
  $('#email-signup').click(function () { 
    $('#github-signup').hide()
    $('#google-signup').hide()
    $('#email-signup').hide()
    $('.divider').hide()
    $('#signup-form').show()
  });  

});

$(document).ready(function(){
    $(window).scroll(function(){
        if($(window).scrollTop() > $(window).height()){
            $(".navbar-default").css({"border-bottom":"solid 1px #edeeef"});
            $(".navbar-default").css({"background-color":"#FFFFFF"});
        }
        else {
            $(".navbar-default").css({"background-color":"transparent"});
        }
    })
})