import { CommonModule } from '@angular/common';
import { Component, Input, SimpleChanges } from '@angular/core';

@Component({
  selector: 'app-counter',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './counter.component.html',
  styleUrl: './counter.component.css'
})
export class CounterComponent {
  @Input({required: true}) duration = 0;
  @Input({required: true}) message = '';

  constructor()
  {
    //No ASYNC
    // Before render
    console.log('Coonstructor');
    console.log('-'.repeat(10));
    
  }

  ngOnChanges(changes: SimpleChanges)
  {
    // Before and during render
    console.log('ngOnChanges');
    console.log('-'.repeat(10));
    console.log(changes);
  }

  ngOnInit(){
    // after render
    // Una unica vez
    // Async, then, subscribe
    console.log('ngOnInit');
    console.log('-'.repeat(10));
    console.log('duration =>', this.duration);
    console.log('mesagge =>', this.message);
    
  }

}