//this is basic syntaxx of switch

// switch (key){
//     case CSSMathValue:

//     break;

//     default:
//         break;
// }

//Now understand it
const month=3


switch(month){
    case 1: 
    console.log("January")
    break;  //if this break is not present then all code will bw execute present below from that perticular case except default
    case 2: 
    console.log("feb")
    break;
    case 3: //it means when month 3 then this case will be execute 
    console.log("march")
    break;
    case 4: 
    console.log("april")
    break;
    case 5: 
    console.log("may")
    break;
default:
    console.log("default case match"); //if none of the abovve case will satisfy the condition then this case will be execute
  break;

}


