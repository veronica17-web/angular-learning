import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, FormsModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
  title = 'my-app';
  memberName = 'veronica';
  language: string = '';
  listOfLanguage: String[] = ['english', 'Hindi'];
  addLanguage() {
    console.log('addLanguage is called');
    this.listOfLanguage.push(this.language);
    console.log(this.listOfLanguage);
  }
  deleteFirst (){
    this.listOfLanguage.splice(0,1)
  }
}
