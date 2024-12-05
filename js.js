document.getElementById('pizzaOrderForm').addEventListener('submit', function(e) {
  e.preventDefault();

  // Adatok beolvasása az űrlapból
  const name = document.getElementById('name').value;
  const tszam = document.getElementById('tszam').value;
  const address = document.getElementById('address').value;
  const liszt = document.getElementById('liszt').value;
  const pizza = document.getElementById('pizza').value;
  const size = document.querySelector('input[name="size"]:checked').value;

  // Feltétek beolvasása
  const toppings = Array.from(document.querySelectorAll('input[name="topping"]:checked'))
                        .map(topping => topping.value)
                        .join(', ') || 'Nincs extra feltét';

  // Adatok megjelenítése
  document.getElementById('displayName').textContent = name;
  document.getElementById('displayTszam').textContent = tszam;
  document.getElementById('displayAddress').textContent = address;
  document.getElementById('displayLiszt').textContent = liszt;
  document.getElementById('displayPizza').textContent = pizza;
  document.getElementById('displaySize').textContent = size;
  document.getElementById('displayToppings').textContent = toppings;

  // Rendelési összesítő megjelenítése
  document.getElementById('orderSummary').style.display = 'block';

  // Űrlap kiürítése a beküldés után
  document.getElementById('pizzaOrderForm').reset();
});
