const game = new Phaser.Game(800, 600, Phaser.AUTO, '', {
    preload : preload,
    create: create,
    update: update

})

function preload () {
    game.load.image('sky', './assets/sky.png')
    game.load.spritesheet('player', './assets/blue.png')
    game.load.spritesheet('beast', './assets/beast.png')
    game.load.spritesheet('robot1', './assets/robotsheet.png')
    
}
function create () {
    game.physics.startSystem(Phaser.Physics.ARCADE)

    game.add.sprite(0, 0, 'sky')
}
function update () {}
