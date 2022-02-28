import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { AddStatutComponent } from './components/status/add-statut/add-statut.component';
import { EditStatutComponent } from './components/status/edit-statut/edit-statut.component';
import { StatusComponent } from './components/status/status.component';
import { AddTaskComponent } from './components/tasks/add-task/add-task.component';
import { EditTaskComponent } from './components/tasks/edit-task/edit-task.component';
import { TasksComponent } from './components/tasks/tasks.component';
import { AddUserComponent } from './components/users/add-user/add-user.component';
import { EditUserComponent } from './components/users/edit-user/edit-user.component';
import { UsersComponent } from './components/users/users.component';

const routes: Routes = [
  { path: "users", component: UsersComponent },
  { path: "newUser", component: AddUserComponent },
  { path: "editUser/:id", component: EditUserComponent },
  { path: "users/:id/tasks", component: TasksComponent },
  { path: "users/:id/newTask", component: AddTaskComponent },
  { path: "users/:idUser/editTask/:idTask", component: EditTaskComponent },
  { path: "status", component: StatusComponent },
  { path: "newStatut", component: AddStatutComponent },
  { path: "editStatut/:statutId", component: EditStatutComponent },
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
