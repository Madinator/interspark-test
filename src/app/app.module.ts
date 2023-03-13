import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { CoreModule } from './core/core.module';
import { SharedModule } from './shared/shared.module';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import { HttpClientModule } from '@angular/common/http';
import { JobEffects } from 'app/core/store/job/job.effects';
import { jobReducer } from './core/store/job/job.reducers';
 

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    CoreModule,
    SharedModule,
    HttpClientModule,
    StoreModule.forRoot({ jobs: jobReducer }),
    EffectsModule.forRoot([JobEffects]),
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
