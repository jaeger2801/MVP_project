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
    pantalla = 0;

    //metodo que permite el funcionamiento del cuadro de texto para poner el nombre
        userInput = createInput('');
        

    canvas = createCanvas(428, 926);
    /* canvas.style('position', 'fixed');
    canvas.style('top', '0');
    canvas.style('right', '0'); */

    

    //variable necesaria para poder hacer barra de carga
    ancho = 20;
}

function draw() {
    background(255, 50);
    fill(0);
    ellipse(pmouseX, pmouseY, 50, 50);

    switch(pantalla){

        case 0:
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
    pantalla = 1;
    ancho = 0;
}
}
    break;
    

//--------------------------------------------------------------------
    //pantalla 2
        case 1:
        //Boton de entendido
        fill(255)
        rectMode(CORNER)
        rect(110,827,209,35, 37);
        
        //Interfaz de las instrucciones
        image(imgPant1, 0, 0);
        
        break; 

//---------------------------------------------------------------------
    //pantalla 3
        case 2:
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
        //Pantalla 4, aqui va la interacción del juego
        case 3:
            fill(0)
        rectMode(CORNER)
        rect(0, 0, 428, 926)


        fill(255)
        rectMode(CORNER)
        rect(110,827,209,35, 37);
            break;
    }
}

function mouseClicked(){
    switch(pantalla){
        case 1:
            //rect(110,827,209,35, 37);
            if(mouseX > 110 && mouseX < 319 && mouseY > 827 && mouseY < 862){
                pantalla = 2;
                console.log('se clikeó el cambio de pantalla');
            }
            break;

        //------------------------------------------------------------------------------
        //boton pantalla 3
        case 2:
            if(mouseX > 110 && mouseX < 319 && mouseY > 827 && mouseY < 862){
                pantalla = 3;
                console.log('se clikeó el cambio de pantalla');
            }
            break;

             //------------------------------------------------------------------------------
        //boton pantalla 4
        case 3:
            if(mouseX > 110 && mouseX < 319 && mouseY > 827 && mouseY < 862){
                console.log('se clikeó');
                socket.emit('tapInformation');
            }
            break;
    
    }
}



