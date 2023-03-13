import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from '../../../../environments/environment';
import { Job } from 'app/core/models/jobs';

@Injectable({
  providedIn: 'root'
})
export class JobService {
  private baseUrl: string = environment.baseUrl + 'jobs';

  constructor( private http: HttpClient) { }

  getJobs(): Observable<Job[]> {
    return this.http.get<Job[]>(this.baseUrl);
  }

  getJob(id: number): Observable<any> {
    return this.http.get(`${this.baseUrl}/${id}`);
  }

  createJob(job: any): Observable<Job> {
    return this.http.post<any>(this.baseUrl, job);
  }

  updateJob(id: number, job: any): Observable<any> {
    return this.http.put(`${this.baseUrl}/${id}`, job);
  }

  deleteJob(id: number): Observable<any> {
    return this.http.delete(`${this.baseUrl}/${id}`);
  }
}
