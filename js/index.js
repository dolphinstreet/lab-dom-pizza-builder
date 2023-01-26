const basePrice = 10;
const ingredients = {
  pepperoni: { name: 'pepperoni', price: 1 },
  mushrooms: { name: 'Mushrooms', price: 1 },
  greenPeppers: { name: 'Green Peppers', price: 1 },
  whiteSauce: { name: 'White sauce', price: 3 },
  glutenFreeCrust: { name: 'Gluten-free crust', price: 5 }
};

const state = {
  pepperoni: true,
  mushrooms: true,
  greenPeppers: true,
  whiteSauce: false,
  glutenFreeCrust: false
};


function renderEverything() {
  renderPepperoni();
  renderMushrooms();
  renderGreenPeppers();
  renderWhiteSauce();
  renderGlutenFreeCrust();

  renderButtons();
  renderPrice();
}

function renderPepperoni() {
  document.querySelectorAll('.pep').forEach((onePep) => {
    if (state.pepperoni) {
      onePep.style.visibility = 'visible';
    } else {
      onePep.style.visibility = 'hidden';
    }
  });
}

function renderMushrooms() {
  document.querySelectorAll('.mushroom').forEach((oneMush) => {
    if (state.mushrooms) {
      oneMush.style.visibility = 'visible';
    } else {
      oneMush.style.visibility = 'hidden';
    }
  });
}

function renderGreenPeppers() {
  document.querySelectorAll('.green-pepper').forEach((oneGreenPep) => {
    if (state.greenPeppers) {
      oneGreenPep.style.visibility = 'visible';
    } else {
      oneGreenPep.style.visibility = 'hidden';
    }
  });
}

function renderWhiteSauce() {
  const sauce = document.querySelector('.sauce')
  if (state.whiteSauce) {
    sauce.classList.add("sauce-white")
  } else {
    sauce.classList.remove("sauce-white")
  }
}

function renderGlutenFreeCrust() {
  const crust = document.querySelector(".crust")
    if (state.glutenFreeCrust) {
      crust.classList.add("crust-gluten-free")
    } else {
      crust.classList.remove("crust-gluten-free")
    }

}

  function renderButtons() {
    if (state.pepperoni){
      document.querySelector(".btn.btn-pepperoni").classList.add("active")
    }
    else {
      document.querySelector('.btn.btn-pepperoni').classList.remove('active')
    }

    if (state.mushrooms){
      document.querySelector('.btn.btn-mushrooms').classList.add('active')
    }
    else {
      document.querySelector('.btn.btn-mushrooms').classList.remove('active')
    }

    if (state.greenPeppers){
      document.querySelector('.btn.btn-green-peppers').classList.add('active')
    }
    else {
      document.querySelector('.btn.btn-green-peppers').classList.remove('active')
    }

    if (state.whiteSauce){
      document.querySelector('.btn.btn-sauce').classList.add('active')
    }
    else {
      document.querySelector('.btn.btn-sauce').classList.remove('active')
    }
    
    if (state.glutenFreeCrust){
      document.querySelector('.btn.btn-crust').classList.add('active')
    }
    else {
      document.querySelector('.btn.btn-crust').classList.remove('active')
    }

}



function renderPrice() {

  const pepperoniPrice = document.querySelector(".pepperoniPrice")
  const mushroomsPrice = document.querySelector(".mushroomsPrice")
  const greenPrice = document.querySelector(".greenPrice")
  const saucePrice = document.querySelector(".saucePrice")
  const gfPrice = document.querySelector(".gfPrice")

  let totalPrice = basePrice;
  const total = document.querySelector("strong")
  
  if (state.pepperoni){
    pepperoniPrice.style.display="block"
    totalPrice+=ingredients.pepperoni.price
  }
  else {
    pepperoniPrice.style.display="none"
  }
  if (state.mushrooms){
    mushroomsPrice.style.display="block"
    totalPrice+=ingredients.mushrooms.price
  }
  else {
    mushroomsPrice.style.display="none"
  }
  if (state.greenPeppers){
    greenPrice.style.display="block"
    totalPrice+=ingredients.greenPeppers.price
  }
  else {
    greenPrice.style.display="none"
  }
  if (state.whiteSauce){
    saucePrice.style.display="block"
    totalPrice+=ingredients.whiteSauce.price
  }
  else {
    saucePrice.style.display="none"
  }
  if (state.glutenFreeCrust){
    gfPrice.style.display="block"
    totalPrice+=ingredients.glutenFreeCrust.price
  }
  else {
    gfPrice.style.display="none"
  }

  total.textContent="$"+totalPrice

}


renderEverything();

document.querySelector('.btn.btn-pepperoni').addEventListener('click', function () {
  state.pepperoni = !state.pepperoni;
  renderEverything();
});

document.querySelector('.btn.btn-mushrooms').addEventListener('click', function () {
  state.mushrooms = !state.mushrooms;
  renderEverything();
});

document.querySelector('.btn-green-peppers').addEventListener('click', function () {
  state.greenPeppers = !state.greenPeppers;
  renderEverything();
});

document.querySelector(".btn.btn-sauce").addEventListener("click", function () {
  state.whiteSauce = !state.whiteSauce;
  renderEverything();
} )

document.querySelector(".btn.btn-crust").addEventListener("click", function () {
  state.glutenFreeCrust = !state.glutenFreeCrust;
  renderEverything();
} )