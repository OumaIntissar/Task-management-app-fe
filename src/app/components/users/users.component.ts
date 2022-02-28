import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { User } from 'src/app/model/user.model';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit {

  constructor(private userService: UserService,
    private router: Router) { }

  users?: User[];
  ngOnInit(): void {
    this.onGetAllUsers();
  }

  onGetAllUsers() {
    this.userService.getAllUsers().subscribe(data => {
      this.users = data;
    })
  }
  onDelete(user: User) {
    let v = confirm("WARNING !!! All tasks of this user will be deleted automatically. \n Continue ?");
    if (v == true)
      this.userService.deleteUser(user)
        .subscribe(data => {
          this.onGetAllUsers();
        })

    else
      this.onGetAllUsers();
  }

  onNewUser() {
    this.router.navigateByUrl("/newUser");
  }

  onEdit(user: User) {
    this.router.navigateByUrl("/editUser/" + user.id);
  }

  showUserTasks(user: User) {
    this.router.navigateByUrl("/users/" + user.id + "/tasks");
  }
}
