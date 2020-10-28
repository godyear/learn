<template>
  <el-collapse-item title="参数选择" name="2">
    <el-radio 
      v-for="(item, index) in rightBottomParameter"
      :key="index"
      border
      v-model="parameter"
      :label="index"
    >
      {{ rightBottomParameter[index] }}
    </el-radio>
  
  </el-collapse-item>
</template>

<script>
export default {
  name: "bottomParameter",
  data() {
    return {
      parameter: 0,
      // 参数数据
      rightBottomParameter: [
        "参数1",
        "参数1",
        "参数1",
        "参数1",
        "参数1",
        "参数1",
        "参数1",
        "参数1",
        "参数1",
      ],
    };
  },
};
</script>
