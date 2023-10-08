import { Injectable } from '@angular/core';
import {
  ListResult,
  Storage,
  UploadResult,
  getDownloadURL,
  listAll,
  ref,
  uploadBytes,
  deleteObject, // Agrega esta importación
} from '@angular/fire/storage';
import { Observable, forkJoin, from, switchMap } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class FirebaseService {
  constructor(private storage: Storage) {}

  uploadImage(image: File): Observable<UploadResult> {
    const path = `images/${image.name}`;
    const imageRef = ref(this.storage, path);

    return from(uploadBytes(imageRef, image));
  }

  getAllImages(): Observable<string[]> {
    const imagesRef = ref(this.storage, 'images');

    return from(listAll(imagesRef)).pipe(
      switchMap((result: ListResult) => {
        const downloadURLs = result.items.map((item) => getDownloadURL(item));

        return forkJoin(downloadURLs);
      })
    );
  }

  deleteImage(imageUrl: string): Observable<void> {
    const imageRef = ref(this.storage, imageUrl);

    return from(deleteObject(imageRef));
  }
}
