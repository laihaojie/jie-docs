<script setup lang="ts">
import { Api } from '@/api'
import { useCRUDVariable } from '@/hooks/useCRUDVariable'

const { item, dialogVisible, loading, save, generateItem, tableData, loadData, handleSelectionChange, deleteData } = useCRUDVariable({
  item: {
    id: '',
    name: '',
  },
  getApiFn: Api.getData,
  saveApiFn: Api.saveData,
  deleteApiFn: Api.deleteData,
})

loadData()
</script>

<template>
  <div class="flex flex-col h-full p-10">
    <div class="flex justify-between">
      <div class=""></div>
      <div class=""></div>
      <div class="flex items-center">
        <el-button type="primary" @click="(dialogVisible = true, Object.assign(item, generateItem()))">
          添加
        </el-button>
        <el-button type="danger" @click="deleteData">
          删除
        </el-button>
      </div>
    </div>
    <div class="flex-1 mt-10 h-0">
      <el-table v-loading="loading" :data="tableData" border height="100%" @selection-change="handleSelectionChange">
        <el-table-column type="selection" width="55" align="center"></el-table-column>
        <el-table-column label="ID" prop="id" align="center">
        </el-table-column>
        <el-table-column label="name" prop="name" align="center">
        </el-table-column>
        <el-table-column v-slot="{ row }" label="操作">
          <el-button type="primary" @click="(dialogVisible = true, Object.assign(item, row))">
            编辑
          </el-button>
        </el-table-column>
      </el-table>
    </div>
    <el-dialog v-model="dialogVisible" title="">
      <edit-row v-model="item.id" title="ID" width="100%" />
      <edit-row v-model="item.name" title="name" width="100%" />
      <template #footer>
        <div class="dialog-footer">
          <el-button @click="(dialogVisible = false, Object.assign(item, generateItem()))">
            取 消
          </el-button>
          <el-button type="primary" @click="save">
            保 存
          </el-button>
        </div>
      </template>
    </el-dialog>
  </div>
</template>

<style lang='scss' scoped></style>
