import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

import { IJob } from 'app/core/models/jobs';
import { JobState } from 'app/core/store/job/job.state';
import { getJobById, updateJob, createJob } from 'app/core/store/job/job.actions';
import { UtilsService } from 'app/shared/service/utils/utils.service';
import { selectJobById } from 'app/core/store/job/job.selector';

@Component({
  selector: 'app-job-form',
  templateUrl: './job-form.component.html',
  styleUrls: ['./job-form.component.scss']
})
export class JobFormComponent implements OnInit {

  public myForm: FormGroup;
  public isEditMode = false;
  public job$: Observable<IJob | undefined>;

  constructor(
    private formBuilder: FormBuilder,
    private store: Store<JobState>,
    private utilsService: UtilsService,
    private router: Router,
    private route: ActivatedRoute,
  ) { 
    this.myForm = this.formBuilder.group({
      job_number: ['', Validators.required],
      job_title: ['', Validators.required],
      job_start_date: ['', Validators.required],
      job_close_date: ['', Validators.required],
      experience_required: [false],
      number_of_openings: ['', Validators.required],
      job_notes: ['', Validators.maxLength(100)],
    });
    this.job$ = this.store.select(selectJobById(Number(this.route.snapshot.paramMap.get('id'))));
  }

  ngOnInit(): void {
    const id = this.route.snapshot.paramMap.get('id');
    if (id) {
      this.isEditMode = true;
      this.store.dispatch(getJobById({ id: Number(id) }));
      this.job$.pipe(
        map(job => {
          if (job) {
            const formattedStartDate = this.utilsService.dateFormatterToDatepicker(job.job_start_date.toString());
            const formattedCloseDate = this.utilsService.dateFormatterToDatepicker(job.job_close_date.toString());
            this.myForm.patchValue({
              job_number: job.job_number,
              job_title: job.job_title,
              job_start_date: formattedStartDate,
              job_close_date: formattedCloseDate,
              experience_required: job.experience_required,
              number_of_openings: job.number_of_openings,
              job_notes: job.job_notes,
            });
          }
        })
      ).subscribe();
    }
  }

  createJob(): void {
    if(this.myForm.valid) {
      const formattedStartDate = this.utilsService.dateFormatterFromDatepicker(this.myForm.get('job_start_date'));
      const formattedCloseDate = this.utilsService.dateFormatterFromDatepicker(this.myForm.get('job_close_date'));
    
      if (formattedStartDate && formattedCloseDate) {
        this.myForm.patchValue({
          job_start_date: formattedStartDate,
          job_close_date: formattedCloseDate
        });
        
        if(this.isEditMode && this.route.snapshot.paramMap.get('id')) {
          this.store.dispatch(updateJob({ id: Number(this.route.snapshot.paramMap.get('id')), changes: this.myForm.value }));
        } else {
          this.store.dispatch(createJob({ job: this.myForm.value }));
        }
        this.router.navigate(['/jobs']);
      }
    }
  }
}
