import { Howl } from 'howler';

const NOTES = {};
let noteArray = ['A4', 'A5', 'B4', 'Bb4', 'B5', 'Bb5', 'C4', 'CSh4', 'C5', 'CSh5', 'C6',
  'CSh6', 'D4', 'D5', 'D6', 'E4', 'Eb4', 'E5', 'Eb5', 'E6', 'Eb6', 'F4',
  'FSh4', 'F5', 'FSh5', 'G4', 'GSh4', 'G5', 'GSh5'];

for (const note of noteArray) {
  NOTES[note] = new Howl({
    src: [`/Sounds/LeadWavs/Lead${note}.wav`, `/Sounds/LeadWavs/Lead${note}.wav`]
  })
}

export default NOTES
