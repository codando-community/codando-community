import { Component } from '@angular/core';

@Component({
  selector: 'modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.scss']
})
export class ModalComponent {
  public mostrar: boolean = true;
  public data = [
    {
      text: "A Hello World conference está chegando!",
      button_text: "Acessar o Sympla",
      button_link: "https://www.sympla.com.br/produtor/codandocommunity"
    }
  ]

  toggle () {
    this.mostrar = !this.mostrar;
  }
}
