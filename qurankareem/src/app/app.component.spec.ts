import { TestBed } from '@angular/core/testing';
import { AppComponent } from './app.component';
import { Component } from '@angular/core';
import { Addition } from './Calculator';    
import { MarkPipe } from './pipes/mark.pipe';


describe('AppComponent', () => {

  let component =new AppComponent();


  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AppComponent],
    }).compileComponents();
  });

  /* */


  it('create instance from pipe',()=>{
    const pipe =new MarkPipe();
    expect(pipe).toBeTruthy();
      });


      it('show if the value one',()=>{
        const pipe =new MarkPipe();
        expect(pipe.transform(1)).toEqual('the first jozz');
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
