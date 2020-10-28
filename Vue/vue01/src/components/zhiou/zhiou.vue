<template>
  <div class="main-div">
    <Gis :showTitle = 'zhiou'></Gis>
    <Right class="right" @rightTopTitle = 'rightTopTtleZhiou'></Right>
  </div>
</template>

<script>
import Gis from "@/components/gis/gis.vue";
import Right from "@/components/right/rightTop.vue";
import '@/styles/App/main.css'
export default {
  name: "zhiou",
  data() {
    return {
      zhiou: 0
    }
  },
  components: {
    Gis,
    Right,
  },
  methods: {
    rightTopTtleZhiou(num) {
      this.zhiou = num;
      console.log(this.zhiou);
    }
  }
};
</script>

