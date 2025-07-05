function solution(genres, plays) {
    const genrePopularity = {};
    const music = {};
    
    for(let i=0; i<genres.length; i++){
        const genre = genres[i]
        genrePopularity[genre] = (genrePopularity[genre] || 0 ) + plays[i];
        
        if(!music[genre]) music[genre] = [];
        music[genre].push({index:i,play:plays[i]});
    }
    
    const genreRanking = Object.entries(genrePopularity).sort((a,b)=>b[1]-a[1]);
    
    const result = [];
    
    for(const [genre] of genreRanking){
        const genreMusicRanking = music[genre].sort((a,b)=>{
            if(a.play === b.play) return a.index-b.index;
            return b.play-a.play;
        });
        
        for(let i=0; i<Math.min(2,genreMusicRanking.length); i++){
            result.push(genreMusicRanking[i].index);
        }
    }
    
    return result;
}