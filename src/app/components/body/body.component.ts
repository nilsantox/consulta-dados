import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-body',
  templateUrl: './body.component.html',
  styleUrls: ['./body.component.scss']
})
export class BodyComponent {

  usuarios: string[] = [];

  constructor() { 
    this.usuarios.push("Matheus dos Santos");
    
  }

}
