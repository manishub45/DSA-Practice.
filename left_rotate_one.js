let arr = [1,2,3,4,5]
let copy = 1

for(i=0; i<arr.length-1; i++){
    arr[i] = arr[i+1]

}
arr[4] = copy
console.log(arr);




