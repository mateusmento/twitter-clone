import { Component, OnInit, Input } from '@angular/core';
import { Profile } from 'src/app/models/profile';

@Component({
	selector: 'profile-card',
	templateUrl: './profile-card.component.html',
	styleUrls: ['./profile-card.component.scss']
})
export class ProfileCardComponent implements OnInit 
{
	@Input()
	profile: Profile;

	ngOnInit()
	{
	}
}
