import * as d3 from 'd3';

export default function (selector, opts) {
  const defaults = {
    size: 100,
  };

  const o = Object.assign(defaults, opts);

  const app = d3.select(selector);

  const chart = app
    .append('svg')
    .attr('class', 'progressor')
    .attr('viewBox', `0 0 1000 ${o.size}`);

  const x = d3
    .scaleLinear()
    .domain([0, 1])
    .range([0, 1000 - o.size]);

  let token;

  if (o.image) {
    token = chart.append('image')
      .attr('xlink:href', o.image);
  } else {
    token = chart.append('rect');
  }

  token
    .attr('class', 'progressor-token')
    .attr('width', o.size)
    .attr('height', o.size);

  this.update = function updateProgressor(newValue) {
    token
      .data([d3.min([1, newValue])])
      .transition()
      .attr('x', d => x(d));
  };
}
