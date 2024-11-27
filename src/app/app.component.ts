import { Component } from '@angular/core';
import { SidenavComponent } from './layout/sidenav/sidenav.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [SidenavComponent],
  template: `
    <app-sidenav>
      <h1>Welcome to {{ title }}!</h1>
      <p>This is the main content area.</p>
    </app-sidenav>
  `
})
export class AppComponent {
  title = 'Angular Material App';
}