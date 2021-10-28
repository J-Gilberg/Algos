// sort the list and you dont have to double back thought. Note... need too look into data maniplutaion that could make to opperation eaiser. 

var threeSum = function(nums) {
    let output = [];
    let max = Math.max(...nums);
    let min = Math.min(...nums);
    let i = 0
    let j = nums.length -1;
    let tempSum = 0;
    if(nums.filter((num)=>num === 0).length >= 3) output.push([0,0,0]);
    while(i < nums.length-1){
        tempSum = -1 * (nums[i] + nums[j]);
        if(tempSum >= min && tempSum <= max){
            if (nums.filter((num, index)=>{return num === tempSum && index != i && index != j}).length > 0){
                if(output.filter(array => {return array.includes(nums[i]) && array.includes(nums[j])}).length <= 0){
                    output.push([nums[i], nums[j], tempSum]);
                }
            }
        }
        if(i === j-1){
            j = nums.length -1;
            ++i;
        }else{
            --j;
        }
    }
    
    return output;
};

console.log(threeSum([-1,0,1,2,-1,-4]));
console.log(threeSum([]));
console.log(threeSum([0]));
console.log(threeSum([0,0,0]));
console.log(threeSum([-4,-2,1,-5,-4,-4,4,-2,0,4,0,-2,3,1,-5,0]))