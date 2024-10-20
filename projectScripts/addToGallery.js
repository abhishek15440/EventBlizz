let finalHTML='';
const galleryList =[
    {
        image:'projectStyles/projectImages/eventservices/birthdaygallery.jpg',
        name:'xyz birthday',
        date:'',
        description:'description of Event',
        location:'Hyderabad,India'
    },
    {
        image:'projectStyles/projectImages/eventservices/marriagegallery.jpg',
        name:'xyz marriage',
        date:'',
        description:'description of Event',
        location:'Hyderabad,India'
    },
    {
        image:'projectStyles/projectImages/eventservices/officegallery.jpg',
        name:' office event',
        date:'',
        description:'description of Event',
        location:'Hyderabad,India'
    },
    {
        image:'projectStyles/projectImages/eventservices/collegegallery.jpg',
        name:'MRCET College Event',
        date:'',
        description:'description of Event',
        location:'Hyderabad,India'
    },
    {
        image:'projectStyles/projectImages/eventservices/collegegallery.jpg',
        name:'promotional Event',
        date:'',
        description:'description of Event',
        location:'Hyderabad,India'
    }
];

galleryList.forEach((event)=>{
    const html = `
    <div class="gallery-image card" style="background-image: url(${event.image}); background-size:cover;background-repeat:no-repeat;">
                <div class="details">
                  <label>${event.name}</label><br><br>
              <p>
                <b>Date : ${event.date}</b>
                <br>
                ${event.description}
                <br>
                <i>${event.location}</i>
              </p>
            </div>
        </div>`;
        finalHTML += html;
});

document.querySelector('.gallery-grid').innerHTML = finalHTML;
