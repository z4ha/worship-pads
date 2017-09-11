var sound = new Howl({
  src: ['./assets/sounds/c.mp3']
});
var playChecker;
var fadeTime = 1000;

$('.c').click(function() {
  if (sound.playing() && playChecker === true) {
    playChecker = false;
    sound.fade(1.0, 0, fadeTime);
    setTimeout(function() { sound.stop(); }, fadeTime);
  } 
  if (sound.playing() == false) {
    sound.play();
    sound.fade(0, 1.0, fadeTime);
    playChecker = true;
  }
  $( this ).toggleClass( "highlight" );
});

