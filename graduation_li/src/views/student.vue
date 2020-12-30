<template>
  <div>
    <!-- 学生端 -->
    <div>
      <el-table
        ref="multipleTable"
        :data="tableData3"
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
    <el-button @click="chose">确定</el-button>
  </div>
</template>
<script>
import curseData from "../assets/json/course-name.json"
export default {
  name: "home",
  components: {},
  data() {
    return {
      tableData3: curseData.course,
      multipleSelection: [],
    };
  },
  methods: {
    handleSelectionChange(val) {
      this.multipleSelection = val;
    },
    chose() {
      console.log(this.multipleSelection);
      this.$store.commit('setStudentCourseData', this.multipleSelection)
      this.$router.push('/')
    },
  },
};
</script>

<style></style>
