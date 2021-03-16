import { Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-data-binding',
  templateUrl: './data-binding.component.html',
  styleUrls: ['./data-binding.component.css']
})
export class DataBindingComponent implements OnInit {

  url: string = 'http://youtube.com'
  urlimg: string = 'http://lorempixel.com.br/225/225/?2'
  CursoAn: boolean = true;
  valorAtual: string;
  valorSalvo: string;
  isMouseOver: boolean = false;
  nome: string = "abc";
  nome2: string = "abc";
  nome3: string = "abc";

  meClique(){
    alert('Obrigado por clicar em mim!');
    console.log('banana');
  }

  onKeyUp(evento: KeyboardEvent){
    this.valorAtual = (<HTMLInputElement>evento.target).value;
  }

  onKeyOut(valor){
    this.valorSalvo = valor;
  }

  onMouse(){
    this.isMouseOver = !this.isMouseOver;
  }

  GetValor(){
    return 1;
  }

  GetGosto(){
    return true;
  }

  constructor() { }

  ngOnInit(): void {
  }

}
