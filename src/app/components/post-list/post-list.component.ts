import { Post } from './../../models/post';
import { Component, OnInit, Input } from '@angular/core';
import * as moment from 'moment';

@Component({
	selector: 'post-list',
	templateUrl: './post-list.component.html',
	styleUrls: ['./post-list.component.scss']
})
export class PostListComponent implements OnInit {

	@Input()
	posts: Post[];

	constructor() { }

	get postsReversedOrder()
	{
		return this.posts.reverse();
	}

	ngOnInit() {
	}

	getPostAt(date: Date)
	{
		return moment(date).format('MMM D');
	}
}
