import { Howl } from 'howler';

const NOTES = {};
let noteArray = ['A3', 'A4', 'A5', 'B3', 'B4', 'Bb3', 'Bb4', 'Bb5', 'C4', 'C5', 'CSh4',
  'CSh5', 'D4', 'D5', 'E4', 'E5', 'Eb4', 'Eb5', 'F3', 'F4', 'F5', 'FSh3',
  'FSh4', 'FSh5', 'G3', 'G4', 'G5', 'GSh3', 'GSh4', 'GSh5'];

for (const note of noteArray) {
  NOTES[note] = new Howl({
    src: [`/Sounds/SecondWavs/Second${note}.wav`, `/Sounds/SecondWavs/Second${note}.wav`]
  })
}

export default NOTES;