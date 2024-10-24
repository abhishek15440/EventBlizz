if(!cart){
  cart=[
      {
          //using productId we gonna find the other details in products.js
          productId: 'e43638ce-6aa0-4b85-b27f-e1d07eb678c6',
          quantity:2
  
      },
      {
          productId: '15b6fc6f-327a-4ec4-896f-486349e85a3d',
          quantity:1
      }
   ];
}

cart.forEach((cartItem)=>{

  const productId = cartItem.productId;
  let matchingproduct;
  
  products.forEach((product)=>{
      if(productId === product.id){
          matchingproduct=product;
      }
  });
  let cartHTML=`<div class="cart-item-container js-cart-item-container-${matchingproduct.id}">
          <div class="delivery-date">
            Delivery date: Tuesday, June 21
          </div>

          <div class="cart-item-details-grid">
            <img class="product-image"
              src="${matchingproduct.image}">

            <div class="cart-item-details">
              <div class="product-name">
                ${matchingproduct.name}
              </div>
              <div class="product-price">
                ${formatCurrency(matchingproduct.priceCents)}
              </div>
              <div class="product-quantity">
                <span>
                  Quantity: <span class="quantity-label">${cartItem.quantity}</span>
                </span>
                <span class="update-quantity-link link-primary">
                  Update
                </span>
                <span class="delete-quantity-link js-delete-link link-primary" data-product-id="${matchingproduct.id}">
                  Delete
                </span>
              </div>
            </div>

            <div class="delivery-options">
              <div class="delivery-options-title">
                Choose a delivery option:
              </div>
              <div class="delivery-option">
                <input type="radio" checked
                  class="delivery-option-input"
                  name="delivery-option-1-${matchingproduct.id}">
                <div>
                  <div class="delivery-option-date">
                    Tuesday, June 21
                  </div>
                  <div class="delivery-option-price">
                    FREE Shipping
                  </div>
                </div>
              </div>
              <div class="delivery-option">
                <input type="radio"
                  class="delivery-option-input"
                  name="delivery-option-1-${matchingproduct.id}">
                <div>
                  <div class="delivery-option-date">
                    Wednesday, June 15
                  </div>
                  <div class="delivery-option-price">
                    $4.99 - Shipping
                  </div>
                </div>
              </div>
              <div class="delivery-option">
                <input type="radio"
                  class="delivery-option-input"
                  name="delivery-option-1-${matchingproduct.id}">
                <div>
                  <div class="delivery-option-date">
                    Monday, June 13
                  </div>
                  <div class="delivery-option-price">
                    $9.99 - Shipping
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>`;
        cartSummaryHTML+=cartHTML;
        document.querySelector('.js-order-summary').innerHTML=cartSummaryHTML;

        document.querySelectorAll('.js-delete-link').forEach((link)=>
         link.addEventListener('click',()=>{
              //1.remove product from cart
              //2.update html
          
              //getting which delete button was clicked
              const productId = link.dataset.productId;
              removeFromCart(productId);
              console.log(cart);
              const container = document.querySelector(`.js-cart-item-container-${productId}`);
              container.remove();
          }));
});