import { Component } from '@angular/core';
import { url } from 'node:inspector';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  members={
    fname:'Anjaneyulu',
    fcontactno:9985292683,
    img1:"./assets/fimg.jpg",
    mname:'Sunitha',
    mcontactno:7032192045,
    img2:"./assets/mimg.jpg",
    mename:'Jayaprakash',
    mecontactno:9603026925,
    img3:"./assets/meimg.jpg",
    sname:'Lavanya',
    scontactno:9347721090,
    img4:"./assets/simg.jpg"
  }
}
