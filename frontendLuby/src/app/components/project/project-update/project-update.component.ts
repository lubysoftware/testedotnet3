import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';
import { ProjectService } from '../project.service';

@Component({
  selector: 'app-project-update',
  templateUrl: './project-update.component.html',
  styleUrls: ['./project-update.component.css']
})
export class ProjectUpdateComponent implements OnInit {

  projectForm = new FormGroup({
    id: new FormControl ('', Validators.nullValidator),
    projectName: new FormControl('', Validators.required),
    projectDescription: new FormControl('', Validators.required)
  });

  constructor(
    private projectService: ProjectService,
    private router: Router,
    private route: ActivatedRoute
  ) { }

  ngOnInit(): void {
    const id = this.route.snapshot.paramMap.get('id');
    this.projectService.readById(id).subscribe(data => {
      this.projectForm.patchValue(data);
    });
  }

  updateProject(): void {
    this.projectService.update(this.projectForm.getRawValue()).subscribe(() => {
      this.projectService.showMessage("Project successfully updated.");
      this.router.navigate(['/projects']);
    });
  }

  cancel(): void {
    this.router.navigate(['/projects']);
  }

}
