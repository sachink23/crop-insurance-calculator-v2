import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-tutorial-video',
  templateUrl: './tutorial-video.component.html',
  styleUrls: ['./tutorial-video.component.css']
})
export class TutorialVideoComponent implements OnInit {
  video_embed_url = "";
  constructor() { }

  ngOnInit() {
  }

}
