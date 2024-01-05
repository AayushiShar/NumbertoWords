import { Component } from '@angular/core';
import { NumToWordPipe } from './num-to-word.pipe';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
  providers:[NumToWordPipe]
})
export class AppComponent {
  name = 0;
  
}
