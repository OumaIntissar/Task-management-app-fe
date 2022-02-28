import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { StatutService } from 'src/app/services/statut.service';

@Component({
  selector: 'app-add-statut',
  templateUrl: './add-statut.component.html',
  styleUrls: ['./add-statut.component.css']
})
export class AddStatutComponent implements OnInit {
  statutFormGroup?: FormGroup;
  submitted: boolean = false;
  constructor( private statutService: StatutService,
    private fb: FormBuilder, 
    private router:Router) { 
    }

  ngOnInit(): void {
    this.statutFormGroup = this.fb.group({
      name: ["", Validators.required]
    });
  }

  onSaveStatut() {
    this.submitted = true;
    if (this.statutFormGroup?.invalid) return;
    this.statutService.saveStatut(this.statutFormGroup?.value)
      .subscribe(data => {
        alert("Success Saving statut");
        this.backtoStatusPage();
      });
  }

  backtoStatusPage(){
    this.router.navigateByUrl("/status");
  }

}
