<template>
	<div>
		<el-table :data="tableData" border style="width: 100%">
            <el-table-column prop="name" label="姓名" sortable width="150">
            </el-table-column>
            <el-table-column prop="userName" label="登录名" sortable>
            </el-table-column>
            <el-table-column prop="telephone" label="手机号码" >
            </el-table-column>
            <el-table-column prop="" label="角色" sortable width="150">
            </el-table-column>
            <el-table-column label="操作" width="200">
                <template scope="scope">
                    <el-button size="small"
                            @click="handleEdit(scope.$index, scope.row)">编辑</el-button>
                    <el-button size="small" type="danger"
                            @click="handleDelete(scope.$index, scope.row)">删除</el-button>
                </template>
            </el-table-column>
        </el-table>
	</div>
</template>
<script>
export default {
        data() {
            return {
            }
        },
        props: ['tableData'],
        methods: {
            handleEdit(index, row) {
                //this.$message('编辑第'+(index+1)+'行');
                this.$root.eventHub.$emit("ChoseRow",row.address);
            },
            handleDelete(index, row) {
                this.$message.error('删除第'+(index+1)+'行');
            }
        },
        components:{
        }
    }
</script>