import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { JobService } from 'app/core/services/job/job.service';

import { JobsListRoutingModule } from './jobs-list-routing.module';
import { JobsListComponent } from './jobs-list.component';

@NgModule({
  declarations: [
    JobsListComponent
  ],
  imports: [
    CommonModule,
    JobsListRoutingModule,
    HttpClientModule 
  ],
  providers: [
    JobService
  ]
})
export class JobsListModule { }
