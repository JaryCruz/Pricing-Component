// Get DOM Elements
const toggle = document.getElementById('toggle');
const basicPrice = document.getElementById('basic-price');
const professionalPrice = document.getElementById('professional-price');
const masterPrice = document.getElementById('master-price');

// When toggled, call the switch price function
toggle.addEventListener('click', switchPrice);

// Switch prices when the toggle is clicked
function switchPrice() {
  if(this.checked) {
    basicPrice.innerHTML = '199.99';
    professionalPrice.innerHTML = '249.99';
    masterPrice.innerHTML = '399.99';
  } else {
    basicPrice.innerHTML = '19.99';
    professionalPrice.innerHTML = '24.99';
    masterPrice.innerHTML = '39.99';
  }
}