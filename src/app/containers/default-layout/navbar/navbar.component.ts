import { FormControl, FormGroup } from '@angular/forms';
import { Component, Input, Renderer2 } from '@angular/core';


import { ClassToggleService, HeaderComponent, NavbarComponent } from '@coreui/angular';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']

})
export class navbarComponent extends HeaderComponent {

  @Input() sidebarId: string = "sidebar";
  public newMessages = new Array(4);
  public newTasks = new Array(5);
  public newNotifications = new Array(5);

  public searchForm: FormGroup; // Create a FormGroup for the search form
  public searchTerm: FormControl; // Create a FormControl for the search term

  constructor(private classToggler: ClassToggleService) {
    super();
    this.searchTerm = new FormControl(''); // Initialize the search term FormControl
    this.searchForm = new FormGroup({
      search: this.searchTerm // Add the search term FormControl to the FormGroup
    });
  }

  // Method to handle the search form submission
  public search(): void {
    const searchTerm = this.searchTerm.value; // Get the value of the search term
    // Perform your search logic here, e.g., make an API call or filter the data
    console.log('Search term:', searchTerm);
  }
}

