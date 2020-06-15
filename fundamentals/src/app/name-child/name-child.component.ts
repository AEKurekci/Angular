import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-name-child',
  templateUrl: './name-child.component.html',
  styleUrls: ['./name-child.component.scss']
})
export class NameChildComponent implements OnInit {

  private _name = ''

  @Input()
  set name(the_name: string){
    this._name = (the_name && the_name.trim()) || '<no-setname>';
  }

  get name(): string{
    return this._name;
  }

  constructor() { }

  ngOnInit(): void {
  }

}
