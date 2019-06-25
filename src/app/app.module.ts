import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { SwiperModule } from 'ngx-swiper-wrapper';

import { AppComponent } from './app.component';
import { SsvUxModule } from '@ssv/ngx.ux';

@NgModule({
	declarations: [
		AppComponent
	],
	imports: [
		BrowserModule,
		SwiperModule,
		SsvUxModule
	],
	providers: [],
	bootstrap: [AppComponent]
})
export class AppModule { }
