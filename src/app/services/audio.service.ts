import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { autoCorrelate } from '../utils/autocorrelate';


@Injectable({ providedIn: 'root' })
export class AudioService {
  private audioContext: AudioContext | null = null;
  private analyserNode: AnalyserNode | null = null;
  private microphoneStream: MediaStream | null = null;
  private frequencySubject = new BehaviorSubject<number>(0);
  private frequencyBuffer: number[] = [];
  private bufferSize: number = 100;
  private bufferIndex: number = 0;

  private statsSubject = new BehaviorSubject<{
    media: number;
    mediana: number;
    desviacionTipica: number;
  } | null>(null);

  getStats(): Observable<{
    media: number;
    mediana: number;
    desviacionTipica: number;
  } | null> {
    return this.statsSubject.asObservable();
  }

  private handleFrequency(freq: number): void {
    if (freq != null && !isNaN(freq)) {
      if (this.frequencyBuffer.length < this.bufferSize) {
        this.frequencyBuffer.push(freq);
      } else {
        this.frequencyBuffer[this.bufferIndex] = freq;
        this.bufferIndex = (this.bufferIndex + 1) % this.bufferSize;
      }
  
      if (this.frequencyBuffer.length === this.bufferSize) {
        this.calculateStats();
      }
    }
  }
  
  private calculateStats(): void {
    const sorted = [...this.frequencyBuffer].sort((a, b) => a - b);
    const n = sorted.length;
  
    const media = sorted.reduce((sum, val) => sum + val, 0) / n;
  
    const mediana = n % 2 === 0
      ? (sorted[n / 2 - 1] + sorted[n / 2]) / 2
      : sorted[Math.floor(n / 2)];
  
    const varianza = sorted.reduce((sum, val) => sum + Math.pow(val - media, 2), 0) / n;
    const desviacionTipica = Math.sqrt(varianza);
  
    this.statsSubject.next({ media, mediana, desviacionTipica });
  }
  


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
        this.handleFrequency(freq);
      }
      

      requestAnimationFrame(update);
    };

    update();
  }
  
}
