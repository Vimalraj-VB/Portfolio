import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ThemeService {

  constructor() {
    // this.$theme.
   }

  theme = new BehaviorSubject(false)

  
}
