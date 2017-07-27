<template>
    <div class="table">
        <div class="crumbs">
        <v-breadcrumb :breadcrumbs="breadcrumbData"></v-breadcrumb>
        </div>      
        <vUserList :tableData="tableData"></vUserList>
       <div class="pagination">
            <el-pagination
                    @size-change="handleSizeChange"
                    @current-change="handleCurrentChange"
                    :current-page="queryParam.pageIndex"
                    :page-sizes="[10, 20, 50, 100]"
                    :page-size="queryParam.pageSize"
                    layout="total, sizes, prev, pager, next, jumper"
                    :total="dataCount">
            </el-pagination>
        </div>
    </div>
</template>

<script>
    import vBreadcrumb from '@/components/common/Breadcrumb.vue';
    import vUserList from '@/components/Page/User/List.vue';
    //import vUserEdit from '@/components/Page/User/Edit.vue';
    import axios from 'axios';
    export default {
        data() {
            return {
                url:"/api/user",
                tableData: [],
                queryParam: {
                    pageIndex: 1,
                    pageSize: 20
                },
                dataCount: 0,
                breadcrumbData: [{
                    icon: "el-icon-date ",
                    name: "系统管理"
                },
                {
                    icon: "",
                    name: "用户管理"                    
                }]
            }
        },
        methods: {
            getData(){
                var self = this;
                self.$axios.post(self.url, self.queryParam).then((res) => {
                    console.log(res.data)
                    self.tableData = res.data.list;
                    self.dataCount = res.data.total;
                })
            },
            handleCurrentChange(val){
                this.queryParam.pageIndex = val;
                this.getData();
            },
            handleSizeChange(val){
                this.queryParam.pageSize = val;
                this.getData();
            }
        },
        components:{
            vBreadcrumb,vUserList //,vUserEdit
        },
        beforeMount(){
            const self = this;
            self.getData();
        }
    }
</script>