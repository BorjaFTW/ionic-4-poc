import { TestBed } from '@angular/core/testing';

import { PhotoService } from './photo.service';

describe('PhotoService', () => {
  let service: PhotoService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(PhotoService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('getPhotos(size) return expected items', () => {
    const sampleSize = Math.floor((Math.random() * 100) + 1);
    service.getPhotos(sampleSize).subscribe((res) => {
      expect(res.length).toEqual(sampleSize);
    });
  });

  it('getPhotos(-1) trigger error', () => {
    const sampleSize = -1;
    const errorMessageExpected = 'Size should be greater than 0.';
    let responseFlag;
    service.getPhotos(sampleSize).subscribe((res) => {
      responseFlag = 'Unreachable code';
      expect().nothing();
    }, (err) => {
      expect(err.message).toEqual(errorMessageExpected);
    }, () => {
      expect(responseFlag).toEqual(undefined);
    });
  });

  it('getPhotos(0) trigger error', () => {
    const sampleSize = 0;
    const errorMessageExpected = 'Size should be greater than 0.';
    let responseFlag;
    service.getPhotos(sampleSize).subscribe((res) => {
      responseFlag = 'Unreachable code';
      expect().nothing();
    }, (err) => {
      expect(err.message).toEqual(errorMessageExpected);
    }, () => {
      expect(responseFlag).toEqual(undefined);
    });
  });

  it('getPhotos(null) trigger error', () => {
    const sampleSize = null;
    const errorMessageExpected = 'Size should be greater than 0.';
    let responseFlag;
    service.getPhotos(sampleSize).subscribe((res) => {
      responseFlag = 'Unreachable code';
      expect().nothing();
    }, (err) => {
      expect(err.message).toEqual(errorMessageExpected);
    }, () => {
      expect(responseFlag).toEqual(undefined);
    });
  });

  it('getPhotos(undefined) trigger error', () => {
    const sampleSize = undefined;
    const errorMessageExpected = 'Size should be greater than 0.';
    let responseFlag;
    service.getPhotos(sampleSize).subscribe((res) => {
      responseFlag = 'Unreachable code';
      expect().nothing();
    }, (err) => {
      expect(err.message).toEqual(errorMessageExpected);
    }, () => {
      expect(responseFlag).toEqual(undefined);
    });
  });

});
