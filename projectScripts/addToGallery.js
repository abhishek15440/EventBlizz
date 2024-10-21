let finalHTML='';
const galleryList =[
    {
        image:'projectStyles/projectImages/eventservices/birthdaygallery.jpg',
        name:`Aarav's  birthday`,
        date:'19 Nov 2020',
        description:'he vibrant birthday bash for seven-year-old Aarav featured a whimsical carnival theme, complete with colorful balloons, games, and a delightful cupcake tower. Kids enjoyed face painting and a magic show that left everyone in awe at their home in Andheri East, Mumbai. ',
        location:'Mumbai,India'
    },
    {
        image:'projectStyles/projectImages/eventservices/marriagegallery.jpg',
        name:'Priya Sharma weds Rahul Chaturvedi',
        date:'20 April 2023',
        description:'The elegant wedding for Priya Sharma and Rahul Chaturvedi showcased a stunning blend of traditional and contemporary styles at a picturesque venue in Banjara Hills, Hyderabad. Guests were treated to a lavish feast of Hyderabadi cuisine, while the vibrant décor featured marigold flowers and twinkling lights.',
        location:'Hyderabad,India'
    },
    {
        image:'projectStyles/projectImages/eventservices/officegallery.jpg',
        name:' office event',
        date:'16 June 2023',
        description:'The dynamic corporate retreat for Tech Solutions took place at a serene venue in Gachibowli, Hyderabad, featuring team-building activities and workshops. Attendees engaged in collaboration and creativity, culminating in a relaxing evening gala. Delicious local cuisine and live entertainment made for an inspiring and connected experience!',
        location:'Hyderabad,India'
    },
    {
        image:'projectStyles/projectImages/eventservices/collegegallery.jpg',
        name:'MRCET College Event',
        date:'27 Nov 2023',
        description:'The exciting movie promotion event for "Animal" at MRCET in Hyderabad welcomed the star-studded cast, drawing in a lively crowd of students. Attendees enjoyed interactive sessions, Q&As, and exclusive sneak peeks of the film, creating an electrifying atmosphere. ',
        location:'Hyderabad,India'
    },
    {
        image:'projectStyles/projectImages/eventservices/collegegallery.jpg',
        name:'promotional Event',
        date:'27 Nov 2023',
        description:'Organizing the movie promotion event for "Animal" at MRCET in Hyderabad was an exhilarating experience. We coordinated with the cast for engaging Q&As and interactive sessions, ensuring students felt connected to their favorite stars. The energy in the auditorium was electric.',
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
