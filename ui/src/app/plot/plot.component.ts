import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { PlotService } from './plot.service';
import * as d3 from 'd3';

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
      this.renderGraph(cases);
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

  renderGraph(cases) {
    const caseCircles = d3.select('#graph')
      .selectAll('g')
      .data(cases)
      .enter()
      .append('g')
      .attr('class', 'case')
      // .append('circle')
      // .attr('')
      .attr('transform', c => {
        const date = c['judgement_date'].split('-');
        const year = 10 * (+date[0].slice(-2));
        const month = 10 * (+date[1]);
        return `translate(${year}, ${month})`;
      })

    caseCircles.append('circle')
      .attr('r', c => c['mentiones'].length)
      .attr('fill', 'grey')


    // .text(c => `${c['judgement_date']}, World!`);
  }

}
