import * as d3 from 'd3';

export default function (selector) {
  const size = 100;
  const app = d3.select(selector);
  const chart = app
    .append('svg')
    .attr('class', 'progressor')
    .attr('viewBox', `0 0 1000 ${size}`);
  const token = chart
    .append('rect')
    .attr('class', 'progressor-token')
    .attr('width', size)
    .attr('height', size);
  const x = d3
    .scaleLinear()
    .domain([0, 1])
    .range([0, 1000 - size]);

  this.update = function updateProgressor(newValue) {
    token
      .data([d3.min([1, newValue])])
      .transition()
      .attr('x', d => x(d));
  };
}
