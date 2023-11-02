//  Q4) Given an array of non-negative integers nums, arrange them such that they form the largest
//  number and return it.
//  Note return the result in the form of string

const biggestNumber = (nums)=>{
    if(nums.length===1){
        return `${nums[0]}`
    }
    nums.sort((a,b)=>(b+""+a)-(a+""+b))
    return nums.join("")
}