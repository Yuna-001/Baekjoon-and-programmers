function solution(id_list, report, k) {
    const reportedUsers = {};
    
    for(const arr of report){
        const [reporting,reported] = arr.split(" ");
        
        if(!reportedUsers[reported]) reportedUsers[reported] = new Set();
        reportedUsers[reported].add(reporting);
    }
    
    const mail = {};
    
    for(const reported in reportedUsers){
        if(reportedUsers[reported].size < k) continue;
            
        for(const reporting of reportedUsers[reported]){
            mail[reporting] = (mail[reporting] || 0) + 1;
        }
    }
    
    return id_list.map(id => mail[id] ? mail[id] : 0);
}