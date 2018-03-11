import { Component, OnInit } from '@angular/core';
import { MyDataService } from "./../my-data.service";

@Component({
  selector: 'app-temp1',
  templateUrl: './temp1.component.html',
  styleUrls: ['./temp1.component.css']
})
export class Temp1Component implements OnInit {

  constructor(private newService: MyDataService) { }

  ngOnInit() {
    console.log(this.newService.success())
  }
}
