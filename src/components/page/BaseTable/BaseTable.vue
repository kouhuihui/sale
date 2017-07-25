<template>
    <div class="table">
        <div class="crumbs">
        <v-breadcrumb :breadcrumbs="breadcrumbData"></v-breadcrumb>
        </div>      
        <vBaseTableList :tableData="tableData"></vBaseTableList>
        <vBaseTableEdit></vBaseTableEdit>
    </div>
</template>

<script>
    import vBreadcrumb from '@/components/common/Breadcrumb.vue';
    import vBaseTableList from '@/components/Page/BaseTable/List.vue';
    import vBaseTableEdit from '@/components/Page/BaseTable/Edit.vue';
    export default {
        data() {
            return {
                tableData: [{
                    date: '2017-02-02',
                    name: '小天才',
                    address: '东莞市长安镇步步高大道18号',
                    tag: '家'
                }, {
                    date: '2017-02-04',
                    name: '小天才',
                    address: '东莞市长安镇步步高大道17号',
                    tag: '公司'
                }, {
                    date: '2017-02-01',
                    name: '小天才',
                    address: '东莞市长安镇步步高大道19号',
                    tag: '家'
                }, {
                    date: '2017-02-03',
                    name: '小天才',
                    address: '东莞市长安镇步步高大道16号',
                    tag: '公司'
                }],
                breadcrumbData: [{
                    icon: "el-icon-menu",
                    name: "表格"
                },
                {
                    icon: "",
                    name: "基础表格"                    
                },
                {
                    icon: "",
                    name: "基础表格2"                    
                }]
            }
        },
        methods: {
 
        },
        components:{
            vBreadcrumb,vBaseTableList,vBaseTableEdit
        }
    }
</script>