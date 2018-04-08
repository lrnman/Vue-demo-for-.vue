<template>
	<div>
		<v-header :title="'MyNews'" :left="true" :right="true" ></v-header>
		<h1 class="title">{{ username }}的文章</h1>
		<section>
			<p>。。。</p>
		</section>
	</div>
</template>

<script>
	import header from '@/components/header';
	
	export default {
		props: ['username'],
		components: { vHeader: header }
	}
</script>

<style scoped lang="scss">
	.title {
		margin-top: 20px;
		font-size: 26px;
	}
	section {
		width: 1000px;
		margin: 20px auto;
		
		p {
			text-align: left;
		}
	}
</style>