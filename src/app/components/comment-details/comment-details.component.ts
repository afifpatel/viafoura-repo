import { Component, OnInit } from '@angular/core';
import commentData from '../../data/commentData.json';

@Component({
  selector: 'app-comment-details',
  templateUrl: './comment-details.component.html',
  styleUrls: ['./comment-details.component.css']
})
export class CommentDetailsComponent implements OnInit {

  dataSource;

  constructor() { }

  ngOnInit() {
    this.dataSource = {...commentData.data , commentData};
    this.dataSource.image = '../../../assets/img/' + this.dataSource.image;
  }

}
