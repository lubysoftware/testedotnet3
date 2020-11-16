import { Component, Inject, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { DesenvolvedorModel } from 'src/app/models/desenvolvedor';
import { DesenvolvedoresService } from 'src/app/services/desenvolvedores.service';
import { ShowMessageService } from 'src/app/services/show-message.service';
import { ComponentDesenvolvedorBase } from '../component-desenvolvedor-base';

@Component({
  selector: 'app-edicao-desenvovedor',
  templateUrl: './edicao-desenvovedor.component.html',
  styleUrls: ['./edicao-desenvovedor.component.css']
})
export class EdicaoDesenvovedorComponent extends ComponentDesenvolvedorBase implements OnInit {
  public form: FormGroup;

  constructor(
    public dialogRef: MatDialogRef<EdicaoDesenvovedorComponent>,
    private formBuilder: FormBuilder,
    @Inject(MAT_DIALOG_DATA) public desenvolvedor: DesenvolvedorModel,
    private readonly desenvolvedoresService: DesenvolvedoresService,
    private readonly showMessageService: ShowMessageService
  ) {
    super();
  }

  ngOnInit(): void {
    this.tecnologias = this.desenvolvedor.tecnologias;
    console.log('this.desenvolvedor: ', this.desenvolvedor);
    this.form = this.formBuilder.group({
      nome: [this.desenvolvedor.nome, [Validators.required]],
      idade: [this.desenvolvedor.idade],
      github: [this.desenvolvedor.github, Validators.required],
      tecnologias: [this.desenvolvedor.tecnologias]
    });
  }

  public cancel(desenvolvedor?: DesenvolvedorModel): void {
    this.dialogRef.close({ item: desenvolvedor });
  }

  public atualizar(): void {
    this.desenvolvedor.nome = this.form.value.nome;
    this.desenvolvedor.idade = this.form.value.idade;
    this.desenvolvedor.github = this.form.value.github;
    this.desenvolvedor.tecnologias = this.tecnologias;

    this.desenvolvedoresService.update(this.desenvolvedor).subscribe(() => {
      this.showMessageService.showMessage('Desenvolvedor atualizado com sucesso');
      this.cancel(this.desenvolvedor);
    });
  }
}
