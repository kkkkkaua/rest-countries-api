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
    this.alteraTema();
  }

  verificaLua(): string {
    return this.luaAtiva ? 'luaAtiva' : 'luaInativa';
  }

  alteraTema(): void {
    if (this.luaAtiva) {
      document.querySelector('body')?.classList.add('dark-mode');
    } else document.querySelector('body')?.classList.remove('dark-mode');
  }
}
