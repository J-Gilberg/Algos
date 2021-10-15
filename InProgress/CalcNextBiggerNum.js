function nextBigger(n) {
    let temp = [...String(n)];
    let swapPoint = -1;
    let output = '';
    let tempOutput = '';
    let i = temp.length-1;
    while(i >=0 && i <= temp.length){
        if(temp[i] > temp[i+1] && swapPoint >= 0){
            [temp[i], temp[i+1]] = [temp[i+1],temp[i]];
            i = swapPoint;
        }else if(swapPoint >= 0){
            ++i;
        }
        if(temp[i] > temp[i-1] && swapPoint < 0){
            [temp[i], temp[i-1]] = [temp[i-1],temp[i]];
            swapPoint = i;
        }else if(swapPoint < 0){
            --i;
        }
    }
    if(swapPoint < 0){
        return -1;
    }
    temp.map((num)=>{output += num});
    output = parseInt(output);
    if(temp[swapPoint-1] > temp[temp.length-1]){
        [temp[swapPoint-1], temp[temp.length-1]] = [temp[temp.length-1],temp[swapPoint-1]];
        temp.map((num)=>{tempOutput += num});
        tempOutput = parseInt(tempOutput);
    }
    return tempOutput > n ? tempOutput: output;
}

//282000
//800022
//800220
//
console.log(nextBigger(12));//, 21)
console.log(nextBigger(513));//, 531)
console.log(nextBigger(272535963997));//, 272535967399)
console.log(nextBigger(2457082966874));//, 2457082967468)
console.log(nextBigger(282000));//, 800022)