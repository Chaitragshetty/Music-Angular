import { Injectable } from '@angular/core';

import { HttpClient } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class MusicService {
  musicService: any;
  route: any;

  constructor(private http:HttpClient) { }


  getTrendMusic():any{
    return this.http.get("http://ws.audioscrobbler.com/2.0/?method=chart.gettoptracks&api_key=920f792ee345290b28ca1b88329197b4&format=json");
  }

  getMusic(value):any{
    var url=`http://ws.audioscrobbler.com/2.0/?method=track.search&api_key=920f792ee345290b28ca1b88329197b4&track=${value}&format=json`;
    return this.http.get(url);
  }

  // addToWishlist(value): any{
  //   this.route.navigateByUrl("/wishlist/");
  //   console.log(value);
  //   this.musicService.setWishList(value).subscribe();
  // }

  addToWishlist(track):any{
    return this.http.post("http://localhost:8080/api/v1/track",track);
  }

  getWishlist():any{
    return this.http.get("http://localhost:8080/api/v1/track");
  }

  deletetrack(id):any{
    console.log(id);
    return this.http.delete(`http://localhost:8080/api/v1/track/${id}`,id);
  }


  getDetails(artist,name): any{
    console.log(artist, name)
    // var url=`http://ws.audioscrobbler.com/2.0/?method=album.getinfo&api_key=920f792ee345290b28ca1b88329197b4&artist=${encodeURIComponent(artist)}&track=${encodeURIComponent(name)}&format=json`;
    var url = `http://ws.audioscrobbler.com/2.0/?method=album.getinfo&api_key=920f792ee345290b28ca1b88329197b4&artist=${artist}&album=${name}&format=json`
  return this.http.get(url);
  }
}
