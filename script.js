const containerCards = document.getElementById('container-cards');
const containerCart = document.getElementById('container-cart');
const btnCart = document.getElementById('btn-cart');

const infoCards = [
  {
    img: "apple-gala.png",
    name: "Maçã Gala Importada",
    price: "1,52",
    qtd: "(Unidade)",
  },
  {
    img: "apple-granny-smith.png",
    name: "Maçã Granny Smith",
    price: "2,87",
    qtd: "(Unidade)",
  },
  {
    img: "apple-fuji.png",
    name: "Maçã Fuji",
    price: "1,22",
    qtd: "(Unidade)",
  },
  {
    img: "https://planetafolha.com.br/wp-content/uploads/2020/07/negao-do-fuscao-azul.jpg",
    name: "Meu pai",
    price: "612,22",
    qtd: "(Kg)",
  },
];

for (let i = 0; i < infoCards.length; i++) {
  containerCards.innerHTML += `
    <div class="card-fruit">
      <img class="img-card" src=${infoCards[i].img} alt="Maçã Vermelha">
      <p class="name-item">${infoCards[i].name}</p>
      <div class="container-price">
        <p class="price-item">${infoCards[i].price}</p>
        <p class="qtd-item">${infoCards[i].qtd}</p>
      </div>
      <button class="btn-addcart" onclick="addAppleInCart(${i})">
        <i class="fa-solid fa-cart-plus"></i>
        Adicionar ao carrinho
      </button>
    </div>`;
}

function addAppleInCart(index) {
  containerCart.innerHTML += `
    <div class="card-cart">
      <img class="img-cart" src="${infoCards[index].img}" alt="">
      <p class="price-item">${infoCards[index].price}</p>
      <button onclick="remAppleInCart(this)">
        <i class="fa-solid fa-remove"></i>
        Remover
      </button>
    </div>`;
}
function remAppleInCart(card) {
  const cardRem = card.parentElement;
  containerCart.removeChild(cardRem)
}


function closeCart() {
  containerCart.style.display = "none";
}

function openCart() {
  if (containerCart.style.display == "none") {
    containerCart.style.display = "flex"; 
  } else {
    containerCart.style.display = "none";
  }
}
btnCart.addEventListener('click', ()=> {
  if (containerCart.style.display == "none") {
    containerCart.style.display = "flex"; 
  } else {
    containerCart.style.display = "none";
  }
})



document.addEventListener("DOMContentLoaded", () => {
  const linkNavs = document.querySelectorAll(".link-nav");
  linkNavs.forEach(function (links) {
    links.addEventListener("click", function () {
      this.classList.add("--link-active");
      linkNavs.forEach(function (othersLinks) {
        if (othersLinks !== links) {
          othersLinks.classList.remove("--link-active");
        }
      });
    });
  });
});
