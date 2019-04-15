class BasicButton extends Phaser.GameObjects.Sprite {
    constructor(config) {
        super(config.scene,400, 400, config.key, config.up);
        config.scene.add.existing(this);
        this.displayWidth = 180;
        this.displayHeight = 50;
        
        
            
        
     }
     
    
    onPressed() {

        
    }   
   
    
  }