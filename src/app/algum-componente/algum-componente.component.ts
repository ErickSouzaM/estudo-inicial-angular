import { Component } from '@angular/core';

@Component({
    selector: 'custom',
    //templateUrl: './algum-componente.component.html'
    template: `<p>{{texto}}</p>`
})

export class AlgumComponenteComponent {
  title = 'tretita';
  texto = 'meu texto chique';
}
