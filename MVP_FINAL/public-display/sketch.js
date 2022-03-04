//Create the socket
let socket = io();
let contador = 0;

let character = {
    x: 0,
    y: 0
};
let speed = 10;

function setup() {
    frameRate(60);
    createCanvas(windowWidth, windowHeight);
    character.x = windowWidth / 2;
    character.y = windowHeight / 2;
}

function draw() {
    background(235, 190, 155);
    fill(80, 36, 25);
    noStroke();
    ellipse(character.x, character.y, 50, 50);
}

socket.on('tapInformation' ); {
    console.log(contador);
    this.contador +1;
}

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