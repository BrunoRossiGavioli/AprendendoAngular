import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-templates',
  templateUrl: './templates.component.html',
  styleUrls: ['./templates.component.css']
})
export class TemplatesComponent implements OnInit {

  NomeFuncionario: string = 'Gilberto';

  funcionarios: string[] = ['Gilberto','Monica','Gustavo','Janaina','Vinicius']

  constructor() { }

  ngOnInit(): void {
  }

}
