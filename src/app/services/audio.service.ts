import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { autoCorrelate } from '../utils/autocorrelate';


@Injectable({ providedIn: 'root' })
export class AudioService {
  private audioContext: AudioContext | null = null;
  private analyserNode: AnalyserNode | null = null;
  private microphoneStream: MediaStream | null = null;
  private frequencySubject = new BehaviorSubject<number>(0);

  getFrequency(): Observable<number> {
    return this.frequencySubject.asObservable();
  }

  async startCapture(): Promise<void> {
    if (this.audioContext) return;

    try {
      const stream = await navigator.mediaDevices.getUserMedia({ audio: true });
      this.audioContext = new AudioContext();
      this.microphoneStream = stream;

      const source = this.audioContext.createMediaStreamSource(stream);
      this.analyserNode = this.audioContext.createAnalyser();
      this.analyserNode.fftSize = 2048;

      source.connect(this.analyserNode);
      this.analyseAudio();
    } catch (error) {
      console.error('Error capturing audio:', error);
    }
  }

  stopCapture(): void {
    this.microphoneStream?.getTracks().forEach(track => track.stop());
    this.audioContext?.close();
    this.audioContext = null;
    this.analyserNode = null;
    this.microphoneStream = null;
  }

  private analyseAudio(): void {
    if (!this.analyserNode || !this.audioContext) return;

    const bufferLength = this.analyserNode.fftSize;
    const buffer = new Float32Array(bufferLength);

    const update = () => {
      if (!this.analyserNode || !this.audioContext) return;
      console.log('Analyzing frame...'); // AÑADIR ESTO
      this.analyserNode.getFloatTimeDomainData(buffer);
      const freq = autoCorrelate(buffer, this.audioContext.sampleRate);

      if (freq) {
        console.log('Emitiendo frecuencia sin filtro:', freq);
        this.frequencySubject.next(freq);
      }
      

      requestAnimationFrame(update);
    };

    update();
  }
  
}
