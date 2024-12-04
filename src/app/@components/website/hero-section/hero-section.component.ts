import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-hero-section',
  templateUrl: './hero-section.component.html',
  styleUrls: ['./hero-section.component.scss'],
})
export class HeroSectionComponent implements OnInit {
  fullText: string =
    "Finding the perfect property is about more than space—it's where memories are made and dreams bloom.";
  // "Finding the perfect property isn’t just about square footage—it's about discovering a place where memories are created, dreams take shape, and life truly unfolds!";
  // 'Finding a property isn’t just about square footage—it’s about finding a space where life unfolds, memories are made, and dreams are built!';

  displayedText: string = '';
  typingSpeed: number = 100; // Time in milliseconds between typing each character
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
        clearInterval(intervalId);
        this.isTypingComplete = true;
      }
    }, this.typingSpeed);
  }
}
