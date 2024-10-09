const event_detail = document.querySelector('.services-right');

    function get_details(x){
        if(x=='wedding'){
            event_detail.innerText = `displaying ${x} event information`;
            document.title=`EventBlizz ${x}`;
        }
        else if (x=='Birthday'){
            event_detail.innerText = `displaying ${x} event information`;
            document.title=`EventBlizz ${x}`;
        }
        else if (x=='social'){
            event_detail.innerText = `displaying ${x} event information`;
            document.title=`EventBlizz ${x}`;
        }
        else if (x=='Office'){
            event_detail.innerText = `displaying ${x} event information`;
            document.title=`EventBlizz ${x}`;
        }
        else if (x=='College'){
            event_detail.innerText = `displaying ${x} event information`;
            document.title=`EventBlizz ${x}`;
        }
        else if (x=='festival'){
            event_detail.innerText = `displaying ${x} event information`;
            document.title=`EventBlizz ${x}`;
        }
        
    }