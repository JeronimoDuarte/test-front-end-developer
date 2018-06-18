import { Component, OnInit } from '@angular/core';
import { AppLightService } from '../app-light.service';

@Component({
  selector: 'app-ganhos',
  templateUrl: './ganhos.component.html',
  styleUrls: ['./ganhos.component.css']
})
export class GanhosComponent implements OnInit {

  constructor(private appService: AppLightService) { }
  valueCards = new Object
  ngOnInit() {

    this.getData()
  }

  getData(){
    this.appService.getCard().subscribe(
      res => {
        this.valueCards = res
      }
    )
  }

}
