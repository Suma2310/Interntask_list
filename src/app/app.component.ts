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
    CommonModule,
    HttpClientModule
    // other modules
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'interntask_list';
  items: string[] = [];
  filterText: string = '';
  isSorted: boolean = false;

  // Replace the URL with your public API endpoint


  constructor(public http: HttpClient) {

  }


  ngOnInit() {
    this.getdogBreeds().then(data =>
    this.items = data.data.map((val: { attributes: { name: any; }; }) => val.attributes.name)  
    ).catch(error =>
      console.log('API Error : ' + error)
    )
  }

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

  //getting the dog breeds from API values
  getdogBreeds(): Promise<any> {
    return this.http.get('https://dogapi.dog/api/v2/breeds').toPromise();
  }
}

