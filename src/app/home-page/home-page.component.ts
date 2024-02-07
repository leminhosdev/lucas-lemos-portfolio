import { Component } from '@angular/core';
import { faLinkedin, faYoutube, faGithub, faGit } from '@fortawesome/free-brands-svg-icons';


import { faFile, faArrowRight } from '@fortawesome/free-solid-svg-icons';
import { from } from 'rxjs';
@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.css']
})
export class HomePageComponent {

  myLinkedin = faLinkedin
  resume = faFile
  myYoutube = faYoutube
  myGithub = faGithub
  arrow = faArrowRight
  images = [
    {
      imgSrc: 'https://leminhosdev.github.io/portfolio-lucaslemos/images/blocki%20bit%20mockup.png',
      imgAlt: 'blockbit'
    },
    {
      imgSrc: 'https://leminhosdev.github.io/portfolio-lucaslemos/images/blocki%20bit%20mockup.png',
      imgAlt: 'blockbit'
    },
    {
      imgSrc: 'https://leminhosdev.github.io/portfolio-lucaslemos/images/blocki%20bit%20mockup.png',
      imgAlt: 'blockbit'
    }
  ]
  

  abrirLink(link: string): void {
    window.open(link, '_blank');
  }
  abrirPDF(): void {
    window.open('../../assets/Lucas-Lemos-Resume.pdf','_blank');
  }
}
