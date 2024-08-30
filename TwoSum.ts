//Given an array of integers nums and an integer target, return indices of the two numbers such that they add up to target.
//You may assume that each input would have exactly one solution, and you may not use the same element twice.
//You can return the answer in any order.


const twoSum = (nums: number[], target: number): number[] | undefined => {
    return nums.flatMap((num, i) => 
        nums.slice(i + 1).map((n, j) => n === target - num ? [i, j + i + 1] : [])
    ).find(arr => arr.length > 0);
};

//Can you come up with an algorithm that is less than O(n2) time complexity?

//R: You just have to use a map instead of looping but its more fun this way