// Wait till the browser is ready to render the game (avoids glitches)
window.requestAnimationFrame(function () {
  new GameManager(6, 8192, 4, KeyboardInputManager, HTMLActuator, LocalScoreManager);
});
