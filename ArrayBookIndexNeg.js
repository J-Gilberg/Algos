function solution(list) {
    let startNum;
    let endNum;
    let output = '';
    list.map((n,i) => {
        if((n != endNum+1)){
            if(i != 0){
                if(startNum <= endNum-2){
                    output += `${startNum}`;
                    output += `-${endNum},`;
                }else if(startNum != endNum){
                    output += `${startNum}`;
                    output += `,${endNum},`;
                }else{
                    output += `${startNum},`;
                }
            }
            startNum = n;
            endNum = n;
        }else{
            endNum = n;
        }
        if(i == list.length-1){
            if(startNum <= endNum-2){
                output += `${startNum}`;
                output += `-${endNum}`;
            }else if(startNum != endNum){
                output += `${startNum}`;
                output += `,${endNum}`;
            }else{
                output += `${startNum}`;
            }
        }
    });
    return output;
}

console.log(solution([-6, -3, -2, -1, 0, 1, 3, 4, 5, 7, 8, 9, 10, 11, 14, 15, 17, 18, 19, 20]));//, "-6,-3-1,3-5,7-11,14,15,17-20")
