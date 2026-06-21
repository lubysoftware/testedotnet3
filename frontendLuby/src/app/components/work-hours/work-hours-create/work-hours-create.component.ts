import { DeveloperService } from './../../developer/developer.service';
import { Router } from '@angular/router';
import { WorkHoursService } from './../work-hours.service';
import { Component, OnInit, ViewChild } from '@angular/core';
import { Developer } from '../../developer/developer.model';
import { DatePipe } from '@angular/common';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { ThemePalette } from '@angular/material/core';

@Component({
  selector: 'app-work-hours-create',
  templateUrl: './work-hours-create.component.html',
  styleUrls: ['./work-hours-create.component.css'],
  providers: [DatePipe],
})
export class WorkHoursCreateComponent implements OnInit {
 
  minDate: Date = new Date(new Date().getFullYear(), new Date().getMonth(), new Date().getDate(), 0,0,0);
  maxDate: Date = new Date(new Date().getFullYear(), new Date().getMonth(), new Date().getDate(),23,59,59);
  stepHour = 1;
  stepMinute = 1;
  stepSecond = 1;
  disabled = false;
  showSpinners = true;
  showSeconds = false;
  touchUi = false;
  enableMeridian = false;
  color: ThemePalette = 'primary';

  developers: Developer[];

  workHoursForm = new FormGroup ({
    dateInit: new FormControl(new Date, Validators.required),
    dateEnd: new FormControl(new Date, Validators.required),
    idDeveloper: new FormControl(null, Validators.required),    
  });

  constructor(
    private workHoursService: WorkHoursService,
    private developerService: DeveloperService,
    private router: Router,
    public datePipe: DatePipe
  ) { }

  ngOnInit(): void {
    this.developerService.read().subscribe(data => {
      this.developers = data.sort(function(a,b) {
        var textA = a.fullName;
        var textB = b.fullName;
        return (textA < textB) ? -1 : (textA > textB) ? 1 : 0;
      });
    });

    this.workHoursForm.valueChanges.subscribe( val => {
      if (val.dateInit > val.dateEnd) {
        this.workHoursForm.get('dateInit').setErrors({'incorrect': true});
      } else {
        this.workHoursForm.get('dateInit').setErrors(null);
      }
    });
  }

  createWorkHour(): void {
    let time = this.convertDateToString(this.workHoursForm.get('dateInit').value);
    this.workHoursForm.get('dateInit').setValue(time);

    time = this.convertDateToString(this.workHoursForm.get('dateEnd').value);
    this.workHoursForm.get('dateEnd').setValue(time);

    this.workHoursService.create(this.workHoursForm.getRawValue()).subscribe(() => {
      this.workHoursService.showMessage("Work hours successfully added.");
    });
  }

  cancel(): void {
    this.router.navigate(['/workhours']);
  }

  private convertDateToString(date: Date): string {
    let time = this.datePipe.transform(date, 'yyyy-MM-dd HH:mm:ss');  
    return time;
  }

}

