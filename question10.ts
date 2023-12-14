
   const checkLeapYear = (leapYear:number) => {
    console.log(leapYear);
    if ((0 == leapYear % 4) && (0 != leapYear % 100) || (0 == leapYear % 400)) {
        console.log(`${leapYear},This is leap year`)
    }else{
        console.log(`${leapYear}, is not leap year`)
    }
   }

   checkLeapYear(1902)