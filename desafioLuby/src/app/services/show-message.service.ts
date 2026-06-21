import { Injectable } from "@angular/core";
import { MatSnackBar } from '@angular/material/snack-bar'

@Injectable({
  providedIn: 'root'
})
export class ShowMessageService {
  constructor(private snackBar: MatSnackBar) { }

  public showMessage(msgm: string, isError: boolean = false): void {
    this.snackBar.open(msgm, 'X', {
      duration: 3000,
      horizontalPosition: 'right',
      verticalPosition: 'top',
      panelClass: isError ? ['msg-error'] : ['msg-success']
    });
  }
}