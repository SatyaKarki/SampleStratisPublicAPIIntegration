import { Injectable } from '@angular/core';
import { ROOT_URLMainnet } from '../_model/config';
import { HttpClient } from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class StratismainService {

  constructor(private http: HttpClient) { }
  BlockStoreGetBlockCount() {
    return this.http.get(ROOT_URLMainnet + '/api/BlockStore/GetBlockCount');
  }

  ConsensusGetBestBlockHash() {
    return this.http.get(ROOT_URLMainnet + '/api/Consensus/getbestblockhash');
  }
  ConsensusDeploymentFlags() {
    return this.http.get(ROOT_URLMainnet + '/api/Consensus/deploymentflags');
  }
  GetMemPool() {
    return this.http.get(ROOT_URLMainnet + '/api/Mempool/getrawmempool');//A list of the TX IDs for all the transactions in the mempool are retrieved.
  }

  GetRPCListMethod() {
    return this.http.get(ROOT_URLMainnet + '/api/RPC/listmethods');
  }
  
}
