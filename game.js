 var config = { 
     type: Phaser.AUTO,
     width:800,
     height:600,
     physics: {
        default: 'arcade',
        arcade: {
            gravtiy: {y: 200}
        }
     },
     scene: [Example1]
    };

var game = new Phaser.Game(config);



// function preload () {
//     game.load.image('sky', 'assets/sky.png')
//     game.load.spritesheet('player', 'assets/blue.png')
//     game.load.spritesheet('beast', 'assets/beast.png')
//     game.load.spritesheet('robot1', 'assets/robotsheet.png')
    
// }

// function create () {
//     game.physics.startSystem(Phaser.Physics.ARCADE)

//     game.add.image(0, 0, 'sky')
// }
// function update () {}
