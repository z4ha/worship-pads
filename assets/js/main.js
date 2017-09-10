var sound = new Howl({
  src: ['./assets/sounds/c.mp3']
});

$('.c').click(function() {
  if (sound.playing()) {
    sound.fade(1.0, 0, 1000);
    setTimeout(function() { sound.stop()}, 1000);
  } else {
    sound.play();
  }
});
