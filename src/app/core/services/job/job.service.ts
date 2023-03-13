import { getJobById } from './../../store/job/job.actions';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from '../../../../environments/environment';
import { IJob } from 'app/core/models/jobs';

@Injectable({
  providedIn: 'root'
})
export class JobService {
  private baseUrl: string = environment.baseUrl + 'jobs';

  constructor( private http: HttpClient) { }

  getJobs(): Observable<IJob[]> {
    return this.http.get<IJob[]>(this.baseUrl);
  }

  getJobById(id: number): Observable<IJob> {
    return this.http.get<IJob>(`${this.baseUrl}/${id}`);
  }

  createJob(job: IJob): Observable<IJob> {
    return this.http.post<any>(this.baseUrl, job);
  }

  updateJob(id: number, job: IJob): Observable<IJob> {
    return this.http.put<IJob>(`${this.baseUrl}/${id}`, job);
  }
}
