import { NgStyle } from '@angular/common';
import { Component, input, OnInit } from '@angular/core';
import { IonCard, IonCardContent, IonImg } from '@ionic/angular/standalone';

@Component({
  selector: 'app-instant-photo',
  templateUrl: './instant-photo.component.html',
  styleUrls: ['./instant-photo.component.scss'],
  standalone: true,
  imports: [IonImg, IonCardContent, IonCard, NgStyle],
})
export class InstantPhotoComponent {
  readonly imageSrc = input.required<string>();
  readonly rotation = input.required<string>();
}
