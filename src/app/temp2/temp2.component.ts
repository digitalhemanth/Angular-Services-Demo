import { Component, OnInit } from '@angular/core';
import { MyDataService } from "./../my-data.service";

@Component({
  selector: 'app-temp2',
  templateUrl: './temp2.component.html',
  styleUrls: ['./temp2.component.css']
})
export class Temp2Component implements OnInit {

  constructor(private newService: MyDataService) { }

  ngOnInit() {
    this.newService.fechData();
  }

}
