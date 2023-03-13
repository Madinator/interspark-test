import { Component, OnInit } from '@angular/core';
import { Job } from 'app/core/models/jobs';
import { Router } from '@angular/router';
import { JobService } from 'app/core/services/job/job.service';

@Component({
  selector: 'app-jobs-list',
  templateUrl: './jobs-list.component.html',
  styleUrls: ['./jobs-list.component.scss']
})
export class JobsListComponent implements OnInit {
  public jobsList: Job[] = [];
  constructor(
    private jobService: JobService,
    private router: Router) 
  { }

  ngOnInit(): void {
    this.jobService.getJobs()
    .subscribe(data => {
      this.jobsList = data;
    })
  }
  goToJobForm(id?: number): void {
    if(id) {
      this.router.navigate(['/jobs/' + id]);
      return;
    }
    this.router.navigate(['/jobs/new']);
  }
}
