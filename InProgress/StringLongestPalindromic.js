//running into timelimit issue
var longestPalindrome = function (s) {
    if (s.length <= 2) {
        if (s[0] === s[s.length - 1]) {
            return s;
        }
        return s[0];
    }
    while ((s.match(new RegExp(s[s.length - 1], 'g')) || []).length <= 1 && s.length > 2) {
        s = s.slice(0, s.length - 1);
    }
    while ((s.match(new RegExp(s[0], 'g')) || []).length <= 1 && s.length > 2) {
        s = s.slice(1, s.length);
    }
    let i = 0;
    let j = s.length-1;
    while(s[i]===s[j]){
        if(i===j || i+1 === j){
            return s;
        }
        ++i;
        --j;
    }
    let temp = longestPalindrome(s.slice(0, s.length - 1));
    let temp2 = longestPalindrome(s.slice(1, s.length));
    if (temp.length > temp2.length) {
        return temp;
    }
    return temp2;
};

// console.log(longestPalindrome('babad'));
// console.log(longestPalindrome('cbbd'));
// console.log(longestPalindrome('a'));
// console.log(longestPalindrome('ac'));
// console.log(longestPalindrome('ccc'));
// console.log(longestPalindrome('eabcb'));
// console.log(longestPalindrome('abdka'));
// console.log(longestPalindrome("aacabdkacaa"));
console.log(longestPalindrome("babaddtattarrattatddetartrateedredividerb"));


// if (s.length % 2 === 0) {
//     if (s.slice(0, Math.floor(s.length / 2)) === s.slice(Math.floor(s.length / 2), s.length).split("").reverse().join("")) return s;
//     s = s.slice(0, s.length - 1);
// } else {

//     if (s.slice(0, Math.floor(s.length / 2)) === s.slice(Math.floor(s.length / 2) + 1, s.length).split("").reverse().join("")) return s;
//     s = s.slice(0, s.length - 1);
// }