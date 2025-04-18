import { Component, OnDestroy, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Subscription } from 'rxjs';
import { AudioService } from './services/audio.service';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit, OnDestroy {
  frequency: number = 0;
  isCapturing = false;
  arraySize: number = 100;
  frequencies: number[] = [];
  index: number = 0;
  media: number | null = null;
  mediana: number | null = null;
  desviacionTipica: number | null = null;


  private frequencySubscription!: Subscription;
  

  constructor(private audioService: AudioService) {}

  ngOnInit(): void {
    this.frequencySubscription = this.audioService.getFrequency()
      .subscribe(freq => this.frequency = freq);
      this.audioService.getStats().subscribe(stats => {
        if (stats) {
          this.media = stats.media;
          this.mediana = stats.mediana;
          this.desviacionTipica = stats.desviacionTipica;
        }
      });
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
