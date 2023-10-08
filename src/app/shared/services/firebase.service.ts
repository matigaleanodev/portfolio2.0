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

  uploadImage(image: File, fileName: string): Observable<UploadResult> {
    const path = `images/${fileName}`;
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

  getImageURL(imageName: string): Observable<string> {
    const path = `images/${imageName}`;
    const imageRef = ref(this.storage, path);

    return from(getDownloadURL(imageRef));
  }

  deleteImage(imageUrl: string): Observable<void> {
    const imageRef = ref(this.storage, imageUrl);

    return from(deleteObject(imageRef));
  }
}
