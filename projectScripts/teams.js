let finalHTML='';
const buildPhotographersTeam = [
    
    
         {
        name:'name of organization 1',
        image:'#',
        details: {
            contact: 9000000000,
            mail:'@gmail.com',
            location:'hyderabad',
            cameraInfo:'camera description'
        },
        priceInLakhs:0.5,
        rating:4.5,
    },

    {
        name:'name of organization 2',
        image:'#',
        details: {
            contact: 9000000000,
            mail:'@gmail.com',
            location:'hyderabad',
            cameraInfo:'camera description'
        },
        priceInLakhs:0.5,
        rating:4.5,
    },

    {
        name:'name of organization 3',
        image:'#',
        details: {
            contact: 9000000000,
            mail:'@gmail.com',
            location:'hyderabad',
            cameraInfo:'camera description'
        },
        priceInLakhs:0.5,
        rating:4.5,
    },

    {
        name:'name of organization 4',
        image:'#',
        details: {
            contact: 9000000000,
            mail:'@gmail.com',
            location:'hyderabad',
            cameraInfo:'camera description'
        },
        priceInLakhs:0.5,
        rating:4.5,
    },

    {
        name:'name of organization 5',
        image:'#',
        details: {
            contact: 9000000000,
            mail:'@gmail.com',
            location:'hyderabad',
            cameraInfo:'camera description'
        },
        priceInLakhs:0.5,
        rating:4.5,
    },

    {
        name:'name of organization 6',
        image:'#',
        details: {
            contact: 9000000000,
            mail:'@gmail.com',
            location:'hyderabad',
            cameraInfo:'camera description'
        },
        priceInLakhs:0.5,
        rating:4.5,
    },
    
];

buildPhotographersTeam.forEach((organization) =>{
    const HTML = `
    <div class="team">
            <center><h3>${organization.name}</h3></center>
            <div class="grid-details">
                <div class=" flex-properties photo-container">
                    <img src="${organization.image}" alt="photo of org" class="org-photo flex-properties">
                </div>

                <div class="container-b details-container">
                    <label>Contact:</label><span>${organization.details.contact}</span><br>
                    <label>Email:</label>${organization.details.mail}<br>
                    <label>Location:</label>${organization.details.location}<br><br>
                    <label>Camera description:</label><p>${organization.details.cameraInfo}</p>
                </div>
                <div class=" price-container">
                    <center><h3>Price</h3></center>
                    <div class="cost-info">${organization.priceInLakhs}L<sub>/day</sub></div>
                    
                </div>

                <div class=" date-container">
                    <center><h1>Select Date: </h1></center>
                    <input type="date" class="date-info">
                </div>

                <div class=" rating-container">
                    <center><h1>Rating </h1></center>
                        <img src="projectImages/${organization.rating * 10}stars.jpeg" class="stars">
                </div>
                <div class="button-container flex-properties">
                    <button type="button" class="button">
                    <span class="button__text">Add To <br> Team</span>
                    <span class="button__icon"><svg xmlns="http://www.w3.org/2000/svg" width="24" viewBox="0 0 24 24" stroke-width="2" stroke-linejoin="round" stroke-linecap="round" stroke="currentColor" height="24" fill="none" class="svg"><line y2="19" y1="5" x2="12" x1="12"></line><line y2="12" y1="12" x2="19" x1="5"></line></svg></span>
                    </button>
                </div>
            </div>
        </div>
    `
    finalHTML+=HTML;
});
console.log(finalHTML);

document.querySelector('.team-details-container').innerHTML = finalHTML;

function venuedetails() {
    let VenueHTML ='';
    const buildVenueTeam = [
    
    
        {
       name:'name of venue organization 1',
       image:'#',
       details: {
           contact: 9000000000,
           mail:'@gmail.com',
           location:'hyderabad',
           cameraInfo:'venue description'
       },
       priceInLakhs:0.5,
       rating:4.5,
   },

   {
       name:'name of venue organization 2',
       image:'#',
       details: {
           contact: 9000000000,
           mail:'@gmail.com',
           location:'hyderabad',
           cameraInfo:'venue description'
       },
       priceInLakhs:0.5,
       rating:4.5,
   },

   {
       name:'name of venue organization 3',
       image:'#',
       details: {
           contact: 9000000000,
           mail:'@gmail.com',
           location:'hyderabad',
           cameraInfo:'venue description'
       },
       priceInLakhs:0.5,
       rating:4.5,
   },

   {
       name:'name of venue organization 4',
       image:'#',
       details: {
           contact: 9000000000,
           mail:'@gmail.com',
           location:'hyderabad',
           cameraInfo:'venue description'
       },
       priceInLakhs:0.5,
       rating:4.5,
   },

   {
       name:'name of venue organization 5',
       image:'#',
       details: {
           contact: 9000000000,
           mail:'@gmail.com',
           location:'hyderabad',
           cameraInfo:'venue description'
       },
       priceInLakhs:0.5,
       rating:4.5,
   },

   {
       name:'name of venue organization 6',
       image:'#',
       details: {
           contact: 9000000000,
           mail:'@gmail.com',
           location:'hyderabad',
           cameraInfo:'venue description'
       },
       priceInLakhs:0.5,
       rating:4.5,
   },
   
];

    buildVenueTeam.forEach((organization) =>{
        const HTML = `
        <div class="team">
                <center><h3>${organization.name}</h3></center>
                <div class="grid-details">
                    <div class="container-a flex-properties">
                        <img src="${organization.image}" alt="photo of org" class="org-photo flex-properties">
                    </div>

                    <div class="container-b">
                        <label>Contact:</label><span>${organization.details.contact}</span><br>
                        <label>Email:</label>${organization.details.mail}<br>
                        <label>Location:</label>${organization.details.location}<br><br>
                        <label>Camera description:</label><p>${organization.details.cameraInfo}</p>
                    </div>
                    <div class="container-a">
                        <center><h3>Price</h3></center>
                        <div class="cost-info">${organization.priceInLakhs}L<sub>/day</sub></div>
                        
                    </div>

                    <div class=" container-a">
                        <center><h1>Select Date: </h1></center>
                        <input type="date" class="date-info">
                    </div>

                    <div class="container-a">
                        <center><h1>Rating </h1></center>
                            <img src="projectImages/${organization.rating * 10}stars.jpeg" class="stars">
                    </div>
                    <div class="container-a flex-properties">
                        <button type="button" class="button">
                        <span class="button__text">Add To <br> Team</span>
                        <span class="button__icon"><svg xmlns="http://www.w3.org/2000/svg" width="24" viewBox="0 0 24 24" stroke-width="2" stroke-linejoin="round" stroke-linecap="round" stroke="currentColor" height="24" fill="none" class="svg"><line y2="19" y1="5" x2="12" x1="12"></line><line y2="12" y1="12" x2="19" x1="5"></line></svg></span>
                        </button>
                    </div>
                </div>
            </div>
        `
        VenueHTML+=HTML;
});

document.querySelector('.team-details-container').innerHTML = VenueHTML;

}

function decoratordetails() {
    let DecoratorHTML ='';
    const buildDecoratorTeam = [
    
    
        {
       name:'name of decorator organization 1',
       image:'#',
       details: {
           contact: 9000000000,
           mail:'@gmail.com',
           location:'hyderabad',
           cameraInfo:'decorator description'
       },
       priceInLakhs:0.5,
       rating:4.5,
   },

   {
       name:'name of decorator organization 2',
       image:'#',
       details: {
           contact: 9000000000,
           mail:'@gmail.com',
           location:'hyderabad',
           cameraInfo:'decorator description'
       },
       priceInLakhs:0.5,
       rating:4.5,
   },

   {
       name:'name of decorator organization 3',
       image:'#',
       details: {
           contact: 9000000000,
           mail:'@gmail.com',
           location:'hyderabad',
           cameraInfo:'decorator description'
       },
       priceInLakhs:0.5,
       rating:4.5,
   },

   {
       name:'name of decorator organization 4',
       image:'#',
       details: {
           contact: 9000000000,
           mail:'@gmail.com',
           location:'hyderabad',
           cameraInfo:'decorator description'
       },
       priceInLakhs:0.5,
       rating:4.5,
   },

   {
       name:'name of decorator organization 5',
       image:'#',
       details: {
           contact: 9000000000,
           mail:'@gmail.com',
           location:'hyderabad',
           cameraInfo:'decorator description'
       },
       priceInLakhs:0.5,
       rating:4.5,
   },

   {
       name:'name of decorator organization 6',
       image:'#',
       details: {
           contact: 9000000000,
           mail:'@gmail.com',
           location:'hyderabad',
           cameraInfo:'decorator description'
       },
       priceInLakhs:0.5,
       rating:4.5,
   },
   
];

    buildDecoratorTeam.forEach((organization) =>{
        const HTML = `
        <div class="team">
                <center><h3>${organization.name}</h3></center>
                <div class="grid-details">
                    <div class="container-a flex-properties">
                        <img src="${organization.image}" alt="photo of org" class="org-photo flex-properties">
                    </div>

                    <div class="container-b">
                        <label>Contact:</label><span>${organization.details.contact}</span><br>
                        <label>Email:</label>${organization.details.mail}<br>
                        <label>Location:</label>${organization.details.location}<br><br>
                        <label>Camera description:</label><p>${organization.details.cameraInfo}</p>
                    </div>
                    <div class="container-a">
                        <center><h3>Price</h3></center>
                        <div class="cost-info">${organization.priceInLakhs}L<sub>/day</sub></div>
                        
                    </div>

                    <div class=" container-a">
                        <center><h1>Select Date: </h1></center>
                        <input type="date" class="date-info">
                    </div>

                    <div class="container-a">
                        <center><h1>Rating </h1></center>
                            <img src="projectImages/${organization.rating * 10}stars.jpeg" class="stars">
                    </div>
                    <div class="container-a flex-properties">
                        <button type="button" class="button">
                        <span class="button__text">Add To <br> Team</span>
                        <span class="button__icon"><svg xmlns="http://www.w3.org/2000/svg" width="24" viewBox="0 0 24 24" stroke-width="2" stroke-linejoin="round" stroke-linecap="round" stroke="currentColor" height="24" fill="none" class="svg"><line y2="19" y1="5" x2="12" x1="12"></line><line y2="12" y1="12" x2="19" x1="5"></line></svg></span>
                        </button>
                    </div>
                </div>
            </div>
        `
        DecoratorHTML+=HTML;
});

document.querySelector('.team-details-container').innerHTML = DecoratorHTML;

}

function catererdetails() {
    let CatererHTML ='';
    const buildCatererTeam = [
    
    
        {
       name:'name of caterer organization 1',
       image:'#',
       details: {
           contact: 9000000000,
           mail:'@gmail.com',
           location:'hyderabad',
           cameraInfo:'caterer description'
       },
       priceInLakhs:0.5,
       rating:4.5,
   },

   {
       name:'name of decorator organization 2',
       image:'#',
       details: {
           contact: 9000000000,
           mail:'@gmail.com',
           location:'hyderabad',
           cameraInfo:'caterer description'
       },
       priceInLakhs:0.5,
       rating:4.5,
   },

   {
       name:'name of caterer organization 3',
       image:'#',
       details: {
           contact: 9000000000,
           mail:'@gmail.com',
           location:'hyderabad',
           cameraInfo:'caterer description'
       },
       priceInLakhs:0.5,
       rating:4.5,
   },

   {
       name:'name of caterer organization 4',
       image:'#',
       details: {
           contact: 9000000000,
           mail:'@gmail.com',
           location:'hyderabad',
           cameraInfo:'caterer description'
       },
       priceInLakhs:0.5,
       rating:4.5,
   },

   {
       name:'name of caterer organization 5',
       image:'#',
       details: {
           contact: 9000000000,
           mail:'@gmail.com',
           location:'hyderabad',
           cameraInfo:'caterer description'
       },
       priceInLakhs:0.5,
       rating:4.5,
   },

   {
       name:'name of caterer organization 6',
       image:'#',
       details: {
           contact: 9000000000,
           mail:'@gmail.com',
           location:'hyderabad',
           cameraInfo:'caterer description'
       },
       priceInLakhs:0.5,
       rating:4.5,
   },
   
];

    buildCatererTeam.forEach((organization) =>{
        const HTML = `
        <div class="team">
                <center><h3>${organization.name}</h3></center>
                <div class="grid-details">
                    <div class="container-a flex-properties">
                        <img src="${organization.image}" alt="photo of org" class="org-photo flex-properties">
                    </div>

                    <div class="container-b">
                        <label>Contact:</label><span>${organization.details.contact}</span><br>
                        <label>Email:</label>${organization.details.mail}<br>
                        <label>Location:</label>${organization.details.location}<br><br>
                        <label>Camera description:</label><p>${organization.details.cameraInfo}</p>
                    </div>
                    <div class="container-a">
                        <center><h3>Price</h3></center>
                        <div class="cost-info">${organization.priceInLakhs}L<sub>/day</sub></div>
                        
                    </div>

                    <div class=" container-a">
                        <center><h1>Select Date: </h1></center>
                        <input type="date" class="date-info">
                    </div>

                    <div class="container-a">
                        <center><h1>Rating </h1></center>
                            <img src="projectImages/${organization.rating * 10}stars.jpeg" class="stars">
                    </div>
                    <div class="container-a flex-properties">
                        <button type="button" class="button">
                        <span class="button__text">Add To <br> Team</span>
                        <span class="button__icon"><svg xmlns="http://www.w3.org/2000/svg" width="24" viewBox="0 0 24 24" stroke-width="2" stroke-linejoin="round" stroke-linecap="round" stroke="currentColor" height="24" fill="none" class="svg"><line y2="19" y1="5" x2="12" x1="12"></line><line y2="12" y1="12" x2="19" x1="5"></line></svg></span>
                        </button>
                    </div>
                </div>
            </div>
        `
        CatererHTML+=HTML;
});

document.querySelector('.team-details-container').innerHTML = CatererHTML;

}
