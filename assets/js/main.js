var sound = new Howl({
  src: ['./assets/sounds/c.mp3']
});

$('.c').click(function() {
  if (sound.playing() && sound.volume() === 1) {
    sound.fade(1.0, 0, 1000);
    setTimeout(function() { sound.stop()}, 1000);
  } 
  if (sound.playing() == false) {
    sound.play();
  }
});
