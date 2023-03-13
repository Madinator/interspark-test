import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule  } from '@angular/forms';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { HttpClientModule } from '@angular/common/http';

import { CreateJobRoutingModule } from './job-form-routing.module';
import { JobFormComponent } from './job-form.component';
import { JobService } from 'app/core/services/job/job.service';
import { UtilsService } from 'app/shared/service/utils/utils.service';


@NgModule({
  declarations: [
    JobFormComponent
  ],
  imports: [
    CommonModule,
    CreateJobRoutingModule,
    FormsModule,
    NgbModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [
    JobService,
    UtilsService
  ]
})
export class CreateJobModule { }
