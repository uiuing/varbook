<template>
  <el-card class="box-card" v-if="isLoading">
    <el-table :data="tableData" style="width: 100%;">
      <el-table-column label="适用参考" width="180">
        <template #default="scope">
          <span :id="'applicable-'+scope.$index">
            {{ scope.row.applicable }}
            </span>
        </template>
      </el-table-column>
      <el-table-column label="变量">
        <template #default="scope">
          <span class="var-style" :id="'var-'+scope.$index" @click="copy(scope.row.var,scope.$index)">
            {{ scope.row.var }}
          </span>
        </template>
      </el-table-column>
    </el-table>
  </el-card>
</template>

<script>
import {ElMessage, ElNotification} from "element-plus";

export default {
  name: "searchResult",
  props: {
    input_contents: String
  },
  data() {
    return {
      tableData: [],
      isLoading: false
    }
  },
  mounted() {
    this.updateData();
  },
  watch: {
    input_contents() {
      this.updateData();
    },
    tableData(){
      this.isLoading = true;
      // Automatically copy the last content
      let isAutoCopy = window.localStorage.getItem("autoCopyId");
      if (isAutoCopy) {
        setTimeout(() =>{
          document.getElementById(isAutoCopy).click();
        },500)
      }
    }
  },
  methods: {
    // copy content
    copy: function (data, index) {
      const input = document.createElement("input");
      input.value = data;
      document.body.appendChild(input);
      input.select();
      document.execCommand("Copy");
      document.body.removeChild(input);

      let applicable_references = document.getElementById("applicable-" + index).innerText;
      ElNotification({
        title: '复制成功',
        message: "适用参考: " + applicable_references + "",
        type: 'success',
        dangerouslyUseHTMLString: true
      })
      window.localStorage.setItem("autoCopyId", "var-" + index);
    },
    updateData() {
      let params = {
        "input": this.input_contents
      }
      this.$api.post("/translation", params).then((res) => {
        if (res.data.code == 200) {
          let ram_tableData = []
          let var_values = res.data.varData.var;
          let applicable = res.data.varData.applicable;
          for (const [index, value] of var_values.entries()) {
            ram_tableData.push({
              "var": value,
              "applicable": applicable[index]
            })
          }
          ram_tableData.push({
            "var": res.data.translate,
            "applicable": "注释"
          })
          this.tableData = ram_tableData;
        } else if (res.data.code == 501) {
          ElMessage({
            showClose: true,
            message: '服务器过载,请稍后重试~',
            type: 'warning',
          })
        } else {
          ElNotification({
            title: '未知错误',
            message: '错误码: ' + res.data.code,
            type: 'warning',
          })
        }
      }).catch((err) => {
        console.log(err)
      })
    },
  },
}
</script>

<style scoped>
.el-card {
  max-width: 655px !important;
  text-align: center !important;
  margin: 50px auto !important;
}

.var-style:hover {
  color: #0663c4;
}

.var-style {
  color: #409eff;
  cursor: pointer
}
</style>

<style>
.el-table .el-table__cell {
  text-align: center !important;
}
</style>