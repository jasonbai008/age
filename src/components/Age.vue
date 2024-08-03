<script setup>
import { ref, reactive, computed } from "vue";
import dayjs from "dayjs";
// 需要单独引入对应的插件
import duration from "dayjs/plugin/duration";
dayjs.extend(duration);

let audio = new Audio();
audio.src = "https://lubanseven.gitee.io/age/mp3/blindedByTheNight.mp3";

let isPlay = false;
let reg = /^\d{4}\.\d{1,2}\.\d{1,2}$/;
let hasBirthday = ref(false);
let birthday = ref("");
const rangeObj = reactive({
  data: {
    years: "",
    months: "",
    days: "",
  },
});

const rangeStr = computed(() => {
  return `${rangeObj.data.years}岁 ${rangeObj.data.months}月 ${rangeObj.data.days}天 `;
});

const checkInput = (val) => {
  if (reg.test(val)) {
    return true;
  } else {
    alert("请输入年月日，以点号分割");
    return false;
  }
};

const getAge = () => {
  let isPass = checkInput(birthday.value);
  if (isPass) {
    // IOS只支持斜杠分割的日期格式
    let pre = dayjs(birthday.value.split(".").join("/"), "YYYY/MM/DD");
    let now = dayjs(dayjs().format("YYYY/MM/DD"), "YYYY/MM/DD");
    rangeObj.data = dayjs.duration(now.diff(pre)).$d;
    console.table(rangeObj.data);
    hasBirthday.value = true;
  }
};

const wow = () => {
  if (isPlay) {
    audio.pause();
  } else {
    audio.play();
  }
  isPlay = !isPlay;
};
</script>

<template>
  <div class="age-wrap">
    <div class="top">
      <img src="../assets/logo.gif" width="200" height="200" @touchstart="wow" />
      <h4>真实年龄计算器</h4>
      <div class="input">
        <input type="text" v-model="birthday" @keyup.enter="getAge" placeholder="请输入出生日期,如:1989.02.14" />
        <!-- <button @click="getAge">OK</button> -->
      </div>
      <div class="output" v-if="hasBirthday">{{rangeStr}}</div>
    </div>
    <p class="bot">Developed by Jason Bai with LOVE</p>
  </div>
</template>

<style scoped lang="scss">
.age-wrap {
  display: flex;
  flex-direction: column;
  height: 80%;
  margin-top: 10%;
  justify-content: space-between;
  .top {
    h4 {
      font-size: 20px;
      margin-top: 0;
      letter-spacing: 1px;
      font-family: cursive;
      margin-bottom: 40px;
    }
    input {
      -webkit-appearance: none;
      appearance: none;
      width: 200px;
      border: none;
      background: #45c2cc;
      -webkit-box-shadow: 5px 5px 10px 1px #3ba5ad inset,
        -5px -5px 10px 1px #4fdfeb inset;
      box-shadow: 5px 5px 10px 1px #3ba5ad inset,
        -5px -5px 10px 1px #4fdfeb inset;
      padding: 7px;
      border-radius: 5px;
      color: #333;
      letter-spacing: 1px;
      text-align: center;
      height: 20px;
      line-height: 20px;
      &:active,
      &:focus {
        outline: none;
      }
    }
    ::-webkit-input-placeholder {
      font-size: 12px;
      color: #666;
    }
    button {
      -webkit-appearance: none;
      appearance: none;
      background: -webkit-linear-gradient(145deg, #4ad0da, #3eafb8);
      background: linear-gradient(145deg, #4ad0da, #3eafb8);
      -webkit-box-shadow: 5px 5px 10px #3ba5ad, -5px -5px 10px #4fdfeb;
      box-shadow: 5px 5px 10px #3ba5ad, -5px -5px 10px #4fdfeb;
      padding: 7px 10px;
      color: #eee;
      border: none;
      border-radius: 5px;
      margin-left: 20px;
      &:active,
      &:focus {
        outline: none;
      }
    }
    .output {
      font-size: 20px;
      margin-top: 60px;
    }
  }
  .bot {
    font-size: 13px;
    color: #333;
  }
}
</style>
