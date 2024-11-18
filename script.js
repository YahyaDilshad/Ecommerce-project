
// let menubtn = document.querySelector(".menu-btn");
// let links = document.querySelector(".nav-links");
// let menubtnicon = menubtn.querySelector("i");

// menubtn.addEventListener("click", () => {
//     links.classList.toggle("open");
//     // Toggle between the menu open and close icons
//     menubtnicon.classList.toggle("ri-menu-line");
//     menubtnicon.classList.toggle("ri-close-line");
// });

// let  searchbox = document.querySelector(".search-box")
// let  searchIcon = document.querySelector(".search-icon")
// let  search = document.querySelector(".nav-search")

// searchIcon.addEventListener("click", function () {
//     search.classList.contains("active");
//     if(search.classList.contains("active")){
        
//     searchbox.value = ''
// }  
// else{
//     search.classList.add("active")
// }
// })

let menubtn = document.querySelector(".menu-btn");
 let links = document.querySelector(".nav-links");
 let menubtnicon = menubtn.querySelector("i");

 menubtn.addEventListener("click", () => {
     links.classList.toggle("open");
     // Toggle between the menu open and close icons
     menubtnicon.classList.toggle("ri-menu-line");
     menubtnicon.classList.toggle("ri-close-large-line");
 });


 let navsearch = document.querySelector(".nav-search")
 let Searchbtn = document.querySelector(".search-icon")
let searchbox = document.querySelector(".search-box")
var input = searchbox.querySelector('input')


 Searchbtn.addEventListener("click", function () {
    console.log(navsearch.classList.contains("open"))
    if(navsearch.classList.contains("open")){
        input.value =''
    }
    else{
        navsearch.classList.add("open")
    }

    
 })

 