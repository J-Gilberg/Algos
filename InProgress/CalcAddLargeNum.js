function add(a, b) {
    let additionStr = '';
    let remainder = 0;
    let m = 0;
    let o = 0;
    let subtotal = 0
    let mainStr = '';
    let otherStr = '';
    let lenDiff = 0;
    for (let i = 0; i < a.length; ++i) {
        if (a[i] === '0' && i != a.length - 1) {
            a = a.slice(i + 1);
            i = 0;
        } else {
            break;
        }
    }
    mainStr = a;
    for (let i = 0; i < b.length; ++i) {
        console.log(b)
        if (b[i] === '0' && i != b.length - 1) {
            b = b.slice(i + 1);
            
        } else {
            break;
        }
        i = 0;
    }
    console.log(b)
    otherStr = b;
    lenDiff = mainStr.length - otherStr.length;
    if (lenDiff < 0) {
        mainStr = b;
        otherStr = a;
        lenDiff = mainStr.length - otherStr.length
    }
    for (var i = mainStr.length - 1; i >= 0; --i) {
        m = parseInt(mainStr[i]);
        o = i - lenDiff < 0 ? 0 : parseInt(otherStr[i - lenDiff]);
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
    if (remainder == 1) {
        additionStr = remainder + additionStr;
    }
    return additionStr;
}

console.log(add("1", "1"));//, "2");
console.log(add("123", "456"));//, "579");
console.log(add("888", "222"));//, "1110");
console.log(add("1372", "69"));//, "1441");
console.log(add("12", "456"));//, "468");
console.log(add("101", "100"));//, "201");
console.log(add('570527264781947211745203366457', '020876702225128337231614197485'));//, "91002328220491911630239667963")
'571403967007075548976817563942'
'591403967007075548976817563942'