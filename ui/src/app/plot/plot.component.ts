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

  constructor(private plotService: PlotService) { }

  ngOnInit() {
    this.plotService.getCases().subscribe(cases => renderGraph(cases))
  }

}
