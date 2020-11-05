(function(){
    
    let manoAjax = new XMLHttpRequest();
    manoAjax.onreadystatechange = function(){
        let nest = document.querySelector('ul');
        while (nest.firstChild){
            nest.removeChild(nest.firstChild)
        }
        if(manoAjax.readyState === 4){
            if(manoAjax.status === 200){
               let gallery = JSON.parse(manoAjax.responseText);            
               for (let index = 0; index < gallery.length; index++) {
                let photoLink = document.createElement('li');
                let photo = document.createElement('img')
                photo.src = 'http://web-training.lt/img_api/img/'+gallery[index]
                photo.onclick = function(e){e.target.src ='/img/click.jpg '};
                photoLink.appendChild(photo);
                nest.appendChild(photoLink);
                   
               }
              
            }else{
                alert(manoAjax.statusText);
            } 
        }
    }

    document.querySelector('.mix').onclick= function(){
     let gallery = document.querySelectorAll('img');
     for (let index = 0; index < gallery.length; index++) {
         console.log(gallery[index].src);
         let random = Math.floor(Math.random() * 10); 
         let temp = gallery[index].src;
         gallery[index].src = gallery[random].src;
         gallery[random].src = temp;

        }
        
    }
   
    
       document.querySelector('.show').onclick = function(){
       let path = 'http://web-training.lt/img_api/'
       manoAjax.open('GET', path);
       manoAjax.send();
      }

     

    })();