import 'rxjs/add/operator/switchMap';
import { Component, Input, OnInit }	from '@angular/core';
import { ActivatedRoute, Params }	from '@angular/router';
import { Location }					from '@angular/common';

import { JenisObat }			from './jenis-obat';
import { JenisObatService }		from './jenis-obat.service';

@Component({
 	selector: 'detail-jenis-obat-page',
 	templateUrl: './detail-jenis-obat.component.html',
 	providers: [JenisObatService]
})

export class DetailJenisObatComponent {
	jenisObat: JenisObat;

	constructor(
		private jenisObatService: JenisObatService,
		private route: ActivatedRoute,
		private location: Location
	) {}

	ngOnInit(): void {
		this.route.params
			.switchMap((params: Params) => this.jenisObatService.getJenisObat(+params['id']))
			.subscribe(jenisObat => this.jenisObat = jenisObat);
	}

	goBack(): void {
		this.location.back();
	}
}