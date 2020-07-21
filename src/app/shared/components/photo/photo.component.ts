import { Component, OnInit, Input } from '@angular/core';
import { Photo } from 'src/app/models/photo.model';

@Component({
  selector: 'app-photo',
  templateUrl: './photo.component.html',
  styleUrls: ['./photo.component.scss'],
})
export class PhotoComponent implements OnInit {

  /**
   * Photo item to represent at component
   */
  @Input() photo: Photo;

  constructor() { }

  ngOnInit() { }

}
