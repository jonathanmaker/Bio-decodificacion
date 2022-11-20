import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { BioModelacionComponent } from './bio-modelacion/bio-modelacion.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  constructor(private router: Router){

  }
  title = 'biodecodificacion';

  navegar(){
this.router.navigate(['bio-modelacion'])
  }
}
