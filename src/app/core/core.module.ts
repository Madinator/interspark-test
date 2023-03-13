
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { JobModule } from 'app/core/pages/job/job.module';


@NgModule({
  declarations: [  
  ],
  imports: [
    CommonModule,
  ],
  exports: [
    JobModule
  ]
})
export class CoreModule { }
