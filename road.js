export default class Road{
    constructor(current){
        this.current=current;
        this.context=this.current.context;
        this.y=-380;
        this.road= new Image;
        this.road.src="./assets/images/road-3.png";
    }
    update(){
        if (this.y>=0) this.y= -380;
        this.context.drawImage(this.road,0,this.y);
        this.context.drawImage(this.road,0,this.y+380);
        this.context.drawImage(this.road,0,this.y+760);
        this.y+=10;
    }
}