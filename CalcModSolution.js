function solution(number){
    sum = 0;
    if(num < 0){
        return sum;
    }
    for(var num = 0;num<number; ++num){
        if(num%3 === 0 || num%5 === 0){
            sum += num;
        }
    };
    return sum;

}

console.log(solution(10));