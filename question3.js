//  Q3) Given a string s and a array of strings wordArray, return true if s can be segmented into a
//  space-separated sequence of one or more array words.
//  Note that the same word in the array may be reused multiple times in the segmentation.

const segmentationCheck = (s, wordArray)=>{
    if(wordArray==null || wordArray.length===0){
        return false
    }
    const set = new Set(wordArray)

    const touched = new Set()
    const a = [0]
    while(a.length){
        const start = a.shift()
         if(!touched.has(start)){
            for(let end = start + 1;end <=s.length;end++){
               if(set.has(s.slice(start, end))){
                if(end === s.length){
                    return true
                }
                a.push(end)
               } 
               
            }
            touched.add(start);
         }
         
    }
    return false

}