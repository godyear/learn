<template>
  <el-collapse-item title="时间选择" name="1">
    <div>
      <span>时间：</span>
      <el-time-select
        v-model="value1"
        :picker-options="{
          start: '08:30',
          step: '00:15',
          end: '18:30',
        }"
        placeholder="选择时间"
        class="width-85"
      >
      </el-time-select>
    </div>
    <div class="margin-top-10">
      <span>日期：</span>
      <el-date-picker
        v-model="value2"
        type="date"
        placeholder="选择日期"
        class="width-85"
      >
      </el-date-picker>
    </div>
  </el-collapse-item>
</template>

<script>
import '@/styles/right/right.css'
export default {
  name: "bottomParameter",
  data() {
    return {
      // 日历 和 时间 的数据
      pickerOptions1: {
        disabledDate(time) {
          return time.getTime() > Date.now();
        },
        shortcuts: [
          {
            text: "今天",
            onClick(picker) {
              picker.$emit("pick", new Date());
            },
          },
          {
            text: "昨天",
            onClick(picker) {
              const date = new Date();
              date.setTime(date.getTime() - 3600 * 1000 * 24);
              picker.$emit("pick", date);
            },
          },
          {
            text: "一周前",
            onClick(picker) {
              const date = new Date();
              date.setTime(date.getTime() - 3600 * 1000 * 24 * 7);
              picker.$emit("pick", date);
            },
          },
        ],
      },
      value1: "",
      value2: "",
    };
  },
};
</script>
