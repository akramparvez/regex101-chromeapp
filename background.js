chrome.app.runtime.onLaunched.addListener(function() {
  chrome.app.window.create('regex101.html', {
    'outerBounds': {
      'width': 1280,
      'height': 720
    }
  });
});