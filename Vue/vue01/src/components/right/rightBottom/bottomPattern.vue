<template>
  <el-collapse-item title="模式选择" name="2">
    <el-radio
      v-for="(item, index) in rightBottomPattern"
      :key="index"
      border
      v-model="pattern"
      :label="index"
    >
      {{ rightBottomPattern[index] }}
    </el-radio>
  </el-collapse-item>
</template>

<script>
export default {
  name: "bottomParameter",
  data() {
    return {
      pattern: 0,
      // 模式
      rightBottomPattern: [
        "模式1",
        "模式2",
        "模式3",
        "模式4",
        "模式5",
        "模式6",
      ],
    };
  },
};
</script>
