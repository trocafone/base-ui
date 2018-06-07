
import { Component } from '@angular/core';
import { DropdownValue } from './dropdown/dropdown.component';
import { PickColorValue } from './pick-color/pick-color.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  private colors: Array<PickColorValue> = [
    <PickColorValue>{ text: 'Red', hex: 0x00ffff },
    <PickColorValue>{ text: 'Blue', hex: 0xff00ff },
    <PickColorValue>{ text: 'Green', hex: 0x0000ff },
  ];

  private dropdown: object = {
    options: [
      <DropdownValue>{ text: 'Option 1', value: '1' },
      <DropdownValue>{ text: 'Option 2', value: '2' },
      <DropdownValue>{ text: 'Option 3', value: '3' },
    ]
  };
}
