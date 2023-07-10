const paragrafo1 = document.querySelector("#paragrafo-1");
// console.log(paragrafo1);

// paragrafo1.innerText = "Olá, fui modificado!";

const button1 = document.querySelector("#button-1");
// console.log(button1);

button1.addEventListener("click", function (evento) {
  console.log("Evento de clique do botão `.button-1` acionado!!");
  // console.log(evento);
});

const button2 = document.querySelector("#button-2");
button2.addEventListener("click", function (evento) {
  console.log("Evento de clique do botão `.button-2` acionado!!");
  // console.log(evento);
});

const sectionContainter = document.querySelector(".container");
const btnContainer = document.querySelector(".btn-container");

// Capturing

// Bubbling
sectionContainter.addEventListener("click", function (evento) {
  console.log("Evento de clique da section `sectionContainter` acionado!!");
  // console.log(evento);
});

btnContainer.addEventListener("click", function (evento) {
  console.log("Evento de clique da div `.btnContainer` acionado!!");
  // console.log(evento);
});

const btnShow = document.querySelector("#btn-show");
const btnHide = document.querySelector("#btn-hide");
const paragrafo2 = document.querySelector("#paragrafo-2");

btnHide.addEventListener("click", function (evento) {
  // paragrafo2.innerText = "Fui modificado pelo botão";

  // 1.
  // paragrafo2.style.display = "none";
  // 2.
  // paragrafo2.style.height = "0";
  // paragrafo2.style.opacity = "0";
  // 3.
  // console.log("evento de hide disparado");
  paragrafo2.classList.add("hidden");
  paragrafo2.classList.remove("show");
});

btnShow.addEventListener("click", function (evento) {
  // paragrafo2.innerText = "Fui modificado pelo botão";
  // 1.
  // paragrafo2.style.display = "block";
  // 2.
  // paragrafo2.style.opacity = "1";
  // 3.
  paragrafo2.classList.add("show");
  paragrafo2.classList.remove("hidden");
});

const inputNome = document.querySelector("#nome");
// console.log(inputNome);

inputNome.addEventListener("focus", function (evento) {
  // console.log("O input do nome foi focado!!!");
});

const btnEnviar = document.querySelector("#btn-enviar");
// console.log(btnEnviar);

btnEnviar.addEventListener("click", function (evento) {
  evento.preventDefault();
  console.log(evento);
  const inputNomeValue = evento.target.form.elements.nome.value;
  // console.log(inputNomeValue);
});
