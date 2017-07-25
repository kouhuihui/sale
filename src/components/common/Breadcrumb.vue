<template>
    <div class="crumbs">
        <el-breadcrumb separator="/">
            <el-breadcrumb-item  v-for="item in breadcrumbs"><i v-if="item.icon !== ''" :class="item.icon"></i> {{item.name}}</el-breadcrumb-item>
        </el-breadcrumb>
    </div>
</template>

<script>
	export default{
		data() {
			return {
			}
		},
		props: ['breadcrumbs']
	}
</script>