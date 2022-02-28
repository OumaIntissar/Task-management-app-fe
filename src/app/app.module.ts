import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import {HttpClientModule} from '@angular/common/http';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { UsersComponent } from './components/users/users.component';
import { TasksComponent } from './components/tasks/tasks.component';
import { StatusComponent } from './components/status/status.component';
import { NavBarComponent } from './components/nav-bar/nav-bar.component';
import { AddUserComponent } from './components/users/add-user/add-user.component';
import { EditUserComponent } from './components/users/edit-user/edit-user.component';
import { EditTaskComponent } from './components/tasks/edit-task/edit-task.component';
import { AddTaskComponent } from './components/tasks/add-task/add-task.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { AddStatutComponent } from './components/status/add-statut/add-statut.component';
import { EditStatutComponent } from './components/status/edit-statut/edit-statut.component';

@NgModule({
  declarations: [
    AppComponent,
    UsersComponent,
    TasksComponent,
    StatusComponent,
    NavBarComponent,
    AddUserComponent,
    EditUserComponent,
    EditTaskComponent,
    AddTaskComponent,
    AddStatutComponent,
    EditStatutComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    NgbModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
