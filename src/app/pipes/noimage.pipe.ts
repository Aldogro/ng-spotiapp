import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'noimage'
})
export class NoimagePipe implements PipeTransform {

  transform( images: any[] ): string {

    if ( !images ) {
      return 'https://www.testingxperts.com/wp-content/uploads/2019/02/placeholder-img.jpg';
    }
    if ( images.length > 0 ) {
      return images[1].url;
    } else {
      return 'https://www.testingxperts.com/wp-content/uploads/2019/02/placeholder-img.jpg';
    }
  }

}
