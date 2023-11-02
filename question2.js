//  Q2) Given an array of strings strs, group the anagrams together. You can return the answer in
//  any order.
//  An Anagram is a word or phrase formed by rearranging the letters of a different word or phrase,
//  typically using all the original letters exactly once.

const anagramCollection = (strs)=>{
    let anagramList = {}

    for(let elem of strs){
        let anagramEntry = elem.split("").sort().join("")  // since splitting and then sorting and joining will return same word for each strs array elem
        anagramList[anagramEntry] = anagramList[anagramEntry] || []
        anagramList[anagramEntry].push(elem)
    }
    return Object.values(anagramList)

}