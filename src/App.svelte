<svelte:options tag="svelte-hello-world" />

<script>
	export let name = 'world';
</script>

<h1>Hello {name}!</h1>
<slot></slot>
