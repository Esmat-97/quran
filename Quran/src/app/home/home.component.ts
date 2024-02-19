import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule],
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
    this.httpCliet.get('https://cdn.jsdelivr.net/npm/quran-json@3.1.2/dist/quran.json')
    .subscribe((data:any)=>{
      console.log(data[0])
      this.data=data;
    })
  }
  
}
