
import { Component, Input, SimpleChanges, signal } from '@angular/core';

@Component({
  selector: 'app-counter',
  standalone: true,
  imports: [],
  templateUrl: './counter.component.html',
  styleUrl: './counter.component.css'
})
export class CounterComponent {
  @Input({ required: true }) duration = 0;
  @Input({ required: true }) message = '';

  counter = signal(0);
  counterRef: number | undefined;

  constructor() {
    //No ASYNC
    // Before render
    console.log('Coonstructor');
    console.log('-'.repeat(10));

  }

  ngOnChanges(changes: SimpleChanges) {
    // Before and during render
    console.log('ngOnChanges');
    console.log('-'.repeat(10));
    console.log(changes);
    const duration = changes['duration'];
    
    if(duration && duration.currentValue != duration.previousValue) {
      this.doSomething();
    }

  }

  ngOnInit() {
    // after render
    // Una unica vez
    // Async, then, subscribe
    console.log('ngOnInit');
    console.log('-'.repeat(10));
    console.log('duration =>', this.duration);
    console.log('mesagge =>', this.message);
    this.counterRef = window.setInterval(() => {
      console.log("Run SetInterval");
      this.counter.update(statePrev => statePrev + 1);
    },1000)

  }

  ngAfterViewInit() {
    //After render!
    //Hijos ya fueron renderizados!
    console.log('ngAfterViewInit');
    console.log('-'.repeat(10));
  }


  ngOnDestroy() {
    //After render!
    //Hijos ya fueron renderizados!
    console.log('ngOnDestroy');
    console.log('-'.repeat(10));
    window.clearInterval(this.counterRef);
  }

  doSomething()
  {
    //async
    console.log('doSomething 10');
    console.log('-'.repeat(10));
  }

}
