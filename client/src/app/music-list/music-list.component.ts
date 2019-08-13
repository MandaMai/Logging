import { Component, OnInit } from '@angular/core';
import { MusicService } from '../shared/music/music.service';

@Component({
  selector: 'app-music-list',
  templateUrl: './music-list.component.html',
  styleUrls: ['./music-list.component.scss']
})
export class MusicListComponent implements OnInit {
  musics: Array<any>;
  constructor(private musicService: MusicService) { }

  ngOnInit() {
    this.musicService.getAll().subscribe(data => {
      this.musics = data;
    });
  }

}
