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

  alteraEstadoDaLua(): string {
    this.luaAtiva = !this.luaAtiva;
    return this.luaAtiva ? 'ativa' : 'inativa';
  }
}
