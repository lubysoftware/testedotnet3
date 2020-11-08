import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {AppComponent} from './app.component';
import {DevComponent} from './dev/dev.component';
import {DevAddComponent} from './dev-add/dev-add.component';
import {DevDetailsComponent} from './dev-details/dev-details.component';
// import {DotComponent} from './dot/dot.component';
// import {DotAddComponent} from './dot-add/dot-add.component';
// import {DotDetailsComponent} from './dot-details/dot-details.component';
import {ProjectComponent} from './project/project.component';
import {ProjectAddComponent} from './project-add/project-add.component';
import {ProjectDetailsComponent} from './project-details/project-details.component';

import {ProjectService} from './project.service';
import {DevService} from './dev.service';
import {DotService} from './dot.service';

import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {HttpClientModule} from '@angular/common/http';

import {BrowserAnimationsModule} from '@angular/platform-browser/animations';

@NgModule({
  declarations: [
    AppComponent,
    DevComponent,
    // DotComponent,
    ProjectComponent,
    ProjectAddComponent,
    ProjectDetailsComponent,
    // DotAddComponent,
    DevAddComponent,
    DevDetailsComponent,
    // DotDetailsComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    BrowserAnimationsModule,
  ],
  providers: [DevService, DotService, ProjectService],
  bootstrap: [AppComponent]
})
export class AppModule {
}
