import { Component, OnDestroy, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Subscription } from 'rxjs';
import { AudioService } from './services/audio.service';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit, OnDestroy {
  frequency: number = 0;
  isCapturing = false;

  private frequencySubscription!: Subscription;
  

  constructor(private audioService: AudioService) {}

  ngOnInit(): void {
    this.frequencySubscription = this.audioService.getFrequency()
      .subscribe(freq => this.frequency = freq);
  }

  async startCapture(): Promise<void> {
    console.log('START CAPTURE CALLED'); // AÑADIR ESTO
    this.isCapturing = true;
    await this.audioService.startCapture();
  }

  stopCapture(): void {
    this.isCapturing = false;
    this.audioService.stopCapture();
  }

  ngOnDestroy(): void {
    this.frequencySubscription?.unsubscribe();
    this.audioService.stopCapture();
  }

  getBarWidth(freq: number): number {
    const MIN_FREQ = 80;
    const MAX_FREQ = 1200;
  
    const clamped = Math.max(MIN_FREQ, Math.min(freq, MAX_FREQ));
    return ((clamped - MIN_FREQ) / (MAX_FREQ - MIN_FREQ)) * 100;
  }
  

  
}
