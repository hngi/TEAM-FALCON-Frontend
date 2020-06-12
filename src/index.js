import "bootstrap";
import "fontawesome";
import page from "./landing";
import "./assets/scss/landing.scss";

const initApp = async () => {
  const header = document.querySelector('header[data-header]');
  if (!header) return;

  await page.display(header, '<h1>Discover our Demos</h1>');
  await page.render();
};

document.addEventListener('DOMContentLoaded', initApp);
