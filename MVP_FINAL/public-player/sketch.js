//Create the socket
let socket = io();

let canvas;
 
//InputEvent para que el usuario pueda poner su nombre
let userInput;

/* const PORT = 5050;
const IPaddress = '192.168.1.5'; */
let pantalla;

//caraga de imagenes
let imgIntefaz;
let imgPant1

//variable para barra de carga pantalla 1
let ancho;

function preload(){
    imgIntefaz = new loadImage("data/pantalla 1 (tiempo de carga).png");
    imgPant1 = new loadImage("data/pantalla 2(indicaciones del juego).png");
}

function setup() {
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
    image(imgIntefaz, 0, 0); 
    
    
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
        
        //Interfaz de las instrucciones
        image(imgPant1, 0, 0);
        
        break; 

//---------------------------------------------------------------------
    //pantalla 3 ingresa datos del correo electronico
        case 3:
        fill(100)
        rectMode(CORNER)
        rect(0, 0, 428, 926)
        
        //Ingresa el nombre
        userInput.position((windowWidth / 2) - 80, windowHeight - 100);
        userInput.size(260);

        userInput.position(80, 80);

        //Boton para cambiar de pantalla
        fill(255)
        rectMode(CORNER)
        rect(110,827,209,35, 37);

        break;

        //--------------------------------------------------------------------
        //Pantalla 4, conteo regresivo para iniciar el juego
        case 4:
            fill(0)
        rectMode(CORNER)
        rect(0, 0, 428, 926)


        fill(255)
        rectMode(CORNER)
        rect(110,827,209,35, 37);
            break;
        
        //--------------------------------------------------------------------
        //Pantalla 5, aqui ocurre la interacción del juego
        case 5:

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
            if(mouseX > 110 && mouseX < 319 && mouseY > 827 && mouseY < 862){
                pantalla = 4;
                console.log('se clikeó el cambio de pantalla');
            }
            break;

             //------------------------------------------------------------------------------
        //boton pantalla 4
        case 4:
            if(mouseX > 110 && mouseX < 319 && mouseY > 827 && mouseY < 862){
                console.log('se clikeó');
                socket.emit('tapinformation');
            }
            break;
    
    }
}



