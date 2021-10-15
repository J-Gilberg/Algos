function elderAge(m,n,l,t) {
    let sum = 0;
    let lagNeg = l%2>0 ? Math.ceil(l/2)*l : ((l/2)+0.5)*l;
    let arr = [];
    // lagNeg = 

    // let sub = 0;
    // console.log(lagNeg);
    if(m>=n){
        m = m - l;
        for(let i = 0;i < m;++i){
            sum += (i^Math.floor(n/2));
        }

        sum = sum * n;
        // sum = (sum - (m*l - lagNeg))*n
    }else{
        for(let i = 0;i < n;++i){
            arr.push(Math.floor(m/2)^i);

            sum += (Math.floor(m/2)^i);
            // sub = Math.floor(m/2)^i;
            // if(sub >= l){
            //     sum += sub;
            // }
            // sum += (Math.floor(m/2)^i);
        }
        console.log(arr)
        // console.log(sum);
        sum = (sum * m);
        // sum = Math.ceil((sum - ((n-(l+.5))*l)) * m); // wors for 4323
        // sum = (sum - (n*l - lagNeg))*m
    }

    return sum%t;
}

// console.log(elderAge(5,20,1,100));//, );
// console.log(elderAge(8,5,1,100));//, 5);
// console.log(elderAge(8,8,0,100007));//, 224);

// console.log(elderAge(25,31,0,100007));//, 11925);
console.log(elderAge(5,45,3,1000007));//, 4323);
console.log(elderAge(31,39,7,2345));//, 1586);
// console.log(elderAge(545,435,342,1000007));//, 808451);
// // You need to run this test very quickly before attempting the actual tests :)
// console.log(elderAge(28827050410, 35165045587, 7109602, 13719506));//, 5456283);