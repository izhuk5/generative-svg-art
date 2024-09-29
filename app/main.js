import { SvJs } from 'svjs';

// Viewport size (1:1 aspect ratio).
const svgSize =
  window.innerWidth > window.innerHeight
    ? window.innerHeight
    : window.innerWidth;

// Parent SVG.
const svg = new SvJs().addTo(document.getElementById('container'));
svg.set({ width: svgSize, height: svgSize, viewBox: '0 0 1000 1000' });

