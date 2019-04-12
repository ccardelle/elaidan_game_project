class Stage1 extends Phaser.Scene {
  constructor() {
      super ({key:"Stage1"});
  }
  preload () {
      

      this.load.image('stage1', 'assets/bg-1.png')
      this.load.image( 'buildings', 'assets/bg-3.png')
      this.load.audio('stage1song', ['assets/songs/Fault - Medium.mp3']);
      this.load.spritesheet('sawblade', 'assets/saw_blade.png',{frameWidth: 32, frameHeight: 32});
      this.load.spritesheet('player1sprite' , 'assets/blue.png',{frameWidth: 16, frameHeight: 16});
      this.load.spritesheet('ground' , 'assets/tiles.png',{frameWidth: 400, frameHeight: 200});

  }


  create () {
      
    var newBg = this.add.sprite(400, 300, 'stage1');
    newBg.displayWidth = 800;
    newBg.displayHeight = 600;
    
    bgBuildings2 = this.add.image(300 ,300, 'buildings');
    bgBuildings2.setScale(1);
    bgBuildings2.setTint(1);
    

    bgBuildings1 = this.add.image(350 ,300, 'buildings');
    bgBuildings1.setScale(1.7);
    
    
    


    
    

    //Stage1  Music
    var music = this.sound.add('stage1song');
    music.volume = .2;
    music.play();

    



    // Ground
    platforms = this.physics.add.staticGroup();

    platforms.create(250, 825, 'ground').setScale(3.3).refreshBody();

   
  
    //Player
    player1 = this.physics.add.sprite(0, 470, 'player1sprite');
    player1.setScale('1.8');
    player1.setBounce(0.2);
    player1.setCollideWorldBounds(true);
    player1.body.setGravity(20);
    


    this.anims.create({
        key: 'left',
        frames: this.anims.generateFrameNumbers('player1sprite', { start: 0, end: 2 }),
        frameRate: 10,
        repeat: -1
    });

    this.anims.create({
        key: 'turn',
        frames: [ { key: 'player1sprite', frame: 5 } ],
        frameRate: 20
    });

    this.anims.create({
        key: 'right',
        frames: this.anims.generateFrameNumbers('player1sprite', { start: 0, end: 2}),
        frameRate: 10,
        repeat: -1
    });
     
    


  
  
        
    setInterval(function () {sawBlade.create(Math.floor(Math.random() * 350), Math.floor(Math.random() * 350), 'sawblade', )}, 916);

     //Sawblade object
     sawBlade = this.physics.add.group({
      key: 'sawblade',
      repeat: 0,
      setXY: { x: 0, y: 600, stepX: 0 },
      
    });
 
    //setInterval(function () {sawBlade.create(Math.floor(Math.random() * 800), 250, 'sawblade')}, 457);
    
 
 
       sawBlade.children.iterate(function (child) {
         
        child.setCollideWorldBounds(true);
        child.setVelocityX(160);
       
      });
     
     
     this.physics.add.collider(sawBlade, platforms);
     this.physics.add.overlap(player1, sawBlade, collectSaw, null, this);
     this.physics.add.collider(player1, platforms);
 
     }
  

  update () {


    // Controls
    cursors = this.input.keyboard.createCursorKeys();

    if (cursors.left.isDown)
{
    player1.setVelocityX(-250);

    player1.anims.play('left', true);
}
    else if (cursors.right.isDown)
    {
      player1.setVelocityX(250);

      player1.anims.play('right', true);
    }
        
    else
    {
      player1.setVelocityX(0);

      player1.anims.play('turn');
    }

    
    
  }

  
}



var cursors;
var sawBlade;
var player1;
var platforms;
var bgBuildings2;
var bgBuildings1;

function collectSaw (player1, sawBlade)
{
    sawBlade.disableBody(true, true);
}
