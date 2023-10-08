import { Component } from '@angular/core';
import { MatExpansionModule } from '@angular/material/expansion';

@Component({
  selector: 'app-questions',
  templateUrl: './questions.component.html',
  styleUrls: ['./questions.component.css']
})
export class QuestionsComponent {
  panelOpenState = false;
  rotate = false
  // rotate = true
  onClick(event: Event) {
    this.rotate ? this.rotate = false : this.rotate = true
  }
  icon: boolean = false;

  click() {
    this.icon = !this.icon;
  }
}
