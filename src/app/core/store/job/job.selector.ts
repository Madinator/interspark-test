import { createSelector } from '@ngrx/store';
import { AppState } from '../app.state';
import { IJob } from 'app/core/models/jobs';

export const selectJobs = (state: any) => state.jobs.jobs;

export const selectJobById = (id: number) => createSelector(
  selectJobs,
  (jobs: IJob[]) => jobs.find(job => job.id === id)
);