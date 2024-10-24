import { cart } from "./buildateam";
const buildPhotographersTeam = [ 
    {
   class:'js-photographer-ks-studio',
   name:'KS Studio',
   image:'projectImages/photographers/ksstudio.jpg',
   details: {
       contact: 9063095559,
       mail:'info@ksstudiophoto.com',
       location:'Road No 1,Banjara Hills Hyderabad- 500034',
       cameraInfo:'we use various high end quality camera setup that involves models like Nikon D850,Nikon Z9.'
   },
   priceInLakhs:0.3,
   rating:3.0,
},

{
   class:'js-photographer-hd-video-photo',
   name:'HD Videography & Photography Service ',
   image:'projectImages/photographers/hdphotographers.jpg',
   details: {
       contact: 7978908948,
       mail:'@gmail.com',
       location:'Yousufguda, Hyderabad',
       cameraInfo:'we use a Canon EOS R6, which excels in both stills and video with its impressive low-light performance. The 24-105mm f/4 lens provides a wide range of focal lengths, making it ideal for different event scenarios.'
   },
   priceInLakhs:0.15,
   rating:3.0,
},

{
   class:'js-photographer-9block',
   name:'9 Blocks Photography',
   image:'projectImages/photographers/9blocks.jpg',
   details: {
       contact: 9000000000,
       mail:'9blocks.photo@gmail.com',
       location:'Road no 12 Banjara Hills Hyderabad',
       cameraInfo:' we use a versatile DSLR or mirrorless camera with a fast prime lens for sharp, low-light shots, complemented by a stabilizer or gimbal for smooth video capture.'
   },
   priceInLakhs:0.6,
   rating:4.5,
},

{
   class:'js-photographer-flashframe',
   name:' FlashFrame Photography',
   image:'projectImages/photographers/flashframe.jpg',
   details: {
       contact: 7671938497,
       mail:'info@flashframephotography.com',
       location:'hyderabad',
       cameraInfo:' use a Canon EOS R5 for stunning photos and 4K video, paired with a 24-70mm f/2.8 lens for versatility.'
   },
   priceInLakhs:0.5,
   rating:4.5,
},

{
   class:'js-photographer-pixelperfection',
   name:'PixelPerfection Studio',
   image:'projectImages/photographers/pixelperfection.jpg',
   details: {
       contact: 9876543211,
       mail:'contact@pixelperfection.in',
       location:'Banjara Hills, Hyderabad, Telangana 500034, India',
       cameraInfo:' we use a Sony A7 III for high-quality photos and 4K video, paired with a 24-70mm f/2.8 lens for flexibility. '
   },
   priceInLakhs:0.35,
   rating:4.5,
},

{
   class:'js-photographer-shuttercraft',
   name:'ShutterCraft Photography',
   image:'projectImages/photographers/shuttercraft.jpg',
   details: {
       contact: 9876543212,
       mail:'hello@shuttercraft.in',
       location:'Jubilee Hills, Hyderabad, Telangana 500033, India',
       cameraInfo:'A stabilizer using a Nikon Z6 for exceptional photo and video quality, along with a 24-120mm f/4 lens for versatility.'
   },
   priceInLakhs:0.49,
   rating:4.5,
},
{
   class:'js-photographer-lens-aura',
   name:'LensAura Studio',
   image:'projectImages/photographers/lens.jpg',
   details: {
       contact: 9876543213,
       mail:'info@lensaura.in',
       location:'Gachibowli, Hyderabad, Telangana 500032, India',
       cameraInfo:'For event shoot,we have a Fujifilm X-T4 to capture stunning images and 4K video, paired with a versatile 16-55mm f/2.8 lens.'
   },
   priceInLakhs:0.4,
   rating:4.5,
},
{
   class:'js-photographer-vistapix',
   name:'VistaPix Photography',
   image:'projectImages/photographers/vistapix.jpg',
   details: {
       contact:  9876543214,
       mail:'contact@vistapix.in',
       location:'Madhapur, Hyderabad, Telangana 500081, India',
       cameraInfo:'Panasonic Lumix GH5, known for its robust 4K video capabilities and high-resolution photography. It features in-body image stabilization for steady shots.'
   },
   priceInLakhs:0.6,
   rating:5.0,
}

];
const buildVenueTeam = [
    
    
    {
        class:'js-venue-hyd-event-spaces',
   name:' Hyderabad Event Spaces',
   image:'projectImages/venue/hydeventspaces.jpeg',
   details: {
       contact: +914012345678,
       mail:'info@hyderabadeventspaces.com',
       location:'45 Celebration Road, Banjara Hills, Hyderabad, Telangana, 500034',
       cameraInfo:'Versatile indoor and outdoor venues for 50 to 500 guests, featuring modern banquet halls and a rooftop garden with full event services.'
   },
   priceInLakhs:1.0,
   rating:4.5,
},

{
    class:'js-venue-grand-celebration',
   name:' Grand Celebrations Venue',
   image:'projectImages/venue/grandcelebrationvenue.jpg',
   details: {
       contact: +914098765432,
       mail:'contact@grandcelebrations.in',
       location:'78 Joyous Street, Jubilee Hills, Hyderabad, Telangana, 500033',
       cameraInfo:'Elegant indoor spaces for up to 400 guests, complete with a lush outdoor area and comprehensive event services.'
   },
   priceInLakhs:0.9,
   rating:4.5,
},

{
    class:'js-venue-royal-banquets',
   name:' Royal Banquets Hyderabad',
   image:'projectImages/venue/royalbanquets.jpg',
   details: {
       contact:+914065432109 ,
       mail:' info@royalbanquetshyd.com',
       location:' 32 Celebration Avenue, Madhapur, Hyderabad, Telangana, 500081',
       cameraInfo:'Luxurious indoor and outdoor venues for up to 600 guests, offering tailored event packages and catering services.'
   },
   priceInLakhs:1.2,
   rating:4.5,
},

{
    class:'js-venue-elegant-events',
   name:'Elegant Events Venue',
   image:'projectImages/venue/elegantevents.jpeg',
   details: {
       contact:+914032109876 ,
       mail:' hello@eleganteventshyd.com',
       location:'15 Festive Lane, Secunderabad, Telangana, 500003',
       cameraInfo:'Stylish indoor and outdoor spaces for 100 to 350 guests, with all-inclusive event management and catering options.'
   },
   priceInLakhs: 1.2,
   rating:4.5,
},

{
    class:'js-venue-sapphire',
   name:' Sapphire Celebrations',
   image:'projectImages/venue/sapphire.jpg',
   details: {
       contact:+91406784321 ,
       mail:' bookings@sapphirecelebrations.com',
       location:' 58 Celebration Square, KPHB Colony, Hyderabad, Telangana, 500072',
       cameraInfo:'Contemporary venues for 50 to 500 guests, featuring elegant décor, state-of-the-art facilities, and personalized event planning.'
   },
   priceInLakhs:1.3,
   rating:4.5,
},

{
    class:'js-venue-blissful-gathering',
   name:' Blissful Gatherings',
   image:'projectImages/venue/blissful.jpg',
   details: {
       contact:+914027654321 ,
       mail:'info@blissfulgatherings.com',
       location:'12 Park Avenue, Near Shilparamam, Hitech City, Hyderabad, Telangana, 500081',
       cameraInfo:'Charming indoor and outdoor venues for 100 to 400 guests, offering customizable packages and full-services and ample parking for all.'
   },
   priceInLakhs:1.5,
   rating:4.5,
},

];
const buildDecoratorTeam = [
    
    
    {
        class:'js-decorator-elegant-event-decor',
   name:'Elegant Event Decor',
   image:'projectImages/decorator/elegant.jpeg',
   details: {
       contact: +919876543215,
       mail:'info@eleganteventdecor.in',
       location:'Banjara Hills, Hyderabad, Telangana 500034, India',
       cameraInfo:'specializes in creating stunning, customized decorations for weddings, corporate events, and parties. Blending traditional Indian elegance with modern trends, we excel in floral arrangements, stage backdrops, and themed décor.'
   },
   priceInLakhs:0.10,
   rating:4.5,
},

{
    class:'js-decorator-radiant-occasions',
   name:'Radiant Occasions Decor',
   image:'projectImages/decorator/radient.jpeg',
   details: {
       contact:+919876543216 ,
       mail:'contact@radiantoccasions.in',
       location:'Kondapur, Hyderabad, Telangana 500084, India',
       cameraInfo:'We specialize in stunning floral designs, elaborate stage setups, and themed décor, ensuring each event is personalized to match our clients vision. With a focus on attention to detail and style, we turn any occasion into a beautifully decorated experience.'
   },
   priceInLakhs:0.15,
   rating:4.5,
},

{
    class:'js-decorator-blissful-moments-decor',
   name:'Blissful Moments Decor',
   image:'projectImages/decorator/blissful.jpeg',
   details: {
       contact:+919876543217 ,
       mail:'info@blissfulmoments.in',
       location:'Begumpet, Hyderabad, Telangana 500016, India',
       cameraInfo:'specializes in curating stylish and elegant decorations for weddings, receptions, and special events. Our team excels in designing captivating floral displays, luxurious stage décor, and personalized theme setups.'
   },
   priceInLakhs:0.2,
   rating:4.5,
},

{
    class:'js-decorator-divine-touch-decor',
   name:'Divine Touch Decor',
   image:'projectImages/decorator/divinetouch.jpeg',
   details: {
       contact: +919876543218,
       mail:'hello@divinetouchdecor.in',
       location:'Somajiguda, Hyderabad, Telangana 500082, India',
       cameraInfo:'Divine Touch Decor brings a blend of creativity and elegance to every event, specializing in wedding, corporate, and party décor. We excel in sophisticated floral designs, breathtaking stage setups, and unique themed decorations.'
   },
   priceInLakhs:0.2,
   rating:4.5,
},

{
    class:'js-decorator-dreamscape-event-decor',
   name:'DreamScape Event Decor',
   image:'projectImages/decorator/dreamscape.jpeg',
   details: {
       contact:+919876543219 ,
       mail:'info@dreamscapeevents.in',
       location:'Manikonda, Hyderabad, Telangana 500089, India',
       cameraInfo:'DreamScape Event Decor specializes in creating immersive and visually stunning décor for weddings, corporate functions, and special occasions. Our team excels in transforming spaces with creative lighting, intricate floral arrangements, and custom-designed stage setups.'
   },
   priceInLakhs:0.3,
   rating:4.5,
},

{
    class:'js-decorator-aesthetic-aura-events',
   name:'Aesthetic Aura Events',
   image:'projectImages/decorator/aura.png',
   details: {
       contact:+919876543220,
       mail:'contact@aestheticaura.in',
       location:'Himayatnagar, Hyderabad, Telangana 500029, India',
       cameraInfo:'Aesthetic Aura Events delivers beautifully curated décor for weddings, parties, and corporate events. We specialize in elegant floral setups, sophisticated lighting designs, and themed stage decorations that perfectly blend tradition with modern aesthetics.'
   },
   priceInLakhs:0.3,
   rating:5.0,
},

];
const buildCatererTeam = [ 
    {
        class:'js-catering-delightful-bites',
   name:'Delightful Bites Catering',
   image:'projectImages/catering/delightfulbites.jpeg',
   details: {
       contact:+914012345679,
       mail:'info@delightfulbites.com',
       location:'22 Culinary Street, Banjara Hills, Hyderabad, Telangana, 500034',
       cameraInfo:'Specializing in Indian and fusion cuisine, offering customizable menus for events of all sizes, with emphasis on fresh, local ingredients.'
   },
   priceInLakhs:0.45,
   rating:4.5,
},

{
    class:'js-catering-savory-events',
   name:' Savory Events Catering',
   image:'projectImages/catering/savory.jpeg',
   details: {
       contact:914012345678 ,
       mail:' contact@savoryeventscatering.com',
       location:'35 Jubilee Road, Near KBR Park, Banjara Hills, Hyderabad, Telangana, 500034',
       cameraInfo:'Expertise in traditional Hyderabadi cuisine and international dishes, providing tailored menus for weddings and corporate events.'
   },
   priceInLakhs:0.35,
   rating:4.5,
},

{
    class:'js-catering-tasteful-celebrations',
   name:' Tasteful Celebrations Catering',
   image:'projectImages/catering/tasteful.png',
   details: {
       contact:+914076543210 ,
       mail:'hello@tastefulcelebrations.com',
       location:'48 Road No. 10, Banjara Hills, Hyderabad, Telangana, 500034',
       cameraInfo:'Focusing on gourmet Indian and continental cuisine, offering bespoke catering solutions for events of all sizes.'
   },
   priceInLakhs:0.39,
   rating:4.5,
},

{
    class:'js-catering-exquisite-flavours',
   name:'Exquisite Flavors Catering',
   image:'projectImages/catering/exquisite.webp',
   details: {
       contact:+914012398765,
       mail:'info@exquisiteflavors.com',
       location:' 27 Sagar Society, Road No. 2, Banjara Hills, Hyderabad, Telangana, 500034',
       cameraInfo:'Specializing in a mix of traditional and modern cuisine, providing tailored menus and exceptional service for all occasions.'
   },
   priceInLakhs:0.6,
   rating:4.5,
},

{
    class:'js-catering-festive-feasts',
   name:' Festive Feasts Catering',
   image:'projectImages/catering/festive.jpeg',
   details: {
       contact:+914076543219,
       mail:' bookings@festivefeasts.com',
       location:' 63 Film Nagar, Near KBR Park, Hyderabad, Telangana, 500096',
       cameraInfo:'Expert in regional Indian and fusion dishes, offering customizable menus for weddings, parties, and corporate events.'
   },
   priceInLakhs:0.5,
   rating:4.5,
},

{
    class:'js-catering-kk',
   name:'KK Catering',
   image:'projectImages/catering/kk.png',
   details: {
       contact:+914012345678,
       mail:'info@KKdelights.com',
       location:'15 Raju Colony, Near Secunderabad Station, Hyderabad, Telangana, 500003',
       cameraInfo:'Focusing on authentic North Indian dishes, providing customized menus for weddings, festivals, and special events.'
   },
   priceInLakhs: 0.6,
   rating:5.0,
},

];
let finalHTML='';
function PhotographerDetails(){
    buildPhotographersTeam.forEach((organization) =>{
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
    `
    finalHTML+=HTML;

});
document.querySelector('.team-details-container').innerHTML = finalHTML;
addtoteam();
}
PhotographerDetails();

function VenueDetails(){
    let VenueHTML ='';
    

    buildVenueTeam.forEach((organization) =>{
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
        `
        VenueHTML+=HTML;
});

document.querySelector('.team-details-container').innerHTML = VenueHTML;
addtoteam();
}

function DecoratorDetails() {
    let DecoratorHTML ='';
  

    buildDecoratorTeam.forEach((organization) =>{
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
        `
        DecoratorHTML+=HTML;
});

document.querySelector('.team-details-container').innerHTML = DecoratorHTML;
addtoteam()
}
function CatererDetails() {
    let CatererHTML ='';
    

    buildCatererTeam.forEach((organization) =>{
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
        `
        CatererHTML+=HTML;
});

document.querySelector('.team-details-container').innerHTML = CatererHTML;

addtoteam()
}
function getDate(productId){
    const dateInput = document.querySelector(`.${productId}-date`);
    const DateEntered = dateInput.value;
    const currentDate = new Date().toDateString();
    if (Number(DateEntered) <= Number(currentDate) || DateEntered==''){
        return false;
    }
            else{
                return DateEntered;
            }
            
        }
function addtoteam(){

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
                const resultdate=getDate(productId);
                if(resultdate){
                    timeoutForMessages(productId);
                    cart.push({
                        productId: productId,
                        date: resultdate
                    });
                }
                else{
                    alert('enter correct Date');
                }
            
            let cartQuantity=0;
            cart.forEach((cartItem)=>{
                cartQuantity++;
                document.querySelector('.js-cart-quantity').innerHTML=cartQuantity;
            })
            console.log(cart,cartQuantity);
        }
        });
        });
};
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
