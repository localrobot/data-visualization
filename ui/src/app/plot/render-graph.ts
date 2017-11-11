import * as d3 from 'd3';

export function renderGraph(cases) {
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
      const month = 50 * (+date[1]);
      return `translate(${year}, ${month})`;
    })
    .on('mouseover', (c) => {
      console.log('Mouse enter: ', c)
      console.log('current el', d3.select(this))
      d3.select(this).raise()
        .append('text')
        .attr('class', 'case-title')
        .text(c['title'])
    })

  caseCircles.append('circle')
    .attr('r', c => 2 * c['mentiones'].length)
    .attr('fill', 'grey')


  // .text(c => `${c['judgement_date']}, World!`);
}
