let arr = [1,2,3,4,5]
let k = 7
k = k % arr.length
let count = 0

for(let j=0; j<k; j++){
    count++
let copy = arr[4]

for(let i=4; i>0; i--){
    arr[i] = arr[i-1]

}
arr[0] = copy

}
console.log(arr);
console.log(count);


