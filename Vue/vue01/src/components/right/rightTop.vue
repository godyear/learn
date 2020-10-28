<template>
  <div class="right">
    <div class="right-main-div-top">
      <span
        v-for="(item, index) in rightTop"
        :key="index"
        @click="checkLive(index)"
        :class="(isShow = isActive == index ? 'bar-live' : '')"
      >
        {{ item }}
      </span>
    </div>
    <div class="right-main-div-bottom">
      <el-collapse
        v-model="activeNames"
        @change="handleChange"
        class="el-collapse-me"
      >
        <Time v-show="isActive != 2"></Time>
        <Parameter
          v-show="isActive == 0 || isActive == 2 || isActive == 3"
        ></Parameter>
        <MyPattern
          v-show="isActive == 2 || isActive == 1 || isActive == 3"
        ></MyPattern>
        <Region
          v-show="isActive == 0 || isActive == 1 || isActive == 2"
        ></Region>
      </el-collapse>
      <view-button></view-button>  
    </div>
  </div>
</template>

<script>
import "@/styles/right/right.css";
import MyPattern from "@/components/right/rightBottom/bottomPattern.vue";
import Parameter from "@/components/right/rightBottom/bottomParameter.vue";
import Region from "@/components/right/rightBottom/bottomRegion.vue";
import Time from "@/components/right/rightBottom/bottomTime.vue";
import viewButton from "@/components/right/rightBottom/bottomButton.vue"
export default {
  name: "rightContral",
  data() {
    return {
      activeNames: ["1"],
      // 点击判断是否活跃
      isActive: 0,
      // right-top数据
      rightTop: ["多模式", "多参数", "多时间", "多地区"],
    };
  },
  methods: {
    handleChange(val) {
      console.log(val);
    },
    /**
     * 点击高亮显示
     * 子传父 (子：rightTOp; 父：zhiou)
     * @parame {number} :key = index
     */
    checkLive(num) {
      // 将 num 传给isActive 可以实现点击唯一高亮显示
      this.isActive = num;
      this.$emit('rightTopTitle', num)
    },
  },
  components: {
    MyPattern,
    Parameter,
    Region,
    Time,
    viewButton,
  },
};
</script>
