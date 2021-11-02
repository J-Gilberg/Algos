// sort the list and you dont have to double back thought. Note... need too look into data maniplutaion that could make to opperation eaiser. 

var threeSum = function (nums) {
    if(nums.length === 0) return nums;
    const quickSort = (i, j) => {
        let p = Math.floor(Math.random() * (j - i)) + i;
        let start = i;
        let end = j;
        while (i < j) {
            if (nums[i] >= nums[p] && nums[j] <= nums[p]) {
                [nums[i], nums[j]] = [nums[j], nums[i]];
                if (i === p) p = j;
                else if (j === p) p = i;
            }
            if (nums[i] <= nums[p] && i != p) ++i;
            if (nums[j] >= nums[p] && j != p) --j;
        }
        if (start != j) quickSort(start, j - 1);
        if (end != i) quickSort(i + 1, end);
    };
    //[-4,-1,-1,0,1,2]
    const findSets = (i, j) => {
        // let max = nums[nums.length - 1];
        // let min = nums[0];
        let inv = 0;
        let output = [];
        let f = 0;
        while (i < nums.length - 1) {
            while (j > i + 1) {
                inv = nums[i] + nums[j] != 0 ? -1 * (nums[i] + nums[j]) : 0;
                f = j - 1
                while (nums[f] >= inv && f > i) {
                    if (nums[f] === inv) {
                        output.push([nums[i], nums[j], inv]);
                        break;
                    }
                    --f;
                }
                --j
                while(nums[j] === nums[j + 1]){ --j};
            }
            ++i;
            j = nums.length-1;
            while(nums[i] === nums[i - 1]){ ++i};
            console.log(`output: ${output}`);
        }
        return output;
    };
    console.log(`nums: ${nums}`);
    quickSort(0, (nums.length - 1));
    console.log(`nums: ${nums}`);
    return findSets(0, (nums.length - 1));;
};

// var threeSum = function(nums) {
//     let output = [];
//     let max = Math.max(...nums);
//     let min = Math.min(...nums);
//     let i = 0
//     let j = nums.length -1;
//     let tempSum = 0;
//     if(nums.filter((num)=>num === 0).length >= 3) output.push([0,0,0]);
//     while(i < nums.length-1){
//         tempSum = -1 * (nums[i] + nums[j]);
//         if(tempSum >= min && tempSum <= max){
//             if (nums.filter((num, index)=>{return num === tempSum && index != i && index != j}).length > 0){
//                 if(output.filter(array => {return array.includes(nums[i]) && array.includes(nums[j])}).length <= 0){
//                     output.push([nums[i], nums[j], tempSum]);
//                 }
//             }
//         }
//         if(i === j-1){
//             j = nums.length -1;
//             ++i;
//         }else{
//             --j;
//         }
//     }

//     return output;
// };

//[-4,-1,-1,0,1,2]
console.log(threeSum([-1, 0, 1, 2, -1, -4]));
console.log(threeSum([]));
console.log(threeSum([0]));
console.log(threeSum([0, 0, 0]));
console.log(threeSum([-4, -2, 1, -5, -4, -4, 4, -2, 0, 4, 0, -2, 3, 1, -5, 0]))