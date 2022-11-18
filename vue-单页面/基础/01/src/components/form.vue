<template>
  <form>
    <span>姓名：<input v-model.lazy="perObj.name" /></span><br />
    <span>
      性别：
      <input
        type="radio"
        v-model="perObj.sex"
        name="sex"
        id="man"
        :value="man"
      />
      <label for="man">男</label>
      <input
        type="radio"
        v-model="perObj.sex"
        name="sex"
        id="wuman"
        :value="wuman"
      />
      <label for="wuman">女</label> </span
    ><br />
    <span>
      爱好：
      <input type="checkbox" id="jack" value="唱歌" v-model="perObj.hobby" />
      <label for="jack">唱歌</label>

      <input type="checkbox" id="john" value="跳舞" v-model="perObj.hobby" />
      <label for="john">跳舞</label>

      <input type="checkbox" id="mike" value="打篮球" v-model="perObj.hobby" />
      <label for="mike">打篮球</label>

      <input type="checkbox" id="rap" value="rap" v-model="perObj.hobby" />
      <label for="rap">rap</label>
    </span>
    <br />
    <span>
      城市：
      <select v-model="perObj.city">
        <option multiple value>请选择你的城市</option>
        <option>武汉</option>
        <option>上海</option>
        <option>北京</option>
        <option>黑龙江</option>
      </select>
    </span>
    <br />
    <button @click.prevent="show">提交</button>
  </form>

  <table>
    <tbody v-for="(per, index) in perList" :key="per.id">
      <tr>
        <td>{{ per.name }}</td>
        <td>{{ per.sex }}</td>
        <td>{{ per.hobby }}</td>
        <td>{{ per.city }}</td>
        <button @click="del(index)">删除</button>
      </tr>
    </tbody>
  </table>
</template>

<script>
export default {
  data() {
    return {
      perList: [],
      perObj: { name: "", sex: "", hobby: [], city: [], id: 0 },
      man: "男",
      wuman: "女",
    };
  },
  methods: {
    show() {
      let newobj = JSON.parse(JSON.stringify(this.perObj));
      this.perList.push(newobj);
    },

    del(index) {
      this.perList.splice(index, 1);
    },
  },
};
</script>

<style lang="scss" scoped></style>
