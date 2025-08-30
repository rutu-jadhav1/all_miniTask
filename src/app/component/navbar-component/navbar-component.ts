import { Component } from '@angular/core';
import { RouterLink, RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-navbar-component',
  imports: [RouterOutlet,RouterLink],
  templateUrl: './navbar-component.html',
  styleUrl: './navbar-component.css'
})
export class NavbarComponent {

}
