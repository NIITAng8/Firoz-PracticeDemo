import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, FormBuilder, Validators, AbstractControl, ɵInternalFormsSharedModule} from '@angular/forms';

@Component({
  selector: 'app-projectform',
  templateUrl: './projectform.component.html',
  styleUrls: ['./projectform.component.css']
})
export class ProjectformComponent implements OnInit {
  projectForm: FormGroup;

  constructor(private fb: FormBuilder) { 
    this.CreateForm();
  }

  CreateForm(){
    this.projectForm = this.fb.group({
      projectname: ['',[Validators.required, Validators.minLength(5)]],
      startdate: '',
      enddate: '',
      efforthours: '',
      effortcost: ['',this.effortCostRange]
    })
  }

  onSubmit(){
    console.log(this.projectForm.value);
  }
   
  ngOnInit() {
  }

  effortCostRange(control:AbstractControl) : {[key:string]:boolean} | null {
    if(control.value !== undefined && (isNaN(control.value) || control.value < 100000 || control.value > 1000000 ))
    {
      return {'effortCostRange':true};
    }
    return null;
  }

}
