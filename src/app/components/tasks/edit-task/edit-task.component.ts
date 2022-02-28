import { Component, OnInit } from '@angular/core';
import { TaskService } from 'src/app/services/task.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Task } from 'src/app/model/task.model';

@Component({
  selector: 'app-edit-task',
  templateUrl: './edit-task.component.html',
  styleUrls: ['./edit-task.component.css']
})
export class EditTaskComponent implements OnInit {
  userId: number;
  taskId: number;
  task?: Task;
  taskFormGroup?: FormGroup;
  private submitted: boolean = false;

  constructor(private activatedRoute: ActivatedRoute,
    private taskService: TaskService,
    private fb: FormBuilder,
    private router: Router) {
    this.userId = activatedRoute.snapshot.params['idUser'];
    this.taskId = activatedRoute.snapshot.params['idTask'];
  }

  ngOnInit(): void {
    this.taskService.getTask(this.taskId)
      .subscribe(task => {
        this.taskFormGroup = this.fb.group({
          id: [task.id, Validators.required],
          name: [task.name, Validators.required],
          toDoDateTime: [task.toDoDateTime, Validators.required]
        })
      });
  }

  onUpdateTask() {

    this.taskService.updateTask(this.taskFormGroup?.value)
      .subscribe(data => {
        alert("Success task updated");
        this.backtoTaskPage();
      });
  }

  backtoTaskPage() {
    this.router.navigateByUrl("/users/" + this.userId + "/tasks");
  }
}
