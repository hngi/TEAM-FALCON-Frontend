const page = {
  display: async (node, html) => node.innerHTML = `${html}`,
  render: async function() {
    const designs = await this.designs();
    const main = document.querySelector("main");
    const row = document.createElement("div");
    main.classList.add("container");
    row.classList.add("row");
    designs.forEach((ele, idx) => {
      const col = document.createElement("div");
      const designNode = document.createElement("div");
      const p = document.createElement("p");
      const a = document.createElement("a");
      const img = document.createElement("img");
      designNode.classList.add("landing-design-section");
      col.classList.add("col-md-6");
      (idx === (designs.length - 1)) ? col.classList.add("center") : "";
      p.textContent = ele.title;
      designNode.appendChild(p);
      a.href = "#";
      img.src = ele.image;
      img.addEventListener("click", (e) => {
        e.preventDefault();
        window.location = ele.link;
      });
      a.appendChild(img);
      designNode.appendChild(a);
      col.appendChild(designNode);
      row.appendChild(col);
    });
    main.appendChild(row);
  },
  designs: async () =>
    [
      {
        title: "Design One",
        image: "./src/assets/images/coming-soon.jpg",
        link: "./design-one/index.html"
      },
      {
        title: "Design Two",
        image: "./src/assets/images/coming-soon.jpg",
        link: "./design-two/index.html"
      },
      {
        title: "Design Three",
        image: "./src/assets/images/coming-soon.jpg",
        link: "./design-three/index.html"
      },
      {
        title: "Design Four",
        image: "./src/assets/images/coming-soon.jpg",
        link: "./design-four/index.html"
      },
      {
        title: "Design Five",
        image: "./src/assets/images/coming-soon.jpg",
        link: "./design-five/index.html"
      }
    ]
};
export default page;
