
//Create the socket
let socket = io();
let contador = 0;
let pantalla;

/* let character = {
    x: 0,
    y: 0
};
let speed = 10; */

function setup() {
    pantalla = 0
    frameRate(60);
    createCanvas(1920, 1080);
    
}

function draw() {
    switch(pantalla){
        case 0:
            background(235, 190, 155);
            fill(80, 36, 25);
            textSize(30);
            text('Publicidad del juego', 50, 50);
            break;
    //---------------------------------------------------
        case 1:
            background(235, 190, 155);
            fill(80, 36, 25);
            textSize(30);
            text('instrucciones del juego', 50, 50);
            break;
    }
    
}

socket.on('tapinformation', (tapInformations)  => {
    contador +=1;
    console.log(contador);
    })

//aqui se va a hacer el llamado del cambio de pantalla
socket.on('cambio1', (cambioPantalla1) => {
    pantalla = 1;
})

/*
Listen to the event and use the directions
You may want to use switch-case structure
*/

    socket.on('position', (movement)=> {

        switch (movement) {
            case 'UP': 
            character.y -= speed;
                
                break;
        
                case 'DOWN': 
            character.y += speed;
                
                break;
    
                case 'RIGHT': 
            character.x += speed;
                
                break;
    
                case 'LEFT': 
            character.x -= speed;
                
                break;
            
        }
        
    })
    



/* socket.on('positions', (character) => {
    character.x, character.y = character;
}); */