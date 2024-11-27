import { Component } from "@angular/core";
import { FlowerService } from "../flower.service";
import { AnimalService } from "../animal.service";
import { InspectorComponent } from "../inspector/inspector.component";

@Component({
    selector: 'app-child',
    templateUrl: './child.component.html',
    providers: [{provide: FlowerService, useValue: {emoji: '🌻'}}],
    viewProviders: [{provide: AnimalService, useValue: { emoji: '🐶' }}],
    imports: [InspectorComponent]
})
export class ChildComponent{
    constructor(public flower: FlowerService, public animal: AnimalService){

    };

    paragraphStyle= 'color:red;'
    navStyle = 'font-size: 1.2rem; color: cornflowerblue;';
    linkStyle = 'underline';
    activeLinkStyle = 'overline';
}