import { Component, signal } from '@angular/core';
import { CounterComponent } from '../../../shared/components/counter/counter.component'
import { CommonModule, NgIf } from '@angular/common';
import { WaveAudioComponent } from '../../components/wave-audio/wave-audio.component';
import { HighlegthDirective } from '@shared/directives/highlegth.directive';

@Component({
  selector: 'app-about',
  standalone: true,
  imports: [CommonModule,CounterComponent,WaveAudioComponent,HighlegthDirective,NgIf],
  templateUrl: './about.component.html',
  styleUrl: './about.component.css'
})
export class AboutComponent {
  duration = signal(1000);
  message = signal('Hola');

  changeDuration(event: Event){
    const input = event.target as HTMLInputElement;
    this.duration.set(input.valueAsNumber);
  }

  changeMessage(event: Event)
  {
    const input = event.target as HTMLInputElement;
    this.message.set(input.value);
  }
}
