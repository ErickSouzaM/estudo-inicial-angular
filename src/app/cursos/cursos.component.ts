import { Component, OnInit } from '@angular/core';
import { CursosService } from './cursos.service';

@Component({
  selector: 'app-cursos',
  templateUrl: './cursos.component.html',
  styleUrls: ['./cursos.component.css']
})
export class CursosComponent implements OnInit {
  names: string[];
  chosenOne: string;

  constructor(private cursosService : CursosService) {
    this.names = cursosService.getCursos();
    this.chosenOne = this.names[2];
  }

  ngOnInit() {
  }

}
