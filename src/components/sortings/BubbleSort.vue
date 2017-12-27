<template>
  <div>
    <h1>Bubble Sort</h1>
    <a href="http://panthema.net/2013/sound-of-sorting/">Link</a>
    <div class="bars p-6 mt-sm-2 p-4 border">
      <div
      class="bar"
      :class="{sorted: bar.sorted}"
      v-for="(bar, i) in bars"
      :style="{height: bar.height + 'px', background: bar.background}"
      ></div>
    </div>
    <br>
    <button :disabled="sorting" @click="sort" class="btn btn-success">Start</button>
  </div>
</template>

<script>
import randomColor from 'randomcolor'
const INTERVAL = 30;
const COUNT = 50;
const SORTED_COLOR = '#8bd326';

window.randomColor  = randomColor

export default {
  data() {
    return {
      bars: [],
      sorting: false,
    }
  },
  created() {
    this.reset()
  },
  methods: {
    reset() {
      this.bars = []
      for (let i = 0; i < COUNT; i++) {
        this.bars.push({
          sorted: false,
          background: '#ff0000',
          height: parseInt(Math.random() * 200) + 20,
        })
      }
    },

    walk(length) {
      var i = 0;

      var color = randomColor({
        hue: 'blue',
        luminosity: 'bright',
      })
      var interval = setInterval(() => {

        if (this.bars[i].height > this.bars[i+1].height) {
          var tmp = this.bars[i].height
          this.bars[i].height = this.bars[i+1].height
          this.bars[i+1].height = tmp
        }

        if (length === 0) {
            this.bars[i].background = SORTED_COLOR;
            return;
        }

        this.bars[i].background = color
        this.bars[i+1].background = SORTED_COLOR;
        if (i + 1 >= length ) {
          clearInterval(interval)
          this.walk(length - 1)
        }

        i++;
      }, INTERVAL)

    },

    sort() {
      this.sorting = true;
      this.walk(this.bars.length - 1)
    }
  }
}
</script>


<style scoped>
  .bar {
    width: 12px;
    border: 1px solid #444;
    border-top: none;
    margin-left: 3px;
    display: inline-block;
    border-radius: 50%/3px;
    border-top-left-radius: 0;
    border-top-right-radius: 0;
  }
  .bar::before {
    content: ' ';
    display: block;
    height: 3px;
    width: 12px;
    border: 1px solid #444;
    border-radius: 50%;
    margin: -2px auto 0 -1px;
    background: #eee;
  }
</style>
