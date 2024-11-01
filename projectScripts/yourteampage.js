import {cart,removeFromCart, updateTeamTotal} from './buildateam.js';
import { totalCost } from './buildateam.js';
import { overallMembers as products} from '../data/data.js';
let cartSummaryHTML='';
let cartHTML='';
let cartQuantity=0;
  cart.forEach((cartItem)=>{
      cartQuantity++;
    });
cart.forEach((cartItem)=>{
        const productId = cartItem.productId;
        let matchingproduct;
        products.forEach((product)=>{
            if(productId === product.class){
                matchingproduct=product;
               cartHTML=`<div class="cart-item-container js-cart-item-container-${cartItem.productId}">
        <div class="delivery-date">
          Event date: ${cartItem.date}
        </div>

        <div class="cart-item-details-grid">
          <img class="product-image"
            src="${matchingproduct.image}">

          <div class="cart-item-details">
            <div class="product-name">
              <b>Organization Name : </b>${matchingproduct.name}
            </div>
            <div class="product-price">
             <b>Cost : </b> Rs. ${cartItem.priceinK}
            </div>
            <div class="product-quantity">
              <span class="update-quantity-link link-primary">
                Update
              </span>
              <span class="delete-quantity-link js-delete-link link-primary" data-product-id="${cartItem.productId}">
                Delete
              </span>
            </div>
          </div>
</div>
              </div>
            </div>
            `;
      cartSummaryHTML+=cartHTML;
      document.querySelector('.js-order-summary').innerHTML=cartSummaryHTML;



      document.querySelectorAll('.js-delete-link').forEach((link)=>
        link.addEventListener('click',()=>{
             //1.remove product from cart
             //2.update html
         
             //getting which delete button was clicked
             const productId = link.dataset.productId;
             removeFromCart(productId); 
             const container = document.querySelector(`.js-cart-item-container-${productId}`);
             container.remove();
             totalCost();
            }));
    
            }});
        
        
    });
   
    totalCost();
    updateTeamTotal();

    
