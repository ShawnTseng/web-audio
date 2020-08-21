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
    return {
      isPlaying: false,
      audioCtx,
      oscillator,
      gainNode,
    };
  },
  methods: {
    initAudio() {
      this.oscillator.type = 'sine'; // 正弦波
      this.oscillator.frequency.value = 440; // A4 頻率
      this.oscillator.detune.value = 0; // 解諧
      this.gainNode.gain.value = 1; // 音量
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
