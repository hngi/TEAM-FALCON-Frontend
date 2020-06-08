const page = {
  mainNode: document.querySelector('div[data-app]'),
  display: (html) => page.mainNode.innerHTML = `${html}`,
  html: `<div class="landing-main"><p>Welcome to falcon frontend landing page</p></div>`,
  init: function() {
    this.mainNode.classList.add("landing-wrap");
    this.display(this.html)
  }
};
export default page;
