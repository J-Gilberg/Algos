//modify the matrix in place.
var rotate = function (matrix) {
    let yLen = 0
    let xLen = 0
    for (let x = 0; x < matrix.length; ++x) {
        xLen = matrix.length - 1;
        for (let y = 0; y < matrix[x].length - 1; ++y) {
            yLen = matrix[x].length - 1;
            [matrix[x][y], matrix[y][xLen - x]] = [matrix[y][xLen - x], matrix[x][y]]
        }
    }
    if(xLen >= 3 && yLen >= 3){
        for (let x = (xLen-1); x > xLen/2; --x) {
            [matrix[x][xLen-x], matrix[xLen-x][yLen-(xLen-x)]] = [matrix[xLen-x][yLen-(xLen-x)], matrix[x][xLen-x]]
        }
        if (xLen%2 === 0 && yLen%2 === 0) [matrix[xLen/2][(yLen/2)-1], matrix[xLen/2][(yLen/2)+1]] = [matrix[xLen/2][(yLen/2)+1], matrix[xLen/2][(yLen/2)-1]];
    }

    [matrix[xLen][0], matrix[xLen][yLen]] = [matrix[xLen][yLen], matrix[xLen][0]]
    console.log(matrix);
};


rotate([[1, 2, 3], [4, 5, 6], [7, 8, 9]]);
rotate([[5, 1, 9, 11], [2, 4, 8, 10], [13, 3, 6, 7], [15, 14, 12, 16]]);
rotate([[1,2,3,4,5],[6,7,8,9,10],[11,12,13,14,15],[16,17,18,19,20],[21,22,23,24,25]]);


// [[15,13,2,5]
// ,[14,3,4,1]
// ,[12,6,8,9]
// ,[16,7,10,11]]


// [[21,16,11,6,1],[22,17,12,7,2],[23,8,13,18,3],[24,19,14,9,4],[25,20,15,10,5]]
// [[21,16,11,6,1],[22,17,12,7,2],[23,18,13,8,3],[24,19,14,9,4],[25,20,15,10,5]]

// [[4,33,13,32,12,2],[24,1,14,33,27,29],[1,25,32,32,7,20],[6,9,27,2,20,26],[32,21,22,28,13,16],[34,7,26,14,21,28]]
// [[4,33,13,32,12,2]
// ,[24,1,14,33,27,29]
// ,[1,20,32,32,9,20]
// ,[6,7,27,2,25,26]
// ,[32,21,22,28,13,16]
// ,[34,7,26,14,21,28]]