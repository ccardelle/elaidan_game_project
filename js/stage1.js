var onGround = true; 
var newBg;
var stage1song;
var hit;
var jump;
var cursors;
var player1;
var platforms;
var bgBuildings2;
var bgBuildings1;
var scoreTitle;
var scoreTime = 0;
var scoreSystem;
var finalScore;
var follower;
var path;
var graphics;
var zoneTriangle1;
var zoneTriangle2;
var metroNote;
var colorFill;
var pageHighScore; //= document.getElementsByClassName("hiScoreInt")[0].innerHTML;


var healthBarBase;
var healthBar;
var healthWidth = 250;
var healthBarSystem;

var antiHold = true;
var zoneColor = 0xcf1692;
var beatTimeColor;

var slimes;
var mySlime1;
var mySlime2;
var mySlime3;
var mySlime4;
var mySlime5;

class Stage1 extends Phaser.Scene {
  constructor() {
      super ({key:"Stage1"});
  }


  preload () {
      

      this.load.image('stage1', 'assets/bg-1.png')
      this.load.image( 'buildings', 'assets/bg-3.png')
      this.load.audio('stage1song', ['assets/songs/tfat.mp3']);
      this.load.audio('hit', ['assets/songs/hit.wav']);
      this.load.audio('jump', ['assets/songs/jump.wav']);
      this.load.spritesheet('gello', 'assets/gello.png',{frameWidth: 16, frameHeight: 16});
      this.load.spritesheet('player1sprite' , 'assets/blue.png',{frameWidth: 16, frameHeight: 16});
      this.load.spritesheet('ground' , 'assets/tiles.png',{frameWidth: 400, frameHeight: 200});
      this.load.image('spark', 'assets/fire.png');
  }


  create () {
    
    
    
    scoreTime = 0;
    healthWidth = 250;
    zoneColor = 0;

    //Creates score timer

    scoreSystem = setInterval(function () {scoreTime += 5}, 458);
    beatTimeColor = setInterval(function() {zoneColor = 0x7CFC00; setTimeout(function (){zoneColor = 0xcf1692}, 250)}, 458
    );
    

    newBg = this.add.sprite(400, 300, 'stage1');
    newBg.displayWidth = 1000;
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
    


  
    

    //Stage1  Music and Sounds
    stage1song = this.sound.add('stage1song');
    stage1song.volume = .2;
    setTimeout(function() {stage1song.play()}, 0);

    hit = this.sound.add('hit');
    hit.volume = .2;

    jump = this.sound.add('jump');
    jump.volume = .1;

    



    // Ground
    platforms = this.physics.add.staticGroup();

    platforms.create(250, 825, 'ground').setScale(3.3).setTint(1).refreshBody();

   // Zone Triangles
    zoneTriangle1 = this.add.graphics();
    zoneTriangle2 = this.add.graphics();
  
    //Player
    player1 = this.physics.add.sprite(0, 470, 'player1sprite');
    player1.setScale('1.8');
    player1.setBounce(0.2);
    player1.setCollideWorldBounds(true);
    player1.body.setGravity(0, 1200);
    

    

    // Player animations
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

    this.anims.create({
      key: 'idle',
      frames: this.anims.generateFrameNumbers('gello', { start: 0, end: 5}),
      frameRate: 10,
      repeat: -1
  });


     


    slimes = this.physics.add.group();
    slimes.enableBody = true;
    
    
    
            
      
     mySlime1 = slimes.create(500, 250, 'gello');
     mySlime1.body.setGravity(-100,400);
     mySlime1.body.bounce.y = .8;
     mySlime1.body.collideWorldBounds = true;
     mySlime1.anims.play('idle', true);
     mySlime1.body.velocity.x =-150;
     mySlime1.setScale('1.7');
     mySlime1.flipX = true;
     mySlime1.syncBounds = true;

     mySlime2 = slimes.create(500, 250, 'gello');
     mySlime2.body.setGravity(-100,400);
     mySlime2.body.bounce.y = 1;
     mySlime2.body.collideWorldBounds = true;
     mySlime2.anims.play('idle', true);
     mySlime2.body.velocity.x =-200;
     mySlime2.setScale('1.7');
     mySlime2.flipX = true;

     mySlime3 = slimes.create(500, 250, 'gello');
     mySlime3.body.setGravity(150,400);
     mySlime3.body.bounce.y = .7;
     mySlime3.body.collideWorldBounds = true;
     mySlime3.anims.play('idle', true);
     mySlime3.body.velocity.x =275;
     mySlime3.setScale('1.7');
     mySlime3.flipX = true;

     mySlime4 = slimes.create(500, 250, 'gello');
     mySlime4.body.setGravity(200,400);
     mySlime4.body.bounce.y = .8;
     mySlime4.body.collideWorldBounds = true;
     mySlime4.anims.play('idle', true);
     mySlime4.body.velocity.x =-150;
     mySlime4.setScale('1.7');
     mySlime4.flipX = true;
     mySlime4.syncBounds = true;

     mySlime5 = slimes.create(500, 250, 'gello');
     mySlime5.body.setGravity(200,400);
     mySlime5.body.bounce.y = .8;
     mySlime5.body.collideWorldBounds = true;
     mySlime5.anims.play('idle', true);
     mySlime5.body.velocity.x =-150;
     mySlime5.setScale('1.7');
     mySlime5.flipX = true;
     mySlime5.syncBounds = true;

     
    // Collisions


    this.physics.add.collider(slimes, slimes);

    this.physics.add.collider(slimes, platforms);
    this.physics.add.collider(slimes, player1, playerSlimeCollide);
     this.physics.add.collider(player1, platforms, function(e){
       onGround = true; 
     });

      // NEW PATHING SYSTEM
      graphics = this.add.graphics();

      follower = { t: 0, vec: new Phaser.Math.Vector2() };

      
      var line1 = new Phaser.Curves.Line([ 0, 550, 800, 550 ]);
      

      path = this.add.path();

      path = new Phaser.Curves.Path();

      path.add(line1);

      this.tweens.add({
          targets: follower,
          t: 1,
          ease: 'Linear',
          duration: 458,
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
    player1.flipX = true;
    player1.anims.play('left', true);
    if (player1.body.x > 0 && player1.body.x < 771) {
    bgBuildings2.x -=.3
    bgBuildings1.x -= .5;
    newBg.x += .4;
    }
}   
    else
{
  player1.setVelocityX(0);

  player1.anims.play('turn');
}
    if (cursors.right.isDown)
    {
      player1.setVelocityX(250);
      player1.flipX = false;
      player1.anims.play('right', true);
      if (player1.body.x > 0 && player1.body.x < 771) {
        bgBuildings2.x +=.3;
        bgBuildings1.x += .5;
        newBg.x -= .4;
        }

    }
    
    if (cursors.up.isDown)
    {
      if(onGround){
        player1.setVelocityY(-450);
        player1.anims.play('right', true);
        healthBar.clear();
        jump.play();
        scoreTime += 5;
        
      }
      onGround = false; 
    }
  
  if (cursors.space.isDown && antiHold) 
  {
    if (zoneColor === 0x7CFC00 && healthWidth + 10 <= 250 ) {
      setTimeout(healthWidth += 10, 20);
      healthBar.clear();
      antiHold = false;
      scoreTime += 5;
      console.log(healthWidth);

    } else if (zoneColor === 0x7CFC00 && healthWidth + 10 >= 250 ) { 
      antiHold = false;
      scoreTime += 5;

    } else {
      healthBar.clear();
      //healthWidth -= 15;
      antiHold = false;
    }
  }

  if (cursors.space.isUp) 
  {
    antiHold = true;
  }


  

    
    // Rectangle graphics
    graphics.clear();
    graphics.lineStyle(2, 0xffffff, 1);

    //path.draw(graphics);

    path.getPoint(follower.t, follower.vec);

    colorFill = graphics.fillStyle(zoneColor, 1);
    metroNote = graphics.fillRect(follower.vec.x - 8, follower.vec.y - 8, 24, 24);

    zoneTriangle1.clear();
    zoneTriangle2.clear();
    zoneTriangle1.fillStyle(zoneColor, 1);
    zoneTriangle2.fillStyle(zoneColor, 1);
    zoneTriangle1 = zoneTriangle1.fillRect(0, 500, 24, 100);
    zoneTriangle2 = zoneTriangle2.fillRect(776, 500, 24, 100);
 


    
    // Updates score
    scoreTitle.text = `Score: ${scoreTime}`;
    
    //Updates Health
    healthBar.fillStyle(0x7CFC00, 1);
    healthBar.fillRect(10, 10, healthWidth, 24);
    

  // Checks health to end the game.

    if (healthWidth <= 0) {
      stage1song.stop();
      healthWidth = 250;
      finalScore = scoreTime; 
      clearInterval(scoreSystem);
      clearInterval(beatTimeColor);
      this.scene.stop("Stage1");
      this.scene.start("GameOver");
      pageHighScore = document.getElementsByClassName("hiScoreInt")[0].innerHTML;
      if (Number(pageHighScore) < Number(finalScore)) {
        document.getElementsByClassName("hiScoreInt")[0].innerHTML = finalScore;
        console.log(finalScore);
      }
      
      
    }

    if (mySlime1.x <= 13.8)
    {
      mySlime1.setPosition(Math.floor(Math.random() * 780), 10);
      mySlime1.setVelocityX(-Math.floor(Math.random(300) * 500))
   
    } else if (mySlime1.x >= 785) {
    mySlime1.setPosition(Math.floor(Math.random() * 780), 10);
    mySlime1.setVelocityX(-Math.floor(Math.random(300) * 500));
    }
  

  if (mySlime2.x <= 13.8)
  {
    mySlime2.setPosition(Math.floor(Math.random() * 780), 10);
    mySlime2.setVelocityX(-Math.floor(Math.random(300) * 500))
 
  } else if (mySlime2.x >= 785) {
    
    mySlime2.setPosition(Math.floor(Math.random() * 780), 10);
    mySlime2.setVelocityX(-Math.floor(Math.random(300) * 500));

  }
  if (mySlime3.x <= 13.8)
    {
      mySlime3.setPosition(Math.floor(Math.random() * 780), 10);
      mySlime3.setVelocityX(-Math.floor(Math.random(300) * 500))
   
    } else if (mySlime3.x >= 785) {
    mySlime3.setPosition(Math.floor(Math.random() * 780), 10);
    mySlime3.setVelocityX(-Math.floor(Math.random(300) * 500));
  
  } 
  if (mySlime4.x <= 13.8)
    {
      mySlime4.setPosition(Math.floor(Math.random() * 780), 10);
      mySlime4.setVelocityX(-Math.floor(Math.random(300) * 500))
   
    } else if (mySlime4.x >= 785) {
    mySlime4.setPosition(Math.floor(Math.random() * 780), 10);
    mySlime4.setVelocityX(-Math.floor(Math.random(300) * 500));
  
  }
  if (mySlime5.x <= 13.8)
  {
    mySlime5.setPosition(Math.floor(Math.random() * 780), 10);
    mySlime5.setVelocityX(-Math.floor(Math.random(300) * 500))
 
  } else if (mySlime5.x >= 785) {
  mySlime5.setPosition(Math.floor(Math.random() * 780), 10);
  mySlime5.setVelocityX(-Math.floor(Math.random(300) * 500));
  
  if ( mySlime1.velocityX <= 100) {
    mySlime1.setVelocityX(200);

  }

  if ( mySlime2.velocityX <= 100) {
    mySlime2.setVelocityX(200);

  }

  if ( mySlime3.velocityX <= 100) {
    mySlime3.setVelocityX(200);

  }

  if ( mySlime3.velocityX <= 100) {
    mySlime3.setVelocityX(200);

  }
  }
  

  // setInterval(function () {healthWidth -=10; healthBar.clear()}, 2000);

  if (player1.body.y >= 467) {
    player1.setVelocityY(-450);
    
  }
}



  


}





function playerSlimeCollide () {
  healthBar.clear();
  setTimeout(healthWidth -= 20, 1000);
  hit.play();
  //console.log(healthWidth);
}

// if (Number(pageHighScore) < Number(finalScore)) {
//   pageHighScore = finalScore;
//   console.log(finalScore);
// }



console.log(pageHighScore);



