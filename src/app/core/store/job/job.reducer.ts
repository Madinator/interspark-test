import { createReducer, on } from '@ngrx/store';
import { Job } from 'app/core/models/jobs';
import * as JobActions from './job.actions';

export interface State {
  jobs: Job[];
  selectedJob: Job | null;
  error: string | null;
}

export const initialState: State = {
  jobs: [],
  selectedJob: null,
  error: null
};

export const jobReducer = createReducer(
  initialState,

  on(JobActions.loadJobsSuccess, (state, { jobs }) => ({
    ...state,
    jobs: [...jobs]
  })),

  on(JobActions.addJobSuccess, (state, { job }) => ({
    ...state,
    jobs: [...state.jobs, job],
    error: null
  })),

  on(JobActions.updateJobSuccess, (state, { job }) => {
    const updatedJobs = state.jobs.map((j: Job) => (j.id === job.id ? job : j));
    return {
      ...state,
      jobs: [...updatedJobs],
      selectedJob: job,
      error: null
    };
  }),

  on(JobActions.deleteJobSuccess, (state, { id }) => ({
    ...state,
    jobs: state.jobs.filter((j: Job) => j.id !== id),
    selectedJob: null,
    error: null
  })),

  on(JobActions.selectJob, (state, { id }) => ({
    ...state,
    selectedJob: state.jobs.find((j: Job) => j.id === id)
  })),

  on(JobActions.clearSelectedJob, (state) => ({
    ...state,
    selectedJob: null
  })),

  on(JobActions.jobError, (state, { error }) => ({
    ...state,
    error
  }))
);
