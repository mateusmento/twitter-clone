import { Profile } from './profile';

export interface Post
{
	text: string;
	postedAt: Date;
	owner: Profile;
}
