import { IJob } from 'app/core/models/jobs';

export interface JobState {
    jobs: IJob[];
    loading: boolean;
    error: any;
}

export const initialJobState: JobState = {
    jobs: [],
    loading: false,
    error: null
};
  