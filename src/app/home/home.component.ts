import { Component, OnInit } from '@angular/core';
import { MusicService } from '../music.service';
import { Router } from '@angular/router';
import { Tracks } from '../tracks';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor(private musicService:MusicService ,private route :Router) { }
  track :  Tracks = new Tracks();
  arrayOfMusic:any=[];
  ngOnInit() {
      this.musicService.getTrendMusic().subscribe(data=>
        {
            console.log(data.tracks.track);
            this.arrayOfMusic=data.tracks.track;
        });
  }
  click(value){
   
    this.route.navigateByUrl("/result/"+value);
    console.log("This Works");  
  }

  getDetails(value): any{
    this.route.navigateByUrl("/details/"+value.artist.name+"/"+value.name);
    // console.log(value);
    // this.musicService.getDetails(value);
  }




  addTrack(inputTrack) {
  
    this.track.trackId=inputTrack.listeners;
    console.log(this.track.trackId);  
    this.track.trackName=inputTrack.name;
    console.log(this.track.trackName); 
    this.track.trackComments=inputTrack.artist.name;
    console.log(this.track.trackComments);
    console.log(this.track);

  this.musicService.addToWishlist(this.track).
    subscribe(
        data => {
        console.log("aksh err")  
          console.log("POST Request is successful ", data);},
        error => {
          console.log("Error", error);}
  ); 
}
}