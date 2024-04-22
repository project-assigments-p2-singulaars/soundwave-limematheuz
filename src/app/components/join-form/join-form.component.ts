import { Component } from '@angular/core';
import { FooterComponent } from '../footer/footer.component';

@Component({
  selector: 'app-join-form',
  standalone: true,
  imports: [FooterComponent],
  templateUrl: './join-form.component.html',
  styleUrl: './join-form.component.scss'
})
export class JoinFormComponent {

}
