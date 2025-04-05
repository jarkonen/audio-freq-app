export function autoCorrelate(buffer: Float32Array, sampleRate: number): number | null {
    const SIZE = buffer.length;
    let rms = 0;
  
    for (let i = 0; i < SIZE; i++) {
      rms += buffer[i] * buffer[i];
    }
    rms = Math.sqrt(rms / SIZE);
  
    if (rms < 0.003) return null;
  
    let r1 = 0, r2 = SIZE - 1;
    while (r1 < r2 && Math.abs(buffer[r1]) < 0.2) r1++;
    while (r2 > r1 && Math.abs(buffer[r2]) < 0.2) r2--;
  
    if (r2 - r1 < 32) return null;
  
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
  
    if (maxpos <= 0) return null;
  
    const frequency = sampleRate / maxpos;
    if (frequency < 80 || frequency > 1200) return null;
    return frequency;
  }
  