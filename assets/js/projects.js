/* Project list. To add a project, copy one block, change the values, and make a page named slug.html.
   The home page sorts by end date (newest first), then start date. Use YYYY-MM. */
window.PROJECTS = [
  { slug: 'boilerbird-recovery', title: 'BoilerBird recovery system', summary: 'Recovery system design for a UAV at Purdue CODELab.', tags: ['MATLAB', 'Siemens NX', 'Decision matrix'], image: 'images/boilerbird-craft.png', label: 'Spring 2026', start: '2026-01', end: '2026-05' },
  { slug: 'audio-equalizer', title: 'Analog audio equalizer', summary: 'Three-band analog equalizer with a power amplifier driving an 8 ohm speaker.', tags: ['LTspice', 'Oscilloscope', 'Analog circuits'], image: 'images/equalizer-schematic.png', label: 'Nov to Dec 2025', start: '2025-11', end: '2025-12' },
  { slug: 'aquila', title: 'Aquila', summary: 'Balsa wood glider for the Boeing Flight Competition.', tags: ['Fusion 360', 'Balsa structures', 'Flight testing'], image: 'images/aquila-both.jpg', label: 'Jan to Mar 2025', start: '2025-01', end: '2025-03' },
  { slug: 'little-blazer-engine', title: 'Little Blazer engine', summary: 'Fully parametric CAD model of an internal combustion engine, managed in a PDM system.', tags: ['Siemens NX', 'Aras Innovator', 'Parametric CAD'], image: 'images/little-blazer.png', label: 'Nov to Dec 2024', start: '2024-11', end: '2024-12' },
  { slug: 'cobra', title: 'C.O.B.R.A.', summary: 'Pneumatic soft robot for search and rescue in collapsed buildings.', tags: ['Soft robotics', 'Pneumatics', 'Search and rescue'], image: 'images/cobra-overview.png', label: 'Jan to Dec 2024', start: '2024-01', end: '2024-12' }
];
