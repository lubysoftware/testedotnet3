import { ActivatedRoute, Router } from '@angular/router';
import { DeveloperService } from './../developer.service';
import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-developer-update',
  templateUrl: './developer-update.component.html',
  styleUrls: ['./developer-update.component.css']
})
export class DeveloperUpdateComponent implements OnInit {

  developerForm = new FormGroup({
    id: new FormControl('', Validators.nullValidator),
    fullName: new FormControl('', Validators.required),
    email: new FormControl('', Validators.required)
  });

  constructor(
    private developerService: DeveloperService,
    private router: Router,
    private route: ActivatedRoute,
  ) { }

  ngOnInit(): void {
    const id = this.route.snapshot.paramMap.get('id');
    this.developerService.readById(id).subscribe(data => {
      this.developerForm.patchValue(data);
    })
  }

  updateDeveloper(): void {
    this.developerService.update(this.developerForm.getRawValue()).subscribe(() =>{
      this.developerService.showMessage("Developer successfully updated.");
      this.router.navigate(['/developers']);
    });
  }

  cancel(): void {
    this.router.navigate(["/developers"]);
  }

}
