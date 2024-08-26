function solution(park, routes) {
    const H = park.length;
    const W = park[0].length;
    let x,y;
    const log =[];
   
    for(let row=0; row < H; row++){
        const col = park[row].indexOf("S");
        if(col !== -1){
            y = row;
            x = col;
            break;
        }
    }
    
    for(let route of routes){
        const [op,n] = route.split(" ");
        let canGo = true;
        let next;
        
        if(op === "E"){
            next = x + +n
            if(next >= W) continue;
            for(let i=x+1; i<=next; i++){
                if(park[y][i] === "X"){
                    canGo = false;
                    break;
                }
            }
            if(canGo) x = next;
        }else if(op === "W"){
            next = x - n
            if(next < 0) continue;
            for(let i=x-1; i>=next; i--){
                if(park[y][i] === "X"){
                    canGo = false;
                    break;
                }
            }
            if(canGo) x = next;
        }else if(op === "N"){
            next = y - n
            if(next < 0) continue;
            for(let i=y-1; i>=next; i--){
                if(park[i][x] === "X"){
                    canGo = false;
                    break;
                }
            }
            if(canGo) y = next;
        }else if(op === "S"){
            next = y + +n
            if(next >= H) continue;
            for(let i=y+1; i<=next; i++){
                if(park[i][x] === "X"){
                    canGo = false;
                    break;
                }
            }
            if(canGo) y = next;
        }
    }
    
    return [y,x];
}