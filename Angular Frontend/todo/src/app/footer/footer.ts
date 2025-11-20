import { Component } from '@angular/core';
import { RouterLink } from '@angular/router'; // Added

@Component({
  selector: 'app-footer',
  imports: [RouterLink],
  templateUrl: './footer.html',
  styleUrl: './footer.css',
})
export class Footer {

}
