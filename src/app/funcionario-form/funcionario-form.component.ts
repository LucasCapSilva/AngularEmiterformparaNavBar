import { Component, OnInit, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-funcionario-form',
  templateUrl: './funcionario-form.component.html',
  styleUrls: ['./funcionario-form.component.css']
})
export class FuncionarioFormComponent {

  nome:string;
  @Output('enviar') enviarNome = new EventEmitter();

  adicionar() {

    this.nome

    this.enviarNome.emit(this.nome);
  }

}
