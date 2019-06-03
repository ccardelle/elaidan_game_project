var config = {
  type: Phaser.AUTO,
  width: 800,
  height: 600,
  parent: "canvas-window",
  physics: {
    body: {
      velocity: 0
    },
    default: "arcade",
    arcade: {
      gravtiy: { x: -1000, y: 0 },
      drawDebug: true,
      debug: false
    }
  },
  scene: [Menu, Stage1, GameOver]
};

var game = new Phaser.Game(config);
