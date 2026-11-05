// Subtle Ambient Sound Synthesizer using Web Audio API
class AmbientSoundManager {
  private ctx: AudioContext | null = null;
  private gainNode: GainNode | null = null;
  private isPlaying: boolean = false;

  public start() {
    if (this.isPlaying) return;

    try {
      const AudioCtx = window.AudioContext || (window as unknown as { webkitAudioContext: typeof AudioContext }).webkitAudioContext;
      this.ctx = new AudioCtx();

      // Create brown/pink noise buffer for ocean wash / distant train rumble
      const bufferSize = this.ctx.sampleRate * 3;
      const buffer = this.ctx.createBuffer(1, bufferSize, this.ctx.sampleRate);
      const data = buffer.getChannelData(0);
      let lastOut = 0.0;

      for (let i = 0; i < bufferSize; i++) {
        const white = Math.random() * 2 - 1;
        // Brown noise filter (integrator)
        data[i] = (lastOut + 0.02 * white) / 1.02;
        lastOut = data[i];
        data[i] *= 2.5; // Gain boost
      }

      const noiseSource = this.ctx.createBufferSource();
      noiseSource.buffer = buffer;
      noiseSource.loop = true;

      // Low pass filter to simulate distant muffled swell / train rumble
      const filter = this.ctx.createBiquadFilter();
      filter.type = 'lowpass';
      filter.frequency.setValueAtTime(240, this.ctx.currentTime);

      // Low gain node for gentle non-intrusive presence
      this.gainNode = this.ctx.createGain();
      this.gainNode.gain.setValueAtTime(0.001, this.ctx.currentTime);
      this.gainNode.gain.linearRampToValueAtTime(0.06, this.ctx.currentTime + 3);

      noiseSource.connect(filter);
      filter.connect(this.gainNode);
      this.gainNode.connect(this.ctx.destination);

      noiseSource.start();
      this.isPlaying = true;
    } catch {
      // AudioContext could be blocked by autoplay policies until gesture
    }
  }

  public stop() {
    if (!this.isPlaying || !this.ctx) return;
    try {
      if (this.gainNode) {
        this.gainNode.gain.linearRampToValueAtTime(0.001, this.ctx.currentTime + 1);
        setTimeout(() => {
          this.ctx?.close();
          this.ctx = null;
          this.isPlaying = false;
        }, 1000);
      } else {
        this.ctx.close();
        this.ctx = null;
        this.isPlaying = false;
      }
    } catch {
      this.isPlaying = false;
    }
  }

  public toggle(): boolean {
    if (this.isPlaying) {
      this.stop();
      return false;
    } else {
      this.start();
      return true;
    }
  }
}

export const ambientAudio = new AmbientSoundManager();
