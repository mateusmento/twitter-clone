import { ProfileGallery } from './profile-gallery';

export interface Profile
{
	name: string;
	username: string;
	avatar: string;
	location: string;
	bio: string;
	gallery: ProfileGallery;
}
