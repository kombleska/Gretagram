import { Component, OnInit } from '@angular/core';
import * as Highcharts from 'highcharts';

declare var require: any;
let Boost = require('highcharts/modules/boost');
let noData = require('highcharts/modules/no-data-to-display');
let More = require('highcharts/highcharts-more');

Boost(Highcharts);
noData(Highcharts);
More(Highcharts);
noData(Highcharts);


@Component({
  selector: 'app-stat3',
  templateUrl: './stat.component.html',
  styleUrls: ['./stat.component.css']
})
export class StatComponent3 implements OnInit {

  public options: any = {
    chart: {
      type: 'variablepie'
    },
    title: {
      text: 'Popularite par pays'
    },
    tooltip: {
      headerFormat: '',
      pointFormat: '<span style="color:{point.color}">\u25CF</span> <b> {point.name}</b><br/>' +
        'Area (square km): <b>{point.y}</b><br/>' +
        'Population density (people per square km): <b>{point.z}</b><br/>'
    },
    series: [{
      minPointSize: 10,
      innerSize: '20%',
      zMin: 0,
      name: 'countries',
      data: [{
        name: 'Espagne',
        y: 505370,
        z: 92.9
      }, {
        name: 'France',
        y: 551500,
        z: 118.7
      }, {
        name: 'Suisse',
        y: 312685,
        z: 124.6
      }, {
        name: 'Londres',
        y: 78867,
        z: 137.5
      }, {
        name: 'Italie',
        y: 301340,
        z: 201.8
      }, {
        name: 'New-York',
        y: 41277,
        z: 214.5
      }, {
        name: 'Allemagne',
        y: 357022,
        z: 235.6
      }]
    }]
  };

  constructor() { }

  ngOnInit() {
    Highcharts.chart('container', this.options);
  }

}
