import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {NxModule} from '@nrwl/nx';
import {PrimengComponentsModule} from '@primeng-material/primeng-components';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {FormsModule} from '@angular/forms';
import {PanelMenuModule} from 'primeng/primeng';
import {ButtonModule} from 'primeng/button';
import {DevPlaygroundComponent} from './dev-playground/dev-playground.component';
import {Ng2Webstorage} from 'ngx-webstorage';
import { CookieService } from 'ngx-cookie-service';

@NgModule({
  declarations: [AppComponent, DevPlaygroundComponent],
  imports: [BrowserModule,
    BrowserAnimationsModule,
    FormsModule,
    AppRoutingModule,
    NxModule.forRoot(),
    Ng2Webstorage,
    PanelMenuModule,
    ButtonModule,
    PrimengComponentsModule],
  providers: [CookieService],
  bootstrap: [AppComponent]
})
export class AppModule {
}
