import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-cursos',
  templateUrl: './cursos.component.html',
  styleUrls: ['./cursos.component.css']
})
export class CursosComponent implements OnInit {
  names: string[] = ["João", "Maria", "Jorge", "Marta"];
  chosenOne: string;
  constructor() {
    this.chosenOne = this.names[2];
  }

  ngOnInit() {
  }

}
