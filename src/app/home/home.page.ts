import { Component, OnInit, OnDestroy } from '@angular/core';

import { Subscription } from 'rxjs';
import { tap } from 'rxjs/operators';

import { Photo } from '../models/photo.model';
import { PhotoService } from '../services/photo.service';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage implements OnInit, OnDestroy {

  /**
   * Photo subscription
   */
  photosSubscription: Subscription;

  /**
   * Collection that contains the photos retrieved from the service
   */
  photos: Photo[];

  /**
   * Collection that contains the filtered photos
   */
  filteredPhotos: Photo[];

  constructor(private photoService: PhotoService) { }

  ngOnInit() {
    // Obtiene los objetos Photo del servicio
    this.photosSubscription = this.photoService.getPhotos(4000).pipe(
      tap(response => this.photos = response),
      tap(response => this.filteredPhotos = response)
    ).subscribe();
  }

  ngOnDestroy() {
    this.photosSubscription.unsubscribe();
  }

  /**
   * Filter Photos
   * @param filter Filter Event
   */
  filterPhotos(filter) {
    const filterValue = filter.detail.value.toLowerCase();
    console.log('LOGS: HomePage -> filterPhotos -> filterValue', filterValue);
    this.filteredPhotos = this.photos.filter(photo => {
      return (photo.id.toString().includes(filterValue) || photo.text.toLowerCase().includes(filterValue));
    });
  }

}
