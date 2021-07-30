import { Component, OnInit } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { StratismainService } from '../_service/stratismain.service';

@Component({
  selector: 'app-stratismainnet',
  templateUrl: './stratismainnet.component.html',
  styleUrls: ['./stratismainnet.component.scss']
})
export class StratismainnetComponent implements OnInit {
  mainetashboardStatResponse: any;
  consensusTipHeight: any;
  consensusBestBlock: any;
  consensusDeploymentFlag: any;
  transactionlist: any;
  rPClistMethod: any;
  constructor(private stratismainService: StratismainService, private http: HttpClient) { }

  ngOnInit(): void {
    this.GetDashboardStats();
    this.BlockStoreGetBlockCount();
    this.ConsensusDeploymentFlags();
    this.ConsensusGetBestBlockHash();
    this.transactionlist();
    this.GetRPCListMethod();

  }

  BlockStoreGetBlockCount() {
    this.stratismainService.BlockStoreGetBlockCount().subscribe((response: any) => {
      console.log(response);
      if (response) {
        this.consensusTipHeight = response;

      } else {        
        alert('Oops...');
        (error: any) => {
          console.log(error);
        }
      }
    });
  }

  ConsensusGetBestBlockHash() {
    this.stratismainService.ConsensusGetBestBlockHash().subscribe((response: any) => {
      console.log(response);
      if (response) {
        this.consensusBestBlock = response;

      } else {
        alert('Oops...');
        (error: any) => {
          console.log(error);
        }
      }
    });
  }
  ConsensusDeploymentFlags() {
    this.stratismainService.ConsensusDeploymentFlags().subscribe((response: any) => {
      console.log(response);
      if (response) {
        this.consensusDeploymentFlag = response;

      } else {
        alert('Oops...');
        (error: any) => {
          console.log(error);
        }
      }
    });
  }


  GetDashboardStats() {   
    this.http.get('https://cirrusapi.stratisplatform.com/api/Dashboard/Stats', { observe: 'response', responseType: 'text' })
      .subscribe((Response) => {
        console.log('Test ');
        this.mainetashboardStatResponse = Response.body;
        console.log(JSON.stringify(this.mainetashboardStatResponse));
      })    

  }
  //A list of the TX IDs for all the transactions in the mempool are retrieved.
  GetMemPool() {
    this.stratismainService.GetMemPool().subscribe((response: any) => {
      console.log(response);
      if (response) {
        this.transactionlist = response;
      } else {
        alert('Oops...');
        (error: any) => {
          console.log(error);
        }
      }
    });
  }

  GetRPCListMethod() {
    this.stratismainService.GetRPCListMethod().subscribe((response: any) => {
      console.log(response);
      if (response) {
        this.rPClistMethod = response;
      } else {
        alert('Oops...');
        (error: any) => {
          console.log(error);
        }
      }
    });
  }
}
