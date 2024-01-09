import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'],
})
export class HeaderComponent implements OnInit {
  luaAtiva: boolean = false;

  constructor() {}

  ngOnInit(): void {}

  alteraEstadoDaLua(): void {
    this.luaAtiva = !this.luaAtiva;
  }

  verificaLua(): string {
    return this.luaAtiva ? 'luaAtiva' : 'luaInativa';
  }
}
