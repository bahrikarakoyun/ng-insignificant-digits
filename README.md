# Angular Currency Insignificant Digits Pipe

 This pipe makes the **Insignificant Digits** in the currencies found on the exchange sites more opaque with an HTML tag..

## Import your module


``` TypeScript
import { BrowserModule } from  '@angular/platform-browser';
import { NgModule } from  '@angular/core';
import { AppComponent } from  './app.component';
import { InsignificantDigits } from  '../insignificant-digits.pipe';

  

@NgModule({
	declarations: [
		AppComponent,
		InsInsignificantDigits
	],
	imports: [
		BrowserModule,
	],
	bootstrap: [AppComponent]
})
export  class  AppModule { } }

```

## Call pipe from HTML

```HTML
<div  [innerHTML]="0.00023000 | insignificantDigits"></div>
```

## Pipe TS

```TypeScript
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
```
> **Note:** This pipe start from the beginning . If you want to change direction you just change **slice()** direction to negative and tag order.