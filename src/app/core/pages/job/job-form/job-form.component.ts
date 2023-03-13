import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { JobService } from 'app/core/services/job/job.service';
import { UtilsService } from 'app/shared/service/utils/utils.service';
import { ActivatedRoute, Router } from '@angular/router';



@Component({
  selector: 'app-job-form',
  templateUrl: './job-form.component.html',
  styleUrls: ['./job-form.component.scss']
})
export class JobFormComponent implements OnInit {
  public myForm: FormGroup;
  public isEditMode = false;

  constructor(
    private formBuilder: FormBuilder,
    private jobService: JobService,
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
  }

  ngOnInit(): void {
    const id = this.route.snapshot.paramMap.get('id');
    if(id) {
      this.isEditMode = true;
    }
  }
  createJob(): void {
    if(this.myForm.valid) {
      const formattedStartDate = this.utilsService.dateFormatter(this.myForm.get('job_start_date'));
      const formattedCloseDate = this.utilsService.dateFormatter(this.myForm.get('job_close_date'));
    
      if (formattedStartDate && formattedCloseDate) {
        this.myForm.patchValue({
          job_start_date: formattedStartDate,
          job_close_date: formattedCloseDate
        });
        
        if(this.isEditMode && this.route.snapshot.paramMap.get('id')) {
          this.jobService.updateJob(Number(this.route.snapshot.paramMap.get('id')), this.myForm.value).subscribe(data => {
            if(data) {
              this.router.navigate(['/jobs']);
            }
          });
        } else {
          this.jobService.createJob(this.myForm.value).subscribe(data => {
            if(data) {
              this.router.navigate(['/jobs']);
            }
          });
        }
      }
    }
  }
}

