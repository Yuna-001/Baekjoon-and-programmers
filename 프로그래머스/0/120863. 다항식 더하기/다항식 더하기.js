function solution(polynomial) {
    let x1 = 0;
    let x0 = 0;
    let result = "";
    const arr = polynomial.split(" + ");
    for(let i=0; i<arr.length; i++){
        if (arr[i].at(-1) === "x"){
            x1 +=  arr[i].length === 1 ? 1 : +arr[i].slice(0,-1);
        }else{
            x0 += +arr[i];
        }
    }
    
    if(x1 !== 0){
        if(x1 === 1){
            result+= `x`;
        }else{
            result+= `${x1}x`;
        }
        
        if (x0 !== 0){
            result+=` + ${x0}`;
        }
    } else{      
            result+=`${x0}`;
    }
    
    return result;
}