
//Create the socket
let socket = io();

let canvas;
 
//InputEvent para que el usuario pueda poner su nombre
let userInput;

/* const PORT = 5050;
const IPaddress = '192.168.1.5'; */
let pantalla;

//caraga de imagenes
let imagenPlayerPantalla1
let imagenPlayerPantalla2
let imagenPlayerPantalla3
let imagenPlayerPantalla4
let imagenPlayerPantalla5


//Contador de 3 - 1 que hace el tiempo regresivo
let timer;

//variable para barra de carga pantalla 1
let ancho;

function preload(){
    imagenPlayerPantalla1 = new loadImage("data/pantalla 1 (tiempo de carga).png");
    imagenPlayerPantalla2 = new loadImage("data/pantalla 2 (ingresa correo del participante).png");
    imagenPlayerPantalla3 = new loadImage("data/pantalla 3(indicaciones del juego).png");
    imagenPlayerPantalla4 = new loadImage("data/pantalla 4 (boton para interactuar con el juego).png");
    imagenPlayerPantalla5 = new loadImage("data/pantalla 5(agradecimiento por jugar).png");

    
}

function setup() {
    timer = 3

    pantalla = 1;

    //metodo que permite el funcionamiento del cuadro de texto para poner el nombre
    userInput = createInput('');
        

    canvas = createCanvas(428, 926);
       

    //variable necesaria para poder hacer barra de carga
    ancho = 20;
}

function draw() {
    background(255, 50);
    fill(0);
    ellipse(pmouseX, pmouseY, 50, 50);

    switch(pantalla){

    case 1:
    //pantalla inicial de carga 
    //carga imagen de la interfaz
    image(imagenPlayerPantalla1, 0, 0); 
    
    
    //barra de carga de la primera pantalla
    fill(255);
    noStroke();
    rect(65, 468, ancho+10, 10, 8);

    //configuración frame count para barra de carga
    if(frameCount%50 == 0) {
    ancho +=40;

    if(ancho>=310) {
    pantalla = 2;
    ancho = 0;
    socket.emit('cambio1');
}
}
    break;
    

//--------------------------------------------------------------------
    //pantalla 2 instrucciones del juego
        case 2:
        //Boton de entendido
        fill(255)
        rectMode(CORNER)
        rect(110,827,209,35, 37);
        
        //Interfaz de registro de datos
        image(imagenPlayerPantalla2, 0, 0);
        
        break; 

//---------------------------------------------------------------------
    //pantalla 3 se muestra boton que el usuario debe presionar para indicar que entendió las instrucciones
        case 3:

        //Boton para cambiar de pantalla
        fill(255)
        rectMode(CORNER)
        rect(97,344,239,240, 80);

        //imagen para poner el botón
        image(imagenPlayerPantalla3, 0, 0);
        
        //Ingresa el nombre
        userInput.position((windowWidth / 2) - 80, windowHeight - 100);
        userInput.size(260);

        userInput.position(80, 80);

        break;

        //--------------------------------------------------------------------
        //Pantalla 4, aqui se desarrolla el juego
        case 4:
            
            //Boton para cambiar de pantalla
            fill(255)
            rectMode(CORNER)
            rect(97,344,239,240, 80);

            image(imagenPlayerPantalla4, 0, 0);
      
            

            break;
        
        //--------------------------------------------------------------------
        //Pantalla 5, agradece la participacion del jugador
        case 5:
            

            image(imagenPlayerPantalla5, 0, 0);

            break;
    }
}

function mouseClicked(){
    switch(pantalla){
        case 2:
            //rect(110,827,209,35, 37);
            if(mouseX > 110 && mouseX < 319 && mouseY > 827 && mouseY < 862){
                pantalla = 3;
                console.log('se clikeó el cambio de pantalla');
            }
            break;

        //------------------------------------------------------------------------------
        //boton pantalla 3
        case 3:
            //rect(97,344,239,240, 80);
            if(mouseX > 97 && mouseX < 336 && mouseY > 344 && mouseY < 584){
                pantalla = 4;
                console.log('se clikeó el cambio de pantalla');
                socket.emit('cambio2')
            }
            break;

             //------------------------------------------------------------------------------
        //boton pantalla 5
        //En esta pantalla se da la interacción de los clicks para que el juego funcione
        case 4:
            if(mouseX > 97 && mouseX < 336 && mouseY > 344 && mouseY < 584){
                console.log('se clikeó');
                socket.emit('tapinformation');
            }
            break;
    
    }
}



