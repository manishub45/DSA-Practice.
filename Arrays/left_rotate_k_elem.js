let arr = [1,2,3,4,5]
let k = 14
k = k % arr.length
let count = 0

for(let j=0; j<k; j++){
    count++
let copy = arr[0]

for(let i=0; i<arr.length-1; i++){
    arr[i] = arr[i+1]

}
arr[4] = copy

}
console.log(arr);
console.log(count);


