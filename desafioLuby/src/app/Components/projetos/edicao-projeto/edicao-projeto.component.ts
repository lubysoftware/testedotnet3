import { Component, Inject, OnInit, Optional } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { DesenvolvedorModel } from 'src/app/models/desenvolvedor';
import { ProjetoModel } from 'src/app/models/projeto';
import { DesenvolvedoresService } from 'src/app/services/desenvolvedores.service';
import { ProjetosService } from 'src/app/services/projetos.service';
import { ShowMessageService } from 'src/app/services/show-message.service';

@Component({
  selector: 'app-edicao-projeto',
  templateUrl: './edicao-projeto.component.html',
  styleUrls: ['./edicao-projeto.component.css']
})
export class EdicaoProjetoComponent {

  public form: FormGroup;
  public desenvolvedor: DesenvolvedorModel = new DesenvolvedorModel();
  public desenvolvedores: Array<DesenvolvedorModel>;

  constructor(
    public dialogRef: MatDialogRef<EdicaoProjetoComponent>,
    private formBuilder: FormBuilder,
    @Inject(MAT_DIALOG_DATA) public projeto: ProjetoModel,
    private readonly showMessageService: ShowMessageService,
    private readonly projetoService: ProjetosService,
    private readonly desenvolvedoresService: DesenvolvedoresService
  ) {
    this.desenvolvedores = new Array<DesenvolvedorModel>();
    this.getDesenvolvedores();
  }

  ngOnInit(): void {
    this.desenvolvedor.nome = this.projeto.desenvolvedor;
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
    console.log('res: ', item);
    if (item)
      this.dialogRef.close({ item: item });
    else
      this.dialogRef.close();
  }

  public atualizar(): void {
    this.projeto.nome = this.form.value.nome;
    this.projeto.descricao = this.form.value.descricao;
    this.projeto.desenvolvedor = this.form.value.desenvolvedor;

    this.projetoService.update(this.projeto).subscribe(() => {
      this.showMessageService.showMessage('Projeto atualizado com sucesso');
      this.cancel(this.projeto);
    });
  }

  public cancel(desenvolvedor?: DesenvolvedorModel): void {
    this.dialogRef.close({ item: desenvolvedor });
  }

  public selectionChange(item): void {
    this.form.value.desenvolvedor = item.nome;
  }
}
