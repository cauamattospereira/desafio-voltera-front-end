<script lang="ts">
	import type { PageProps } from "./$types";

    let { data }: PageProps = $props();

    console.log(data)

    function onSubmit() {
    }
</script>

<h1>Hello {data.data.name ?? name}</h1>



<form onsubmit={onSubmit}>
    <input type="text">
    <button type="submit">Enviar</button>
</form>