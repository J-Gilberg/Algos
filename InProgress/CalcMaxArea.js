var maxArea = function (height) {
    let i = 0;
    let j = 0;
    let max = 0;
    let area = 0;
    let level = 0;
    while (i < height.length - 1) {
        if (height[i] >= level) {
            if (height[i] < height[j]) {
                level = height[i]
                area = level * (j - i);
            } else {
                level = height[j]
                area = level * (j - i);
            }
            if (area > max) {
                max = area;
                console.log(`i:${i}`);
                console.log(`j:${j}`);
                console.log(`Max: ${max}`);
            }
        }
        if (j < height.length - 1) {
            ++j;
        } else {
            ++i;
            j = i + 1;
        }
    }
    return max;
};

console.log(maxArea([1, 8, 6, 2, 5, 4, 8, 3, 7]));
console.log(maxArea([1, 1]));
console.log(maxArea([4, 3, 2, 1, 4]));
console.log(maxArea([1, 2, 4, 3]));