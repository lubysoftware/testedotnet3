import { Router } from '@angular/router';
import { DeveloperService } from './../developer.service';
import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-developer-create',
  templateUrl: './developer-create.component.html',
  styleUrls: ['./developer-create.component.css']
})
export class DeveloperCreateComponent implements OnInit {

  developerForm = new FormGroup({
    fullName: new FormControl('', Validators.required),
    email: new FormControl('', Validators.required),
  });

  constructor(private developerService: DeveloperService, private router: Router) { }

  ngOnInit(): void {
  }

  createDeveloper(): void {
    this.developerService.create(this.developerForm.getRawValue()).subscribe(() => {
      this.developerService.showMessage("Developer successfully added.");
      this.router.navigate(["/developers"]);
    });
  }

  cancel(): void {
    this.router.navigate(["/developers"]);
  }

}
