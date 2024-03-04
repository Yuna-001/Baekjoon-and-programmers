function solution(dots) {
    let gapX, gapY;
    dots.sort((a,b)=>a[0]-b[0]);
    gapX = dots[0][0] - dots[2][0];
    gapY = dots[0][1] - dots[1][1];
    return Math.abs(gapX*gapY);
    
}