import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-data-binding',
  templateUrl: './data-binding.component.html',
  styleUrls: ['./data-binding.component.css']
})
export class DataBindingComponent implements OnInit {

  url: string = 'http://youtube.com'
  urlimg: string = 'http://lorempixel.com.br/225/225/?2'
  CursoAn: boolean = true;

  constructor() { }

  GetValor(){
    return 1;
  }

  GetGosto(){
    return true;
  }

  ngOnInit(): void {
  }

}
