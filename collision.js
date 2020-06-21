export function collide(playerCar,traffic){
    for(let i=0; i<traffic.length; i++){
        let car=traffic[i];
        if(car.yposition>(playerCar.y_pos-170) && car.yposition<(playerCar.y_pos-159)){
            console.log(car.getpositionx(),playerCar.x_pos)
            if(car.getpositionx()==playerCar.x_pos){
                return true;
            }
        }
    }
    return false;
}