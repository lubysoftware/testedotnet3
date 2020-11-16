import { Component, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { LancamentoModel } from 'src/app/models/lancamento';
import { LancamentosComponent } from 'src/app/Pages/lancamentos/lancamentos.component';
import { LancamentosService } from 'src/app/services/lancamentos.service';
import { ShowMessageService } from 'src/app/services/show-message.service';

@Component({
  selector: 'app-remover-lancamento',
  templateUrl: './remover-lancamento.component.html',
  styleUrls: ['./remover-lancamento.component.css']
})
export class RemoverLancamentoComponent {

  constructor(
    public dialogRef: MatDialogRef<LancamentosComponent>,
    @Inject(MAT_DIALOG_DATA) public lancamento: LancamentoModel,
    private readonly lancamentoService: LancamentosService,
    private readonly showMessageService: ShowMessageService
  ) { }

  public cancel(lancamento?: LancamentoModel): void {
    this.dialogRef.close({ item: lancamento });
  }

  public delete(): void {
    this.lancamentoService.delete(this.lancamento.id).subscribe(() => {
      this.showMessageService.showMessage('Lancamento removido com sucesso');
      this.cancel(this.lancamento);
    });
  }
}
