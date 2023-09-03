function minIncrementForUnique(nums: number[]): number {
    nums.sort((a,b)=>a-b)
    let count:number=0
    for(let i:number=1;i<nums.length;i++){
        if(nums[i]<=nums[i-1]){
            let add:number=nums[i-1]-nums[i]+1
            nums[i] +=add
            count+=add
        }
    }
    return count
};