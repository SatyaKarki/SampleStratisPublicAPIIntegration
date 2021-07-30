import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TopnavComponent } from './mastertheme/topnav/topnav.component';
import { AsidenavComponent } from './mastertheme/asidenav/asidenav.component';
import { FooterComponent } from './mastertheme/footer/footer.component';
import { HomeComponent } from './home/home.component';
import { SmartcontractComponent } from './apicollection/smartcontract/smartcontract.component';
import { StratismainnetComponent } from './stratismainnet/stratismainnet.component';



@NgModule({
  declarations: [
    AppComponent,
    TopnavComponent,
    AsidenavComponent,
    FooterComponent,
    HomeComponent,
    SmartcontractComponent,
    StratismainnetComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
