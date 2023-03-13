import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { JobComponent } from './job.component';

const routes: Routes = [{ 
  path: '', 
  component: JobComponent,
  children: [
    {
      path: '',
      loadChildren: () => import('app/core/pages/job/jobs-list/jobs-list.module').then(m => m.JobsListModule)
    },
    {
      path: 'new',
      loadChildren: () => import('app/core/pages/job/job-form/job-form.module').then(m => m.CreateJobModule)
    },
    {
      path: ':id',
      loadChildren: () => import('app/core/pages/job/job-form/job-form.module').then(m => m.CreateJobModule)
    },
  ] 
}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class JobRoutingModule { }
