import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';

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
      const freq = this.autoCorrelate(buffer, this.audioContext.sampleRate);

      if (freq) {
        console.log('Emitiendo frecuencia sin filtro:', freq);
        this.frequencySubject.next(freq);
      }
      

      requestAnimationFrame(update);
    };

    update();
  }

  public autoCorrelate(buffer: Float32Array, sampleRate: number): number | null {
    const SIZE = buffer.length;
    let rms = 0;
  
    for (let i = 0; i < SIZE; i++) {
      rms += buffer[i] * buffer[i];
    }
    rms = Math.sqrt(rms / SIZE);
  
    if (rms < 0.003) {
      console.log('❌ Señal muy débil');
      return null;
    }
  
    // Recortar silencio al principio y final
    let r1 = 0, r2 = SIZE - 1;
    while (r1 < r2 && Math.abs(buffer[r1]) < 0.2) r1++;
    while (r2 > r1 && Math.abs(buffer[r2]) < 0.2) r2--;
  
    if (r2 - r1 < 32) {
      console.log('❌ Segmento útil muy corto');
      return null;
    }
  
    const trimmed = buffer.slice(r1, r2);
    const len = trimmed.length;
    const c = new Array(len).fill(0);
  
    for (let lag = 0; lag < len; lag++) {
      for (let i = 0; i < len - lag; i++) {
        c[lag] += trimmed[i] * trimmed[i + lag];
      }
    }
  
    let d = 0;
    while (d < len - 1 && c[d] > c[d + 1]) d++;
  
    let maxval = -1;
    let maxpos = -1;
  
    for (let i = d; i < len; i++) {
      if (c[i] > maxval) {
        maxval = c[i];
        maxpos = i;
      }
    }
  
    if (maxpos <= 0) {
      console.log('❌ No se encontró pico válido');
      return null;
    }
  
    const frequency = sampleRate / maxpos;
    if (frequency < 80 || frequency > 1200) return null;
    return frequency;
  }
  
}
