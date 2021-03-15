import { TemplatesService } from './templates.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-templates',
  templateUrl: './templates.component.html',
  styleUrls: ['./templates.component.css']
})
export class TemplatesComponent implements OnInit {

  NomeFuncionario: string;

  funcionarios: string[];

  constructor(private templateservice: TemplatesService) {

    this.NomeFuncionario = this.templateservice.GetFuncionario();

    this.funcionarios = this.templateservice.GetFuncionarios();

  }

  ngOnInit(): void {
  }

}
