console.clear()

var currentday='Thu'

// if(currentday=="Mon"){
//     console.log("Timings:10:00-6:00")
// }else if(currentday="Tue"){
//     console.log("Timings:9:00-6:00")
// }
// else if(currentday="Wed"){
//     console.log("Timings:9:30-6:10")
// }
// else if(currentday="Thu"){
//     console.log("Timings:9:35-6:15")
// }
// else if(currentday="Fri"){
//     console.log("Timings:9:00-6:30")
// }else if(currentday="Sat"){
//     console.log("Timings:10:00-4:00")
// }
// else if(currentday="Sun"){
//     console.log("Timings:9:00-6:00")
// }

switch(currentday){
    case 'Mon':
     console.log("Timings:10:00-6:00")
     break;
    case 'Tue':
     console.log("Timings:9:00-6:00")
     break;
    case 'Wed':
     console.log("Timings:9:30-6:10")
     break;
    case 'Thu':
     console.log("Timings:9:35-6:15")
     break;
    case 'Fri':
     console.log("Timings:9:00-6:30")
     break;
    case 'Sat':
     console.log("Timings:10:00-4:00")
     break;
    case 'Sun':
     console.log("Timings:9:00-6:00")
     break;
     default:
        console.log("Timings:9:00-6:00")

}


//practise problem
var monthnumber = '12'
switch(monthnumber){
	case '3':
		console.log('March')
		console.log('No of days=31')
		break;
		case '4':
		console.log('April')
		console.log('No of days=30')
		break;
		case '5':
		console.log('May')
		console.log('No of days=31')
		break;
		case '6':
		console.log('June')
		console.log('No of days=30')
		break;
		case '7':
		console.log('July')
		console.log('No of days=30')
		break;
		case '8':
		console.log('August')
		console.log('No of days=31')
		break;
		case '9':
		console.log('September')
		console.log('No of days=32')
		break;
		case '10':
		console.log('October')
		console.log('No of days=29')
		break;
		case '11':
		console.log('November')
		console.log('No of days=30')
		break;
		case '12':
		console.log('December')
		console.log('No of days=31')
		break;
		case '1':
		console.log('January')
		console.log('No of days=31')
		break;
			case '2':
		console.log('February')
		console.log('No of days=30')
		break;
	default:
		console.log('No of days=30')
}