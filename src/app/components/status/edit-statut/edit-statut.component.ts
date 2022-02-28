import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Statut } from 'src/app/model/statut.model';
import { Task } from 'src/app/model/task.model';
import { StatutService } from 'src/app/services/statut.service';

@Component({
  selector: 'app-edit-statut',
  templateUrl: './edit-statut.component.html',
  styleUrls: ['./edit-statut.component.css']
})
export class EditStatutComponent implements OnInit {
  statutId!: number;
  statut?: Statut;
  userFormGroup?: FormGroup;
  private submitted: boolean = false;

  constructor(private activatedRoute: ActivatedRoute,
    private statutService: StatutService,
    private fb: FormBuilder,
    private router: Router) {
    this.statutId = activatedRoute.snapshot.params['statutId'];
  }

  ngOnInit(): void {
    this.statutService.getStatut(this.statutId)
      .subscribe(task => {
        this.userFormGroup = this.fb.group({
          id: [task.id, Validators.required],
          name: [task.name, Validators.required]
        })
      });
  }

  onUpdateStatut() {

    this.statutService.updateStatut(this.userFormGroup?.value)
      .subscribe(data => {
        alert("Success task updated");
        this.backtoStatusPage();
      });
  }

  backtoStatusPage() {
    this.router.navigateByUrl("/status");
  }

}
