import { Howl } from 'howler';

const NOTES = {};
let noteArray = ['A2', 'B2', 'Bb2', 'C2', 'C3', 'CSh2', 'CSh3', 'D2', 'D3', 'E2', 'E3',
  'Eb2', 'Eb3', 'F2', 'F3', 'FSh2', 'G2', 'GSh2'];

for (const note of noteArray) {
  NOTES[note] = new Howl({
    src: [`/Sounds/BassWavs/Bass${note}.wav`, `/Sounds/BassWavs/Bass${note}.wav`]
  })
}

export default NOTES;
