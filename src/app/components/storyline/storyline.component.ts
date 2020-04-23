import * as moment from 'moment';
import { Component, OnInit, Input, ViewChild } from '@angular/core';
import { PostEditorComponent } from './../post-editor/post-editor.component';
import { NewPost } from './../../models/new-post';
import { Post } from './../../models/post';
import { Profile } from './../../models/profile';

@Component({
	selector: 'storyline',
	templateUrl: './storyline.component.html',
	styleUrls: ['./storyline.component.scss']
})
export class StorylineComponent implements OnInit
{
	@ViewChild(PostEditorComponent)
	postEditor: PostEditorComponent;

	@Input()
	posts: Post[];

	@Input()
	profile: Profile;

	ngOnInit()
	{
	}

	onPost(post: NewPost)
	{
		let actualPost: Post = {
			...post,
			owner: this.profile,
		};
		this.posts.push(actualPost);
		this.postEditor.reset();
	}
}
