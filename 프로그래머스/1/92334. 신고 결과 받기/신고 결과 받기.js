function solution(id_list, report, k) {
    const user = {};
    const reportedUser = {};
    const mail = {};
    
    for(const str of report){
        const [reporting, reported] = str.split(" ");
        
        if(!reportedUser[reported]){
            reportedUser[reported] = new Set();
        }
        
        reportedUser[reported].add(reporting);
    }
    
    for(const reported in reportedUser){
        if(reportedUser[reported].size >= k){
            for(const reporting of reportedUser[reported]){
                mail[reporting] = (mail[reporting] || 0) + 1;
            }
        }
    }
    
    const result = [];
    
    for(const id of id_list){
        result.push(mail[id] ?? 0);
    }
    
    return result;
}