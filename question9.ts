let units=200;
let percent = 0;
let perUnit = 10;

if(units>100 && units<=200){
    percent = units*perUnit * 0.10;
    console.log(`add 10% tax`)
    
}else if(units>200 && units<=500){
    percent = units*perUnit * 0.15;
    console.log(`add 15% tax`)
}
else if(units>500){
    percent = units*perUnit * 0.25;
    console.log(`add 25% discount`)
}
console.log("Total Bill: ",(units*perUnit)+percent, " including: ",percent," Tax")