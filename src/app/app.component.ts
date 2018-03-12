import { Component } from '@angular/core';
import { MyDataService } from "./my-data.service";
import { HttpClient  } from '@angular/common/http';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  constructor(private newService: MyDataService) {
    
    console.log(this.newService.success())
  }
}
