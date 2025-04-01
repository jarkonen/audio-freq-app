import { Component, OnInit, OnDestroy } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BehaviorSubject, Observable, Subscription } from 'rxjs';

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
  private frequencySubject = new BehaviorSubject<number>(0);
  private frequencySubscription!: Subscription;
  private audioContext: AudioContext | null = null;
  private analyserNode: AnalyserNode | null = null;
  private microphoneStream: MediaStream | null = null;

  getFrequency(): Observable<number> {
    return this.frequencySubject.asObservable();
  }

  startAudioCapture(): void {
    if (this.audioContext) return;
    
    navigator.mediaDevices.getUserMedia({ audio: true })
      .then(stream => {
        this.microphoneStream = stream;
        this.audioContext = new (window.AudioContext || (window as any).webkitAudioContext)();
        const sourceNode = this.audioContext.createMediaStreamSource(stream);
        this.analyserNode = this.audioContext.createAnalyser();
        sourceNode.connect(this.analyserNode);
        this.analyserNode.fftSize = 2048;

        const bufferLength = this.analyserNode.frequencyBinCount;
        const dataArray = new Uint8Array(bufferLength);

        const analyze = () => {
          if (!this.analyserNode) return;
          this.analyserNode.getByteFrequencyData(dataArray);
          const maxFreq = Math.max(...dataArray);
          this.frequencySubject.next(maxFreq);
          requestAnimationFrame(analyze);
        };

        analyze();
      })
      .catch(err => console.error('Error al acceder al micrófono:', err));
  }

  stopAudioCapture(): void {
    this.microphoneStream?.getTracks().forEach(track => track.stop());
    this.audioContext?.close();
    this.audioContext = null;
    this.analyserNode = null;
    this.microphoneStream = null;
    this.frequencySubject.next(0);
  }

  ngOnInit(): void {
    this.frequencySubscription = this.getFrequency().subscribe(freq => {
      this.frequency = freq;
    });
  }

  startCapture(): void {
    this.isCapturing = true;
    this.startAudioCapture();
  }

  stopCapture(): void {
    this.isCapturing = false;
    this.stopAudioCapture();
  }

  ngOnDestroy(): void {
    this.frequencySubscription.unsubscribe();
  }
}