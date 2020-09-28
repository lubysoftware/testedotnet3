import { DeveloperService } from './../../developer/developer.service';
import { Router } from '@angular/router';
import { WorkHoursService } from './../work-hours.service';
import { Component, OnInit, ViewChild } from '@angular/core';
import { WorkHours } from '../work-hours.model';
import { Developer } from '../../developer/developer.model';
import { ThemePalette } from '@angular/material/core';
import { DatePipe } from '@angular/common';

@Component({
  selector: 'app-work-hours-create',
  templateUrl: './work-hours-create.component.html',
  styleUrls: ['./work-hours-create.component.css'],
  providers: [DatePipe],
})
export class WorkHoursCreateComponent implements OnInit {

  @ViewChild('picker') picker: any;
  @ViewChild('picker1') picker1: any;

  dateNow: Date = new Date(new Date().getFullYear(), new Date().getMonth(), new Date().getDate(), 8);

  initialDate: Date = this.dateNow;
  finalDate: Date = new Date(new Date().getFullYear(), new Date().getMonth(), new Date().getDate(),18,0,0);
  minDate: Date = this.dateNow;
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

  workHours: WorkHours = {
    dateInit: '',
    dateEnd: '',
    idDeveloper: null,
    devName: '',
    workedHours: null
  }

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
  }

  createWorkHour(): void {
    this.workHours.dateInit = this.datePipe.transform(this.initialDate, 'yyyy-MM-dd HH:mm:ss');
    this.workHours.dateEnd = this.datePipe.transform(this.finalDate, 'yyyy-MM-dd HH:mm:ss');
    this.workHoursService.create(this.workHours).subscribe(() => {
      this.workHoursService.showMessage("Work hours successfully added.");
    });
  }

  cancel(): void {
    this.router.navigate(['/workhours']);
  }

}

