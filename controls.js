export default class Controls{
    constructor(option){
        this.road=option.road;
        this.playerCar=option.playerCar;
        this.init();
    }
    init(){
        document.addEventListener("keydown",(e)=>{
            //console.log(e.keyCode);
            switch(e.keyCode){
                case 37:
                    this.playerCar.moveleft();
                    break;
                case 39:
                    this.playerCar.moveright();
                    break;
                case 40:
                    this.playerCar.movedown();
                    break;
                default:
                    break; 
            }
        });
    }
      
}