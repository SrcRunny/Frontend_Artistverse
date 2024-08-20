<template>
  <div class="body">
    <div class="result">
      <h2 class="animate__animated animate__fadeInDown animate__delay-1s">
        Major Keys Chord Table
      </h2>
      <table class="animate__animated animate__fadeInUp animate__delay-1s">
        <thead>
          <tr>
            <th>Key</th>
            <th>Progression</th>
            <th v-for="(num, index) in 7" :key="index">{{ index + 1 }}</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="key in Object.keys(keyChords)" :key="key">
            <td :class="{ highlighted: key === selectedKey }">{{ key }}</td>
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
              :class="{ highlighted: isChordHighlighted(key, chordIndex) }"
            >
              {{ chord }}
            </td>
          </tr>
        </tbody>
      </table>

      <div v-if="displayedChords.length > 0" class="chords-display">
        <h2 class="head2">
          Selected Chord Progression:
          <span style="color: yellow; font-weight: bold">{{ selectedProgression }}</span> in Key
          <span style="color: yellow; font-weight: bold">{{ selectedKey }}</span>
        </h2>
        <div class="chord-set">
          <div v-for="(chord, index) in displayedChords" :key="index" class="chord">
            <h3>{{ chord }}</h3>
            <img :src="getChordImage(chord)" :alt="chord + ' chord'" />
          </div>
          <div>
            <button class="sound" @click="playSound"></button>
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
    isChordHighlighted(key, chordIndex) {
      if (this.selectedKey !== key) {
        return false;
      }
      const isHighlighted = this.highlightedChords.includes(chordIndex + 1);
      return isHighlighted;
    },
    isProgressionActive(progression) {
      return this.selectedProgression === progression;
    },
    getChordImage(chord) {
      return `src/assets/guitarchord/${chord}.png`;
    },

    playSound() {
  const audioFiles = this.displayedChords.map(chord => `src/assets/sounds/${chord}.mp3`);
  const audioElements = audioFiles.map(file => {
    const audio = new Audio(file);
    audio.preload = "auto";
    return audio;
  });

  let index = 0;

  const playNextChord = () => {
    if (index < audioElements.length) {
      audioElements[index].play();
      setTimeout(() => {
        index++;
        playNextChord();
      }, 2000);
    }
  };
  playNextChord();
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
.sound {
  padding: 5px;
  border-radius: 100%;
  box-shadow: 0px 0px 10px 5px #e9eaeb73;
  background-color: #151b22;
  color: white;
  font-size: 17px;
  border: none;
  display: flex;
  align-items: center;
  z-index: 4;
  position: relative;
  margin-top: 45px;
  
}

.sound::before {
  content: 'fac';
  background-image: url('data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iVVRGLTgiPz4KPHN2ZyB3aWR0aD0iNzUycHQiIGhlaWdodD0iNzUycHQiIHZlcnNpb249IjEuMSIgdmlld0JveD0iMCAwIDc1MiA3NTIiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CiA8cGF0aCBkPSJtNTQ4Ljg2IDM4Mi4xNmMwIDM1LjUyLTMuMzE2NCA3MC4wOS05LjQ3MjcgMTAzLjI0LTAuOTQ1MzEgNC43MzQ0LTQuNzM0NCA3LjU3ODEtOS40NzI3IDcuNTc4MWgtMS44OTQ1Yy01LjIxMDktMC45NDUzMS04LjUyMzQtNi4xNTYyLTcuNTc4MS0xMC44OTEgNi4xNTYyLTMyLjIwMyA5LjQ3MjctNjUuODI4IDkuNDcyNy05OS45MjZzLTMuMzE2NC02OC42NjgtOS40NzI3LTEwMi43N2MtMC45NDUzMS01LjIxMDkgMi4zNjcyLTkuOTQ1MyA3LjU3ODEtMTAuODkxIDUuMjEwOS0wLjk0NTMxIDkuOTQ1MyAyLjM2NzIgMTAuODkxIDcuNTc4MSA2LjYzMjggMzUuMDM5IDkuOTQ5MiA3MC41NTkgOS45NDkyIDEwNi4wN3ptLTE0NC45Mi0xMzguNzZjMTAuODkxIDQ1LjkzOCAxNi41NzQgOTIuMzQ4IDE2LjU3NCAxMzguMjkgMCA0NS40NjUtNS4yMTA5IDg5Ljk4LTE2LjEwMiAxMzIuMTMtMC45NDUzMSAzLjMxNjQtMi4zNjcyIDYuMTU2Mi00LjI2MTcgOC41MjM0LTMuNzg5MSA1LjIxMDktOS40NzI3IDguMDUwOC0xNS42MjkgOC45OTYxaC0yLjgzOThjLTUuMjEwOSAwLTEwLjQxOC0xLjg5NDUtMTQuMjA3LTQuNzM0NGwtNzIuOTMtNTUuNDA2Yy0wLjk0NTMxLTAuNDcyNjYtMS44OTQ1LTAuOTQ1MzEtMi44Mzk4LTAuOTQ1MzFoLTUyLjA5NGMtOC41MjM0IDAtMTYuMTAyLTQuNzM0NC0yMC4zNjMtMTEuODQtMTIuMzEyLTIwLjgzNi0xOC40NjktNDYuODgzLTE4LjQ2OS03Ni4yNDYgMC0yOS44MzYgNi4xNTYyLTU3LjMwNSAxOC40NjktODEuOTMgMy43ODkxLTguMDUwOCAxMi4zMTItMTMuMjYyIDIxLjMxMi0xMy4yNjJoNTEuNjIxYzAuOTQ1MzEgMCAxLjg5NDUtMC40NzI2NiAyLjgzOTgtMC45NDUzMWw3MS41MDgtNTUuODg3YzIuODM5OC0xLjg5NDUgNS42ODM2LTMuMzE2NCA4Ljk5NjEtNC4yNjE3IDYuMTU2Mi0xLjQyMTkgMTIuMzEyLTAuNDcyNjYgMTcuOTk2IDIuODM5OCA1LjIxMDkgMy4zMTY0IDkgOC41MjczIDEwLjQxOCAxNC42ODR6bS0yLjgzOTggMTM4Ljc2YzAtNDQuNTE2LTUuMjEwOS04OS41MDgtMTUuNjI5LTEzNC4wMi0wLjQ3MjY2LTEuODk0NS0xLjQyMTktMi4zNjcyLTEuODk0NS0yLjgzOTgtMC40NzI2Ni0wLjQ3MjY2LTEuODk0NS0wLjk0NTMxLTMuNzg5MS0wLjQ3MjY2LTAuNDcyNjYgMC0xLjQyMTkgMC40NzI2Ni0xLjg5NDUgMC45NDUzMWwtNzEuNTA4IDU0LjkzOGMtNC4yNjE3IDMuMzE2NC05LjQ3MjcgNC43MzQ0LTE0LjY4IDQuNzM0NGgtNTEuMTQ4Yy0xLjg5NDUgMC0zLjMxNjQgMC45NDUzMS00LjI2MTcgMi44Mzk4LTEwLjg5MSAyMi4yNTgtMTYuNTc0IDQ2Ljg4My0xNi41NzQgNzMuODc5IDAgMjYuMDQ3IDUuMjEwOSA0OC43NzcgMTUuNjI5IDY2Ljc3MyAwLjk0NTMxIDEuNDIxOSAyLjM2NzIgMi4zNjcyIDQuMjYxNyAyLjM2NzJoNTIuMDk0YzUuMjEwOSAwIDEwLjQxOCAxLjg5NDUgMTQuNjggNC43MzQ0bDcxLjk4NCA1NS44ODNjMS40MjE5IDAuOTQ1MzEgMi44Mzk4IDAuOTQ1MzEgMy4zMTY0IDAuOTQ1MzEgMC45NDUzMSAwIDEuODk0NS0wLjQ3MjY2IDMuMzE2NC0xLjg5NDUgMC40NzI2Ni0wLjQ3MjY2IDAuNDcyNjYtMC45NDUzMSAwLjk0NTMxLTEuODk0NSA5Ljk0MTQtNDAuMjQ2IDE1LjE1Mi04My4zNDQgMTUuMTUyLTEyNi45MXptODIuODc1LTc5LjA4NmMtNS4yMTA5IDAuNDcyNjYtOC45OTYxIDUuMjEwOS04LjA1MDggMTAuNDE4IDIuODM5OCAyMi43MyA0LjI2MTcgNDUuOTM4IDQuMjYxNyA2OC42NjhzLTEuNDIxOSA0NS40NjUtNC4yNjE3IDY3LjI1Yy0wLjQ3MjY2IDUuMjEwOSAyLjgzOTggOS45NDUzIDguMDUwOCAxMC40MThoMS40MjE5YzQuNzM0NCAwIDguOTk2MS0zLjMxNjQgOS40NzI3LTguNTIzNCAyLjgzOTgtMjIuNzMgNC4yNjE3LTQ1LjkzOCA0LjI2MTctNjkuNjE3IDAtMjMuNjgtMS40MjE5LTQ3LjM1OS00LjI2MTctNzAuNTYyLTAuOTQ5MjItNS4yMTA5LTUuNjgzNi05LTEwLjg5NS04LjA1MDh6IiBmaWxsPSIjZmZmIi8+Cjwvc3ZnPgo=');
  background-size: 100%;
  background-repeat: no-repeat;
  color: transparent;
  position: relative;
  width: 40px;
  height: 40px;
  display: block;
}

.sound:hover {
  transform: scale(1.1);
  box-shadow: 0px 0px 15px 10px #e5e2de;
  background-color: #ebdf70;
}

.sound:active {
  border-radius: 100%;
  box-shadow: inset 0px 0px 10px 0px rgb(240, 237, 237);
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
  background-color: #ef6b6b;
  color: black;
}

tr:nth-child(even) {
  background-color: #2c2c2c;
}

.highlighted {
  background-color: rgb(244, 244, 115);
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
  transition:
    background-color 0.3s,
    transform 0.3s;
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
