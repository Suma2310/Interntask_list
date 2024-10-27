import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { MatListModule } from '@angular/material/list';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { CommonModule } from '@angular/common';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpClient, HttpClientModule } from '@angular/common/http';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    RouterOutlet,
    MatListModule,
    MatInputModule,
    MatButtonModule,
   // BrowserModule,
    FormsModule,          // Import FormsModule here
    CommonModule
    // other modules
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'interntask_list';
  items: string[] = ['Banana', 'Apple', 'Orange', 'Grapes', 'Mango'];
  filterText: string = '';
  isSorted: boolean = false;

  //constructor(private http: HttpClient) {}

  // Method to sort items
  sortItems() {
    this.items = this.items.sort((a, b) => a.localeCompare(b));
  }

  // Method to filter items based on input text
  filteredItems() {
    if (!this.filterText) {
      return this.items;
    }
    return this.items.filter(item =>
      item.toLowerCase().includes(this.filterText.toLowerCase())
    );
  }
}
