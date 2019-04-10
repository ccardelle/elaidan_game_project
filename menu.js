class Menu extends Phaser.Scene {
    constructor() {
        super ({key:"Menu"});
    }
    preload () {
        

        this.load.image('sky', 'assets/bgfixed.gif')
        this.load.audio('theme', ['assets/songs/trillion - intro.wav']);
        
    }


    create () {
        var bg = this.add.image(400, 300, 'sky');
        bg.displayWidth = 800;
        bg.displayHeight = 600;
        
        hsv = Phaser.Display.Color.HSVColorWheel();

        //  Title Text
        title = this.add.text(210, 200, 'ElaidaN', { font: "92px Arial Black", fill: "#fff" });
        title.setStroke('#00f', 16);
        title.setShadow(2, 2, "#333333", 2, true, true);


        //this.add.text(230, 200, 'TITLE TEXT', { font: '60px Arial' , fill: 'cyan' });

        //this.add.text(170, 300, 'FIRST SONG - (EASY)', { font: '40px', fill: '#00ff00' });
        var music = this.sound.add('theme');
        
        

        
        

        

        //music.play();
    }

    update () {
        var top = hsv[i].color;
        var bottom = hsv[359 - i].color;
    
        title.setTint(top, top, bottom, bottom);
        
    
        i++;
    
        if (i === 360)
        {
            i = 0;
        }
    }
}
var hsv;
var i = 0;
var title;
