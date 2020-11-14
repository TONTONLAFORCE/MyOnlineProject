import { Component, OnInit } from '@angular/core';
import {CommonService} from '../common.service';
import {FormControl, FormGroup} from '@angular/forms';

@Component({
  selector: 'app-add-restaurant',
  templateUrl: './add-restaurant.component.html',
  styleUrls: ['./add-restaurant.component.css']
})
export class AddRestaurantComponent implements OnInit {

  alert: boolean = false;
  form = new FormGroup({
    name: new FormControl(''),
    adress: new FormControl(''),
    mobile: new FormControl(''),
    email: new FormControl(''),
    description: new FormControl('')
  });

  constructor( private  commonService: CommonService) { }

  ngOnInit(): void {
  }

  onSubmit() {
    this.alert = true ;
    this.commonService.getRestauId().subscribe(
      response => {
        this.commonService.addResto({
          id: response[0].id+1,
          name: this.form.value.name,
          adress: this.form.value.adress,
          mobile: this.form.value.mobile,
          email: this.form.value.email,
          description: this.form.value.description
        })
      }
    )


  }

  closeAlert() {
    this.form.reset({});
    this.alert = false;
  }
}
