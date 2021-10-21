function topThreeWords(text) {
    text = text.toLowerCase()
    let word = '';
    let words = [];
    for(let i = 0; i<text.length; ++i){
        if(text[i] == ' '){
            if(word.length) words.push(word);
            word = '';
        }else{
            word += text[i];
        }
    }
    let unique = new Set(words);
    words.forEach(item => {
        if(!unique[item]) unique[item] = 0;    
        unique[item] += 1;
    });
    words = [];
    let max = 0;
    for(let i = 0;i<3;++i){
        word = '';
        max = 0;
        unique.forEach(item => {
            if(unique[item] > max){
                max = unique[item];
                word = item;
            }
        });
        if(word !== ''){
            unique.delete(word);
            words.push(word);
        }
    }
    return words;
}

console.log(topThreeWords("a a a  b  c c  d d d d  e e e e e"));//, ['e', 'd', 'a'])

console.log(topThreeWords("a a c b b"));//, ['a', 'b', 'c'])

console.log(topThreeWords("e e e e DDD ddd DdD: ddd ddd aa aA Aa, bb cc cC e e e"));//, ['e', 'ddd', 'aa'])

console.log(topThreeWords("  //wont won't won't "));//, ["won't", "wont"])

console.log(topThreeWords("  , e   .. "));//, ["e"])

console.log(topThreeWords("  ...  "));//, [])

console.log(topThreeWords("  '  "));//, [])

console.log(topThreeWords(`In a village of La Mancha, the name of which I have no desire to call to
  mind, there lived not long since one of those gentlemen that keep a lance
  in the lance-rack, an old buckler, a lean hack, and a greyhound for
  coursing. An olla of rather more beef than mutton, a salad on most
  nights, scraps on Saturdays, lentils on Fridays, and a pigeon or so extra
  on Sundays, made away with three-quarters of his income.`));//, ['a', 'of', 'on']