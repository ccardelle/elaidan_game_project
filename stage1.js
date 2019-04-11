class Stage1 extends Phaser.Scene {
  constructor() {
      super ({key:"Stage1"});
  }
  preload () {
      

      this.load.image('stage1', 'assets/sky.png')
      this.load.audio('stage1song', ['assets/songs/Mode - Easy.mp3']);
      
  }


  create () {
      
    var newBg = this.add.image(400, 300, 'stage1');
    newBg.displayWidth = 800;
    newBg.displayHeight = 600;
      

      this.add.text(200, 200, 'TITLE TEXT', { font: '60px' , fill: '#00ff00' });

      this.add.text(150, 300, 'FIRST SONG - (EASY)', { font: '40px', fill: '#00ff00' });
      
      
      //Stage1  Music
      var music = this.sound.add('stage1song');
      music.volume = .2;
      music.play();

      
      

      

      
  }

  update () {

  }
}