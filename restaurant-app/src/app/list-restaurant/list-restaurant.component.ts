import { Component, OnInit } from '@angular/core';
import {CommonService} from '../common.service';
import {RestaurantModel} from '../restaurant.model';

@Component({
  selector: 'app-list-restaurant',
  templateUrl: './list-restaurant.component.html',
  styleUrls: ['./list-restaurant.component.css']
})
export class ListRestaurantComponent implements OnInit {
  public collections: RestaurantModel[];

  constructor( private commonService: CommonService ) { }

  ngOnInit(): void {
    this.commonService.getRestoList()
      .subscribe( (response) => this.collections = response );
  }

  deleteResto(id: number) {

  }
}
