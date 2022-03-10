//Create the socket
let socket = io();

// Variable que indica la cantidad de clicks que se realiza dentro de la interaccion
let contador = 0;

//Contador de 3 - 1 que hace el tiempo regresivo
let timer;
let ancho;

//Variable para cambiar entre pantallas dentro del juego
let pantalla;

//carga de imagenes tipo Gif
let imagenPantalla1
let imagenPantalla2
let imagenPantalla3
let imagenPantalla4
let imagenPantalla5

//Función para llamada de imagenes en el codigo
function preload() {
    imagenPantalla1 = new loadImage("data/pantalla_1_publicidad.gif");
    imagenPantalla2 = new loadImage("data/pantalla_2_llenar_datos.gif");
    imagenPantalla3 = new loadImage("data/pantalla_3_intrucciones_del_juego.gif");
    imagenPantalla4 = new loadImage("data/pantalla_4_(conteo_regresivo_antes_de_la_experiencia).png");
    imagenPantalla5 = new loadImage("data/pantalla_5_el_propio.gif");
    imagenPantalla6 = new loadImage("data/pantalla_6_resultados.gif");
    
}

function setup() { 
    ancho = 20;
    timer = 3;
    pantalla = 0;
    frameRate(60);
    createCanvas(1920, 1080);
    
}

function draw() {

    switch(pantalla){
       //pantalla 1
        //En esta pantalla va a estar la publicidad junto con el codigo QR
        case 1:
            
            image(imagenPantalla1, 0, 0);

            break;
    //---------------------------------------------------
       //pantalla 2
        //En esta pantalla se va mostrar que el usuario debe hacer el registro
        case 2:
            
            image(imagenPantalla2, 0, 0);
            
            break;

    //---------------------------------------------------
        //pantalla 3
        //En esta pantalla van a estar las instrucciones de como va a funcionar el juego
        case 3:
            image(imagenDisplayPantalla3, 0, 0);

            fill(255);
            textSize(80);
            text(timer, 1920/2-20, 1080/2);

            if(frameCount%15 == 0) {
                ancho +=40;
            
                if(ancho>=200) {
                    timer = 2;
                }
                if(ancho >= 400){
                    timer = 1;
                }
                if(ancho >= 600){
                    timer = 0;
                    /* socket.emit('cambio3' )*/
                    pantalla = 4;
                    }
            }

            break;

    //---------------------------------------------------
        //pantalla 4
        //En esta pantalla va a haber un contador tipo 3,2,1 para lanzar la experiencia
        case 4:
            
        
        //image(imagenDisplayPantalla4, 0, 0);
            text(contador, 1920/2-20, 1080/2)

            break;

    //---------------------------------------------------
        //pantalla 5
        //En esta pantalla se va a desarrollar toda la experiencia del juego
        case 5:
            
        //image(imagenDisplayPantalla5, 0, 0);

            break;

    //---------------------------------------------------
        //pantalla 6
        //En esta pantalla se va a entregar una pantalla con agradecimiento al usuario
        case 6:
            
        //image(imagenDisplayPantalla5, 0, 0);

            break;

    }  
}


//aqui se llama el contador de cliks que realiza el usuario
    socket.on('tapinformation', (tapInformations)  => {
    contador +=1;
    console.log(contador);
    if(contador >= 101){
        pantalla = 5
    }
    })

//aqui se va a hacer el llamado del cambio de pantalla de la publicidad a las instrucciones del juego
    socket.on('cambio1', (cambioPantalla1) => {
    pantalla = 2;
    })

//Aqui se hace el cambio de la pantalla de las instrucciones al juego
    socket.on('cambio2', (cambioPantalla1) => {
    pantalla = 3;
    })