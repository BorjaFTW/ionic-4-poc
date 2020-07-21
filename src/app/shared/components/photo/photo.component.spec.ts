import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { PhotoComponent } from './photo.component';

import { Photo } from 'src/app/models/photo.model';

describe('PhotoComponent', () => {
  let component: PhotoComponent;
  let fixture: ComponentFixture<PhotoComponent>;

  const mockPhoto: Photo = {
    id: 1234, text: 'Initial text', photo: 'https://picsum.photos/id/1234/500/500.jpg'
  };

  const mock2Photo: Photo = {
    id: 2345, text: 'Test text', photo: 'https://picsum.photos/id/2345/500/500.jpg'
  };

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [PhotoComponent],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(PhotoComponent);
    component = fixture.componentInstance;
    component.photo = mockPhoto;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should show expected text', () => {
    fixture.detectChanges();
    expect(fixture.nativeElement.querySelector('ion-label').innerText).toEqual(mockPhoto.text);
  });

});
