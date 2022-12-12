import { Component } from '@angular/core';
import * as apex from 'ng-apexcharts';
import { ChartConfiguration, ChartOptions } from "chart.js";
import { baseColors } from 'ng2-charts';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
  
export class DashboardComponent {



  // chart start 
  series!: apex.ApexAxisChartSeries;
  chart!: apex.ApexChart;
  legend!: apex.ApexLegend;
  xaxis!: apex.ApexXAxis;
  stroke!: apex.ApexStroke;
  markers!: apex.ApexMarkers;

  ngOnInit(): void {
    this.initializeChartOptions();
    
  }

  private initializeChartOptions(): void {
    
    this.series = [
      {
        name:'Nest',
        type: 'line',
        color: '#7B899C',
        data: [42, 28, 43, 34, 20, 25, 22]
      },
      {
        name: 'Angular',
        type: 'column',
        color: '#95A0B0',
        data: [11, 10, 8, 11, 8, 10, 17],
      }
    ];
    this.stroke = {
      curve: 'straight',
    }
    this.markers= {
      size: 20,
      shape: 'square',
  }

    this.chart = {
      type: 'line',
      
    };
    this.xaxis = {
      categories: ["Sat", "Sun", "Mon", "Tue", "Wed",
        "Thur", "Fri"]
    };

    this.legend = {
      show: true,
      position: 'bottom',
      horizontalAlign: 'right',
      showForSingleSeries: true,
      onItemClick: {
        toggleDataSeries: true
      }
    };
  }
  // chart end
 
  // chart 2 start 
  public lineChartData: ChartConfiguration<'radar'>['data'] = {
    labels: [
      'Concept',
      'Design',
      'Development',
      'Extras',
      'Marketing'
    ],
    datasets: [
      {
        data: [ 15, 20, 28,20, 28 ],
        label: 'Color',
        fill: true,
        tension: .1,
        borderColor: 'blue',
        backgroundColor: 'rgba(10,10,10,0.1)'
      }
    ]
  };
  
  public lineChartOptions: ChartOptions<'radar'> = {
    responsive: false
    
  };
  public lineChartLegend = true;

  constructor() {
  }

  // chart 2 end
  //chart 3 start
    public polarChartOptions: ChartConfiguration<'polarArea'>['options'] = {
      responsive: false,
    };
    public polarChartLabels: string[] = ['API', 'Backend', 'Frontend', 'Issues'];

    public polarChartDatasets: ChartConfiguration<'polarArea'>['data']['datasets'] = [
      {
        data: [65, 59, 90, 81],
        label: 'Series A',
        borderColor: '#405872',
      },
      {
        data: [28, 48, 40, 19],
        label: 'Series B',
        borderColor: '#354B60',
        backgroundColor:'#9BA7B2',
      }
    ];

  //chart 3 end
  home = true
  budget = false
  team = false
  show = 'active'
  hide = 'nonActive'
  show2='nonActive'
  showContent(type:string){
    if (type == 'home') {
      this.home = true
      this.budget = false
      this.team = false
      this.show = 'active'
      this.hide = 'nonActive'
      this.show2='nonActive'
    }
       else if(type == 'budget'){
          this.home = false
          this.budget = true
          this.team = false
          this.show = 'nonActive'
          this.hide = 'active'
          this.show2='nonActive'
        }
        else if(type == 'team'){
          this.home = false
          this.budget = false
          this.team = true
          this.show = 'nonActive'
          this.hide = 'nonActive'
          this.show2='active'
        }
  }
}
