import { Howl } from 'howler';

const NOTES = {};
let noteArray = ['A3', 'A4', 'B3', 'B4', 'Bb3', 'Bb4', 'C3', 'C4', 'C5', 'CSh3', 'CSh4',
  'CSh5', 'D3', 'D4', 'D5', 'E3', 'E4', 'Eb3', 'Eb4', 'F3', 'F4', 'FSh3',
  'FSh4', 'G3', 'G4', 'GSh3', 'GSh4'];

for (const note of noteArray) {
  NOTES[note] = new Howl({
    src: [`/Sounds/CelloWavs/Cello${note}.wav`, `/Sounds/CelloWavs/Cello${note}.wav`]
  })
}

export default NOTES;