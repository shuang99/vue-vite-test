import { defineStore } from "pinia";

// defineStore 调用后返回一个函数，调用该函数获得 Store 实体
//   id: 必须的，在所有 Store 中唯一
export const appStore = defineStore("appStoreId", {
  state: () => {
    return {
      isCollapse: false,
    };
  },
});
