let days=17;
 
let weeks=Math.ceil(days/7);
let remaingDays=days%7;

if(days<0){
    console.log('Day not existed ')
}if(weeks===0){
    console.log('week not existed')
}else{
    console.log(`${weeks}week ${remaingDays}day`)
}
