import { Component, OnInit } from '@angular/core';
import { MultiDataSet, Label, Color } from 'ng2-charts';
import { ChartType } from 'chart.js';

@Component({
  selector: 'app-donut',
  templateUrl: './donut.component.html',
  styleUrls: ['./donut.component.css']
})
export class DonutComponent implements OnInit {

   // Doughnut
   public doughnutChartLabels: Label[] = ['Download Sales', 'In-Store Sales', 'Mail-Order Sales'];
   public doughnutChartData: MultiDataSet = [
     [350, 450, 100]
   ];
   public doughnutChartType: ChartType = 'doughnut';
 
   constructor() { }
 
   ngOnInit(): void {
   }
 
   public colors:Color[] = [
    {backgroundColor: ['','','']}
   ];

}
