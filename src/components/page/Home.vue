<template>
    <div class="wrapper">
        <v-head></v-head>
        <v-sidebar></v-sidebar>
        <div class="content">
            <transition name="move" mode="out-in"><router-view></router-view></transition>
        </div>
    </div>
</template>

<script>
    import vHead from '@/components/common/Header.vue';
    import vSidebar from '@/components/common/Sidebar.vue';

    export default {
        data: function() {
            information:{}
        },
        components:{
            vHead, vSidebar
        },
        beforeMount(){
            const self = this;
            self.$axios.get("/api/values").then( (res) => {
                self.information = res.data;
            })
        }
    }
</script>
