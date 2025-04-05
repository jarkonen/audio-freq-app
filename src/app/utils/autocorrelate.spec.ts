import { autoCorrelate } from './autocorrelate';

describe('autoCorrelate()', () => {
  function generateSineWave(freq: number, sampleRate: number, durationSeconds: number): Float32Array {
    const samples = sampleRate * durationSeconds;
    const buffer = new Float32Array(samples);
    for (let i = 0; i < samples; i++) {
      buffer[i] = Math.sin(2 * Math.PI * freq * (i / sampleRate));
    }
    return buffer;
  }

  it('detecta ~440Hz en una onda senoidal', () => {
    const sampleRate = 44100;
    const buffer = generateSineWave(440, sampleRate, 1);
    const result = autoCorrelate(buffer, sampleRate);
    expect(result).toBeGreaterThanOrEqual(435);
    expect(result).toBeLessThanOrEqual(445);
  });
});
