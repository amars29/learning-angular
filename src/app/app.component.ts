import { Component } from '@angular/core';
import { FlowerService } from './flower.service';
import { ChildComponent } from './child/child.component';
import { AnimalService } from './animal.service';

@Component({
  selector: 'app-root',
  template: `
  <div>
    <p>Emoji from FlowerService: {{flower.emoji}}</p>
    <app-child />
  </div>
`,
  imports: [ChildComponent]
})
export class AppComponent {
  constructor(
    public flower: FlowerService,
    public animal: AnimalService){}
}
