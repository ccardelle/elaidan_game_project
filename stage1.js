class Stage1 extends Phaser.Scene {
  constructor() {
      super ({key:"Stage1"});
  }
  preload () {
      

      this.load.image('sky', 'assets/sky.png')
      this.load.audio('theme', ['assets/songs/trillion - intro.wav']);
      
  }


  create () {
      var bg = this.add.image(400, 300, 'sky');
      bg.displayWidth = 800;
      bg.displayHeight = 600;
      

      this.add.text(200, 200, 'TITLE TEXT', { font: '60px' , fill: '#00ff00' });

      this.add.text(150, 300, 'FIRST SONG - (EASY)', { font: '40px', fill: '#00ff00' });
      var music = this.sound.add('theme');
      
      

      
      

      

      //music.play();
  }

  update () {

  }
}