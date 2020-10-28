<template>
  <div>
    <div>
      <el-button-group>
        <el-button
          type="primary"
          icon="el-icon-arrow-left"
          @click="subtraction()"
          >视图减</el-button
        >
        <el-button type="primary" @click="addition()"
          >视图加<i class="el-icon-arrow-right el-icon--right"></i
        ></el-button>
      </el-button-group>
    </div>
    <div>
      <el-button type="success" @click="buttonGetGisViewNumber(4)">4</el-button>
      <el-button type="success" @click="buttonGetGisViewNumber(3)">2</el-button>
      <el-button type="success" @click="buttonGetGisViewNumber(1)">1</el-button>
    </div>
  </div>
</template>

<script>
import "@/styles/right/right.css";
export default {
  name: "bottomButton",
  data() {
    return {
      viewNumber: 4,
      radio: "4",
    };
  },
  methods: {
    /**
     * 视图减少， 传给父组件zhiou
     * @param {null} 无需传值
     */
    subtraction() {
      this.$store.commit("decrement");
      console.log(this.$store.getters.getGisViewNumber);
    },
    /**
     * 视图增加， 传给父组件zhiou
     * @param {null} 无需传值
     */
    addition() {
      this.$store.commit("increment");
      console.log(this.$store.getters.getGisViewNumber);
    },
    buttonGetGisViewNumber(num) {
      this.$store.commit("btnGetGisNumber", num);
      console.log(this.$store.getters.getGisViewNumber);
    },
  },
};
</script>

