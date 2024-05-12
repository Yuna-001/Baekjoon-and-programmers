function solution(fees, records) {
    const [basicTime,basicFee,unitTime,unitFee] = fees;
    const inRecords = {};
    const totalTime = {};
    const result = [];
    
    for(let record of records){
        const [time,car,inOut] = record.split(" ");
        const [hour,minute] = time.split(":").map(x => +x);
        
        if(inOut === "IN"){
            inRecords[car] = hour*60 + minute;
        }else {
            totalTime[car] = (totalTime[car] || 0) + hour*60 + minute - inRecords[car];
            delete inRecords[car];
        }
    }
    
    for(const car in inRecords){
        totalTime[car] = (totalTime[car] || 0) + 23*60 + 59 - inRecords[car];
    }
    
    for(const [car, time] of Object.entries(totalTime)){
        let fee = basicFee;
        if(time > fees[0]){
            fee += Math.ceil((time - basicTime) / unitTime) * unitFee;
        }
        result.push([car,fee])
    }
    
    return result.sort((a,b)=>a[0]-b[0]).map(x => x[1]);
}