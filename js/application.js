// Wait till the browser is ready to render the game (avoids glitches)
version = "2"
console.error("Version: " + version + " Updated?")
window.requestAnimationFrame(function () {
  new GameManager(5, 8192, 4, KeyboardInputManager, HTMLActuator, LocalScoreManager);
});
