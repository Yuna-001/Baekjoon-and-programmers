function solution(id_list, report, k) {
    const reportSet = new Set(report);
    const reportObj = {};
    const countObj = {};
    
    for(const id of id_list){
        reportObj[id] = [];
        countObj[id] = 0; 
    }
    
    for(const str of reportSet){
        const [a,b] = str.split(" ");
        reportObj[b].push(a);
    }
    
    for(const key in reportObj){
        if(reportObj[key].length >= k){
            for(const id of reportObj[key]){
                countObj[id]++;
            }
        }
    }
    
    return id_list.map(id => countObj[id]);
}