<template>
  <div>
    <div>
      <el-table
        ref="multipleTable"
        :data="coueseArray"
        tooltip-effect="dark"
        style="width: 100%"
        @selection-change="handleSelectionChange"
      >
        <el-table-column type="selection" width="55"> </el-table-column>
        <el-table-column prop="name" label="name" width="120"> </el-table-column>
        <el-table-column prop="id" label="id" width="120"> </el-table-column>
        <el-table-column prop="teacher" label="teacher" show-overflow-tooltip>
        </el-table-column>
      </el-table>
    </div>
  </div>
</template>

<script>
export default {
  name: "teacher",
  data() {
    return {
      coueseArray: coueseArray,
    };
  },
  computed: {
    coueseArray() {
      return this.$store.getters.getStudentCourseData;
    },
  },
};
</script>

<style></style>
