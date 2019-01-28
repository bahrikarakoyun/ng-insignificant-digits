import { Pipe, PipeTransform } from  '@angular/core';

@Pipe({
	name:  'insignificantDigits'
})

export  class  InsignificantDigits  implements  PipeTransform {
	transform(val) {
		val  =  val.toString();
		let  insignificant;
		for (let  index  =  1; index  <=  val.length; index++) {

			if(val.slice(0, index) >  0){
				index  ==  1  ?  insignificant  =  val  :  insignificant  =  "<span style='opacity: .5'>"  +  val.slice(0, index  -  1) +  "</span>"  +  val.slice(index  -  1);
				break;
			}
		}
		return  insignificant;
	}
}