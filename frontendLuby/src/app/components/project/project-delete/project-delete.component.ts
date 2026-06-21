import { Router, ActivatedRoute } from '@angular/router';
import { ProjectService } from './../project.service';
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-project-delete',
  templateUrl: './project-delete.component.html',
  styleUrls: ['./project-delete.component.css']
})
export class ProjectDeleteComponent implements OnInit {

  projectForm = new FormGroup({
    id: new FormControl ({value: '', disabled: true}, Validators.nullValidator),
    projectName: new FormControl({value: '', disabled: true}, Validators.required),
    projectDescription: new FormControl({value: '', disabled: true}, Validators.required)
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
    })
  }

  deleteProject(): void {
    this.projectService.delete(this.projectForm.get("id").value).subscribe(() => {
      this.projectService.showMessage('Project successfully deleted.');
      this.router.navigate(['/projects']);
    });
  }

  cancel(): void {
    this.router.navigate(['/projects']);
  }

}
