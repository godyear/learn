<template>
  <el-collapse-item title="地区选择" name="2">
    <el-radio
      v-for="(item, index) in rightBottomRegion"
      :key="index"
      border
      v-model="region"
      :label="index"
    >
      {{ rightBottomRegion[index] }}
    </el-radio>
  </el-collapse-item>
</template>

<script>
export default {
  name: "bottomParameter",
  data() {
    return {
      region: 0,
      // 地区
      rightBottomRegion: ["地区1", "地区2", "地区3", "地区4", "地区5", "地区6"],
    };
  },
};
</script>
