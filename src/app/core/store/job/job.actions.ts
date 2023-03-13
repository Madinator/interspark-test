import { createAction, props } from '@ngrx/store';
import { Job } from 'app/core/models/jobs';

// Define the actions
export const loadJobs = createAction('[Job] Load Jobs');
export const loadJobsSuccess = createAction('[Job] Load Jobs Success', props<{ jobs: Job[] }>());
export const loadJobsFailure = createAction('[Job] Load Jobs Failure', props<{ error: any }>());

export const createJob = createAction('[Job] Create Job', props<{ job: Job }>());
export const createJobSuccess = createAction('[Job] Create Job Success', props<{ job: Job }>());
export const createJobFailure = createAction('[Job] Create Job Failure', props<{ error: any }>());

export const updateJob = createAction('[Job] Update Job', props<{ id: number, changes: Partial<Job> }>());
export const updateJobSuccess = createAction('[Job] Update Job Success', props<{ job: Job }>());
export const updateJobFailure = createAction('[Job] Update Job Failure', props<{ error: any }>());

export const deleteJob = createAction('[Job] Delete Job', props<{ id: number }>());
export const deleteJobSuccess = createAction('[Job] Delete Job Success', props<{ id: number }>());
export const deleteJobFailure = createAction('[Job] Delete Job Failure', props<{ error: any }>());