import { Component, OnInit } from '@angular/core';
import { Project } from './project.model';

@Component({
  selector: 'app-portfolio',
  templateUrl: './portfolio.component.html',
  styleUrls: ['./portfolio.component.css']
})
export class PortfolioComponent implements OnInit {
	selectedProject: Project;

	onSelected(project: Project){
		this.selectedProject = project;
	}

	projects: Project[] = [
		new Project(
			'Nutrient Tracker', 
			'Lets users set goals to increase or cutback on nutrients and track daily performance ratings and notes. Notes are organized in journal by date/rating so users can track how these nutrients affect them when they preform well or poorly on their goals. Built from scratch with Rails, Bootstrap, jquery, a simple-calendar gem and devise gem for user-authentication.', 
			'./assets/images/nutrient-tracker.png',
			'https://nutrient-tracker.herokuapp.com/',
			'https://github.com/aaltamirano1/Nutrient-Tracker'),
		// new Project('Rails Twitter Clone', "A 'twitter' built with Rails, Bootstrap, and the devise gem for user authentication. Home feed shows users you are following, as well as trending hashtags. All hashtags and usernames are clickable. Usernames direct you to user profiles where the edit button turns to follow/unfollow button when viewing someone else's profile. Messages written by you have the option to edit/delete throughout the site. Tweet messages out to your followers or to users checking out the all tweets page.", ''),
		new Project(
			"Conway's Game of Life", 
			'The Game of Life, also known simply as Life, is a cellular automaton devised by the British mathematician John Horton Conway in 1970. Built with JavaScript and jQuery.', 
			'./assets/images/conways.png',
			'https://aaltamirano1.github.io/conways-game-of-life/',
			'https://github.com/aaltamirano1/conways-game-of-life' ),
		new Project(
			'Flickr API', 
			"Cat, Dog, or Mouse? The choice is yours! Uses Flickr's API to display the top 25 images of an animal selected by users.", 
			'./assets/images/flickr-api.png',
			'https://aaltamirano1.github.io/Flickr-API/',
			'https://github.com/aaltamirano1/conways-game-of-life'),
		new Project(
			'Guest List', 
			'Keep track of event invitees and attendees. Uses JavaScript to display, hide, and edit guests based on user input.', 
			'./assets/images/guest-list.png',
			'https://aaltamirano1.github.io/Guest-List/',
			'https://github.com/aaltamirano1/Guest-List'),
		new Project(
			'Magic 8Ball', 
			'Think of a question and the 8 Ball will give you an answer. Answers randomly selected from an array.', 
			'./assets/images/magic-8ball.png',
			'https://aaltamirano1.github.io/Magic-8Ball/',
			'https://github.com/aaltamirano1/Magic-8Ball')
	];
  constructor() { }

  ngOnInit() {
  }

  onProjectSelected(){
    ;
  }

}
