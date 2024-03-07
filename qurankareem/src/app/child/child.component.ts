import { Component } from '@angular/core';
import { Input } from '@angular/core';
import { MarkPipe } from '../pipes/mark.pipe';


@Component({
  selector: 'app-child',
  standalone: true,
  imports: [MarkPipe],
  templateUrl: './child.component.html',
  styleUrl: './child.component.css'
})
export class ChildComponent {
@Input() item:any
} 
