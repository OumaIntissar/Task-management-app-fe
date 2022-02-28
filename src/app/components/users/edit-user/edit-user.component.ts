import { Component, OnInit } from '@angular/core';
import { UserService } from 'src/app/services/user.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';


@Component({
  selector: 'app-edit-user',
  templateUrl: './edit-user.component.html',
  styleUrls: ['./edit-user.component.css']
})
export class EditUserComponent implements OnInit {
  userId: number;
  userFormGroup?: FormGroup;
  private submitted: boolean = false;

  constructor(private activatedRoute: ActivatedRoute,
    private userService: UserService,
    private fb: FormBuilder,
    private router:Router) {
    this.userId = activatedRoute.snapshot.params['id'];
  }

  ngOnInit(): void {
    this.userService.getUser(this.userId)
      .subscribe(user => {
        this.userFormGroup = this.fb.group({
          id: [user.id, Validators.required],
          firstName: [user.firstName, Validators.required],
          lastName: [user.lastName, Validators.required],
          email: [user.email, Validators.required]
        })
      });
  }

  onUpdateProduct() {
    this.userService.updateUser(this.userFormGroup?.value)
      .subscribe(data => {
        alert("Success user updated");
        this.router.navigateByUrl("/users");
      });
  }

  backtoUserPage(){
    this.router.navigateByUrl("/users");
  }
}
