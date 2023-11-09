import { Component, Input, OnInit, inject } from '@angular/core';
import { AsyncPipe, NgOptimizedImage } from '@angular/common';
import { FormGroup } from '@angular/forms';
import { FirebaseService } from '@shared/services/firebase.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-image-uploader',
  standalone: true,
  imports: [NgOptimizedImage, AsyncPipe],
  templateUrl: './image-uploader.component.html',
  styles: [],
})
export class ImageUploaderComponent implements OnInit {
  @Input() name: string | null = null;
  @Input() form: FormGroup | undefined;
  @Input() controlName: string = '';
  @Input() label: string | null = null;

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
    if (image) this.predeterminedImage$ = this.firebase.getImageURL(image);
  }

  change(fileInput: HTMLInputElement) {
    let file = fileInput.files![0];
    const name = this.name ?? file.name;
    this.firebase.uploadImage(file, name).subscribe({
      next: (res) => {
        this.predeterminedImage$ = this.firebase.getImageURL(res.ref.name);
        if (this.controlName)
          this.form?.get(this.controlName)?.setValue(res.ref.name);
      },
    });
  }
}
