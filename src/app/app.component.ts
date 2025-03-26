import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { CommonModule } from '@angular/common'; // Importa CommonModul

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, CommonModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
  
})
export class AppComponent {
  title = 'audio-freq-app';
  frequency: number = 0;
  isCapturing: boolean = false;
  audioContext: AudioContext | null = null;
  analyserNode: AnalyserNode | null = null;
  microphoneStream: MediaStream | null = null;

  // Inicia la captura de audio desde el micrófono
  startAudioCapture() {
    if (this.isCapturing) return;

    this.isCapturing = true;

    navigator.mediaDevices.getUserMedia({ audio: true })
      .then(stream => {
        this.microphoneStream = stream;

        // Crea el AudioContext
        this.audioContext = new (window.AudioContext || (window as any).webkitAudioContext)();
        
        // Conecta el micrófono a un AnalizerNode
        const sourceNode = this.audioContext.createMediaStreamSource(stream);
        this.analyserNode = this.audioContext.createAnalyser();
        sourceNode.connect(this.analyserNode);
        
        // Configura el AnalyserNode
        this.analyserNode.fftSize = 2048; // tamaño de la FFT
        const bufferLength = this.analyserNode.frequencyBinCount;
        const dataArray = new Uint8Array(bufferLength);

        // Función para analizar las frecuencias
        const analyze = () => {
          this.analyserNode?.getByteFrequencyData(dataArray);
          let maxFreq = Math.max(...dataArray);
          this.frequency = maxFreq;
          requestAnimationFrame(analyze); // Llama a esta función en el siguiente frame
        };

        analyze();
      })
      .catch(err => {
        console.error('Error al acceder al micrófono:', err);
        this.isCapturing = false;
      });
  }

  // Detiene la captura de audio
  stopAudioCapture() {
    if (this.microphoneStream) {
      const tracks = this.microphoneStream.getTracks();
      tracks.forEach(track => track.stop());
    }
    this.isCapturing = false;
  }
}
