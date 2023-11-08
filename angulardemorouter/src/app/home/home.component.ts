import { HostListener, Component } from '@angular/core';
import { Logging } from '../decorator/class.decorator';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
@Logging
export class HomeComponent {
  title: string;
  subtitle: string;
  data: string;

  constructor() {
    this.title = 'Welcome to GeeksForGeeks';
    this.data = 'Welcome to GeeksForGeeks';
    this.subtitle = 'from constructor';
  }

  // Using a method decorator Host Listener
  // that uses a method onHostClick
  // which stops the event (alert) from
  // occuring in the template region
  @HostListener('click', ['$event'])
  public onHostClick(event: Event) {
    // alert('Hi!!!');
    event.stopPropagation();
  }

  // Another Host Listener that uses a method onDocumentClick
  // which calls the alert method
  // when we perform a click
  // not in the template region
  // @HostListener('document:click', ['$event'])
  // public onDocumentClick(event: Event) {
  //   alert('Clicked outside!!!');
  // }

  books: any[] = [
    {
      name: 'Matilda',
      isRed: true,
    },
    {
      name: 'Harry Potter',
      isRed: false,
    },
    {
      name: 'And Then there were None',
      isRed: true,
    },
    {
      name: 'The Great Gatsby',
      isRed: true,
    },
    {
      name: 'Sherlock Holmes',
      isRed: false,
    },
  ];
}
