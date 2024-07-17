function solution(a, b, c) {
    const set = new Set([a,b,c]);
    
    switch (set.size){
        case 3 : return a + b + c ;
        case 2 : return (a + b + c) * (a ** 2 + b ** 2 + c ** 2) ;
        case 1 : return 27 * (a ** 6) ;
    }
}