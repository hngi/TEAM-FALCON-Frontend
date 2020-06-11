
function toggleMe(x) {
  x.classList.toggle("change");
  // console.log(x)
  x.nextElementSibling.classList.toggle("dropdown");
  x.nextElementSibling.firstElementChild.classList.toggle("dropdown-content");
  x.nextElementSibling.firstElementChild.classList.toggle("show");
}

// window.onclick = (e)=>{
//   if(!e.target.matches("#menu")){
//     let menu = document.querySelector("#menu");
//     if(menu.classList.contains("change")){
//       menu.nextElementSibling.firstElementChild.classList.remove("show")
//     }
//   }
// };