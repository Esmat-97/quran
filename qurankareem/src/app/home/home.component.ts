import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ChildComponent } from '../child/child.component';
import { headerComponent } from '../header component ';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule,ChildComponent,headerComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})

export class HomeComponent {
  data:any=[];
  filter:any=[];
  
  constructor(private httpCliet:HttpClient){}

  ngOnInit(): void {
  this.fetchData()
  }
  fetchData(){
    this.httpCliet.get('https://raw.githubusercontent.com/nawafalqari/ayah/main/src/data/quran.json')
    .subscribe((data:any)=>{
      console.log(data[0])
      this.data=data;
      this.filter=this.data
    })
  }


  
  handleInput(value:any):void{

    console.log(value);
      if(value ==" "){
      this.filter == this.data                           
                  }
     else{
                                           
        this.filter = this.data.filter((item:any)=>item.sura_name_ar.includes(value) )
   }
 
 
   }    

}
