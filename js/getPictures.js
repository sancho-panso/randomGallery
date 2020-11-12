(function(){
    let storage;
    
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
         
         let random = Math.floor(Math.random() * 10); 
         let temp = gallery[index].src;
         gallery[index].src = gallery[random].src;
         gallery[random].src = temp;
        }
    }

    document.querySelector('.saveShown').onclick= function(){
     let position=[];
     let gallery = document.querySelectorAll('img');
     for (let index = 0; index < gallery.length; index++) {
         position.push(gallery[index].src);
     }
     storage = localStorage.setItem('savedPosition', JSON.stringify(position));
      console.log(position);
    }
    
    document.querySelector('.showSaved').onclick= function(){
        let position = JSON.parse(localStorage.getItem('savedPosition'))
        let nest = document.querySelector('ul');
        while (nest.firstChild){
            nest.removeChild(nest.firstChild)
        }
        for (let index = 0; index < position.length; index++) {
            let photoLink = document.createElement('li');
                let photo = document.createElement('img')
                photo.src = position[index]
                photo.onclick = function(e){e.target.src ='/img/click.jpg '};
                photoLink.appendChild(photo);
                nest.appendChild(photoLink);
        }
    }
    
       document.querySelector('.show').onclick = function(){
       let path = 'http://web-training.lt/img_api/'
       manoAjax.open('GET', path);
       manoAjax.send();
      }

      document.querySelector('.saveShownhtml').onclick= function(){
        let nest = document.querySelector('ul');
        storage = localStorage.setItem('savedPosition', nest.innerHTML);
    }

    document.querySelector('.showSavedhtml').onclick= function(){
        storage = localStorage.getItem('savedPosition');
        let nest = document.querySelector('ul');
        nest.innerHTML= storage;

    }

     

    })();