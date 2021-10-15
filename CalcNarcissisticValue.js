function narcissistic(value) {
    sum = 0;
    str = String(value);
    for(let i = 0; i < str.length; ++i){
        sum += Math.pow(str[i],str.length);
    }
    return sum == value;
}
console.log(narcissistic(153));