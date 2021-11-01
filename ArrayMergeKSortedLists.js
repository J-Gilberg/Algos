// if i or j === p then swap and reset runner? Need to be able to swap with pivot then rerun based of swap pivot.
var mergeKLists = function (lists) {
    let runner = null;
    var arr = [];
    lists.forEach((node)=>{
        runner = node;
        while (runner) {
            arr = [...arr, runner.val];
            runner = runner.next;
        }
    })
    if(arr.length ===0) return new ListNode().val = null;
    var i = 0;
    var j = arr.length - 1;
    const quickSort = (i, j) => {
        let p = Math.floor(Math.random() * (j - i)) + i;
        let start = i;
        let end = j;
        let pivot = arr[p]
        while (i < j) {
            if (arr[i] >= pivot && arr[j] <= pivot) {
                [arr[i], arr[j]] = [arr[j], arr[i]];
                if(i===p){
                    p = j;
                }else if(j===p){
                    p = i;
                }
            }
            if (arr[i] <= pivot && i != p) {
                ++i
            }
            if (arr[j] >= pivot && j != p) {
                --j
            }
        }
        if (start != j) {
            quickSort(start, j - 1)
        }
        if (end != i) {
            quickSort(i + 1, end)
        }
    };
    quickSort(i, j);
    let output = new ListNode();
    runner = output;
    arr.forEach((num, i)=>{
        runner.val = num
        if(i < arr.length-1){
            runner.next = new ListNode()
        }
        runner = runner.next;
    })
    return output
};

console.log(mergeKLists({ val: [1, 4, 5], next: { val: [1, 3, 4], next: { val: [2, 6], next: null } } }));