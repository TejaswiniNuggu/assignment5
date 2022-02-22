let getoddnum=(array)=>{
       let o=[];
       for(let i in array){
           if(array[i]%2==1)
            o.push(array[i])
      } return o
    }
    array=[1,2,3,4,5,6,7,8,9,10]
    console.log(getoddnum(array))

let capstr=(str)=> {
  return str.toLowerCase().replace(/\b[a-z]/g, s => s.toUpperCase());
}
console.log(capstr('iron man'));

let sum=(array)=>{
           let sum=0;
           for(let i in array){
              sum=sum+array[i]; 
            } return (sum)
       }
        array=[1,2,3,4,5,6,7,8,9,10]
       console.log(sum(array))
let isPrime=(num)=>{
       for (let start = 2; num > start; start++) {
        if (num % start == 0) {
           return false;
         }
     }
    return num > 1;
    }
    array=[1,2,3,4,5,6,7,8,9,10]
    console.log(array.filter(isPrime));
    
let palindrome=(array)=>{
    var x=[]
    for(let i=0; i<array.length; i++) {
    if(array[i]==array[(array.length-1)-i]){
      x.push(array[i]);
    }
    else
    x.push('notpali')
    }return x.join(' ');
    }
    array=[1,2,3,4,5,5,4,3,2,1]
    console.log(palindrome(array))
    
