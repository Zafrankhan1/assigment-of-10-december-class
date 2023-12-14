// check weather the number is divisible by 3 or 5 or both

let num=15;

if(num%3===0 && num%5===0){
    console.log('it is divible by both')
}
else if (num%3===0){
    console.log('it is divisble by 3 only')
}else if(num%5===0){

    console.log('it is divisble by 5 only')
}else{
    console.log('not divisible by anyone')
}
