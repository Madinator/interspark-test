import { Job } from 'app/core/models/jobs';

export interface JobState {
    jobs: Job[];
    loading: boolean;
    error: any;
}
  
export const initialJobState: JobState = {
    jobs: [],
    loading: false,
    error: null
};
  