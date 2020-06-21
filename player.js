export default class PlayerControl{
    constructor(current){
        this.current=current;
        this.context=this.current.context;
        this.y_pos=480;
        this.player= new Image;
        this.player.src="./assets/images/car.png";
        this.lane=[150,270,410];
        this.y=Math.floor(Math.random()*3);
        this.x_pos=this.lane[this.y];
        document.addEventListener("click", function(event){
            this.x = event.clientX; 
            if (this.x>100 && this.x<=250) this.x_val=0;
            else if (this.x>250 && this.x<=400) this.x_val=1;
            else if (this.x>400 && this.x<=520) this.x_val=2;
            else this.x_val=0;
            console.log(this.x_val);
            location.reload();
          });
          document.addEventListener("keydown", function(event){
              if (event.keyCode==32){
                location.reload();
              }
            
          });
    }
    moveleft(){
        this.x_pos-=7;
        if (this.x_pos<=100) this.x_pos=100;
    }
    moveright(){
        this.x_pos+=7;
        if (this.x_pos>=470) this.x_pos=470;
    }

    movedown(){
        this.y_pos+=7;
        if (this.y_pos>=490) this.y_pos=490;
    }

    update(){
        //console.log(this.x_pos);
        this.y_pos-=1;
        this.context.drawImage(this.player,this.x_pos,this.y_pos);
    }
}