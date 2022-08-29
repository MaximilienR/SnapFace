import { Component, OnInit,Input } from '@angular/core';
import { FaceSnap } from '../models/face-snap.model';
 @Component({
  selector: 'app-face-snap',
  templateUrl: './face-snap.component.html',
  styleUrls: ['./face-snap.component.scss']
})
export class FaceSnapComponent implements OnInit {
@Input() faceSnap!:FaceSnap;

 title!:string;
 description!:string;
createDate!:Date;
snaps:number=0;
person!:string;
image!:string;
btnSnap!:string;

ngOnInit(){
  this.btnSnap="Oh Snap"
  this.title='Mise en pratique de la semaine';
  this.person="Smith";
  this.description="Le personnage que j'ai inventé pour les test"
 //permet de mettre la date
  this.createDate= new Date();
   this.image='../../assets/img1.jpg'
}

//incrementation de snap

onSnap(){
if (this.btnSnap==='déjà Snapé'){
this.faceSnap.snap --;
this.btnSnap='Snapé'
}else{
  this.faceSnap.snap ++;
  this.btnSnap='déjà Snapé'
}
}
}
