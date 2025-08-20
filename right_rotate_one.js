let arr = [1,2,3,4,5]
let copy = arr[4]

for(i=4; i>=0; i--){
   arr[i] = arr[i-1]

}
arr[0] = copy
console.log(arr);
