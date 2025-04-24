import { Component } from '@angular/core';
import { HeaderComponent } from "./header/header.component";
import { FooterComponent } from "./footer/footer.component";
import { ContainerComponent } from "./container/container.component";

@Component({
  selector: 'app-root',
  imports: [HeaderComponent, FooterComponent, ContainerComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'selfportfolio';
}
