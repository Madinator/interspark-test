import { createAction, props } from '@ngrx/store';
import { IJob } from 'app/core/models/jobs';

// Define the actions
export const loadJobs = createAction('[Job] Load Jobs');
export const loadJobsSuccess = createAction('[Job] Load Jobs Success', props<{ jobs: IJob[] }>());
export const loadJobsFailure = createAction('[Job] Load Jobs Failure', props<{ error: any }>());

export const createJob = createAction('[Job] Create Job', props<{ job: IJob }>());
export const createJobSuccess = createAction('[Job] Create Job Success', props<{ job: IJob }>());
export const createJobFailure = createAction('[Job] Create Job Failure', props<{ error: any }>());

export const updateJob = createAction('[Job] Update Job', props<{ id: number, changes: IJob }>());
export const updateJobSuccess = createAction('[Job] Update Job Success', props<{ job: IJob }>());
export const updateJobFailure = createAction('[Job] Update Job Failure', props<{ error: any }>());

export const getJobById = createAction('[Job] Get Job By ID', props<{ id: number }>());
export const getJobByIdSuccess = createAction('[Job] Get Job By ID Success', props<{ job: IJob }>());
export const getJobByIdFailure = createAction('[Job] Get Job By ID Failure', props<{ error: any }>());