import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-vote-taker',
  templateUrl: './vote-taker.component.html',
  styleUrls: ['./vote-taker.component.scss']
})
export class VoteTakerComponent implements OnInit {

  agreed = 0;
  disagreed = 0;
  voters = ['Ali', 'Emre', 'Kürekci'];

  onVoted(agreed: boolean){
    agreed ? this.agreed++ : this.disagreed++;
  }

  constructor() { }

  ngOnInit(): void {
  }

}
