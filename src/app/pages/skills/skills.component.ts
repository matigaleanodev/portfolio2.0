import { Component, OnInit } from '@angular/core';
import { FrontendCardComponent } from './components/frontend-card/frontend-card.component';
import { BackendCardComponent } from './components/backend-card/backend-card.component';
import { ToolsCardComponent } from './components/tools-card/tools-card.component';
import { IonGrid, IonRow, IonCol, IonContent } from '@ionic/angular/standalone';

@Component({
  selector: 'app-skills',
  standalone: true,
  imports: [
    IonContent,
    IonCol,
    IonRow,
    IonGrid,
    FrontendCardComponent,
    BackendCardComponent,
    ToolsCardComponent,
  ],
  templateUrl: './skills.component.html',
  styleUrls: ['./skills.component.scss'],
})
export class SkillsComponent implements OnInit {
  constructor() {}

  ngOnInit() {}
}
