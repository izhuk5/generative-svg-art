import { SvJs } from 'svjs';

// Viewport size (1:1 aspect ratio).
const svgSize =
  window.innerWidth > window.innerHeight
    ? window.innerHeight
    : window.innerWidth;

// Parent SVG.
const svg = new SvJs().addTo(document.getElementById('container'));
svg.set({ width: svgSize, height: svgSize, viewBox: '0 0 1000 1000' });

// A simple circle example.
svg.create('circle').set({ cx: 50, cy: 50, r: 25 });

// Circle overlay loop.
for (let i = 1; i <= 6; i += 1) {
  // Vary the radius, and the two vertical center points.
  let r = 50 * i;
  let cx = 500;
  let cy1 = 800 - r;
  let cy2 = 200 + r;

  // Create the blueish circle set.
  svg.create('circle').set({
    cx: cx,
    cy: cy1,
    r: r,
    fill: '#99eeff',
    fill_opacity: 0.1
  });

  // Create the greenish circle set.
  svg.create('circle').set({
    cx: cx,
    cy: cy2,
    r: r,
    fill: '#aaffee',
    fill_opacity: 0.1
  });
}

// Create a subtle outline.
svg.create('circle').set({
  cx: 500,
  cy: 500,
  r: 320,
  fill: 'none',
  stroke: '#aaffee',
  stroke_width: 2,
  stroke_opacity: 0.1
});
