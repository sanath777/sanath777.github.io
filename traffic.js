export default class Traffic{
    constructor(game){
        this.game=game;
        this.context=this.game.context;
        this.car= new Image;
        this.car.src="./assets/images/car-2.png";
        this.y=Math.floor(Math.random()*3);
        this.speed=Math.random()*7 + 2;
        this.yposition=0;
        this.lane=[150,270,410];
    }
    getpositionx(){
        return this.lane[this.y];
    }
    update(){
        this.yposition+=this.speed;
        this.context.drawImage(this.car,0,0,152,180,this.lane[this.y],this.yposition,152,180);
    }
}