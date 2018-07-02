import { FormControl, FormGroup, FormControlName, FormBuilder, Validators } from '@angular/forms';

import { Component } from '@angular/core';
import {ItemResults} from "../../projects/troca-angular/src/lib/search-input/search-input.component";


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  private formGroup: FormGroup;

  private searchItems: ItemResults[] = [
   <ItemResults> {
     title :'hola',
     description :'dfg',
     icon :'history',
     link :'dfgf'
    },
    <ItemResults> {
      title :'sdsd',
      icon :'magnifying-glass',
      link :'dftytytygf'
    },
    <ItemResults> {
      title :'ytytyuygbvfg',
      description :'dfgfgfgg',
      link :'dfgfgfgf'
    }
  ];

   onChangeSearch(result){
    console.log(result);
  }

  constructor(private fb: FormBuilder) {
    this.formGroup = this.fb.group({
      search: new FormControl()
    });
  }
}
