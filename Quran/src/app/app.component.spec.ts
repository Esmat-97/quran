import { TestBed } from '@angular/core/testing';
import { AppComponent } from './app.component';
import { Component } from '@angular/core';
import { Addition } from './Calculator';


describe('AppComponent', () => {

  let component =new AppComponent();


  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AppComponent],
    }).compileComponents();
  });

  


  it('My testcase',()=>{
    expect(true).toBe(true);
      });






          it('Show  equality result',()=>{
            var a="one";
            var b="one";
            expect(a).toEqual(b);
              }); 

    

              it('Show  true result',()=>{
                var a=true;
                expect(a).toBeTrue();
              
                  }); 


                  it('Show  false result',()=>{
                    var a=false;
                    expect(a).toBeFalse();
                      }); 



              it('Show Aler message',()=>{
                expect(component.ShowMessage("HELLO")).toBe("HELLO");
                  }); 
        
        
        
                  it('Show  addition result',()=>{
                    expect(Addition(10,20)).toBe(30);
                      }); 


                    

});
