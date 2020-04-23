import { Component, OnInit, ViewChild } from '@angular/core';
import { NewPost } from '../../models/new-post';
import { PostEditorComponent } from '../../components/post-editor/post-editor.component';
import * as moment from 'moment';

@Component({
	selector: 'profile-page',
	templateUrl: './profile-page.component.html',
	styleUrls: ['./profile-page.component.scss']
})
export class ProfilePageComponent implements OnInit
{
	profile = {
		name: 'Mateus Sarmento',
		username: 'mateusmento',
		avatar: 'https://pbs.twimg.com/profile_images/1171658708696424449/H7_xl2PH_400x400.jpg',
		banner: 'https://pbs.twimg.com/profile_banners/14993649/1516055525/1500x500',
		location: 'Rio de Janeiro, RJ',
		bio: `Directing a game "The Last Night" • Art direction, cinematography, tech art, creative prog • Founder of @oddtalesgames • 31, French, night owl • my DMs are open`,
		gallery: {
			mediaCount: 21,
			thumbnails: []
		}
	};

	posts = [
		{
			owner: {
				name: 'Mateus Sarmento',
				avatar: 'https://pbs.twimg.com/profile_images/1171658708696424449/H7_xl2PH_400x400.jpg',
			},
			text: 'Hello, guys! This is my first post!✌😁',
			postedAt: moment().add(-2, 'days')
		},
		{
			owner: {
				name: 'Mateus Sarmento',
				avatar: 'https://pbs.twimg.com/profile_images/1171658708696424449/H7_xl2PH_400x400.jpg',
			},
			text: 'Very neat, folks! 👌😉',
			postedAt: moment().add(-1, 'days')
		},
	];

	ngOnInit()
	{
	}
}
