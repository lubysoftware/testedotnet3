import { Component, OnInit, Optional } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatDialogRef } from '@angular/material/dialog';
import { DesenvolvedorModel } from 'src/app/models/desenvolvedor';
import { ShowMessageService } from 'src/app/services/show-message.service';
import { DesenvolvedoresService } from 'src/app/services/desenvolvedores.service';
import { Guid } from "guid-typescript";
import { ComponentDesenvolvedorBase } from '../component-desenvolvedor-base';

@Component({
  selector: 'app-novo-desenvovedor',
  templateUrl: './novo-desenvovedor.component.html',
  styleUrls: ['./novo-desenvovedor.component.css']
})
export class NovoDesenvovedorComponent extends ComponentDesenvolvedorBase implements OnInit {

  public form: FormGroup;
  public desenvolvedor: DesenvolvedorModel;
  constructor(
    @Optional() public dialog: MatDialogRef<NovoDesenvovedorComponent>,
    private formBuilder: FormBuilder,
    private readonly showMessageService: ShowMessageService,
    private readonly desenvolvedoresService: DesenvolvedoresService
  ) {
    super();
    this.desenvolvedor = new DesenvolvedorModel();
  }

  ngOnInit(): void {
    this.form = this.formBuilder.group({
      nome: [this.desenvolvedor.nome, [Validators.required]],
      idade: [this.desenvolvedor.idade],
      github: [this.desenvolvedor.github, Validators.minLength(0)],
      tecnologias: [this.desenvolvedor.tecnologias]
    });
  }

  public close(item?: any) {
    this.dialog.close({ item: item });
  }

  public salvar() {
    let id = Guid.create().toString();
    const desenvolvedor = new DesenvolvedorModel(id, this.form.value.nome, this.form.value.idade, this.form.value.github, this.tecnologias);
    this.desenvolvedoresService.create(desenvolvedor).subscribe(() => {
      this.close(desenvolvedor);
      this.showMessageService.showMessage('Desenvolvedor cadastrado com sucesso', false);
    });
  }
}
