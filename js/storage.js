let shoppingCart = ['ram','hdd', 'etc'];
shoppingCart = localStorage.setItem('shoppingList', shoppingCart);
shoppingCart = JSON.stringify(localStorage.getItem('shoppingList'))
shoppingCart = JSON.parse
console.log(localStorage.getItem('shoppingList'));
localStorage.removeItem('shoppingList')