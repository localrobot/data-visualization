import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { PlotService } from './plot.service';
import { renderGraph } from './render-graph';

@Component({
  selector: 'mkl-plot',
  templateUrl: './plot.component.html',
  styleUrls: ['./plot.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class PlotComponent implements OnInit {

  cases: any;

  constructor(private plotService: PlotService) { }

  ngOnInit() {
    this.plotService.getCases().subscribe(cases => {
      this.cases = cases;
      console.log(cases);
      // this.findYearLimits(cases);
      // this.renderGraph(cases);
      renderGraph(cases);
    })
  }

  findYearLimits(cases) {
    let min = 9999, max = -1;
    for (let c of cases) {
      let year = parseInt(c['judgement_date'].split('-')[0]);
      min = year < min ? year : min;
      max = year > max ? year : max;
    }

    console.log(min, max);
    return [min, max];
  }

}
