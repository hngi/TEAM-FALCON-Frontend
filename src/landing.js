const page = {
  header: document.querySelector('header[data-header]'),
  display: (html) => page.mainNode.innerHTML = `${html}`,
  html: `<h1>Discover our Demos</h1>`,
  render: function() {
    this.header.classList.add("header");
    this.display(this.html)
  }
};
export default page;
