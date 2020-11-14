import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroup} from '@angular/forms';
import {CommonService} from '../common.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  user: FormGroup = new FormGroup({
    email: new FormControl(''),
    password: new FormControl('')
  });

  constructor( private commonService: CommonService) { }

  ngOnInit(): void {
  }

  registerUser() {
    this.commonService.addRegister( this.user.value ).pipe().subscribe( response => console.log( response ) );

  }
}
