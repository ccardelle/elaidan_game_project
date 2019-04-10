class Example1 extends Phaser.Scene {
    constructor() {
        super ({key:"Example1"});
    }
    preload () {
        this.load.image('sky', 'assets/sky.png')
        this.load.image('player', 'assets/blue.png')
        this.load.image('beast', 'assets/beast.png')
        this.load.image('robot1', 'assets/robotsheet.png')
    }

    create () {
        this.image = this.add.image(400, 300,'sky');
    }
}