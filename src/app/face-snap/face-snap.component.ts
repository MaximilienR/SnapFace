import { Component, OnInit } from '@angular/core';
 @Component({
  selector: 'app-face-snap',
  templateUrl: './face-snap.component.html',
  styleUrls: ['./face-snap.component.scss']
})
export class FaceSnapComponent implements OnInit {
 title!:string;
 description!:string;
createDate!:Date;
snaps:number=0;  
person!:string;
image!:string;
btnSnap:string='Snapé';

ngOnInit(){
  this.title='Mise en pratique de la semaine';
  this.person="Smith";
  this.description="Le personnage que j'ai inventé pour les test"
 //permet de mettre la date 
  this.createDate= new Date();
   this.image='../../assets/img1.jpg'
}

//incrementation de snap 

onSnap(){
if (this.btnSnap==='Snapé'){
this.snaps ++;
this.btnSnap='déjà Snapé'
}else{
  this.snaps --;
  this.btnSnap='oh snap'
}
}
}