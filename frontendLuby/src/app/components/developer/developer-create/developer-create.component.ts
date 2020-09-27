import { Router } from '@angular/router';
import { DeveloperService } from './../developer.service';
import { Component, OnInit } from '@angular/core';
import { Developer } from '../developer.model';

@Component({
  selector: 'app-developer-create',
  templateUrl: './developer-create.component.html',
  styleUrls: ['./developer-create.component.css']
})
export class DeveloperCreateComponent implements OnInit {

  developer: Developer = {
    fullName: '',
    email: ''
  }

  constructor(private developerService: DeveloperService, private router: Router) { }

  ngOnInit(): void {
  }

  createDeveloper(): void {
    this.developerService.create(this.developer).subscribe(() => {
      this.developerService.showMessage("Developer successfully added.");
      this.router.navigate(["/developers"]);
    });
  }

  cancel(): void {
    this.router.navigate(["/developers"]);
  }

}
