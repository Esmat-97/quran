import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'mark',
  standalone: true
})
export class MarkPipe implements PipeTransform {


  transform(value: number, ...args: unknown[]): string {

   

    switch (value) {
      case 1:
        return 'the first jozz';
        break;
    
      case 2:
        return 'the second jozz';
        break;
    
      case 3:
        return 'the third jozz';
        break;
    
      case 4:
        return 'the fourth jozz';
        break;
    
      case 5:
        return 'the fifth jozz';
        break;
    
      case 6:
        return 'the sixth jozz';
        break;
    
      case 7:
        return 'the seventh jozz';
        break;
    
      case 8:
        return 'the eighth jozz';
        break;
    
      case 9:
        return 'the ninth jozz';
        break;
    
      case 10:
        return 'the tenth jozz';
        break;
    
      case 11:
        return 'the eleventh jozz';
        break;
    
      case 12:
        return 'the twelfth jozz';
        break;
    
      case 13:
        return 'the thirteenth jozz';
        break;
    
      case 14:
        return 'the fourteenth jozz';
        break;
    
      case 15:
        return 'the fifteenth jozz';
        break;
    
      case 16:
        return 'the sixteenth jozz';
        break;
    
      case 17:
        return 'the seventeenth jozz';
        break;
    
      case 18:
        return 'the eighteenth jozz';
        break;
    
      case 19:
        return 'the nineteenth jozz';
        break;
    
      case 20:
        return 'the twentieth jozz';
        break;
    
      case 21:
        return 'the twenty-first jozz';
        break;
    
      case 22:
        return 'the twenty-second jozz';
        break;
    
      case 23:
        return 'the twenty-third jozz';
        break;
    
      case 24:
        return 'the twenty-fourth jozz';
        break;
    
      case 25:
        return 'the twenty-fifth jozz';
        break;
    
      case 26:
        return 'the twenty-sixth jozz';
        break;
    
      case 27:
        return 'the twenty-seventh jozz';
        break;
    
      case 28:
        return 'the twenty-eighth jozz';
        break;
    
      case 29:
        return 'the twenty-ninth jozz';
        break;
    
      case 30:
        return 'the thirtieth jozz';
        break;
    
      default:
        return ' ';
        break;
    }
    



}
}