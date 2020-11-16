import { Component, OnInit, Optional } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatDialogRef } from '@angular/material/dialog';
import { Guid } from 'guid-typescript';
import { DesenvolvedorModel } from 'src/app/models/desenvolvedor';
import { ProjetoModel } from 'src/app/models/projeto';
import { DesenvolvedoresService } from 'src/app/services/desenvolvedores.service';
import { ProjetosService } from 'src/app/services/projetos.service';
import { ShowMessageService } from 'src/app/services/show-message.service';

@Component({
  selector: 'app-novo-projeto',
  templateUrl: './novo-projeto.component.html',
  styleUrls: ['./novo-projeto.component.css']
})
export class NovoProjetoComponent implements OnInit {

  public form: FormGroup;
  public projeto: ProjetoModel;
  public desenvolvedor: string = '';
  public desenvolvedores: Array<DesenvolvedorModel>;
  constructor(
    @Optional() public dialog: MatDialogRef<NovoProjetoComponent>,
    private formBuilder: FormBuilder,
    private readonly showMessageService: ShowMessageService,
    private readonly projetoService: ProjetosService,
    private readonly desenvolvedoresService: DesenvolvedoresService
  ) {
    this.projeto = new ProjetoModel();
    this.desenvolvedores = new Array<DesenvolvedorModel>();
    this.getDesenvolvedores();
  }

  ngOnInit(): void {
    this.form = this.formBuilder.group({
      nome: [this.projeto.nome, [Validators.required]],
      descricao: [this.projeto.descricao, Validators.required],
      desenvolvedor: [this.projeto.desenvolvedor]
    });
  }

  private getDesenvolvedores(): void {
    this.desenvolvedoresService.getAll().subscribe(res => {
      this.desenvolvedores = res;
    })
  }

  public close(item?: any) {
    if (item)
      this.dialog.close({ item: item });
    else
      this.dialog.close();
  }

  public salvar() {
    let id = Guid.create().toString();
    const projeto = new ProjetoModel(id, this.form.value.nome, this.form.value.descricao, this.form.value.desenvolvedor);
    this.projetoService.create(projeto).subscribe(() => {
      this.close(projeto);
      this.showMessageService.showMessage('Projeto cadastrado com sucesso', false);
    });
  }

  public selectionChange(item): void {
    this.form.value.desenvolvedor = item;
  }
}
