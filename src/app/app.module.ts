import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ProfilePageComponent } from './pages/profile-page/profile-page.component';
import { ProfileCardComponent } from './components/profile-card/profile-card.component';
import { PostEditorComponent } from './components/post-editor/post-editor.component';
import { PostListComponent } from './components/post-list/post-list.component';
import { StorylineComponent } from './components/storyline/storyline.component';

@NgModule({
  declarations: [
	AppComponent,
	ProfilePageComponent,
	ProfileCardComponent,
	PostEditorComponent,
	PostListComponent,
	StorylineComponent
  ],
  imports: [
    BrowserModule,
	AppRoutingModule,
	FormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
