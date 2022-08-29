import { Component, OnInit } from '@angular/core';
import { FaceSnap } from './models/face-snap.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  mySnap!:FaceSnap;
  myOtherSnap!:FaceSnap;
  myLastSnap!:FaceSnap;
  ngOnInit(){
    this.mySnap=new FaceSnap(
      "Smith",
      "Le personnage que j'ai inventé pour les test",
      "../../assets/img1.jpg'",
      new Date(),
      0
    );
    this.myOtherSnap=new FaceSnap(
      'Capital de france',
      'Le plus beau monument',
      '../../src/assets/img20.jpg',
      new Date(),
      2
    );
    this.myLastSnap=new FaceSnap(
      'Spécialité culinaire',
      'Meuillez pizza du monde',
      '../assets/img3.jpg',
      new Date(),
      7
    )
 }
 }
