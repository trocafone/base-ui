
import { Component } from '@angular/core';
import { DropdownValue } from './dropdown/dropdown.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  private dropdown: object = {
    options: [
      <DropdownValue>{ text: 'Option 1', value: '1' },
      <DropdownValue>{ text: 'Option 2', value: '2' },
      <DropdownValue>{ text: 'Option 3', value: '3' },
    ]
  };
}
