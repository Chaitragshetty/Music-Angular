import { Component, OnInit } from '@angular/core';
import { MusicService } from '../music.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.css']
})
export class DetailsComponent implements OnInit {

  constructor(private musicService:MusicService, private route: ActivatedRoute,
    private router:Router) { }
  arrayOfMusic:any;

  ngOnInit() {
    this.getDetails();
  }
  getDetails(): void {

    const artist = this.route.snapshot.paramMap.get('id1');
    const name = this.route.snapshot.paramMap.get('id2');

     this.musicService.getDetails(artist,name).subscribe(data => {
  
     console.log("This works");
      this.arrayOfMusic=data;
      console.log(data);

     
  });
}
}
