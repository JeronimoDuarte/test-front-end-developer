import { Component, OnInit } from '@angular/core';
import { AppLightService } from '../app-light.service';

@Component({
  selector: 'app-dash',
  templateUrl: './dash.component.html',
  styleUrls: ['./dash.component.css']
})
export class DashComponent implements OnInit {

  constructor(private appService: AppLightService) { }

  ngOnInit() {
    this.getValuesChar()
    this.showChart()
  }

  dadosChar = new Object
  labelsLine:any[] = []
  valuesDataLine:any[] = []
  getValuesChar() {
    this.appService.getChar().subscribe(res => {
      this.dadosChar = res
      if(this.dadosChar)
        this.labelsLine = this.dadosChar.days
        this.valuesDataLine = this.dadosChar.values        
    })
  }
  line: any
  dataLine: any
  optionsLine: any
  showChart() {
    if (this.labelsLine.length) {
      console.log("showChart")
      console.log(this.labelsLine)
      this.line = 'line';

      this.dataLine = {
        labels: this.labelsLine,
        datasets: [
          {
            label: ["Por Dia"],
            data: this.valuesDataLine
          },
          {
            label: ["Semanas"],
            data: this.valuesDataLine
          },
          {
            label: ["Meses"],
            data: this.valuesDataLine
          }
        ]
      };
      this.optionsLine = {
        responsive: true,
        maintainAspectRatio: false,
        legend: {
          position: 'right'
        }
      };
    }
  }

}
