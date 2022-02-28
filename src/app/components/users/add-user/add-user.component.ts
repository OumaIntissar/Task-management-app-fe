import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import { UserService } from 'src/app/services/user.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-add-user',
  templateUrl: './add-user.component.html',
  styleUrls: ['./add-user.component.css']
})
export class AddUserComponent implements OnInit {

  userFormGroup?: FormGroup;
  submitted: boolean = false;
  constructor(private fb: FormBuilder, 
    private userService:UserService,
    private router:Router) { }
  ngOnInit(): void {
    this.userFormGroup = this.fb.group({
      firstName: ["", Validators.required],
      lastName: ["", Validators.required],
      email: ["", Validators.required]
    });
  }

  onSaveUser() {
    this.submitted = true;
    if (this.userFormGroup?.invalid) return;
    this.userService.saveUser(this.userFormGroup?.value)
      .subscribe(data => {
        alert("Success Saving user");
        this.router.navigateByUrl("/users");
      });
  }

  backtoUserPage(){
    this.router.navigateByUrl("/users");
  }
  
}
