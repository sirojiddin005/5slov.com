const footer1 = document.querySelector(".footer-1");
const footer2 = document.querySelector(".footer-2");
const footer3 = document.querySelector(".footer-3");
const footer4 = document.querySelector(".footer-4");
const slide = document.getElementById("slide");
const slide2 = document.getElementById("slide2");
const text = document.getElementById("text");
const block = document.getElementById("block")
const href = document.getElementById("href")
let active = 0;

const sections = [
    {title: "Главная"}, 
    {title: "Поиск по сайту"}, 
    {title: "100 городов мира"}, 
    {title: "Праздники мира"}, 
    {title: "Контакты"}, 
    {title: "Ссылки"}
];
const sections2 = [
    {title: "Германия"}, 
    {title: "Испания"}, 
    {title: "Италия"}, 
    {title: "Польша"}, 
    {title: "Турция"}, 
    {title: "Франция"}
];
const sections3 = [
    {title: "Винный фестиваль"}, 
    {title: "Ливерпуль"}, 
    {title: "Венецианский карнавал"}, 
    {title: "Иерусалим"}, 
    {title: "Еврошоколад"}, 
    {title: "Баден-Баден"}
];
const gifs = ["./Assets/kit kat.gif", 
    "./Assets/pepsi.gif", 
    "./Assets/coca cola.gif"
];
const gifs2 = [
    "./Assets/kit kat.gif", 
    "./Assets/pepsi.gif",  
    "./Assets/coca cola.gif",
];
const link = [
    "https://www.nestle.com/brands/chocolate-confectionery/kitkat",
    "https://www.pepsi.com/",
    "https://ru.coca-cola.uz/"
];
const textArray = ["Акция KitKat и Магнит: «Стильный перерыв с KitKat Senses X Rogov в Магните»",
                   "Битва Вкусов от Pepsi. Решай, кто победит",
                   "Сделай лето вкусным вместе с Coca-Cola"];


setInterval(() => {
    slide.src = gifs[active];
    active++;
  
    if (active >= gifs.length) {
      active = 0;
    }
  }, 10000);

  setInterval(() => {
    slide2.src = gifs2[active];
    text.innerHTML = textArray[active];
    href.href = link[active]
    console.log(href);

    active++;
  
    if (active >= gifs2.length) {
      active = 0;
    }
  }, 10000);

const setMenu = () => {

    sections.map((section) => {
    console.log(section);

    const menu = document.createElement("div")
    menu.className = ""
    menu.innerHTML = `
    <div>
    <ul>
        <li><a href="">${section.title}</li>
    </ul>
    </div> `;
    footer1.appendChild(menu);
    });

    sections2.map((section) => {
        console.log(section);
    
        const menu = document.createElement("div")
        menu.className = ""
        menu.innerHTML = `
        <div>
        <ul>
            <li><a href="">${section.title}</li>
        </ul>
        </div> `;
        footer2.appendChild(menu);
        });

    sections3.map((section) => {
        console.log(section);
    
        const menu = document.createElement("div")
        menu.className = ""
        menu.innerHTML = `
        <div>
        <ul>
            <li><a href="">${section.title}</li>
        </ul>
        </div> `;
        footer3.appendChild(menu);
        });
    
};
setMenu();