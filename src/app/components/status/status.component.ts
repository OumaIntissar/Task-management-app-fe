import { Component, OnInit } from '@angular/core';
import { Task } from 'src/app/model/task.model';
import { User } from 'src/app/model/user.model';
import { TaskService } from 'src/app/services/task.service';
import { ActivatedRoute, Router } from '@angular/router';
import { Statut } from 'src/app/model/statut.model';
import { StatutService } from 'src/app/services/statut.service';

@Component({
  selector: 'app-status',
  templateUrl: './status.component.html',
  styleUrls: ['./status.component.css']
})
export class StatusComponent implements OnInit {

  constructor(private taskService: TaskService,
    private statutService: StatutService,
    private activatedRoute: ActivatedRoute,
    private router: Router) {

  }
  statutId?: number;
  status?: Statut[];
  ngOnInit(): void {
    this.getAllStatus();
  }

  getAllStatus() {
    this.statutService.getStatus().subscribe(data => {
      this.status = data;
    })
  }

  onNewStatut() {
    this.router.navigateByUrl("/newStatut");
  }

  onEdit(statut: Statut) {
    this.router.navigateByUrl("/editStatut/" + statut.id);
  }

  onDelete(statut: Statut) {
    let v = confirm("WARNING !!! All tasks with statut = \"" + statut.name + "\" will be deleted automatically. \n Continue ?");
    if (v == true)
      this.statutService.deleteStatut(statut)
        .subscribe(data => {
          this.getAllStatus();
        });
    else this.getAllStatus();
  }

  backtoStatusPage() {
    this.router.navigateByUrl("/status");
  }

}
