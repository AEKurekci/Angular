import { Component, OnInit } from '@angular/core';
import { trigger, state, style, animate, transition} from '@angular/animations';

@Component({
  selector: 'app-animation-sample',
  templateUrl: './animation-sample.component.html',
  styleUrls: ['./animation-sample.component.scss'],
  animations: [//The transition() function accepts two arguments: the first argument accepts an expression that defines the direction between two transition states, and the second argument accepts one or a series of animate() steps.
    trigger('openClose', [
      transition('open => closed', [animate('1s')]),
      transition('closed => open', [animate('0.5s')]),
      state('open', style({
        height: '200px',
        opacity: 1,
        backgroundColor: 'yellow'
      })),
      state('closed', style({
        height: '100px',
        opacity: 0.5,
        backgroundColor: 'green'
      }))]
      )]
})
export class AnimationSampleComponent implements OnInit {

  isOpen = true;

  constructor() { }

  ngOnInit(): void {
  }

  toggle(){
    this.isOpen = !this.isOpen;    
  }

}
