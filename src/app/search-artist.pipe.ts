import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'searchArtist'
})
export class SearchArtistPipe implements PipeTransform {

  transform(pipeData: any, pipeModifier: any): any {
    return pipeData.filter(item => {
      return (
        item['name'].toLowerCase().includes(pipeModifier.toLowerCase()) ||
        item['reknown'].toLowerCase().includes(pipeModifier.toLowerCase()) 
      )
    });
  }

}
