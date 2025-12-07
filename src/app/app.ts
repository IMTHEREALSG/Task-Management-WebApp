import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HeaderComponent } from './header/header.component';
import { UserComponent } from "./user/user";

@Component({
  selector: 'app-root',
  imports: [HeaderComponent, RouterOutlet, UserComponent],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {}
