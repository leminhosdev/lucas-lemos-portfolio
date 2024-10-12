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


  abrirLink(link: string): void {
    window.open(link, '_blank');
  }
  abrirPDF(): void {
    window.open('../../assets/CV_tech.pdf','_blank');
  }
}

