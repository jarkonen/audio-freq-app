import { autoCorrelate } from './autocorrelate';
import { a1Mock1 } from '../__mocks__/mocks/piano-mock-audio-buffers/a1/a1.mock1';
import { a1Mock2 } from '../__mocks__/mocks/piano-mock-audio-buffers/a1/a1.mock2';
import { a1Mock3 } from '../__mocks__/mocks/piano-mock-audio-buffers/a1/a1.mock3';
import { a4Mock1 } from '../__mocks__/mocks/piano-mock-audio-buffers/a4/a4.mock1';
import { a4Mock2 } from '../__mocks__/mocks/piano-mock-audio-buffers/a4/a4.mock2';
import { a4Mock3 } from '../__mocks__/mocks/piano-mock-audio-buffers/a4/a4.mock3';
import { a4Mock4 } from '../__mocks__/mocks/piano-mock-audio-buffers/a4/a4.mock4';
import { b0mock1 } from '../__mocks__/mocks/piano-mock-audio-buffers/b0/b0.mock1';
import { b1Mock1 } from '../__mocks__/mocks/piano-mock-audio-buffers/b1/b1.mock1';
import { b1Mock2 } from '../__mocks__/mocks/piano-mock-audio-buffers/b1/b1.mock2';
import { b1Mock3 } from '../__mocks__/mocks/piano-mock-audio-buffers/b1/b1.mock3';
import { c1Mock1 } from '../__mocks__/mocks/piano-mock-audio-buffers/c1/c1.mock1';
import { c2Mock1 } from '../__mocks__/mocks/piano-mock-audio-buffers/c2/c2.mock1';
import { c2Mock2 } from '../__mocks__/mocks/piano-mock-audio-buffers/c2/c2.mock2';
import { c2Mock3 } from '../__mocks__/mocks/piano-mock-audio-buffers/c2/c2.mock3';
import { c2Mock4 } from '../__mocks__/mocks/piano-mock-audio-buffers/c2/c2.mock4';
import { d1Mock1 } from '../__mocks__/mocks/piano-mock-audio-buffers/d1/d1.mock1';
import { d1Mock2 } from '../__mocks__/mocks/piano-mock-audio-buffers/d1/d1mock2';
import { d1Mock3 } from '../__mocks__/mocks/piano-mock-audio-buffers/d1/d1mock3';
import { d2Mock1 } from '../__mocks__/mocks/piano-mock-audio-buffers/d2/d2.mock1';
import { d2Mock2 } from '../__mocks__/mocks/piano-mock-audio-buffers/d2/d2.mock2';
import { d2Mock3 } from '../__mocks__/mocks/piano-mock-audio-buffers/d2/d2.mock3';
import { d6Mock1 } from '../__mocks__/mocks/piano-mock-audio-buffers/d6/d6.mock1';
import { d7Mock1 } from '../__mocks__/mocks/piano-mock-audio-buffers/d7/d7.mock1';
import { e1Mock1 } from '../__mocks__/mocks/piano-mock-audio-buffers/e1/e1.mock1';
import { e1Mock2 } from '../__mocks__/mocks/piano-mock-audio-buffers/e1/e1.mock2';
import { e1Mock3 } from '../__mocks__/mocks/piano-mock-audio-buffers/e1/e1.mock3';
import { e2Mock2 } from '../__mocks__/mocks/piano-mock-audio-buffers/e2/e2.mock2';
import { e2Mock3 } from '../__mocks__/mocks/piano-mock-audio-buffers/e2/e2.mock3';
import { e2mock1 } from '../__mocks__/mocks/piano-mock-audio-buffers/e2/e2.mock1';
import { f1Mock1 } from '../__mocks__/mocks/piano-mock-audio-buffers/f1/f1.mock1';
import { f1Mock2 } from '../__mocks__/mocks/piano-mock-audio-buffers/f1/f1.mock2';
import { f1Mock3 } from '../__mocks__/mocks/piano-mock-audio-buffers/f1/f1.mock3';
import { f7Mock1 } from '../__mocks__/mocks/piano-mock-audio-buffers/f7/f7.mock1';
import { f7Mock2 } from '../__mocks__/mocks/piano-mock-audio-buffers/f7/f7.mock2';
import { g1Mock1 } from '../__mocks__/mocks/piano-mock-audio-buffers/g1/g1.mock1';
import { g1Mock2 } from '../__mocks__/mocks/piano-mock-audio-buffers/g1/g1.mock2';
import { g1Mock3 } from '../__mocks__/mocks/piano-mock-audio-buffers/g1/g1.mock3';
import { g7Mock1 } from '../__mocks__/mocks/piano-mock-audio-buffers/g7/g7.mock1';
import { g7Mock2 } from '../__mocks__/mocks/piano-mock-audio-buffers/g7/g7.mock2';
import { g7SharpMock1 } from '../__mocks__/mocks/piano-mock-audio-buffers/g7sharp/g7sharp.mock1';

describe('autoCorrelate - A1 a1Mock1', () => {
  it('debería detectar una frecuencia cercana a 55.0Hz (±5)', () => {
    const buffer = new Float32Array(a1Mock1);
    const sampleRate = 48000;

    const freq = autoCorrelate(buffer, sampleRate);

    expect(freq).not.toBeNull();
    expect(freq!).toBeGreaterThan(50.0);
    expect(freq!).toBeLessThan(60.0);
  });
});


describe('autoCorrelate - A1 a1Mock2', () => {
  it('debería detectar una frecuencia cercana a 55.0Hz (±5)', () => {
    const buffer = new Float32Array(a1Mock2);
    const sampleRate = 48000;

    const freq = autoCorrelate(buffer, sampleRate);

    expect(freq).not.toBeNull();
    expect(freq!).toBeGreaterThan(50.0);
    expect(freq!).toBeLessThan(60.0);
  });
});


describe('autoCorrelate - A1 a1Mock3', () => {
  it('debería detectar una frecuencia cercana a 55.0Hz (±5)', () => {
    const buffer = new Float32Array(a1Mock3);
    const sampleRate = 48000;

    const freq = autoCorrelate(buffer, sampleRate);

    expect(freq).not.toBeNull();
    expect(freq!).toBeGreaterThan(50.0);
    expect(freq!).toBeLessThan(60.0);
  });
});


describe('autoCorrelate - A4 a4Mock1', () => {
  it('debería detectar una frecuencia cercana a 440.0Hz (±10)', () => {
    const buffer = new Float32Array(a4Mock1);
    const sampleRate = 48000;

    const freq = autoCorrelate(buffer, sampleRate);

    expect(freq).not.toBeNull();
    expect(freq!).toBeGreaterThan(430.0);
    expect(freq!).toBeLessThan(450.0);
  });
});


describe('autoCorrelate - A4 a4Mock2', () => {
  it('debería detectar una frecuencia cercana a 440.0Hz (±10)', () => {
    const buffer = new Float32Array(a4Mock2);
    const sampleRate = 48000;

    const freq = autoCorrelate(buffer, sampleRate);

    expect(freq).not.toBeNull();
    expect(freq!).toBeGreaterThan(430.0);
    expect(freq!).toBeLessThan(450.0);
  });
});


describe('autoCorrelate - A4 a4Mock3', () => {
  it('debería detectar una frecuencia cercana a 440.0Hz (±10)', () => {
    const buffer = new Float32Array(a4Mock3);
    const sampleRate = 48000;

    const freq = autoCorrelate(buffer, sampleRate);

    expect(freq).not.toBeNull();
    expect(freq!).toBeGreaterThan(430.0);
    expect(freq!).toBeLessThan(450.0);
  });
});


describe('autoCorrelate - A4 a4Mock4', () => {
  it('debería detectar una frecuencia cercana a 440.0Hz (±10)', () => {
    const buffer = new Float32Array(a4Mock4);
    const sampleRate = 48000;

    const freq = autoCorrelate(buffer, sampleRate);

    expect(freq).not.toBeNull();
    expect(freq!).toBeGreaterThan(430.0);
    expect(freq!).toBeLessThan(450.0);
  });
});


describe('autoCorrelate - B0 b0mock1', () => {
  it('debería detectar una frecuencia cercana a 30.87Hz (±5)', () => {
    const buffer = new Float32Array(b0mock1);
    const sampleRate = 48000;

    const freq = autoCorrelate(buffer, sampleRate);

    expect(freq).not.toBeNull();
    expect(freq!).toBeGreaterThan(25.87);
    expect(freq!).toBeLessThan(35.870000000000005);
  });
});


describe('autoCorrelate - B1 b1Mock1', () => {
  it('debería detectar una frecuencia cercana a 61.74Hz (±5)', () => {
    const buffer = new Float32Array(b1Mock1);
    const sampleRate = 48000;

    const freq = autoCorrelate(buffer, sampleRate);

    expect(freq).not.toBeNull();
    expect(freq!).toBeGreaterThan(56.74);
    expect(freq!).toBeLessThan(66.74000000000001);
  });
});


describe('autoCorrelate - B1 b1Mock2', () => {
  it('debería detectar una frecuencia cercana a 61.74Hz (±5)', () => {
    const buffer = new Float32Array(b1Mock2);
    const sampleRate = 48000;

    const freq = autoCorrelate(buffer, sampleRate);

    expect(freq).not.toBeNull();
    expect(freq!).toBeGreaterThan(56.74);
    expect(freq!).toBeLessThan(66.74000000000001);
  });
});


describe('autoCorrelate - B1 b1Mock3', () => {
  it('debería detectar una frecuencia cercana a 61.74Hz (±5)', () => {
    const buffer = new Float32Array(b1Mock3);
    const sampleRate = 48000;

    const freq = autoCorrelate(buffer, sampleRate);

    expect(freq).not.toBeNull();
    expect(freq!).toBeGreaterThan(56.74);
    expect(freq!).toBeLessThan(66.74000000000001);
  });
});


describe('autoCorrelate - C1 c1Mock1', () => {
  it('debería detectar una frecuencia cercana a 32.7Hz (±5)', () => {
    const buffer = new Float32Array(c1Mock1);
    const sampleRate = 48000;

    const freq = autoCorrelate(buffer, sampleRate);

    expect(freq).not.toBeNull();
    expect(freq!).toBeGreaterThan(27.700000000000003);
    expect(freq!).toBeLessThan(37.7);
  });
});


describe('autoCorrelate - C2 c2Mock1', () => {
  it('debería detectar una frecuencia cercana a 65.41Hz (±5)', () => {
    const buffer = new Float32Array(c2Mock1);
    const sampleRate = 48000;

    const freq = autoCorrelate(buffer, sampleRate);

    expect(freq).not.toBeNull();
    expect(freq!).toBeGreaterThan(60.41);
    expect(freq!).toBeLessThan(70.41);
  });
});


describe('autoCorrelate - C2 c2Mock2', () => {
  it('debería detectar una frecuencia cercana a 65.41Hz (±5)', () => {
    const buffer = new Float32Array(c2Mock2);
    const sampleRate = 48000;

    const freq = autoCorrelate(buffer, sampleRate);

    expect(freq).not.toBeNull();
    expect(freq!).toBeGreaterThan(60.41);
    expect(freq!).toBeLessThan(70.41);
  });
});


describe('autoCorrelate - C2 c2Mock3', () => {
  it('debería detectar una frecuencia cercana a 65.41Hz (±5)', () => {
    const buffer = new Float32Array(c2Mock3);
    const sampleRate = 48000;

    const freq = autoCorrelate(buffer, sampleRate);

    expect(freq).not.toBeNull();
    expect(freq!).toBeGreaterThan(60.41);
    expect(freq!).toBeLessThan(70.41);
  });
});


describe('autoCorrelate - C2 c2Mock4', () => {
  it('debería detectar una frecuencia cercana a 65.41Hz (±5)', () => {
    const buffer = new Float32Array(c2Mock4);
    const sampleRate = 48000;

    const freq = autoCorrelate(buffer, sampleRate);

    expect(freq).not.toBeNull();
    expect(freq!).toBeGreaterThan(60.41);
    expect(freq!).toBeLessThan(70.41);
  });
});


describe('autoCorrelate - D1 d1Mock1', () => {
  it('debería detectar una frecuencia cercana a 36.71Hz (±5)', () => {
    const buffer = new Float32Array(d1Mock1);
    const sampleRate = 48000;

    const freq = autoCorrelate(buffer, sampleRate);

    expect(freq).not.toBeNull();
    expect(freq!).toBeGreaterThan(31.71);
    expect(freq!).toBeLessThan(41.71);
  });
});


describe('autoCorrelate - D1 d1Mock2', () => {
  it('debería detectar una frecuencia cercana a 36.71Hz (±5)', () => {
    const buffer = new Float32Array(d1Mock2);
    const sampleRate = 48000;

    const freq = autoCorrelate(buffer, sampleRate);

    expect(freq).not.toBeNull();
    expect(freq!).toBeGreaterThan(31.71);
    expect(freq!).toBeLessThan(41.71);
  });
});


describe('autoCorrelate - D1 d1Mock3', () => {
  it('debería detectar una frecuencia cercana a 36.71Hz (±5)', () => {
    const buffer = new Float32Array(d1Mock3);
    const sampleRate = 48000;

    const freq = autoCorrelate(buffer, sampleRate);

    expect(freq).not.toBeNull();
    expect(freq!).toBeGreaterThan(31.71);
    expect(freq!).toBeLessThan(41.71);
  });
});


describe('autoCorrelate - D2 d2Mock1', () => {
  it('debería detectar una frecuencia cercana a 73.42Hz (±5)', () => {
    const buffer = new Float32Array(d2Mock1);
    const sampleRate = 48000;

    const freq = autoCorrelate(buffer, sampleRate);

    expect(freq).not.toBeNull();
    expect(freq!).toBeGreaterThan(68.42);
    expect(freq!).toBeLessThan(78.42);
  });
});


describe('autoCorrelate - D2 d2Mock2', () => {
  it('debería detectar una frecuencia cercana a 73.42Hz (±5)', () => {
    const buffer = new Float32Array(d2Mock2);
    const sampleRate = 48000;

    const freq = autoCorrelate(buffer, sampleRate);

    expect(freq).not.toBeNull();
    expect(freq!).toBeGreaterThan(68.42);
    expect(freq!).toBeLessThan(78.42);
  });
});


describe('autoCorrelate - D2 d2Mock3', () => {
  it('debería detectar una frecuencia cercana a 73.42Hz (±5)', () => {
    const buffer = new Float32Array(d2Mock3);
    const sampleRate = 48000;

    const freq = autoCorrelate(buffer, sampleRate);

    expect(freq).not.toBeNull();
    expect(freq!).toBeGreaterThan(68.42);
    expect(freq!).toBeLessThan(78.42);
  });
});


describe('autoCorrelate - D6 d6Mock1', () => {
  test.skip('debería detectar una frecuencia cercana a 1174.66Hz (±20)', () => {
    const buffer = new Float32Array(d6Mock1);
    const sampleRate = 48000;

    const freq = autoCorrelate(buffer, sampleRate);

    expect(freq).not.toBeNull();
    expect(freq!).toBeGreaterThan(1154.66);
    expect(freq!).toBeLessThan(1194.66);
  });
});


describe('autoCorrelate - D7 d7Mock1', () => {
  test.skip('debería detectar una frecuencia cercana a 2349.32Hz (±30)', () => {
    const buffer = new Float32Array(d7Mock1);
    const sampleRate = 48000;

    const freq = autoCorrelate(buffer, sampleRate);

    expect(freq).not.toBeNull();
    expect(freq!).toBeGreaterThan(2319.32);
    expect(freq!).toBeLessThan(2379.32);
  });
});


describe('autoCorrelate - E1 e1Mock1', () => {
  it('debería detectar una frecuencia cercana a 41.2Hz (±5)', () => {
    const buffer = new Float32Array(e1Mock1);
    const sampleRate = 48000;

    const freq = autoCorrelate(buffer, sampleRate);

    expect(freq).not.toBeNull();
    expect(freq!).toBeGreaterThan(36.2);
    expect(freq!).toBeLessThan(46.2);
  });
});


describe('autoCorrelate - E1 e1Mock2', () => {
  it('debería detectar una frecuencia cercana a 41.2Hz (±5)', () => {
    const buffer = new Float32Array(e1Mock2);
    const sampleRate = 48000;

    const freq = autoCorrelate(buffer, sampleRate);

    expect(freq).not.toBeNull();
    expect(freq!).toBeGreaterThan(36.2);
    expect(freq!).toBeLessThan(46.2);
  });
});


describe('autoCorrelate - E1 e1Mock3', () => {
  it('debería detectar una frecuencia cercana a 41.2Hz (±5)', () => {
    const buffer = new Float32Array(e1Mock3);
    const sampleRate = 48000;

    const freq = autoCorrelate(buffer, sampleRate);

    expect(freq).not.toBeNull();
    expect(freq!).toBeGreaterThan(36.2);
    expect(freq!).toBeLessThan(46.2);
  });
});


describe('autoCorrelate - E2 e2mock1', () => {
  it('debería detectar una frecuencia cercana a 82.41Hz (±5)', () => {
    const buffer = new Float32Array(e2mock1);
    const sampleRate = 48000;

    const freq = autoCorrelate(buffer, sampleRate);

    expect(freq).not.toBeNull();
    expect(freq!).toBeGreaterThan(77.41);
    expect(freq!).toBeLessThan(87.41);
  });
});


describe('autoCorrelate - E2 e2Mock2', () => {
  it('debería detectar una frecuencia cercana a 82.41Hz (±5)', () => {
    const buffer = new Float32Array(e2Mock2);
    const sampleRate = 48000;

    const freq = autoCorrelate(buffer, sampleRate);

    expect(freq).not.toBeNull();
    expect(freq!).toBeGreaterThan(77.41);
    expect(freq!).toBeLessThan(87.41);
  });
});


describe('autoCorrelate - E2 e2Mock3', () => {
  it('debería detectar una frecuencia cercana a 82.41Hz (±5)', () => {
    const buffer = new Float32Array(e2Mock3);
    const sampleRate = 48000;

    const freq = autoCorrelate(buffer, sampleRate);

    expect(freq).not.toBeNull();
    expect(freq!).toBeGreaterThan(77.41);
    expect(freq!).toBeLessThan(87.41);
  });
});


describe('autoCorrelate - F1 f1Mock1', () => {
  it('debería detectar una frecuencia cercana a 43.65Hz (±5)', () => {
    const buffer = new Float32Array(f1Mock1);
    const sampleRate = 48000;

    const freq = autoCorrelate(buffer, sampleRate);

    expect(freq).not.toBeNull();
    expect(freq!).toBeGreaterThan(38.65);
    expect(freq!).toBeLessThan(48.65);
  });
});


describe('autoCorrelate - F1 f1Mock2', () => {
  it('debería detectar una frecuencia cercana a 43.65Hz (±5)', () => {
    const buffer = new Float32Array(f1Mock2);
    const sampleRate = 48000;

    const freq = autoCorrelate(buffer, sampleRate);

    expect(freq).not.toBeNull();
    expect(freq!).toBeGreaterThan(38.65);
    expect(freq!).toBeLessThan(48.65);
  });
});


describe('autoCorrelate - F1 f1Mock3', () => {
  it('debería detectar una frecuencia cercana a 43.65Hz (±5)', () => {
    const buffer = new Float32Array(f1Mock3);
    const sampleRate = 48000;

    const freq = autoCorrelate(buffer, sampleRate);

    expect(freq).not.toBeNull();
    expect(freq!).toBeGreaterThan(38.65);
    expect(freq!).toBeLessThan(48.65);
  });
});


describe('autoCorrelate - F7 f7Mock1', () => {
  test.skip('debería detectar una frecuencia cercana a 2793.83Hz (±30)', () => {
    const buffer = new Float32Array(f7Mock1);
    const sampleRate = 48000;

    const freq = autoCorrelate(buffer, sampleRate);

    expect(freq).not.toBeNull();
    expect(freq!).toBeGreaterThan(2763.83);
    expect(freq!).toBeLessThan(2823.83);
  });
});


describe('autoCorrelate - F7 f7Mock2', () => {
  it('debería detectar una frecuencia cercana a 2793.83Hz (±30)', () => {
    const buffer = new Float32Array(f7Mock2);
    const sampleRate = 48000;

    const freq = autoCorrelate(buffer, sampleRate);

    expect(freq).not.toBeNull();
    expect(freq!).toBeGreaterThan(2763.83);
    expect(freq!).toBeLessThan(2823.83);
  });
});


describe('autoCorrelate - G1 g1Mock1', () => {
  it('debería detectar una frecuencia cercana a 49.0Hz (±5)', () => {
    const buffer = new Float32Array(g1Mock1);
    const sampleRate = 48000;

    const freq = autoCorrelate(buffer, sampleRate);

    expect(freq).not.toBeNull();
    expect(freq!).toBeGreaterThan(44.0);
    expect(freq!).toBeLessThan(54.0);
  });
});


describe('autoCorrelate - G1 g1Mock2', () => {
  it('debería detectar una frecuencia cercana a 49.0Hz (±5)', () => {
    const buffer = new Float32Array(g1Mock2);
    const sampleRate = 48000;

    const freq = autoCorrelate(buffer, sampleRate);

    expect(freq).not.toBeNull();
    expect(freq!).toBeGreaterThan(44.0);
    expect(freq!).toBeLessThan(54.0);
  });
});


describe('autoCorrelate - G1 g1Mock3', () => {
  it('debería detectar una frecuencia cercana a 49.0Hz (±5)', () => {
    const buffer = new Float32Array(g1Mock3);
    const sampleRate = 48000;

    const freq = autoCorrelate(buffer, sampleRate);

    expect(freq).not.toBeNull();
    expect(freq!).toBeGreaterThan(44.0);
    expect(freq!).toBeLessThan(54.0);
  });
});


describe('autoCorrelate - G7 g7Mock1', () => {
  test.skip('debería detectar una frecuencia cercana a 3135.96Hz (±30)', () => {
    const buffer = new Float32Array(g7Mock1);
    const sampleRate = 48000;

    const freq = autoCorrelate(buffer, sampleRate);

    expect(freq).not.toBeNull();
    expect(freq!).toBeGreaterThan(3105.96);
    expect(freq!).toBeLessThan(3165.96);
  });
});


describe('autoCorrelate - G7 g7Mock2', () => {
  test.skip('debería detectar una frecuencia cercana a 3135.96Hz (±30)', () => {
    const buffer = new Float32Array(g7Mock2);
    const sampleRate = 48000;

    const freq = autoCorrelate(buffer, sampleRate);

    expect(freq).not.toBeNull();
    expect(freq!).toBeGreaterThan(3105.96);
    expect(freq!).toBeLessThan(3165.96);
  });
});


describe('autoCorrelate - G7SHARP g7SharpMock1', () => {
  test.skip('debería detectar una frecuencia cercana a 3322.44Hz (±30)', () => {
    const buffer = new Float32Array(g7SharpMock1);
    const sampleRate = 48000;

    const freq = autoCorrelate(buffer, sampleRate);

    expect(freq).not.toBeNull();
    expect(freq!).toBeGreaterThan(3292.44);
    expect(freq!).toBeLessThan(3352.44);
  });
});
