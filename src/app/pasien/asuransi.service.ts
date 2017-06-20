import { Injectable }		from '@angular/core';
import { Headers, Http}		from '@angular/http';
import * as _ from "lodash";
import 'rxjs/add/operator/toPromise';

import { Asuransi }	from './asuransi';

@Injectable()
export class AsuransiService {

	//Mock data
	allAsuransi: Asuransi[] = [
		{no_kartu_asuransi: 1231313, nama_asuransi: 'Prudential', id_pasien: 1},
		{no_kartu_asuransi: 12313553, nama_asuransi: 'Prudential', id_pasien: 4},
		{no_kartu_asuransi: 2124141, nama_asuransi: 'BPJS', id_pasien: 1},
		{no_kartu_asuransi: 1241241, nama_asuransi: 'BPJS', id_pasien: 2},
		{no_kartu_asuransi: 1241241, nama_asuransi: 'AIG', id_pasien: 3}
	];

	constructor(private http:Http) { }

	private handleError(error: any): Promise<any> {
		console.error('An error occurred', error);
		return Promise.reject(error.message || error);
	}

	getAllAsuransi(): Promise<Asuransi[]> {
		return Promise.resolve(this.allAsuransi)
			.catch(this.handleError);
	}

	getAsuransi(id: number): Promise<Asuransi[]> {
		return this.getAllAsuransi()
			.then(allAsuransi => 
				_.filter(allAsuransi, {id_pasien: id})
			)
			.catch(this.handleError);
	}
}