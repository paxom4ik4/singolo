// Подсветка элементов Header
let h1 = document.getElementById("h1");
let h2 = document.getElementById("h2");
let h3 = document.getElementById("h3");
let h4 = document.getElementById("h4");
let h5 = document.getElementById("h5");

h1.onclick = function(event){
    h1.classList.add("header__item_active")
    h2.classList.remove("header__item_active")
    h3.classList.remove("header__item_active")
    h4.classList.remove("header__item_active")
    h5.classList.remove("header__item_active")
}
h2.onclick = function(event){
    h1.classList.remove("header__item_active")
    h2.classList.add("header__item_active")
    h3.classList.remove("header__item_active")
    h4.classList.remove("header__item_active")
    h5.classList.remove("header__item_active")
}
h3.onclick = function(event){
    h1.classList.remove("header__item_active")
    h2.classList.remove("header__item_active")
    h3.classList.add("header__item_active")
    h4.classList.remove("header__item_active")
    h5.classList.remove("header__item_active")
}
h4.onclick = function(event){
    h1.classList.remove("header__item_active")
    h2.classList.remove("header__item_active")
    h3.classList.remove("header__item_active")
    h4.classList.add("header__item_active")
    h5.classList.remove("header__item_active")
}
h5.onclick = function(event){
    h1.classList.remove("header__item_active")
    h2.classList.remove ("header__item_active")
    h3.classList.remove("header__item_active")
    h4.classList.remove("header__item_active")
    h5.classList.add("header__item_active")
}


const header = document.getElementById("header"),
headerText = document.querySelector(".header__text"),
headerNav = document.querySelector(".header__nav");


window.addEventListener("scroll", changeHeader)
    
function changeHeader(){
  if(window.pageYOffset > 100){
    header.classList.add("header__small")
    headerText.classList.add("header__text-small")
    headerNav.classList.add("header__nav-small")
    
  }
  else{
    header.classList.remove("header__small")
    headerText.classList.remove("header__text-small")
    headerNav.classList.remove("header__nav-small")  
  }
}

window.addEventListener("scroll", changeLinks)

function changeLinks(){

  const headerSmallHeight = 52,
  servicesPos = document.getElementById("services").offsetTop - headerSmallHeight,
  portfolioPos = document.getElementById("portfolio").offsetTop - headerSmallHeight,
  aboutPos = document.getElementById("about").offsetTop - headerSmallHeight,
  contactPos = document.getElementById("contact").offsetTop - headerSmallHeight;
 
  let currentPos = window.pageYOffset;


  if      (currentPos < servicesPos) changeLinksActive(0)
  else if (currentPos >= servicesPos && currentPos < portfolioPos) changeLinksActive(1)
  else if (currentPos >= portfolioPos && currentPos < aboutPos) changeLinksActive(2)
  else if (currentPos >= aboutPos && currentPos < contactPos) changeLinksActive(3)
  if (currentPos + 180 >= contactPos) changeLinksActive(4)
}



function changeLinksActive(n){
  const links = headerNav.querySelectorAll(".header__item")
  links.forEach(e =>{
    e.classList.remove("header__item_active");
  })
  links[n].classList.add("header__item_active");
}

// Переключение Слайдера
const chev = document.getElementById("chev")
const chev2 = document.getElementById("chev2")
const slides = document.querySelectorAll(".slide")
const slider = document.getElementById("slider")

chev.addEventListener("click", changeSlideToRight)
chev2.addEventListener("click", changeSlideToLeft)

function changeSlideToLeft() {
  changeSlide("left")
}
function changeSlideToRight() {
  changeSlide("right")
}

function changeSlide(side) {
  for (let slide of slides) {
    slide.classList.toggle("slide_hide")
  }
  for (let slide of slides) {
    if (!slide.classList.contains("slide_hide")) {
      changeSlideClass(slide, `slider-${side}`)
    } else changeSlideClass(slide, `slider-${side}-gone`)
  }
  
}

function changeSlideClass(el, newClass) {
  el.classList.add(newClass)
  el.classList.remove(newClass)
}

// Включение \ выключение телефонов

const FIRSTPHONE = document.querySelector('.phone1')
const SECONDPHONE = document.querySelector('.phone2')
const CENTERPHONE = document.querySelector('.centeredPhone')

FIRSTPHONE.addEventListener('click', (event) =>{
    !FIRSTPHONE.querySelector('.phone1_background').classList[1] ? FIRSTPHONE.querySelector('.phone1_background').classList.add('displayOff') : FIRSTPHONE.querySelector('.phone1_background').classList.remove('displayOff') 
});
SECONDPHONE.addEventListener('click', (event) =>{
    !SECONDPHONE.querySelector('.phone2_background').classList[1] ? SECONDPHONE.querySelector('.phone2_background').classList.add('displayOff') : SECONDPHONE.querySelector('.phone2_background').classList.remove('displayOff')  
})
CENTERPHONE.addEventListener('click', (event) =>{
    !CENTERPHONE.querySelector('.phoneCenter').classList[1] ? CENTERPHONE.querySelector('.phoneCenter').classList.add('displayOff') : CENTERPHONE.querySelector('.phoneCenter').classList.remove('displayOff')
})

// Меняем порядок фото в портфолио

let buttons = document.querySelector(".buttons");
let works = document.querySelector(".images");
let image = document.querySelectorAll("img")

buttons.addEventListener('click', (e) =>{
    buttons.querySelectorAll('button').forEach(el => el.classList.remove('chosen'));
    if (e.target.textContent == "All"){
        works.innerHTML = `

            <div class="first"><img src="assets/img1.png" alt="img1" class="img"></div>
            <div class="second"><img src="assets/img2.png" alt="img2" class="img"></div>
            <div class="third"><img src="assets/img3.png" alt="img3" class="img"></div>
            <div class="fourth"><img src="assets/img4.png" alt="img4" class="img"></div>


            <div class="first"><img src="assets/img5.png" alt="img5" class="img2"></div>
            <div class="second"><img src="assets/img6.png" alt="img6" class="img2"></div>
            <div class="third"><img src="assets/img7.png" alt="img7" class="img2"></div>
            <div class="fourth"><img src="assets/img8.png" alt="img8" class="img2"></div>


            <div class="first"><img src="assets/img9.png" alt="img9" class="img3"></div>
            <div class="second"><img src="assets/img10.png" alt="img10" class="img3"></div>
            <div class="third"><img src="assets/img11.png" alt="img11" class="img3"></div>
            <div class="fourth"><img src="assets/img12.png" alt="img12" class="img3"></div>`
    } else if (event.target.textContent == "Web Design"){
        works.innerHTML = `

            <div class="first"><img src="assets/img5.png" alt="img5" class="img2"></div>
            <div class="second"><img src="assets/img6.png" alt="img6" class="img2"></div>
            <div class="third"><img src="assets/img7.png" alt="img7" class="img2"></div>
            <div class="fourth"><img src="assets/img8.png" alt="img8" class="img2"></div>
 

            <div class="first"><img src="assets/img1.png" alt="img1" class="img"></div>
            <div class="second"><img src="assets/img2.png" alt="img2" class="img"></div>
            <div class="third"><img src="assets/img3.png" alt="img3" class="img"></div>
            <div class="fourth"><img src="assets/img4.png" alt="img4" class="img"></div>


            <div class="first"><img src="assets/img9.png" alt="img9" class="img3"></div>
            <div class="second"><img src="assets/img10.png" alt="img10" class="img3"></div>
            <div class="third"><img src="assets/img11.png" alt="img11" class="img3"></div>
            <div class="fourth"><img src="assets/img12.png" alt="img12" class="img3"></div>`
    } else if (event.target.textContent == "Graphic Design"){
        works.innerHTML = `

            <div class="first"><img src="assets/img9.png" alt="img9" class="img3"></div>
            <div class="second"><img src="assets/img10.png" alt="img10" class="img3"></div>
            <div class="third"><img src="assets/img11.png" alt="img11" class="img3"></div>
            <div class="fourth"><img src="assets/img12.png" alt="img12" class="img3"></div>


            <div class="first"><img src="assets/img5.png" alt="img5" class="img2"></div>
            <div class="second"><img src="assets/img6.png" alt="img6" class="img2"></div>
            <div class="third"><img src="assets/img7.png" alt="img7" class="img2"></div>
            <div class="fourth"><img src="assets/img8.png" alt="img8" class="img2"></div>


            <div class="first"><img src="assets/img1.png" alt="img1" class="img"></div>
            <div class="second"><img src="assets/img2.png" alt="img2" class="img"></div>
            <div class="third"><img src="assets/img3.png" alt="img3" class="img"></div>
            <div class="fourth"><img src="assets/img4.png" alt="img4" class="img"></div>`
    } else if (event.target.textContent == "Artwork"){
        works.innerHTML = `

            <div class="first"><img src="assets/img5.png" alt="img5" class="img2"></div>
            <div class="second"><img src="assets/img6.png" alt="img6" class="img2"></div>
            <div class="third"><img src="assets/img11.png" alt="img11" class="img3"></div>
            <div class="fourth"><img src="assets/img12.png" alt="img12" class="img3"></div>


            <div class="first"><img src="assets/img1.png" alt="img1" class="img"></div>
            <div class="second"><img src="assets/img2.png" alt="img2" class="img"></div>
            <div class="third"><img src="assets/img7.png" alt="img7" class="img2"></div>
            <div class="fourth"><img src="assets/img8.png" alt="img8" class="img2"></div>


            <div class="first"><img src="assets/img9.png" alt="img9" class="img3"></div>
            <div class="second"><img src="assets/img10.png" alt="img10" class="img3"></div>
            <div class="third"><img src="assets/img3.png" alt="img11" class="img1"></div>
            <div class="fourth"><img src="assets/img4.png" alt="img12" class="img1"></div>`
    } 
    e.target.classList.add('chosen');
})

// Обводка фото в портфолио

works.addEventListener('click', (e) =>{
    works.querySelectorAll('div').forEach(el => el.querySelector('img').classList.remove('img__chosen'));
    e.target.classList.add('img__chosen');
})

// Форма

const FORM = document.getElementById("form") // Берем форму
FORM.addEventListener("submit", SubmitForm) // Вешаем обработчик событий

// Создаём модальное окно:

function ModalWindow(options = {}) {
const modal = createModal(options)
const ModalWindow = {

  open(){modal.classList.add("modal_open");},

  close()
{   
  form.reset()
  modal.classList.remove("modal_open")
  modal.classList.add("modal_hide")

  modal.classList.remove("modal_hide")
  modal.parentNode.removeChild(modal)
  modal.removeEventListener("click", closeModal) },
}

const closeModal = e => {
  e.target.dataset.close ? ModalWindow.close() : null
}
modal.addEventListener("click", closeModal)
return ModalWindow
}

function createModal({ subject, text }) {
    
  const messageTitle = document.createElement("h3")
  messageTitle.classList.add("message__title")
  messageTitle.textContent = "Письмо отправлено"

  const messageSubject = document.createElement("p")
  messageSubject.classList.add("message__subject")
  messageSubject.textContent = subject ? `Тема: ${subject}` : "Без темы"

  const messageText = document.createElement("p")
  messageText.classList.add("message__text")
  messageText.textContent = text ? `Описание: ${text}` : "Без описания"

  const messageButton = document.createElement("button")
  messageButton.classList.add("message_button")
  messageButton.textContent = "Закрыть"
  messageButton.dataset.close = true

  const message = document.createElement("div")
  message.classList.add("message")

  const modalOverlay = document.createElement("div")
  modalOverlay.classList.add("overlay")
  modalOverlay.dataset.close = true

  const modal = document.createElement("div")
  modal.classList.add("modal_window")

  message.append(messageTitle), message.append(messageSubject), message.append(messageText),
  message.append(messageButton), modalOverlay.append(message), modal.append(modalOverlay),
  document.body.append(modal)

  return modal
}

function SubmitForm(e) {
  e.preventDefault(); // Корннетность
  // Берем константы элементов на странице
  const subject = document.getElementById("subject") 
  const text = document.getElementById("text")
  const newModal = ModalWindow({
    subject: subject.value,
    text: text.value,
  })
  newModal.open()
}

//mobile__menu

let m1 = document.getElementById("menu1");
let m2 = document.getElementById("menu2");
let m3 = document.getElementById("menu3");
let m4 = document.getElementById("menu4");
let m5 = document.getElementById("menu5");

m1.onclick = function(event){
  menu.classList.add("closed");
}
m2.onclick = function(event){
  menu.classList.add("closed");
}
m3.onclick = function(event){
  menu.classList.add("closed");
}
m4.onclick = function(event){
  menu.classList.add("closed");
}
m5.onclick = function(event){
  menu.classList.add("closed");
}

let mobileMenu = document.querySelector(".mobile__menu");
let menu = document.querySelector(".menu");
let mobileMenu2 = document.querySelector(".mobile__menu2");
let menuNav = document.querySelector(".menu__nav");
mobileMenu.addEventListener('click', ()=>{
  menu.classList.remove("closed");
});
mobileMenu2.addEventListener('click', ()=>{
  menu.classList.add("closed");
});


if( window.innerWidth <= 768 ){
  changeLinks(0);
  window.addEventListener("scroll", changeLinks)

  function changeLinks(){

    const headerSmallHeight = 89,
    servicesPos = document.getElementById("services").offsetTop - headerSmallHeight,
    portfolioPos = document.getElementById("portfolio").offsetTop - headerSmallHeight,
    aboutPos = document.getElementById("about").offsetTop - headerSmallHeight,
    contactPos = document.getElementById("contact").offsetTop - headerSmallHeight;
  
    let currentPos = window.pageYOffset;


    if      (currentPos < servicesPos) changeLinksActive(0)
    else if (currentPos >= servicesPos && currentPos < portfolioPos) changeLinksActive(1)
    else if (currentPos >= portfolioPos && currentPos < aboutPos) changeLinksActive(2)
    else if (currentPos >= aboutPos && currentPos < contactPos) changeLinksActive(3)
    if (currentPos + 180 >= contactPos) changeLinksActive(4)
  }

  function changeLinksActive(n){
    const linksMenu = menuNav.querySelectorAll(".menu__item")
    linksMenu.forEach(e =>{
      e.classList.remove("menu__item-active");
    })
    linksMenu[n].classList.add("menu__item-active");
  }  
} else {

} 
