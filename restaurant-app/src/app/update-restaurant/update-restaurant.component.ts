import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import {FormControl, FormGroup} from '@angular/forms';
import {CommonService} from '../common.service';
import {RestaurantModel} from '../restaurant.model';
import {compareNumbers} from '@angular/compiler-cli/src/diagnostics/typescript_version';
import {map} from 'rxjs/operators';

@Component({
  selector: 'app-update-restaurant',
  templateUrl: './update-restaurant.component.html',
  styleUrls: ['./update-restaurant.component.css']
})
export class UpdateRestaurantComponent implements OnInit {
  restau: RestaurantModel = new RestaurantModel();
  alert: boolean = false;
  form: FormGroup = new FormGroup({
    name: new FormControl(this.restau.name),
    adress: new FormControl(this.restau.adress),
    mobile: new FormControl(this.restau.mobile),
    email: new FormControl(this.restau.email),
    description: new FormControl(this.restau.description)
  });
  restauId: number = null;



  constructor( private route: Router , private activeRoute: ActivatedRoute , private commonService: CommonService) { }

  ngOnInit(): void {
    this.commonService.getRestoList().pipe().subscribe( response => {
      this.restau = response[ (+this.activeRoute.snapshot.params['id'])-1 ];
      this.form = new FormGroup({
        name: new FormControl(this.restau.name),
        adress: new FormControl(this.restau.adress),
        mobile: new FormControl(this.restau.mobile),
        email: new FormControl(this.restau.email),
        description: new FormControl(this.restau.description)
      });

    });
    console.log( this.form.value );

  }

  closeAlert() {
    this.alert = false;
  }

  onSubmit() {
    this.commonService.getRestauId().pipe().subscribe(
      response => {
        this.commonService.updateResto( {
          id: this.activeRoute.snapshot.params['id'],
          name: this.form.value.name,
          adress: this.form.value.adress,
          mobile: this.form.value.mobile,
          email: this.form.value.email,
          description: this.form.value.description
        } );
        this.alert = true ;
      }
    )


  }
}
