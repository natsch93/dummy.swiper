import { Component, OnInit } from '@angular/core';
import { SwiperConfigInterface } from 'ngx-swiper-wrapper';
import { ViewportService, ViewportSizeType } from '@ssv/ngx.ux';
import { tap } from 'rxjs/operators';

// tslint:disable

@Component({
	selector: 'app-root',
	templateUrl: './app.component.html',
	styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {

	// 9
	isViewportSmall: boolean;
	config: SwiperConfigInterface = {
		loop: true,
		// observer: true,
		navigation: true,
		// slidesPerGroup: 3,
		slidesPerView: 3,
		spaceBetween: 20,
		// loopAdditionalSlides: 3
		// loopedSlides: 0
		pagination: {
			type: "bullets",
			clickable: true
		}

	};
	items: string[] = [
		'item 1',
		'item 2',
		'item 3',
		'item 4',
		'item 5',
		'item 6',
		'item 7',
		'item 8',
		'item 9',
		'item 10',
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
