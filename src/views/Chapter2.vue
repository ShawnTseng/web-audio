<template>
  <div>
    is playing? {{ isPlaying }}
    <button @click="clickHandler">Play / Pause</button>
  </div>
</template>

<script>
export default {
  data() {
    const AudioContext = window.AudioContext || window.webkitAudioContext;
    const audioCtx = new AudioContext();
    const oscillator = audioCtx.createOscillator(); // Audio Source
    const gainNode = audioCtx.createGain();
    const filter = audioCtx.createBiquadFilter();
    return {
      isPlaying: false,
      audioCtx,
      oscillator,
      gainNode,
      filter,
      waveType: 'sine', // sine, square, sawtooth, triangle
      frequency: 440, // A4
      detone: 0, // 解諧 可做出和聲
      volumn: 1,
      filterType: 'allpass', // lowpass, highpass, bandpass, lowshelf, highshelf, peaking, notch
      filterF: 350,
      filterQ: 1,
      filterGain: 0,
    };
  },
  methods: {
    initAudio() {
      this.oscillator.type = this.waveType;
      this.oscillator.frequency.value = this.frequency;
      this.oscillator.detune.value = this.detone;
      this.gainNode.gain.value = this.volumn;
      this.filter.type = this.filterType;
      this.filter.frequencyValue = this.filterF;
      this.filter.Q.value = this.filterQ;
      this.filter.gain.value = this.filterGain;
    },
    initConnection() {
      this.oscillator.connect(this.gainNode);
      this.gainNode.connect(this.filter);
      this.oscillator.start();
    },
    play() {
      this.filter.connect(this.audioCtx.destination);
    },
    stop() {
      this.filter.disconnect(this.audioCtx.destination);
    },
    clickHandler() {
      this.isPlaying ? this.stop() : this.play();
      this.isPlaying = !this.isPlaying;
    },
  },
  created() {
    this.initAudio();
    this.initConnection();
  },
  beforeDestroy() {
    if (this.isPlaying) {
      this.filter.disconnect(this.audioCtx.destination);
    }
  },
};
</script>

<style lang="scss" scoped>
</style>
