import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { catchError, map, mergeMap } from 'rxjs/operators';
import { of } from 'rxjs';

import * as JobActions from './job.actions';
import { JobService } from 'app/core/services/job/job.service';

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

  getJobById$ = createEffect(() =>
    this.actions$.pipe(
      ofType(JobActions.getJobById),
      mergeMap((action) =>
        this.jobService.getJobById(action.id).pipe(
          map((job) => JobActions.getJobByIdSuccess({ job })),
          catchError((error) => of(JobActions.getJobByIdFailure({ error })))
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
}
