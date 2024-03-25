let cart = [];
let total = 0;
const cartCount = document.getElementById('cartCount');
const cartItems = document.getElementById('cartItems');
const cartTotal = document.getElementById('cartTotal');
const cartButton = document.getElementById('cartButton');
const sidebar = document.getElementById('sidebar');
const sidebarCloseButton = document.getElementById('sidebarCloseButton');

function addToCart(itemName, itemPrice) {
    
    const existingItemIndex = cart.findIndex(item => item.name === itemName);
    if (existingItemIndex !== -1) {
        
        cart[existingItemIndex].quantity++;
    } else {
        
        cart.push({ name: itemName, price: itemPrice, quantity: 1 });
    }
    total += itemPrice;
    updateCart();
}

function removeFromCart(index) {
    const item = cart[index];
    total -= item.price * item.quantity;
    cart.splice(index, 1);
    updateCart();
}

function updateCart() {
    cartCount.textContent = cart.reduce((total, item) => total + item.quantity, 0);
    cartTotal.textContent = '$' + total.toFixed(2);
    cartItems.innerHTML = '';
    cart.forEach((item, index) => {
        const itemDiv = document.createElement('div');
        itemDiv.classList.add('cart-item');
        itemDiv.textContent = `${item.name} - x${item.quantity}`;
        
        const removeButton = document.createElement('button');
        removeButton.textContent = 'Remove';
        removeButton.classList.add('removeButton');
        removeButton.onclick = () => removeFromCart(index);
        
        itemDiv.appendChild(removeButton);
        cartItems.appendChild(itemDiv);
    });
}

function checkout() {
    
    alert('Checkout');
}

cartButton.addEventListener('click', function() {
    sidebar.classList.add('open');
});

// Event listener for closing sidebar
sidebarCloseButton.addEventListener('click', function() {
    sidebar.classList.remove('open');
});