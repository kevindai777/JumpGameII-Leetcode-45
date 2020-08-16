//Objective is the same as 'Jump Game', except this time we want to find the
//minimum number of steps this time

let nums = [2,3,1,1,4]


//O(n) solution where n is the length of the array
//We use a greedy approach here where we update the max position
//we can jump to with every iteration

if (nums.length < 2) {
    return 0
}

//Initialize the first jump
let maxPos = nums[0]
let maxSteps = nums[0]
let jumps = 1

for (let i = 1; i < nums.length; i++) {
    //If loop is not entered, still in current jump range
    if (maxSteps < i) {
        jumps++

        //Jump to the max position
        maxSteps = maxPos
    }
    
    //Update the max position that we can jump to
    maxPos = Math.max(maxPos, nums[i] + i)
}

return jumps