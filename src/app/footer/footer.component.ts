import { Component } from '@angular/core';
import { faLinkedin, faYoutube, faGithub, faGit } from '@fortawesome/free-brands-svg-icons';
import { faFile, faArrowRight } from '@fortawesome/free-solid-svg-icons';
@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent {
  myLinkedin = faLinkedin
  resume = faFile
  myYoutube = faYoutube
  myGithub = faGithub
  arrow = faArrowRight
}
