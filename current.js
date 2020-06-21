import Road from "./road.js";
import PlayerControl from "./player.js";
import Controls from "./controls.js";
import Traffic from "./traffic.js";
import {collide} from "./collision.js";
export default class Current{
    constructor(context){
        this.context= context;
        this.road= new Road(this);
        this.playerCar= new PlayerControl(this);
        new Controls({
            road:this.road,playerCar:this.playerCar
        });
        setInterval(()=>this.createCar(),2500);
        this.traffic=[];
       
    }
    createCar(){
        let car= new Traffic(this);
        this.traffic.push(car);
    }
    update(){
        this.road.update();
        this.playerCar.update();
        this.traffic.forEach(z=>{
                z.update();
        })
        if(collide(this.playerCar,this.traffic)){
            let q=document.querySelector(".try-again");
            q.style.display="block";
            document.addEventListener("keydown", function(e){
                if(e.keyCode!=32){
                    return;
                }
                let q=document.querySelector(".try-again");
                q.style.display="none";
                document.onkeydown=null;
                location.reload();
              });
        }
    }
}