import { Component, OnInit } from '@angular/core';
import { SwiperConfigInterface } from 'ngx-swiper-wrapper';
import { ViewportService, ViewportSizeType } from '@ssv/ngx.ux';
import { tap } from 'rxjs/operators';

@Component({
	selector: 'app-root',
	templateUrl: './app.component.html',
	styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {

	isViewportSmall: boolean;
	config: SwiperConfigInterface = {
		loop: true,
		observer: true
	};
	items: string[] = [
		'item 1',
		'item 2'
	];

	constructor(
		private viewportService: ViewportService,
	) { }

	ngOnInit() {
		this.viewportService.sizeType$.pipe(
			tap(x => this.isViewportSmall = x.type <= ViewportSizeType.small),
			tap(() => console.warn(">>>> isVPSmall", this.isViewportSmall))
		).subscribe();
	}
}
