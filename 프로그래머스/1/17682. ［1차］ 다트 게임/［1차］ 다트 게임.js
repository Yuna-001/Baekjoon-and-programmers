function solution(dartResult) {
    const points = [0,0,0];
    let time = -1;
    
    for(let i=0; i<dartResult.length; i++){
        if(!Number.isNaN(+dartResult[i])){
            time++;
            if(dartResult[i+1]==="0"){
                points[time] += 10;
                i++;
            }else{
                points[time] += +dartResult[i];
            }
        }else{
            switch (dartResult[i]){
                case "D" : points[time] **= 2; 
                    break;
                case "T" : points[time] **= 3; 
                    break;
                case "*" : points[time] *= 2;
                    if(time > 0) points[time-1] *= 2; 
                    break;
                case "#" : points[time] *= -1; 
                    break;
            }
        }
    }
    
    
    return points.reduce((total,point)=>total+point,0);
}