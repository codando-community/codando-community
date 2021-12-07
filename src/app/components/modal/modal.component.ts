import { Component } from '@angular/core';

@Component({
  selector: 'modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.scss']
})
export class ModalComponent {
  mostrar: boolean = true;

  toggle () {
    this.mostrar = !this.mostrar;
  }
}
