<script lang="ts">
	import { goto } from "$app/navigation";
	import { debounce } from "$lib/utils/debounce";
	import type { PageProps } from "./$types";

    let { data }: PageProps = $props();

    let input = $state('');


    const updateUserQuery = debounce((input: string) => {
            let name = input.toString().trim();
            goto(`/?name=${encodeURIComponent(name)}`);
        }, 1000)
</script>

<h1>Olá {data.data?.name ?? "visitante!"}</h1>
<p>{data.data?.age ?? "Não há uma estimativa de idade para esse nome"}</p>



<input
    type="text"
    bind:value={input}
    oninput={() => updateUserQuery(input)}
    name="name"
/>