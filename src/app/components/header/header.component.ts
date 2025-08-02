import { Component } from '@angular/core';
import { ThemeService } from '../../services/theme.service';
import { __values } from 'tslib';

@Component({
  selector: 'app-header',
  imports: [],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss'
})
export class HeaderComponent {
  mode:any
  constructor(private theme:ThemeService){
    theme.theme.subscribe((res) =>{
      this.mode = res
    })    
  }
  Toggle(){
    this.theme.theme.next(!this.mode)
    console.log(this.mode);
  }
}
