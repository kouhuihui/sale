<template>
    <div class="table">
        <div class="crumbs">
        <v-breadcrumb :breadcrumbs="breadcrumbData"></v-breadcrumb>
        </div>      
        <vUserList :tableData="tableData"></vUserList>
    <!-- <vBaseTableEdit></vBaseTableEdit> -->
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
                    Start: 0,
                    Take: 20
                },
                breadcrumbData: [{
                    icon: "el-icon-date",
                    name: "系统管理"
                },
                {
                    icon: "",
                    name: "用户管理"                    
                }]
            }
        },
        methods: {
 
        },
        components:{
            vBreadcrumb,vUserList //,vUserEdit
        },
        beforeMount(){
            var self = this;
            self.$axios.post(self.url, self.queryParam).then((res) => {
                console.log(res.list)
                self.tableData = res.data.list;
            })
        }
    }
</script>