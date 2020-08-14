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
    };
  },
  methods: {
    initAudio() {
      this.oscillator.type = this.waveType;
      this.oscillator.frequency.value = this.frequency;
      this.oscillator.detune.value = this.detone;
      this.gainNode.gain.value = this.volumn;
    },
    initConnection() {
      this.oscillator.connect(this.gainNode);
      this.oscillator.start();
    },
    clickHandler() {
      if (this.isPlaying) {
        this.gainNode.disconnect(this.audioCtx.destination);
      } else {
        this.gainNode.connect(this.audioCtx.destination);
      }
      this.isPlaying = !this.isPlaying;
    },
  },
  created() {
    this.initAudio();
    this.initConnection();
  },
};
</script>

<style lang="scss" scoped>
</style>
