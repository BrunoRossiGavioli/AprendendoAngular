import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class TemplatesService {

  constructor() { }

  GetFuncionarios(){
    return ['Gilberto','Monica','Gustavo','Janaina','Vinicius'];
  }

  GetFuncionario(){
    return 'Gilberto';
  }
}
