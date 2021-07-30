import { Component, OnInit } from '@angular/core';
import { StratisCirrusAPIService } from '../_service/stratiscirrusapi.service';
import { HttpClient, HttpParams } from '@angular/common/http';
import { map } from 'rxjs/operators';
import { Observable } from 'rxjs/internal/Observable';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styles: [
  ]
})
export class HomeComponent implements OnInit {
  consensusTipHeight: any;
  consensusBlockHash: any;
  dashboardStatResponse: any;
  consensusDeploymentFlags: any;
  transactionlist: any;
  valueTest: any;
  private valeuofdata: Observable<any>| undefined;
  constructor(private stratisPublicAPIService: StratisCirrusAPIService, private http: HttpClient) { }

  ngOnInit(): void {
    console.log('Load');
    this.BlockStoreGetBlockCount();
    this.ConsensusGetBestBlockHash();
    this.GetDashboardStats();
    this.ConsensusDeploymentFlags();
    this.GetMemPool();
  }
  BlockStoreGetBlockCount() {
    this.stratisPublicAPIService.BlockStoreGetBlockCount().subscribe((response: any) => {
      console.log(response);
      if (response) {
        this.consensusTipHeight = response;

      } else {
        // Swal.fire('Oops...', 'Something went wrong!, Please contact your administrator', 'error');
        alert('Oops...');
        (error: any) => {
          console.log(error);
        }
      }
    });
  }

  ConsensusGetBestBlockHash() {
    this.stratisPublicAPIService.ConsensusGetBestBlockHash().subscribe((response: any) => {
      console.log(response);
      if (response) {
        this.consensusBlockHash = response;

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
        console.log('Test Sat');
        this.dashboardStatResponse = Response.body;
        console.log(JSON.stringify(this.dashboardStatResponse));
    })  
  }

  ConsensusDeploymentFlags() {
    this.stratisPublicAPIService.ConsensusDeploymentFlags().subscribe((response: any) => {
      console.log(response);
      if (response) {
        this.consensusDeploymentFlags = response;
      } else {
        alert('Oops...');
        (error: any) => {
          console.log(error);
        }
      }
    });
  }
 //A list of the TX IDs for all the transactions in the mempool are retrieved.
  GetMemPool() {
    this.stratisPublicAPIService.GetMemPool().subscribe((response: any) => {
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
}
