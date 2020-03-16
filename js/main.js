$(document).ready(function(){

    //Slider bajado de https://bxslider.com/install/
       
    if(window.location.href.indexOf('index') >-1){
    $('.slider').bxSlider({
          mode: 'fade',
          captions: true,
          slideWidth: 1200,
          speed: 500
        });
      }
      if(window.location.href.indexOf('index') > -1){
        //Código para mostrar posts dinámicos 
        var posts= [
            {
            titulo: "Prueba título 1",
            fecha : moment().format('MMMM Do YYYY'),
            contenido: "Contrary to popular belief, Lorem Ium is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur, from a Lorem Ipsum passage, and going through the cites of the word in classical literature, discovered the undoubtable source. Lorem Ipsum comes from sections 1.10.32 and 1.10.33 of (The Extremes of Good and Evil) by Cicero, written in 45 BC. This book is a treatise on the theory of ethics, very popular during the Renaissance. The first line of Lorem Ipsum,",
            },
            {
            titulo: "Prueba título 2",
            fecha : moment().format('MMMM Do YYYY'),
            contenido: "Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur, from a Lorem Ipsum passage, and going through the cites of the word in classical literature, discovered the undoubtable source. Lorem Ipsum comes from sections 1.10.32 and 1.10.33 of (The Extremes of Good and Evil) by Cicero, written in 45 BC. This book is a treatise on the theory of ethics, very popular during the Renaissance. The first line of Lorem Ipsum,",
            },
            {
                titulo: "Prueba título 3",
                fecha : moment().format('MMMM Do YYYY'),
            contenido: "Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur, from a Lorem Ipsum passage, and going through the cites of the word in classical literature, discovered the undoubtable source. Lorem Ipsum comes from sections 1.10.32 and 1.10.33 of (The Extremes of Good and Evil) by Cicero, written in 45 BC. This book is a treatise on the theory of ethics, very popular during the Renaissance. The first line of Lorem Ipsum,",
            },
            {
                titulo: "Prueba título 4",
                fecha : moment().format('MMMM Do YYYY'),
            contenido: "Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur, from a Lorem Ipsum passage, and going through the cites of the word in classical literature, discovered the undoubtable source. Lorem Ipsum comes from sections 1.10.32 and 1.10.33 of (The Extremes of Good and Evil) by Cicero, written in 45 BC. This book is a treatise on the theory of ethics, very popular during the Renaissance. The first line of Lorem Ipsum,",
            },
            {titulo: "Prueba título 5",
            fecha : moment().format('MMMM Do YYYY'),
            contenido: "Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur, from a Lorem Ipsum passage, and going through the cites of the word in classical literature, discovered the undoubtable source. Lorem Ipsum comes from sections 1.10.32 and 1.10.33 of  (The Extremes of Good and Evil) by Cicero, written in 45 BC. This book is a treatise on the theory of ethics, very popular during the Renaissance. The first line of Lorem Ipsum,",
        },
        ];

        posts.forEach((val,index)=>{

            var post = `
            <article class="post">
                <h2>${val.titulo}</h2>
                <span class="fecha">${val.fecha}</span>
                <p>${val.contenido}</p>
            <a href="#" class="button">Leer mas</a>
            </article>
            `;

            $("#posts").append(post);
            
        });
      }
        
        var tema = $("#theme");
      $("#green").click(function(){
        tema.attr("href", "css/green.css")

      });

      var tema = $("#theme");
      $("#red").click(function(){
        tema.attr("href", "css/red.css")

      });

      var tema = $("#theme");
      $("#blue").click(function(){
        tema.attr("href", "css/blue.css")

      });

      $("#arriba").click(function(e){
       Element.preventdefault();
        $('html, body').animate({
            scrollTop: 0
        },500);

        return false;
      });
    


      //login false

         

      $("#login form").submit(function(){
        var name = $("#id_nombre").val();  
        // $("#id_nombre").val();
            localStorage.setItem("nombre", name);
            
        });

      var nombreSesion = localStorage.getItem("nombre");

        if(nombreSesion != null && nombreSesion != "undefined"){
            var parrafo = $("#about p");
            parrafo.html("<br> <strong>Bienvenido:" + nombreSesion+"<strong><br>");
            parrafo.append("<a href='#' id= 'logout'> Cerrar sesión</a>");
           
            $("#login").hide();
            
            $("#logout").click(function(){
                localStorage.clear();
               
                location.reload();
            });

            
            
        }
        if(window.location.href.indexOf('about') > -1){
        $("#acordeon").accordion({
          animate: 200
        });
      }

      if(window.location.href.indexOf('reloj') > -1){

        setInterval(function(){
          var hola = moment().format("h:mm:ss");
         $("#reloj").html(hola);
        },1000);
      }

      if(window.location.href.indexOf('contac')>-1){

       
        $.validate({
          lang: 'es'
        });

      }
});