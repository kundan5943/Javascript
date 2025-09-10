/*Writeaswitchstatementtoprintthemonthsinaquarter.MonthsinQuarter1:January,February,MarchMonthsinQuarter2:April,May,JuneMonthsinQuarter3:July,August,SeptemberMonthsinQuarter4:October,November,December*/
let n=Number(prompt("Type a Quarter Number"));

switch(n)
{
      case 1:
      console.log("January,February,March");
        break;
      case 2:
      console.log( "April,May,June");
      break;
      case 3:
        console.log("July,August,September");
        break;
      case 4:
        console.log("October,November,December");
        break;
    default:
        console.log("Quarter Number is not right");

}