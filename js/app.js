$('document').ready(function(){

  function playHadouken () {
  $('#hadouken-sound')[0].volume = 0.5;
  $('#hadouken-sound')[0].load();
  $('#hadouken-sound')[0].play();
  }

  $('div.ryu').hover(function(){
    $('div.ryu-still').hide();
    $('div.ryu-ready').show();
    $('div.ryu-throwing').hide();
    $('div.ryu-cool').hide();

  },function(){
    $('div.ryu-ready').hide();
    $('div.ryu-still').show();
    $('div.ryu-throwing').hide();
    $('div.ryu-cool').hide();
  });

  $('div.ryu').mousedown(function()
    {
      playHadouken();
      $('div.ryu-ready').hide();
      $('div.ryu-still').hide();
      $('div.ryu-cool').hide();
      $('div.ryu-throwing').show();
      /*$('div.textlogo').hide();*/
      $('div.hadouken').show();
      $('div.hadouken').animate({left: "1000px"},300,function()
    {
      $(this).hide();
      $(this).css("left","512px");
    }
    );
    }
  );

  $('div.ryu').mouseup(function(){
    $('div.ryu-ready').show();
    $('div.ryu-still').hide();
    $('div.ryu-throwing').hide();
    $('div.ryu-cool').hide();
    $('div.hadouken').finish().show()
    .animate(
    {'left': '1000px'},
    300,
    function() {
      $(this).hide();
      $(this).css('left', '520px');
    }
  );
  });




  $('html').keypress(function(event){
    console.log(event.which);
    if (event.which==120)
    {
      $('div.ryu-ready').hide();
      $('div.ryu-still').hide();
      $('div.ryu-throwing').hide();
      $('div.ryu-cool').show();
    }
  });

  $('html').keyup(function(event){
    console.log(event.which);
      $('div.ryu-ready').hide();
      $('div.ryu-still').show();
      $('div.ryu-throwing').hide();
      $('div.ryu-cool').hide();

  });
});
