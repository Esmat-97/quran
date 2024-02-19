import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ChildComponent } from '../child/child.component';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule,ChildComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})

export class HomeComponent {
  data:any=[];
  
  constructor(private httpCliet:HttpClient){}

  ngOnInit(): void {
  this.fetchData()
  }
  fetchData(){
    this.httpCliet.get('https://raw.githubusercontent.com/nawafalqari/ayah/main/src/data/quran.json')
    .subscribe((data:any)=>{
      console.log(data[0])
      this.data=data;
    })
  }
  
}
