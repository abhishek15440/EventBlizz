const event_detail = document.querySelector('.services-right');
    function get_details(x){
        if(x=='wedding'){
            event_detail.innerText = 'we specialize in creating unforgettable weddings by offering a comprehensive range of services tailored to your unique vision. From stunning photography that captures every moment to helping you find the perfect venue, our team is dedicated to making your day seamless. Our expert decorators will transform your space with beautiful designs, while our catering partners provide delicious menus to delight your guests. With our comprehensive coordination services, you can relax and enjoy your celebration, knowing every detail is taken care of. Let us help you bring your dream wedding to life!';
            document.title=`EventBlizz ${x}`;
        }
        else if (x=='Birthday'){
            event_detail.innerText = 'we make celebrating birthdays a memorable experience with our wide range of tailored services. From selecting the perfect venue that fits your theme to crafting delightful decorations that create the right ambiance, we have got you covered. Our talented caterers offer mouthwatering menus to satisfy every palate, while our professional photographers capture all the joyous moments of your special day. With our dedicated event coordinators managing every detail, you can focus on enjoying the celebration with family and friends. Let us help you plan a birthday event that is as unique and fun as you are!';
            document.title=`EventBlizz ${x}`;
        }
        else if (x=='social'){
            event_detail.innerText = 'At EventBlizz, we excel in organizing unforgettable social events tailored to your needs. Whether it’s a cocktail party, reunion, or charity gala, we provide a full suite of services to ensure your event shines. Our experienced team helps you find the perfect venue and designs captivating decor to match your theme. With delicious catering options to delight your guests and skilled photographers capturing every moment, we take care of all the details. Trust our dedicated event coordinators to manage logistics, allowing you to enjoy the occasion stress-free. Let us help you create a social event that leaves a lasting impression!';
            document.title=`EventBlizz ${x}`;
        }
        else if (x=='Office'){
            event_detail.innerText = 'At EventBlizz, we specialize in organizing seamless office events, from promotions to team meetups and corporate retreats. Our expert team collaborates with you to find the ideal venue that suits your company’s needs, while our professional decorators create an engaging atmosphere that reflects your brand. We offer a variety of catering options to keep your team energized and focused. With experienced coordinators managing logistics and ensuring everything runs smoothly, you can concentrate on building connections and achieving your event goals. Let us help you create a successful office event that inspires collaboration and strengthens your team!';
            document.title=`EventBlizz ${x}`;
        }
        else if (x=='College'){
            event_detail.innerText = 'At EventBlizz, we are dedicated to organizing vibrant college events that leave a lasting impact, from freshers orientations to farewell parties and tech fests. Our team works closely with you to select the perfect venue and design engaging decor that captures the spirit of your event. We provide a range of catering options to satisfy diverse tastes, ensuring everyone is well-fed and energized. With our expert coordinators handling logistics and activities, you can focus on creating memorable experiences for your fellow students. Let us help you make your college event a celebration of fun, friendship, and unforgettable memories!';
            document.title=`EventBlizz ${x}`;
        }
        else if (x=='festival'){
            event_detail.innerText = 'At EventBlizz, we specialize in organizing vibrant festive events like Holi and Garba, ensuring a celebration filled with joy and tradition. Our team helps you select the perfect venue and design stunning decor that reflects the festive spirit. We offer a variety of catering options featuring traditional dishes and snacks to keep your guests satisfied. With live entertainment and activities to enhance the experience, our expert coordinators manage all the details, allowing you to fully immerse yourself in the festivities. Let us help you create a memorable celebration that brings everyone together in joyful harmony!';
            document.title=`EventBlizz ${x}`;
        }
    }
