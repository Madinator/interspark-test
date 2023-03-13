import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { map, Observable } from 'rxjs';
import { Router } from '@angular/router';

import { IJob } from 'app/core/models/jobs';
import { JobState } from 'app/core/store/job/job.state';
import { loadJobs } from 'app/core/store/job/job.actions';
import { selectJobs } from 'app/core/store/job/job.selector';

@Component({
  selector: 'app-jobs-list',
  templateUrl: './jobs-list.component.html',
  styleUrls: ['./jobs-list.component.scss']
})
export class JobsListComponent implements OnInit {
  public jobsList$: Observable<IJob[]> | undefined;

  constructor(
    private store: Store<JobState>,
    private router: Router
  ) { }

  ngOnInit(): void {
    this.store.dispatch(loadJobs());
    this.jobsList$ = this.store.select(selectJobs);
    this.jobsList$.pipe(
      map(job => {
        console.log(job)
      })
    ).subscribe();
  }

  goToJobForm(id?: number): void {
    if(id) {
      this.router.navigate(['/jobs/' + id]);
      return;
    }
    this.router.navigate(['/jobs/new']);
  }
}
