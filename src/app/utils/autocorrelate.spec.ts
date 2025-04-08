import { autoCorrelate } from './autocorrelate';
import { a1Mock1 } from '../__mocks__/mocks/piano-mock-audio-buffers/a1/a1.mock1';

describe('autoCorrelate', () => {
  it('debería detectar una frecuencia cercana a 55Hz para el mock A1', () => {
    const buffer = new Float32Array(a1Mock1);
    const sampleRate = 48000;

    const freq = autoCorrelate(buffer, sampleRate);

    expect(freq).not.toBeNull();
    expect(freq!).toBeGreaterThan(50);
    expect(freq!).toBeLessThan(60);
  });
});
