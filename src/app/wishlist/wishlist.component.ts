import { Component, OnInit, Input } from '@angular/core';
import { SearchService } from '../search.service';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { Tracks } from '../tracks';
import { MusicService } from '../music.service';
import { analyzeAndValidateNgModules } from '@angular/compiler';
@Component({
  selector: 'app-wishlist',
  templateUrl: './wishlist.component.html',
  styleUrls: ['./wishlist.component.css']
})

export class WishlistComponent implements OnInit {
  tracks : Tracks[];

  
  route: any;

  constructor(private service : MusicService,private http:HttpClient,private router:Router) { }

  ngOnInit() { 
    console.log("i"); 
    this.service.getWishlist().subscribe((data)=>{
      this.tracks=data;
    });

  }
  public onClickDelete(track : Tracks){
    this.service.deletetrack(track).subscribe((data)=>{
      console.log(data);
    });
    
  }

  getUrl(data){
    return data['image'][3]['#text'];
  }
  }
