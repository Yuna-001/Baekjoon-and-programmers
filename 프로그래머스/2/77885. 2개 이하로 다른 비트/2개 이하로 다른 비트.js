function solution(numbers) {
    const result = [];

    for(const n of numbers){
        const bits = ("0" + n.toString(2)).split("");
        let zeroIdx = bits.lastIndexOf("0");
        bits[zeroIdx] = "1";
        if(zeroIdx < bits.length - 1) bits[zeroIdx+1] = "0";
    
        result.push(parseInt(bits.join(""),2));
    }
    
    return result;
}