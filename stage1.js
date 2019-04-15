class Stage1 extends Phaser.Scene {
  constructor() {
      super ({key:"Stage1"});
  }
  preload () {
      

      this.load.image('stage1', './assets/bg-1.png')
      this.load.image( 'buildings', './assets/bg-3.png')
      this.load.audio('stage1song', ['./assets/songs/Fault - Medium.mp3']);
      this.load.spritesheet('sawblade', './assets/saw_blade.png',{frameWidth: 32, frameHeight: 32});
      this.load.spritesheet('player1sprite' , './assets/blue.png',{frameWidth: 16, frameHeight: 16});
      this.load.spritesheet('ground' , './assets/tiles.png',{frameWidth: 400, frameHeight: 200});
      this.load.image('spark', './assets/fire.png');
  }


  create () {

    //Creates score timer

    var scoreSystem = setInterval(function () {scoreTime += 5}, 461);
    

    var newBg = this.add.sprite(400, 300, 'stage1');
    newBg.displayWidth = 800;
    newBg.displayHeight = 600;
    
    //particles test

    // var particles = this.add.particles('spark');

    // var emitter = particles.createEmitter();

    // emitter.setPosition(fX, -10);
    // emitter.setSpeed(100);
    // emitter.setBlendMode(Phaser.BlendModes.ADD);

    bgBuildings2 = this.add.image(300 ,300, 'buildings');
    bgBuildings2.setScale(1);
    bgBuildings2.setTint(1);
    

    bgBuildings1 = this.add.image(350 ,310, 'buildings');
    bgBuildings1.setScale(1.7);
    
    // Health Bar Base
    healthBarBase = this.add.graphics();
    healthBarBase.fillStyle(0x000000, 1);
    healthBarBase.fillRect(10, 10, 250, 24);
   
    //Actual Health Bar
    healthBar = this.add.graphics();
    healthBar.fillStyle(0x7CFC00, 1);
    //healthBar.fillRect(10, 10, healthWidth, 24);


  
    

    //Stage1  Music
    stage1song = this.sound.add('stage1song');
    stage1song.volume = .2;
    stage1song.play();

    



    // Ground
    platforms = this.physics.add.staticGroup();

    platforms.create(250, 825, 'ground').setScale(3.3).refreshBody();

   
  
    //Player
    player1 = this.physics.add.sprite(0, 470, 'player1sprite');
    player1.setScale('1.8');
    player1.setBounce(0.2);
    player1.setCollideWorldBounds(true);
    player1.body.setGravity(0, 1200);
    
    


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
     

  
  
        
    //setInterval(function () {sawBlade.create(Math.floor(Math.random() * 800), Math.floor(Math.random() * 400), 'sawblade', )}, 916);

     //Sawblade object
    //  sawBlade = this.physics.add.group({
    //   key: 'sawblade',
    //   repeat: 0,
    //   setXY: { x: 0, y: 600, stepX: 0 },
      
    // });
 
    // //setInterval(function () {sawBlade.create(Math.floor(Math.random() * 800), 250, 'sawblade')}, 457);
    
 
 
    //    sawBlade.children.iterate(function (child) {
         
    //     child.setCollideWorldBounds(true);
    //     child.setVelocityX(160);
       
    //   });
     
     
// Collisions

     //this.physics.add.collider(sawBlade, platforms);
     //this.physics.add.overlap(player1, sawBlade, collectSaw, null, this);

     
     this.physics.add.collider(player1, platforms, function(e){
       onGround = true; 
     });

      // NEW PATHING SYSTEM
      graphics = this.add.graphics();

      follower = { t: 0, vec: new Phaser.Math.Vector2() };

      
      var line1 = new Phaser.Curves.Line([ 0, 550, 800, 550 ]);
      //var line2 = new Phaser.Curves.Line([ 200, 300, 600, 500 ]);

      path = this.add.path();

      path = new Phaser.Curves.Path();

      path.add(line1);
      //path.add(line2);

      this.tweens.add({
          targets: follower,
          t: 1,
          ease: 'Linear',
          duration: 461.5,
          yoyo: true,
          repeat: -1
      });
      
      // Creates base score display
      scoreTitle = this.add.text(650, 10, `Score: ${scoreTime}`, { fontSize: '24px', fontFamily: 'font1', fill: "#fff" });
      

      
 
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
    else if (cursors.up.isDown)
    {
      if(onGround){
        player1.setVelocityY(-450);
        player1.anims.play('right', true);
        healthBar.clear();
        healthWidth -= 100;
      }
      onGround = false; 
    }
    else
    {
      player1.setVelocityX(0);

      player1.anims.play('turn');
    }

    
    
    // Rectangle graphics
    graphics.clear();
    graphics.lineStyle(2, 0xffffff, 1);

    //path.draw(graphics);

    path.getPoint(follower.t, follower.vec);

    colorFill = graphics.fillStyle(0xcf1692, 1);
    metroNote = graphics.fillRect(follower.vec.x - 8, follower.vec.y - 8, 24, 24);
    zoneTriangle1 = graphics.fillRect(0, 500, 24, 100);
    zoneTriangle2 = graphics.fillRect(776, 500, 24, 100);
    
    
    // Updates score
    scoreTitle.text = `Score: ${scoreTime}`;
    
    //Updates Health
    healthBar.fillRect(10, 10, healthWidth, 24);



    if (healthWidth <= 0) {
      stage1song.stop();
      game.scene.start("Menu");
      game.scene.stop("Stage1");
      
    }
  } 

  
    


}




let onGround = true; 
var stage1song;
var cursors;
var sawBlade;
var sawBlade2;
var player1;
var platforms;
var bgBuildings2;
var bgBuildings1;
var scoreTitle;
var scoreTime = 0;


var follower;
var path;
var graphics;
var zoneTriangle1;
var zoneTriangle2;
var metroNote;
var colorFill;


var healthBarBase;
var healthBar;
var healthWidth = 250;
var healthBarSystem;

function collectSaw (player1, sawBlade)
{
    sawBlade.disableBody(true, true);
}

  