import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { NewPost } from '../../models/new-post';
import { Subject } from 'rxjs';

@Component({
	selector: 'post-editor',
	templateUrl: './post-editor.component.html',
	styleUrls: ['./post-editor.component.scss']
})
export class PostEditorComponent implements OnInit
{
	@Output()
	onPost = new EventEmitter<NewPost>();

	private actualText = '';
	disabledSubmit = true;

	ngOnInit()
	{
	}

	get text()
	{
		return this.actualText;
	}

	set text(newText: string)
	{
		this.actualText = newText;
		this.disabledSubmit = this.isTextEmpty();
	}

	isTextEmpty()
	{
		return this.actualText.trim().length === 0;
	}

	post()
	{
		let post: NewPost = {text: this.text, postedAt: new Date()};

		if (!this.isTextEmpty())
		{
			this.onPost.emit(post);
		}
	}

	reset()
	{
		this.text = '';
	}
}
