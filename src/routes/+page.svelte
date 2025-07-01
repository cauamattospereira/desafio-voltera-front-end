<script lang="ts">
	import { goto } from "$app/navigation";
	import type { PageProps } from "./$types";

    let { data }: PageProps = $props();


    function onSubmit(event: SubmitEvent) {
        const form = event.currentTarget as HTMLFormElement;
        const formData = new FormData(form);

        const name = formData.get('name')?.toString().trim()

        if (name) {
            goto(`/?name=${encodeURIComponent(name)}`)
        }

    }
</script>

<h1>Olá {data.data?.name ?? "visitante!"}</h1>
<p>{data.data?.age ?? "Não há uma estimativa de idade para esse nome"}</p>



<form onsubmit={(data) => onSubmit(data)}>
    <input type="text" name="name">
    <button type="submit">Enviar</button>
</form>