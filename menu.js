class Menu extends Phaser.Scene {
    constructor() {
        super ({key:"Menu"});
    }
    preload () {
        this.load.spritesheet({
            key: 'sky',
            url: 'assets/bg-ss.png',
            frameConfig: {
                frameWidth: 500,
                frameHeight: 200,
                startFrame: 0,
                endFrame: 100
            }
        });

        //this.load.image('sky', 'assets/bg-ss.png')
        this.load.audio('theme', ['assets/songs/trillion - intro.wav']);
        
    }


    create () {
        //this.add.image(250, 250, 'sky', 0);
        //this.image.displayWidth = 800;
        //this.image.displayHeight = 600;
                //this.sprite = this.add.sprite(400, 300,'sky', [0]);

        this.add.text(200, 200, 'TITLE TEXT', { font: '60px' , fill: '#00ff00' });

        this.add.text(150, 300, 'FIRST SONG - (EASY)', { font: '40px', fill: '#00ff00' });
        var music = this.sound.add('theme');
        
        var mysprite = this.add.sprite(250, 250, 'sky');
        //mysprite.frame = 2;
        

        
        

        

        //music.play();
    }

    update () {

    }
}
    