import { Component } from '@angular/core';

@Component({
  selector: 'app-contact',
  templateUrl: './contato.component.html',
  styleUrls: ['./contato.component.css']
})
export class ContatoComponent {
  onSubmit(form: any): void {
    console.log('Form Data:', form.value);

  }
}
