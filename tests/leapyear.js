
function  isLeapYear(year)
{

  return ( year%400===0  || (year%4===0 && year%100!==0)    )

}
for(let y= 2010 ; y<=2026 ;y++)
{
    if(isLeapYear(y)) console.log(`${y} is leap year`)
    else console.log(`${y} is not leap year`)
}


