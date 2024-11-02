import {buildPhotographersTeam,buildVenueTeam,buildDecoratorTeam,buildCatererTeam} from '../data/data.js';
 export let cart= JSON.parse(localStorage.getItem('cart'));
 
function getPrice(productId){
const priceContainer = document.querySelector(`.${productId}-cost`);
const price = priceContainer.innerHTML;
return price;
};

function dateAlter(date){

const year = date.getFullYear();
const month = String(date.getMonth() + 1).padStart(2, '0'); // Months are zero-based, so add 1
const day = String(date.getDate()).padStart(2, '0');
const formattedDate = `${year}-${month}-${day}`;
return formattedDate;
}

export function getDate(productId){
    const dateInput = document.querySelector(`.${productId}-date`); 
    const DateEntered = dateInput.value;
    const currentDate = dateAlter(new Date());

    if (DateEntered < currentDate){
        alert('Invalid Date Input. Please Try Again...');
        return false;
    }

    else if (DateEntered == currentDate){
        alert('Event Today. Can not Plan on Short Notices');
        return false;
    }

    else if (DateEntered==''){
        alert('Please Select Date and Try Again...');
        return false;
    }
    else{
        return DateEntered;
    }
            
        }
export function updateTeamTotal(){
            let cartQuantity=0;
            if(cart.length==0){
              document.querySelector('.js-cart-quantity').innerHTML=cartQuantity;
            }
            else{
              cart.forEach((cartItem)=>{
                cartQuantity++;
                document.querySelector('.js-cart-quantity').innerHTML=cartQuantity;
            });
            }
            
};
          updateTeamTotal();
updateTeamTotal();
const addedMessageTimeouts={};
function timeoutForMessages(productId){

  const addedMessage = document.querySelector(`.js-added-${productId}`);
      addedMessage.classList.add('added-to-team-visible');
      //timeouts functions call
  //timeouts i did'nt understand
  const previousTimeoutId=addedMessageTimeouts[productId];
  if(previousTimeoutId){
      clearTimeout(previousTimeoutId);
  }
  const timeoutId=
  setTimeout(()=>{
      addedMessage.classList.remove('added-to-team-visible')
  },2000);
  addedMessageTimeouts[productId]=timeoutId;
}


export function addtoteam(){

  document.querySelectorAll('.js-add-to-team-button')
  .forEach((button)=>{
      button.addEventListener('click',()=>{
          const productId =button.dataset.productId;
          
          
  let matchingItem;
  cart.forEach((cartItem)=>{

      if(productId===cartItem.productId){
          matchingItem=cartItem;
      } 
  });

  if(matchingItem){
      alert('member already in team!!')
  }else{
    let price = getPrice(productId);
      const resultdate=getDate(productId);
      if(resultdate){
          timeoutForMessages(productId);
          cart.push({
              productId: productId,
              date: resultdate,
              priceinK:(price*1000)
          });
          console.log(cart);
          savetoLocalStorage();
          
      }
}
          updateTeamTotal();
          savetoLocalStorage();
      });
      });
};
export function removeFromCart(productId){
    let newCart=[];
    cart.forEach((cartItem)=>
    {
        if(productId!==cartItem.productId)
        {
            newCart.push(cartItem);
        }
    })
    cart=newCart;
    console.log(cart);
    updateTeamTotal();
    savetoLocalStorage();
};

function savetoLocalStorage(){
    localStorage.setItem('cart',JSON.stringify(cart));
}
addtoteam();
 // Wait for the DOM to be fully loaded
    // Set up Event Listeners if elements exist
    const photo = document.querySelector('.Photographers');
    if (photo) {
        photo.addEventListener("click", () => {
            let photographerHTML = '';
            buildPhotographersTeam.forEach((organization) => {
                const HTML = `
                    
    <head>
    <title>Build Your Photographers Team</title>
    </head>
    <div class="team">
            <center><h3><span class=${organization.class}-name> ${organization.name}</span></h3></center>
            <div class="grid-details">
                <div class=" flex-properties photo-container">
                    <img src="${organization.image}" alt="photo of org" class="org-photo flex-properties" class="${organization.class}-photo">
                </div>
  
                <div class="container-b details-container">
                    <label><b>Contact:</b></label><span class="${organization.class}-contact">${organization.details.contact}</span><br>
  
                    <label><b>Email:</b></label><span class="${organization.class}-mail">${organization.details.mail}<span><br>
                    <label><b>Location:</b></label>
                    
                    <span class="${organization.class}-location">${organization.details.location}<br><br></span>
                    <label><b>Camera description:</b></label><p class="cam-info">${organization.details.cameraInfo}</p>
                </div>
                <div class=" price-container">
                    <center><h3><b>Price</b></h3></center>
                    <div class="cost-info"><span class="${organization.class}-cost cost-info">${organization.priceInLakhs *100}</span>K<sub>/day</sub></div>
                    
                </div>
  
                <div class=" date-container">
                    <center><h1>Select Date: </h1></center>
                    <input type="date" class="date-info ${organization.class}-date">
                </div>
  
                <div class=" rating-container">
                    <center><h1>Rating </h1></center>
                        <img src="projectImages/rating/${organization.rating * 10}stars.jpeg" class="stars">
                </div>
                <div class="button-grid">
                <div class="button-container flex-properties">
                    <button type="button" class="button js-add-to-team-button" data-product-id="${organization.class}">
                    <span class="button__text">Add To <br> Team</span>
                    <span class="button__icon"><svg xmlns="http://www.w3.org/2000/svg" width="24" viewBox="0 0 24 24" stroke-width="2" stroke-linejoin="round" stroke-linecap="round" stroke="currentColor" height="24" fill="none" class="svg"><line y2="19" y1="5" x2="12" x1="12"></line><line y2="12" y1="12" x2="19" x1="5"></line></svg></span>
                    </button>
                </div>
                <div class="flex-properties
                 added-to-team js-added-${organization.class}">
                <img src="projectImages/checkmark.png">Added</div>
                </div>
                </div>
            </div>
        </div>
    
                `;
                photographerHTML += HTML;
            });
            const teamDetailsContainer = document.querySelector('.team-details-container');
            if (teamDetailsContainer) {
                teamDetailsContainer.innerHTML = photographerHTML;
                addtoteam();
            }
        });
    }

    const venue = document.querySelector('.Venue');
    if (venue) {
        venue.addEventListener("click", () => {
            let venueHTML = '';
            buildVenueTeam.forEach((organization) => {
                const HTML = `
                    
      <div class="team">
              <center><h3><span class=${organization.class}-name>${organization.name}</span></h3></center>
              <div class="grid-details">
                  <div class="container-a flex-properties">
                      <img src="${organization.image}" alt="photo of org" class="org-photo flex-properties" class="${organization.class}-photo">
                  </div>

                  <div class="container-b">
                      <label><b>Contact:</b></label><span class="${organization.class}-contact">${organization.details.contact}</span><br>
                      <label><b>Email:</b></label><span class="${organization.class}-mail">${organization.details.mail}</span><br>
                      <label><b>Location:</b></label>
                      <span class="${organization.class}-location">${organization.details.location}</span><br><br>
                      <label><b>Venue Description:</b></label><p>${organization.details.cameraInfo}</p>
                  </div>
                  <div class="container-a">
                      <center><h3>Price</h3></center>
                      <div class="cost-info"><span class="${organization.class}-cost cost-info">${organization.priceInLakhs * 100}</span> K<sub>/day</sub></div>
              
                  </div>

                  <div class=" container-a">
                      <center><h1>Select Date: </h1></center>
                      <input type="date" class="date-info ${organization.class}-date">
                  </div>

                  <div class="container-a">
                      <center><h1>Rating </h1></center>
                          <img src="projectImages/rating/${organization.rating * 10}stars.jpeg" class="stars">
                  </div>
                  <div class="button-grid">
              <div class="button-container flex-properties">
                  <button type="button" class="button js-add-to-team-button" data-product-id="${organization.class}">
                  <span class="button__text">Add To <br> Team</span>
                  <span class="button__icon"><svg xmlns="http://www.w3.org/2000/svg" width="24" viewBox="0 0 24 24" stroke-width="2" stroke-linejoin="round" stroke-linecap="round" stroke="currentColor" height="24" fill="none" class="svg"><line y2="19" y1="5" x2="12" x1="12"></line><line y2="12" y1="12" x2="19" x1="5"></line></svg></span>
                  </button>
              </div>
              <div class="flex-properties
               added-to-team js-added-${organization.class}">
              <img src="projectImages/checkmark.png">Added</div>
              </div>
              </div>
          </div>
      </div>
      
                `;
                venueHTML += HTML;
            });
            const teamDetailsContainer = document.querySelector('.team-details-container');
            if (teamDetailsContainer) {
                teamDetailsContainer.innerHTML = venueHTML;
                addtoteam();
            }
        });
    }

    const decorator = document.querySelector('.Decorator');
    if (decorator) {
        decorator.addEventListener("click", () => {
            let decoratorHTML = '';
            buildDecoratorTeam.forEach((organization) => {
                const HTML = `
                    
      <div class="team">
              <center><h3><span class=${organization.class}-name>${organization.name}</span></h3></center>
              <div class="grid-details">
                  <div class="container-a flex-properties">
                      <img src="${organization.image}" alt="photo of org" class="org-photo flex-properties" class="${organization.class}-photo">
                  </div>

                  <div class="container-b">
                      <label><b>Contact:</b></label><span class="${organization.class}-contact">${organization.details.contact}</span><br>
                      <label><b>Email:</b></label><span class="${organization.class}-mail">${organization.details.mail}<span><br>
                      <label><b>Location:</b></label>
                      <span class="${organization.class}-location">${organization.details.location}</span><br><br>
                      <label><b>Decorator Description:</b></label><p>${organization.details.cameraInfo}</p>
                  </div>
                  <div class="container-a">
                      <center><h3>Price</h3></center>
                      <div class="cost-info"><span class="${organization.class}-cost cost-info">${organization.priceInLakhs*100}</span>K<sub>/day</sub></div>
                      
                  </div>

                  <div class=" container-a">
                      <center><h1>Select Date: </h1></center>
                      <input type="date" class="date-info ${organization.class}-date">
                  </div>

                  <div class="container-a">
                      <center><h1>Rating </h1></center>
                          <img src="projectImages/rating/${organization.rating * 10}stars.jpeg" class="stars">
                  </div>
                  <div class="button-grid">
              <div class="button-container flex-properties">
                  <button type="button" class="button js-add-to-team-button" data-product-id="${organization.class}">
                  <span class="button__text">Add To <br> Team</span>
                  <span class="button__icon"><svg xmlns="http://www.w3.org/2000/svg" width="24" viewBox="0 0 24 24" stroke-width="2" stroke-linejoin="round" stroke-linecap="round" stroke="currentColor" height="24" fill="none" class="svg"><line y2="19" y1="5" x2="12" x1="12"></line><line y2="12" y1="12" x2="19" x1="5"></line></svg></span>
                  </button>
              </div>
              <div class="flex-properties
               added-to-team js-added-${organization.class}">
              <img src="projectImages/checkmark.png">Added</div>
              </div>
              </div>
          </div>
      </div>
      
                `;
                decoratorHTML += HTML;
            });
            const teamDetailsContainer = document.querySelector('.team-details-container');
            if (teamDetailsContainer) {
                teamDetailsContainer.innerHTML = decoratorHTML;
                addtoteam();
            }
        });
    }

    const caterer = document.querySelector('.caterer');
    if (caterer) {
        caterer.addEventListener("click", () => {
            let catererHTML = '';
            buildCatererTeam.forEach((organization) => {
                const HTML = `
                    
      <div class="team">
              <center><h3><span class=${organization.class}-name>${organization.name}</span></h3></center>
              <div class="grid-details">
                  <div class="container-a flex-properties">
                      <img src="${organization.image}" alt="photo of org" class="org-photo flex-properties" class="${organization.class}-photo">
                  </div>

                  <div class="container-b">
                      <label><b>Contact:</b></label><span class="${organization.class}-contact">${organization.details.contact}</span><br>
                      <label><b>Email:</b></label><span class="${organization.class}-mail">${organization.details.mail}<span><br>
                      <label><b>Location:</b></label>
                      <span class="${organization.class}-location">${organization.details.location}<span><br><br>
                      <label><b>Catering Description:</b></label><p>${organization.details.cameraInfo}</p>
                  </div>
                  <div class="container-a">
                      <center><h3>Price</h3></center>
                      <div class="cost-info"><span class="${organization.class}-cost cost-info">${organization.priceInLakhs *100}</span>K<sub>/day</sub></div>
                  </div>

                  <div class=" container-a">
                      <center><h1>Select Date: </h1></center>
                      <input type="date" class="date-info ${organization.class}-date">
                  </div>

                  <div class="container-a">
                      <center><h1>Rating </h1></center>
                          <img src="projectImages/rating/${organization.rating * 10}stars.jpeg" class="stars">
                  </div>
                  <div class="button-grid">
              <div class="button-container flex-properties">
                  <button type="button" class="button js-add-to-team-button" data-product-id="${organization.class}">
                  <span class="button__text">Add To <br> Team</span>
                  <span class="button__icon"><svg xmlns="http://www.w3.org/2000/svg" width="24" viewBox="0 0 24 24" stroke-width="2" stroke-linejoin="round" stroke-linecap="round" stroke="currentColor" height="24" fill="none" class="svg"><line y2="19" y1="5" x2="12" x1="12"></line><line y2="12" y1="12" x2="19" x1="5"></line></svg></span>
                  </button>
              </div>
              <div class="flex-properties
               added-to-team js-added-${organization.class}">
              <img src="projectImages/checkmark.png">Added</div>
              </div>
              </div>
          </div>
      </div>
                `;
                catererHTML += HTML;
            });
            const teamDetailsContainer = document.querySelector('.team-details-container');
            if (teamDetailsContainer) {
                teamDetailsContainer.innerHTML = catererHTML;
                addtoteam();
            }
        });
    };

     export function totalCost(){
      let finalCost=0;
      let notaxCost=0;
      let shippingcost=0;
      let platformFees=0;
      let orderTotal=0;
      cart.forEach((cartItem)=>{
        let tempcost = cartItem.priceinK;
        finalCost+=tempcost;
        shippingcost+=2000;
        notaxCost=(shippingcost+finalCost);
        platformFees=(10/100 * notaxCost);
        orderTotal=(finalCost+ shippingcost + platformFees);
      });
      console.log(finalCost);
      document.querySelector('.js-team-cost').innerHTML=finalCost;
      document.querySelector('.js-travel-cost').innerHTML=shippingcost;
      document.querySelector('.js-no-tax-cost').innerHTML=notaxCost;
      document.querySelector('.js-platform-fees').innerHTML=platformFees;
      document.querySelector('.js-order-total').innerHTML=orderTotal;
      

    };
