<template id="gis">
  <div class="gis-map-div">
    <div class="gis-map-content" v-show="$store.getters.getGisViewNumber > 0">
      <div class="gis-map-content-bar">
        <div
          class="bar-div bar-font"
          v-for="(item, index) in pattern[this.showTitle]"
          :key="index"
          :class="(isShow = index == 0 ? 'bar-live' : '')"
        >
          {{ item }}
        </div>
      </div>
    </div>
    <div class="gis-map-content" v-show="$store.getters.getGisViewNumber >= 3">
      <div class="gis-map-content-bar">
        <div
          class="bar-div bar-font"
          v-for="(item, index) in pattern[this.showTitle]"
          :key="index"
          :class="(isShow = index == 1 ? 'bar-live' : '')"
        >
          {{ item }}
        </div>
      </div>
    </div>
    <div class="gis-map-content" v-show="$store.getters.getGisViewNumber >= 4">
      <div class="gis-map-content-bar">
        <div
          class="bar-div bar-font"
          v-for="(item, index) in pattern[this.showTitle]"
          :key="index"
          :class="(isShow = index == 2 ? 'bar-live' : '')"
        >
          {{ item }}
        </div>
      </div>
    </div>
    <div class="gis-map-content" v-show="$store.getters.getGisViewNumber >= 4">
      <div class="gis-map-content-bar">
        <div
          class="bar-div bar-font"
          v-for="(item, index) in pattern[this.showTitle]"
          :key="index"
          :class="(isShow = index == 3 ? 'bar-live' : '')"
        >
          {{ item }}
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import "@/styles/gis/main.css";
import "@/styles/font.css";
export default {
  name: "gis",
  data() {
    return {
      pattern: [
        ["模式1", "模式2", "模式3", "模式4"],
        ["参数1", "参数2", "参数3", "参数4"],
        ["时间1", "时间2", "时间3", "时间4"],
        ["区域1", "区域2", "区域3", "区域4"],
      ],
    };
  },
  // props: ['showTitle']
  props: {
    showTitle: {
      type: Number,
      default: 0
    }
  },
  computed: {

  }
};
</script>
