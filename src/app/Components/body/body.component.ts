import { Component, OnInit } from '@angular/core';

@Component({
    selector : 'app-body',
    templateUrl : './body.component.html'
})

export class BodyComponent implements OnInit{
    mostrar = true;
    personajes: string[] = ['per1', 'Per2', 'Per3'];
    frase: any = {
        mensaje: 'Esta es una frase',
        autor: 'Anonimo'
    }
    constructor() {

    }
    ngOnInit(){

    }
}
