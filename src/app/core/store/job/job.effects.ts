import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { catchError, map, mergeMap } from 'rxjs/operators';
import { of } from 'rxjs';

import * as JobActions from './job.actions';
import { JobService } from '../services/job.service';

@Injectable()
export class JobEffects {

  constructor(private actions$: Actions, private jobService: JobService) {}

  loadJobs$ = createEffect(() =>
    this.actions$.pipe(
      ofType(JobActions.loadJobs),
      mergeMap(() =>
        this.jobService.getJobs().pipe(
          map(jobs => JobActions.loadJobsSuccess({ jobs })),
          catchError(error => of(JobActions.loadJobsFailure({ error })))
        )
      )
    )
  );

  createJob$ = createEffect(() =>
    this.actions$.pipe(
      ofType(JobActions.createJob),
      mergeMap(({ job }) =>
        this.jobService.createJob(job).pipe(
          map(job => JobActions.createJobSuccess({ job })),
          catchError(error => of(JobActions.createJobFailure({ error })))
        )
      )
    )
  );

  updateJob$ = createEffect(() =>
    this.actions$.pipe(
      ofType(JobActions.updateJob),
      mergeMap(({ id, changes }) =>
        this.jobService.updateJob(id, changes).pipe(
          map(job => JobActions.updateJobSuccess({ job })),
          catchError(error => of(JobActions.updateJobFailure({ error })))
        )
      )
    )
  );

  deleteJob$ = createEffect(() =>
    this.actions$.pipe(
      ofType(JobActions.deleteJob),
      mergeMap(({ id }) =>
        this.jobService.deleteJob(id).pipe(
          map(() => JobActions.deleteJobSuccess({ id })),
          catchError(error => of(JobActions.deleteJobFailure({ error })))
        )
      )
    )
  );

}
