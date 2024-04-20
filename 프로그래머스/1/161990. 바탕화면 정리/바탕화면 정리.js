function solution(wallpaper) {
    let minX = wallpaper[0].length;
    let minY = wallpaper.length;
    let maxX = -1;
    let maxY = -1;
    
    for(let i=0; i<wallpaper.length; i++){
        for(let j=0; j<wallpaper[i].length; j++){
            // i는 y축, j는 x축
            if(wallpaper[i][j] === "#"){
                if(minY > i) minY = i;
                if(minX > j) minX = j;
                if(maxY < i) maxY = i;
                if(maxX < j) maxX = j;
            }
        }
    }
    
    return [minY,minX,maxY+1,maxX+1];
}