import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { TaskService } from 'src/app/services/task.service';
import { ActivatedRoute, Router } from '@angular/router';
@Component({
  selector: 'app-add-task',
  templateUrl: './add-task.component.html',
  styleUrls: ['./add-task.component.css']
})
export class AddTaskComponent implements OnInit {
  taskFormGroup?: FormGroup;
  submitted: boolean = false;
  userId!: number;
  constructor(private fb: FormBuilder, 
    private taskService: TaskService,
    private router:Router,
    private activatedRoute: ActivatedRoute) { 
      this.userId = activatedRoute.snapshot.params['id'];
    }

  ngOnInit(): void {
    this.taskFormGroup = this.fb.group({
      name: ["", Validators.required],
      toDoDateTime: ["", Validators.required]
    });
  }

  onSaveTask() {
    this.submitted = true;
    if (this.taskFormGroup?.invalid) return;
    this.taskService.saveTask(this.taskFormGroup?.value, this.userId)
      .subscribe(data => {
        alert("Success Saving task");
        this.backtoTaskPage();
      });
  }

  backtoTaskPage(){
    this.router.navigateByUrl("/users/" + this.userId + "/tasks");
  }

}
