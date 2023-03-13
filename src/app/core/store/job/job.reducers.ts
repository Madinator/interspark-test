import { createReducer, on } from '@ngrx/store';
import { IJob } from 'app/core/models/jobs';
import * as JobActions from './job.actions';
import { initialJobState } from './job.state';

export const jobReducer = createReducer(
  initialJobState,

  on(JobActions.loadJobsSuccess, (state, { jobs }) => ({
    ...state,
    jobs: [...jobs]
  })),

  on(JobActions.getJobByIdSuccess, (state, { job }) => ({
    ...state,
    selectedJob: job,
    error: null
  })),

  on(JobActions.createJobSuccess, (state, { job }) => ({
    ...state,
    jobs: [...state.jobs, job],
    error: null
  })),

  on(JobActions.updateJobSuccess, (state, { job }) => {
    const updatedJobs = state.jobs.map((j: IJob) => (j.id === job.id ? job : j));
    return {
      ...state,
      jobs: [...updatedJobs],
      selectedJob: job,
      error: null
    };
  }),


);
