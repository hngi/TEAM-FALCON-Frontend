const landingPage = {
  mainNode: document.querySelector('div[data-app]'),
  display: function(html) {
    this.mainNode.innerHTML = `${html}`;
  },
  html: `<div class="landing-main"><p>Welcome to falcon frontend landing page</p></div>`,
  run: () => landingPage.display(landingPage.html)
};
landingPage.run();
