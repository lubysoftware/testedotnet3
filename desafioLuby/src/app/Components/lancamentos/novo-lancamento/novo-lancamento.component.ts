import { Component, OnInit, Optional } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatDialogRef } from '@angular/material/dialog';
import { Guid } from 'guid-typescript';
import { DesenvolvedorModel } from 'src/app/models/desenvolvedor';
import { LancamentoModel } from 'src/app/models/lancamento';
import { ProjetoModel } from 'src/app/models/projeto';
import { DesenvolvedoresService } from 'src/app/services/desenvolvedores.service';
import { LancamentosService } from 'src/app/services/lancamentos.service';
import { ProjetosService } from 'src/app/services/projetos.service';
import { ShowMessageService } from 'src/app/services/show-message.service';

@Component({
  selector: 'app-novo-lancamento',
  templateUrl: './novo-lancamento.component.html',
  styleUrls: ['./novo-lancamento.component.css']
})
export class NovoLancamentoComponent implements OnInit {

  public form: FormGroup;
  public lancamento: LancamentoModel;
  public desenvolvedores: Array<DesenvolvedorModel>;
  public projetos: Array<ProjetoModel>;
  public desenvolvedor: string = '';
  public projeto: string = '';
  public dataInicio: string = '';
  constructor(
    @Optional() public dialog: MatDialogRef<NovoLancamentoComponent>,
    private formBuilder: FormBuilder,
    private readonly showMessageService: ShowMessageService,
    private readonly lancamentosService: LancamentosService,
    private readonly projetoService: ProjetosService,
    private readonly desenvolvedoresService: DesenvolvedoresService
  ) {
    this.desenvolvedores = new Array<DesenvolvedorModel>();
    this.projetos = new Array<ProjetoModel>();
    this.lancamento = new LancamentoModel();
    this.getDesenvolvedores();
    this.getProjetos();
  }

  ngOnInit(): void {
    this.form = this.formBuilder.group({
      projeto: [this.lancamento.projeto, Validators.required],
      desenvolvedor: [this.lancamento.desenvolvedor, Validators.required],
      dataInicio: [this.lancamento.dataInicio, Validators.required],
      dataFim: [this.lancamento.dataFim, Validators.required],
      horaInicio: [this.lancamento.horaInicio, Validators.required],
      horaFim: [this.lancamento.horaFim, Validators.required],
    });
  }

  private getDesenvolvedores(): void {
    this.desenvolvedoresService.getAll().subscribe(res => {
      this.desenvolvedores = res;
    })
  }

  private getProjetos(): void {
    this.projetoService.getAll().subscribe(res => {
      this.projetos = res;
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
    const lancamento = new LancamentoModel(id, this.form.value.projeto, this.form.value.desenvolvedor, this.form.value.dataInicio, this.form.value.dataFim, this.form.value.horaInicio, this.form.value.horaFim);
    this.lancamentosService.create(lancamento).subscribe(() => {
      this.close(lancamento);
      this.showMessageService.showMessage('Lançamento de horas cadastrada com sucesso', false);
    });
  }

  public getDataInicio(): void {
    this.dataInicio = this.form.value.dataInicio;
  }
}
