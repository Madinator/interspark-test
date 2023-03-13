export interface Job {
    id: number,
    job_number: string,
    job_title: string,
    job_start_date: Date,
    job_close_date: Date,
    experience_required: boolean,
    number_of_openings: number,
    job_notes: string
}