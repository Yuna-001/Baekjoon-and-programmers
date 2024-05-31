function solution(files) {
    const reg = /([^\d]+)(\d+)/;
    const objArr = files.map(file => {
        let [, head, number] = file.match(reg);
        head = head.toLowerCase();
        number = +number;
        return { file , head, number };
    });
    
    return objArr.sort((a,b)=>{
        if(a.head !== b.head) return a.head > b.head ? 1 : -1;
        return a.number - b.number;
    }).map(x => x.file);
}