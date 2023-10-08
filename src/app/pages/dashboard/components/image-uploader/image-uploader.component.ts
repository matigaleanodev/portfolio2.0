import { Component, Input, OnInit, inject } from '@angular/core';
import { CommonModule, NgOptimizedImage } from '@angular/common';
import { AbstractControl, FormGroup } from '@angular/forms';
import { FirebaseService } from '@shared/services/firebase.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-image-uploader',
  standalone: true,
  imports: [CommonModule, NgOptimizedImage],
  templateUrl: './image-uploader.component.html',
  styles: [],
})
export class ImageUploaderComponent implements OnInit {
  @Input({ required: true }) name: string = '';
  @Input() form: FormGroup | undefined;
  @Input() controlName: string = '';
  @Input() label: string = '';

  firebase = inject(FirebaseService);

  predeterminedImage$: Observable<string> | undefined;

  ngOnInit(): void {
    if (this.name === 'homeImage') {
      this.predeterminedImage$ = this.firebase.getImageURL('homeImage');
    } else {
      this.getSavedImage();
    }
  }

  getSavedImage() {
    const image = this.form?.get(this.controlName)?.value;
    console.log(image);
    this.predeterminedImage$ = this.firebase.getImageURL(image);
  }

  change(fileInput: HTMLInputElement) {
    let file = fileInput.files![0];
    this.firebase.uploadImage(file, this.name).subscribe({
      next: (res) => {
        this.predeterminedImage$ = this.firebase.getImageURL(res.ref.name);
        if (this.controlName)
          this.form?.get(this.controlName)?.setValue(res.ref.name);
      },
    });
  }
}
