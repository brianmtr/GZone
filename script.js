let menu = document.getElementById('menu');
let checkbox = document.getElementById('checkbox');

checkbox.addEventListener('click',openMenu);

 function openMenu(){

    if (menu.style.display == 'block') {
        menu.style.display = 'none';
    } else {
        menu.style.display = 'block';
    }
    

 }

 <script type="text/javascript">

 var noti = document.querySelector('h1');

 var select = document.querySelector('.select');

 var button = document.getElementsByTagName('button');

 for(var but of button){

     but.addEventListener('click', (e)=>{

         var add = Number(noti.getAttribute('data-count') || 0);

         noti.setAttribute('data-count', add +1);

         noti.classList.add('zero')

​

         // image --animation ---//

         var image = e.target.parentNode.querySelector('img');

         var span = e.target.parentNode.querySelector('span');

         var s_image = image.cloneNode(false);

         span.appendChild(s_image);

         span.classList.add("active");

         setTimeout(()=>{

             span.classList.remove("active");

             span.removeChild(s_image);

         }, 500);

​

         var parent = e.target.parentNode;

         var clone = parent.cloneNode(true);

         select.appendChild(clone);

         clone.lastElementChild.innerText = "Acheter";

​

         if (clone) {

             noti.onclick = ()=>{

                 select.classList.toggle('display');

             }

         }

     })

 }

</script>