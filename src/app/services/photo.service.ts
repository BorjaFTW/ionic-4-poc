import { Injectable } from '@angular/core';
import { Photo } from '../models/photo.model';
import { loremIpsum } from 'lorem-ipsum';
import { Observable, of, throwError } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PhotoService {

  constructor() { }

  /**
   * Return an observable of photos with text
   * @param size Number of photos (required)
   */
  getPhotos(size: number): Observable<Photo[]> {
    console.log('LOGS: PhotoService -> getPhotos -> size', size);
    let obs$;
    if (size > 0) {
      const photos: Photo[] = Array(size).fill(null).map(
        (itm, i) => ({ id: i, photo: `https://picsum.photos/id/${i}/500/500.jpg`, text: loremIpsum() })
      );
      obs$ = of(photos);
    } else {
      obs$ = throwError(new Error('Size should be greater than 0.'));
    }
    return obs$;
  }
}
