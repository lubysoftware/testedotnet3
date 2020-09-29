import { BrowserModule } from '@angular/platform-browser';
import { NgModule, LOCALE_ID } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HeaderComponent } from './components/template/header/header.component';

import {MatToolbarModule} from '@angular/material/toolbar';
import { FooterComponent } from './components/template/footer/footer.component';
import { NavComponent } from './components/template/nav/nav.component';

import { MatSidenavModule } from '@angular/material/sidenav';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { MatListModule } from '@angular/material/list';
import { HomeComponent } from './views/home/home.component';
import { RedDirective } from './directives/red.directive';
import { ForDirective } from './directives/for.directive';

import { HttpClientModule } from '@angular/common/http';

import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatTableModule } from '@angular/material/table';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatSortModule } from '@angular/material/sort';

import localePt from '@angular/common/locales/pt';
import { registerLocaleData, DatePipe } from '@angular/common';
import { ProjectCrudComponent } from './views/project-crud/project-crud.component';
import { ProjectCreateComponent } from './components/project/project-create/project-create.component';
import { ProjectReadComponent } from './components/project/project-read/project-read.component';
import { ProjectUpdateComponent } from './components/project/project-update/project-update.component';
import { ProjectDeleteComponent } from './components/project/project-delete/project-delete.component';
import { DeveloperCrudComponent } from './views/developer-crud/developer-crud.component';
import { DeveloperCreateComponent } from './components/developer/developer-create/developer-create.component';
import { DeveloperReadComponent } from './components/developer/developer-read/developer-read.component';
import { DeveloperUpdateComponent } from './components/developer/developer-update/developer-update.component';
import { DeveloperDeleteComponent } from './components/developer/developer-delete/developer-delete.component';
import { WorkHoursCrudComponent } from './views/work-hours-crud/work-hours-crud.component';
import { WorkHoursCreateComponent } from './components/work-hours/work-hours-create/work-hours-create.component';
import { MatSelectModule } from '@angular/material/select';
import { NgxMatDatetimePickerModule, NgxMatNativeDateModule, NgxMatTimepickerModule } from '@angular-material-components/datetime-picker';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { WorkHoursReadComponent } from './components/work-hours/work-hours-read/work-hours-read.component';
import { WorkHoursRankComponent } from './components/work-hours/work-hours-rank/work-hours-rank.component';

registerLocaleData(localePt);

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    NavComponent,
    HomeComponent,
    RedDirective,
    ForDirective,    
    ProjectCrudComponent,
    ProjectCreateComponent,
    ProjectReadComponent,
    ProjectUpdateComponent,
    ProjectDeleteComponent,
    DeveloperCrudComponent,
    DeveloperCreateComponent,
    DeveloperReadComponent,
    DeveloperUpdateComponent,
    DeveloperDeleteComponent,
    WorkHoursCrudComponent,
    WorkHoursCreateComponent,
    WorkHoursReadComponent,
    WorkHoursRankComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatToolbarModule,
    MatSidenavModule,
    MatListModule,
    MatCardModule,
    MatButtonModule,
    MatSnackBarModule,
    HttpClientModule,
    FormsModule,
    MatFormFieldModule,
    MatInputModule,
    MatTableModule,
    MatPaginatorModule,
    MatSortModule,
    MatSelectModule,
    MatDatepickerModule,
    NgxMatDatetimePickerModule,
    NgxMatNativeDateModule,
    NgxMatTimepickerModule,
    ReactiveFormsModule    
  ],
  providers: [{
    provide: LOCALE_ID,
    useValue: 'pt-BR',
  }],
  bootstrap: [AppComponent]
})
export class AppModule { }
