
var hsv;
var i = 0;
var gameOvertitle;
var buttonText;
var button;
var gameover_song;
var finalScoreText;

class GameOver extends Phaser.Scene {
    constructor() {
        super ({key:"GameOver"});
    }
    preload () {
        

        this.load.image('sky', 'assets/bgfixed.gif')
        this.load.audio('gameover_song', ['assets/songs/gameover.mp3']);
        this.load.spritesheet('buttons', 'assets/buttons/flixel-button.png',{frameWidth:80, frameHeight: 20});
        
    }


    create () {
        // Background
        var bg = this.add.image(400, 300, 'sky');
        bg.tint = 0;
        bg.displayWidth = 800;
        bg.displayHeight = 600;
        
        
        hsv = Phaser.Display.Color.HSVColorWheel();

        //  Title Text
        gameOvertitle = this.add.text(110, 200, 'Y o u  D i e d', { fontSize: '96px', fontFamily: 'font1', fill: "#fff" });
        gameOvertitle.setStroke('#ff369b', 10);
        gameOvertitle.setShadow(2, 2, "#000000", 2, true, true);
        
        
        

        

        // Button
        button = new BasicButton({
            'scene': this,
            'key':'buttons',
            'up': 0,
            'over':1,
            'down':2,
            'x': 240,
            'y': 480
            
        });
        let _this = this;

        button.setInteractive().on('pointerdown', this.onDown)
        button.setInteractive().on('pointerup', () => {this.onUp(_this)})
        
        //Button Text
        buttonText = this.add.text(342, 382, 'Restart', { font: "30px Arial Black", fill: "#000000" });

        //Menu  Music
        gameover_song = this.sound.add('gameover_song');
        gameover_song.volume = .1;
        
        //menuSong.play();
        var songStart = setTimeout(gameover_song.play(), 544);
        //clearInterval(songStart);
        
        finalScoreText = this.add.text(260, 500, `Final Score: ${finalScore}`, { font: "30px Arial Black", fill: "#FFFFFF" });
    }
    
    onDown () {
        button.setScale('1.7');
        buttonText.setScale('.9');
        buttonText.setX('355');
        buttonText.setY('382');
    }
        
    onUp (_this) {
        button.setScale('2');
        buttonText.setScale('1');
        buttonText.setX('349');
        buttonText.setY('380');
        this.scene.switch('Stage1');
        gameover_song.stop();
        game.scene.stop('GameOver');
        clearInterval(bump);
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
try {
var bump = setInterval(titleDanceGameOver, 544);
//clearInterval(bump);
}
catch (e) {
    
}

finally {

}




function titleDanceGameOver () {

    try {

    setTimeout(function(){gameOvertitle.setScale(1.3); gameOvertitle.setX(35)}, 0);
    setTimeout(function(){gameOvertitle.setScale(1.2); gameOvertitle.setX(60)}, 100);
    setTimeout(function(){gameOvertitle.setScale(1.15); gameOvertitle.setX(80)}, 120);
    setTimeout(function(){gameOvertitle.setScale(1.1); gameOvertitle.setX(100)}, 140);
    setTimeout(function(){gameOvertitle.setScale(1); gameOvertitle.setX(110)}, 175);
    }

    catch (e) {

    }
    finally  {

    }
    
    }
