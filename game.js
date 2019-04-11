 var config = { 
     type: Phaser.AUTO,
     width:800,
     height:600,
     physics: {
        default: 'arcade',
        arcade: {
            gravtiy: {x : 0, y: 0}
        }
     },
     scene: [Menu, Stage1]
    };

var game = new Phaser.Game(config);




