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
     scene: [Menu]
    };

var game = new Phaser.Game(config);




