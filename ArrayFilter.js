function filter_list(l) {
    let i = 0;
    let begin = false;
    while(i < l.length){
        if (typeof l[i] === 'string') {
            l = [...l.slice(0, i), ...l.slice(i + 1, l.length)];
            begin = true;
        }
        if(begin){
            i = 0;
            begin =false
        }else{
            ++i;
        }
    }
    return l;
}

console.log(filter_list(['a','b']));//,[1,2])
console.log(filter_list([1,'a','b',0,15]));//,[1,0,15])
console.log(filter_list([1,2,'aasf','1','123',123]));//,[1,2,123])