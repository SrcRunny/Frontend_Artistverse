<template>
    <div class="body">
      <div class="result">
        <h2 class="animate__animated animate__fadeInDown animate__delay-1s">Major Keys Chord Table</h2>
        <table class="animate__animated animate__fadeInUp animate__delay-1s">
          <thead>
            <tr>
              <th>Key</th>
              <th>Progression</th>
              <th v-for="(num, index) in 7" :key="index">{{ index + 1 }}</th>
            </tr>
          </thead>
          <tbody>
            <tr v-for="(key, keyIndex) in Object.keys(keyChords)" :key="key">
              <td>{{ key }}</td>
              <td>
                <div class="progression-buttons">
                  <button
                    v-for="(progression, index) in progressions"
                    :key="index"
                    :class="{ 'active-progression': isProgressionActive(progression) }"
                    @click="selectProgression(progression, key)"
                  >
                    {{ progression }}
                  </button>
                </div>
              </td>
              <td
                v-for="(chord, chordIndex) in keyChords[key]"
                :key="chord"
                :class="{ highlighted: isChordHighlighted(keyIndex, chordIndex) } "
              >
                {{ chord }}
              </td>
            </tr>
          </tbody>
        </table>
        
        <!-- Chords Display Section -->
        <div v-if="displayedChords.length > 0" class="chords-display">
          <h2 class="head2">
            Selected Chord Progression: <span style="color: yellow; font-weight: bold;">{{ selectedProgression }}</span> in Key <span style="color: yellow; font-weight: bold;" >{{ selectedKey }}</span>
          </h2>
          <div class="chord-set ">
            <div v-for="(chord, index) in displayedChords" :key="index" class="chord">
              <h3>{{ chord }}</h3>
              <img :src="getChordImage(chord)" :alt="chord + ' chord'" />
            </div>
          </div>
        </div>
      </div>
    </div>
  </template>
  
  

  <script>
  export default {
    data() {
      return {
        notes: ["C", "D", "E", "F", "G", "A", "B"],
        progressions: [
          "2-5-1-6",
          "1-6-2-5",
          "1-5-6-4",
          "1-6-4-5",
          "1-4-5-1",
          "1-4-6-5",
          "1-6-2-6",
          "6-4-3-2",
        ],
        selectedKey: "C",
        selectedProgression: "2-5-1-6",
        keyChords: {
          C: ["C", "Dm", "Em", "F", "G", "Am", "Bdim"],
          D: ["D", "Em", "Gbm", "G", "A", "Bm", "C#dim"],
          E: ["E", "Gbm", "Abm", "A", "B", "Dbm", "D#dim"],
          F: ["F", "Gm", "Am", "Bb", "C", "Dm", "Edim"],
          G: ["G", "Am", "Bm", "C", "D", "Em", "F#dim"],
          A: ["A", "Bm", "Dbm", "D", "E", "Gbm", "G#dim"],
          B: ["B", "Dbm", "Ebm", "E", "Gb", "Abm", "A#dim"],
        },
        highlightedChords: [],
        displayedChords: [],
      };
    },
    methods: {
      selectProgression(progression, key) {
        this.selectedKey = key;
        this.selectedProgression = progression;
        this.generateProgression();
        this.setDisplayedChords();
      },
      generateProgression() {
        const progressionSteps = this.selectedProgression.split("-").map(Number);
        this.highlightedChords = progressionSteps;
      },
      setDisplayedChords() {
        const progressionSteps = this.selectedProgression.split("-").map(Number);
        this.displayedChords = progressionSteps.map(step => this.keyChords[this.selectedKey][step - 1]);
      },
      isChordHighlighted(keyIndex, chordIndex) {
        if (this.selectedKey !== this.notes[keyIndex]) {
          return false;
        }
        return this.highlightedChords.includes(chordIndex + 1);
      },
      isProgressionActive(progression) {
        return this.selectedProgression === progression;
      },
      getChordImage(chord) {
        console.log(chord)
        return `src/assets/guitarchord/${chord}.png`;
      },
    },
  };
  </script>
  

  <style scoped>
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    animation-duration: 1s;
  }
  
  .body {
    text-align: center;
    align-items: center;
    justify-content: center;
    min-height: 100vh;
    background-color: #1b1b1b;
  }
  
  .result {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }
  
  h2 {
    padding-top: 3%;
    font-family: 'Avalors Personal Use';
    font-size: 40px;
    letter-spacing: 5px;
    color: #ffffff;
    text-shadow: 0 0 4px white;
    position: relative;
  }

  .head2 {
    font-family: 'Avalors Personal Use';
    font-size: 30px;
    letter-spacing: 5px;
    color: #ffffff;
    text-shadow: 0 0 4px white;
    position: relative;
  }
  
  table {
    border-collapse: collapse;
    margin-top: 20px;
    color: #fff;
  }
  
  th,
  td {
    border: 2px solid #fff;
    padding: 10px;
    text-align: center;
  }
  
  th {
    background-color: #d14444;
    color: black;
  }
  
  tr:nth-child(even) {
    background-color: #2c2c2c;
  }
  
  .highlighted {
    background-color: rgb(250, 250, 96);
    color: #000;
    border-radius: 20%;
  }
  
  .progression-buttons {
    display: flex;
    flex-wrap: wrap;
    gap: 5px;
  }
  
  .progression-buttons button {
    padding: 5px 10px;
    background-color: #444;
    color: #fff;
    border: none;
    cursor: pointer;
    transition: background-color 0.3s, transform 0.3s;
  }
  
  .progression-buttons button:hover {
    background-color: #666;
  }
  
  .active-progression {
    background-color: #ff8c00; 
    color: #000;
    font-weight: bold; 
    border: 2px solid #ff4500; 
    transform: scale(1.1); 
    box-shadow: 0 0 10px #ff4500; 
  }
  
  
  
  .chord-set {
    display: flex;
    justify-content: center;
    gap: 20px;
  }
  
  .chord {
    text-align: center;
    color: #fff;
  }
  
  .chord img {
    width: 100px;
    height: auto;
    border: 2px solid #fff;
    border-radius: 10px;
    transition: transform 0.3s;
  }
  
  .chord img:hover {
    transform: scale(1.1);
  }
  </style>
  