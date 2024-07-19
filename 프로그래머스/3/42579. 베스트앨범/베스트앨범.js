function solution(genres, plays) {
    const result = [];
    
    // 장르별 총 플레이 수 계산, genrePlays에 저장
    const genrePlays = {};
    
    genres.forEach((genre,i)=>{
        genrePlays[genre] = (genrePlays[genre] || 0) + plays[i];
    })
    
    // 장르 우선 순위, genreOrder에 저장
    const genreOrder = Object.entries(genrePlays).sort((a,b)=>b[1]-a[1]).map(([genre])=>genre);
    
    // 장르별로 곡 정리, genreList에 저장
    const genreList = {};
    
    plays.forEach((play,i)=>{
        if(!genreList[genres[i]]) genreList[genres[i]] = [];
        genreList[genres[i]].push([play,i]);
    })
    
    // genreList에서 장르별로 플레이수에 따라 내림차순 정렬
    for(const genre in genreList){
        genreList[genre].sort((a,b)=>b[0]-a[0]);
    }
    
    // 장르별로 2개씩 result에 저장
    genreOrder.forEach((genre,i)=>{
        const min = Math.min(2, genreList[genre].length);
        for(let i=0; i<min; i++){
            result.push(genreList[genre][i][1]);
        }
    })

    return result;
}