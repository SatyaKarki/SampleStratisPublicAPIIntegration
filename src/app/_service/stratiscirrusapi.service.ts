import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ROOT_URL } from '../_model/config';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class StratisCirrusAPIService {

  constructor(private http: HttpClient) { }
  BlockStoreGetBlockCount() {
    return this.http.get(ROOT_URL + '/api/BlockStore/GetBlockCount');
  }

  ConsensusGetBestBlockHash() {
    return this.http.get(ROOT_URL + '/api/Consensus/getbestblockhash');
  }

  ConsensusDeploymentFlags() {
    return this.http.get(ROOT_URL + '/api/Consensus/deploymentflags');
  }

  //ConsensusGetBlockHash() {
  //  return this.http.get(ROOT_URL + '/api/Consensus/getblockhash'); //this needs parameters
  //}

  GetMemPool() {
    return this.http.get(ROOT_URL + '/api/Mempool/getrawmempool');//A list of the TX IDs for all the transactions in the mempool are retrieved.
  }
 
  GetDashboardStats() {
    this.http.get('https://cirrusapi.stratisplatform.com/api/Dashboard/Stats', { observe: 'response' })
      .pipe(map((data: any) => {
        //console.log(data);
        return data;
      }));

  }
 
}
