import * as d3 from 'd3';
import './home.scss';

export default class HomeController {
  constructor (primaryUser) {
    'ngInject';

    this.name = `${primaryUser.firstName} ${primaryUser.lastName}`;

    this.renderChart();
  }
  renderChart () {
    const data = [4, 8, 15, 16, 23, 42];

    const container = d3.select('.chart')
      .selectAll('div')
      .data(data);

    const scale = d3.scaleLinear()
      .domain([0, d3.max(data)])
      .range([0, 420]);

    container.enter().append('div')
      .style('width', d => scale(d) + 'px')
      .text(d => d);
  }
}