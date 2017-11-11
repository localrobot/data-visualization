import * as d3 from 'd3';

function calculateCenter(c) {
  const date = c['judgement_date'].split('-');
  const year = parseInt(date[0].slice(-2));
  const month = parseInt(date[1]);

  return {
    cx: 10 * year,
    cy: 50 * month,
  }
}

export function renderGraph(cases) {
  d3.select('#graph')
    .selectAll('circle')
    .data(cases)
    .enter()
    .append('circle')
    .attr('id', c => `circle-${c['id']}`)
    .attr('cx', c => calculateCenter(c).cx)
    .attr('cy', c => calculateCenter(c).cy)
    .attr('r', c => 2.5 * c['mentiones'].length)
    .attr('fill', 'grey')
    .on('mouseover', c => {
      const circle = d3.select(`#circle-${c['id']}`);
      const mentionedIn = c['mentioned_in'];

      mentionedIn.forEach(mention => {
        const target = d3.select(`#circle-${mention}`)
        console.log(target);
        d3.select('#graph')
          .append('line')
          .attr('x1', circle.attr('cx'))
          .attr('y1', circle.attr('cy'))
          .attr('x2', target.attr('cx'))
          .attr('y2', target.attr('cy'))
          .attr('style', 'stroke:rgb(255,0,0);stroke-width:2')
      })
    })
    .on('mouseout', () => {
      d3.selectAll('line').remove()
    })
}
