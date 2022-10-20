import { NONE_TYPE } from '@angular/compiler';
import { Component, OnInit } from '@angular/core';
import { NgModel } from '@angular/forms';
import { MatIconModule } from '@angular/material/icon';
import { TestScheduler } from 'rxjs/testing';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent implements OnInit {
  hab = [
    { habi: 'JavaScript', cur: 'AngularJS', prof: 'Matheus Battisti' },
    { habi: 'AngularJS', cur: 'ReactJS', prof: 'Matheus Battisti' },
    { habi: 'ReactJS', cur: 'HTML/CSS', prof: 'Matheus Battisti' },
    { habi: 'CSS/HTML', cur: 'TypeScript', prof: 'Matheus Battisti' },
    { habi: 'MongoDB', cur: 'JavaScript', prof: 'Matheus Battisti' },
    { habi: 'MySQL', cur: 'NodeJS', prof: 'Matheus Battisti' },
    { habi: 'NodeJS', cur: 'MongoDB', prof: 'Matheus Battisti' },
    { habi: 'Express', cur: 'JavaScript', prof: 'CFB Cursos' },
    { habi: 'TypeScript', cur: 'HTML/CSS', prof: 'CFB Cursos' },
    { habi: 'Excel', cur: 'NodeJS', prof: 'Guia do programador' },
    { habi: 'Word', cur: 'Québec Java Digital', prof: 'Dio.' },
    { habi: 'PowerPoint', cur: 'Analista Financeiro', prof: 'Instrutoria' },
    { habi: 'PhotoShop', cur: 'Operacional Engeman CMMS', prof: 'Engeman' },
    { habi: 'PremierePRO', cur: 'Operacional Engeman Mobile', prof: 'Engeman' },
    { habi: 'CorelDRAW', cur: 'PhotoShop', prof: 'Px MASTERS' },
    { habi: 'Git', cur: 'PremierePRO', prof: 'Allan Portes' },
  ];

  constructor() {}

  ngOnInit(): void {}

  showFundo: boolean = false;

  showExp: boolean = false;

  tshowExp() {
    this.showExp = !this.showExp;
    this.showFundo = !this.showFundo;
  }

  showCur: Boolean = false;

  tshowCur() {
    this.showCur = !this.showCur;
    this.showFundo = !this.showFundo;
  }

  showHab: Boolean = false;

  tshowHab() {
    this.showHab = !this.showHab;
    this.showFundo = !this.showFundo;
  }
}
