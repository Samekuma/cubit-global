import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-hero-section',
  templateUrl: './hero-section.component.html',
  styleUrls: ['./hero-section.component.scss'],
})
export class HeroSectionComponent implements OnInit {
  fullText: string =
    'Finding a property isn’t just about square footage—it’s about finding a space where life unfolds, memories are made, and dreams are built!';
  displayedText: string = '';
  typingSpeed: number = 120; // Time in milliseconds between typing each character
  isTypingComplete: boolean = false;

  constructor() {}

  ngOnInit(): void {
    this.startTypingEffect();
  }

  startTypingEffect(): void {
    let index = 0;

    const intervalId = setInterval(() => {
      if (index < this.fullText.length) {
        this.displayedText += this.fullText[index];
        index++;
      } else {
        clearInterval(intervalId); // Stop the typing effect when finished
        this.isTypingComplete = true;
      }
    }, this.typingSpeed);
  }
}
