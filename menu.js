class Menu extends Phaser.Scene {
    constructor() {
        super ({key:"Menu"});
    }
    preload () {
        

        this.load.image('sky', 'assets/bgfixed.gif')
        this.load.audio('theme', ['assets/songs/trillion - intro.wav']);
        this.load.spritesheet('buttons', 'assets/buttons/flixel-button.png',{frameWidth:80, frameHeight: 20});
        
    }


    create () {
        // Background
        var bg = this.add.image(400, 300, 'sky');
        bg.displayWidth = 800;
        bg.displayHeight = 600;
        
        
        hsv = Phaser.Display.Color.HSVColorWheel();

        //  Title Text
        title = this.add.text(140, 200, 'E l a i d a n', { fontSize: '96px', fontFamily: 'font1', fill: "#fff" });
        title.setStroke('#ff369b', 10);
        title.setShadow(2, 2, "#000000", 2, true, true);
        
        
        

        

        //Button
        button = new BasicButton({
            'scene': this,
            'key':'buttons',
            'up': 0,
            'over':1,
            'down':2,
            'x': 240,
            'y': 480
            
        });


        button.setInteractive().on('pointerdown', this.onDown, button)
        button.setInteractive().on('pointerup', this.onUp, button)
        
        //Button Text
        buttonText = this.add.text(349, 380, 'Start', { font: "36px Arial Black", fill: "#000000" });

        //Menu  Music
        menuSong = this.sound.add('theme');
        menuSong.volume = .2;
        
        //menuSong.play();
        var songStart = setTimeout(menuSong.play(), 457);
        //clearInterval(songStart);
        

    }
    
    onDown () {
        button.setScale('1.7');
        buttonText.setScale('.9');
        buttonText.setX('355');
        buttonText.setY('382');
    }
        
    onUp () {
        button.setScale('2');
        buttonText.setScale('1');
        buttonText.setX('349');
        buttonText.setY('380');
        game.scene.start('Stage1');
        menuSong.stop();

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

var bump = setInterval(titleDance, 457.8);
//clearInterval(bump);





var hsv;
var i = 0;
var title;
var buttonText;
var button;
var menuSong;


function titleDance () {

    setTimeout(function(){title.setScale(1.3); title.setX(65)}, 0);
    setTimeout(function(){title.setScale(1.2); title.setX(85)}, 50);
    setTimeout(function(){title.setScale(1.15); title.setX(95)}, 100);
    setTimeout(function(){title.setScale(1.1); title.setX(120)}, 125);
    setTimeout(function(){title.setScale(1); title.setX(140)}, 150);
    

    
    }
