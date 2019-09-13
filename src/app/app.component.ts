import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'cars';

  constructor() {
    localStorage.removeItem('breadcrumbs')
    let breadcrumbs = [{breadcrumb: 'Makes', url: '/makes'}];
    localStorage.setItem('breadcrumbs', JSON.stringify(breadcrumbs)) 
  }
}
