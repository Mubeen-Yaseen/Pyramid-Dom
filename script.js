let array=[];
for (i=1; i<=12;i++){
        array.push(" ".repeat(12-i)+"!".repeat(2*i-1)+" ".repeat(12-i))
    }
let result=''
for (const arry of array){
 result=result+'\n'+arry
}
console.log(result)
