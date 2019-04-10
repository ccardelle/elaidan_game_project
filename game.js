 var config = { 
     type: Phaser.AUTO,
     width:600,
     height:480,
     physics: {
        default: 'arcade',
        arcade: {
            gravtiy: {y: 200}
        }
     },
     scene: [Menu]
    };

var game = new Phaser.Game(config);




