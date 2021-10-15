function add(a, b) {
    let additionStr = '';
    let remainder = 0;
    let m = 0;
    let o = 0;
    let subtotal = 0

    let mainStr = a;
    let otherStr = b;
    let lenDiff = mainStr.length - otherStr.length;
    if (lenDiff < 0) {
        mainStr = b;
        otherStr = a;
        lenDiff = mainStr.length - otherStr.length
    }

    for (var i = mainStr.length - 1; i >= 0; --i) {
        m = parseInt(mainStr[i]);
        if(i - lenDiff < 0){
            o = 0;
        }else{
            o = parseInt(otherStr[i - lenDiff]);
        }

        subtotal = (m + o + remainder);
        console.log(`m ${m}, o ${o}, remainder ${remainder}`)
        if (subtotal > 9) {
            additionStr = (subtotal - 10) + additionStr;
            remainder = 1;

        } else {
            additionStr = subtotal + additionStr;
            remainder = 0;
        }
    }
    if(remainder == 1){
        additionStr = remainder + additionStr;
    }
    return additionStr; // Fix me!
}

console.log(add("1", "1"));//, "2");
console.log(add("123", "456"));//, "579");
console.log(add("888", "222"));//, "1110");
console.log(add("1372", "69"));//, "1441");
console.log(add("12", "456"));//, "468");
console.log(add("101", "100"));//, "201");
console.log(add('63829983432984289347293874', '90938498237058927340892374089'));//, "91002328220491911630239667963")
