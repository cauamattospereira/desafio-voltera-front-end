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


<div class="main" style="padding: 1rem; position: relative; overflow-x: hidden;">
    <!-- navbar -->
    <nav style="
  position: fixed;
  display: block;
  top: 0;
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1rem 2rem;
  background: rgba(30, 30, 60, 0.6);
  backdrop-filter: blur(12px);
  -webkit-backdrop-filter: blur(12px);
  z-index: 10;
  border-bottom: 1px solid rgba(255, 255, 255, 0.05);
">
<!-- logo -->
  <div style="display: flex; align-items: center; gap: 0.75rem;">
    <img src="voltera-logo.png" alt="Logo" style="height: 2rem; width: 2rem; object-fit: contain;">
    <span style="font-weight: 600; font-size: 1.2rem; color: white;">Voltera</span>
  </div>

  <!-- fake pages -->
  <div class="nav-links" style="display: flex; gap: 1.5rem; align-items: center;">
    <a href="#" style="color: white; text-decoration: none; font-size: 0.95rem; opacity: 0.8;">Desafio</a>
    <a href="#" style="color: white; text-decoration: none; font-size: 0.95rem; opacity: 0.8;">Front-End</a>
  </div>

  <!-- social icons -->
  <div style="display: flex; gap: 0.75rem;">
    <!-- github -->
    <a href="https://github.com/cauamattosprj" target="_blank" style="
      display: flex;
      align-items: center;
      justify-content: center;
      height: 2rem;
      width: 2rem;
      padding: 0.2rem;
      border-radius: 0.5rem;
      background: rgba(255, 255, 255, 0.05);
      transition: background 0.3s;
      "
      aria-label="github"
      >
        <svg xmlns="http://www.w3.org/2000/svg"
            fill="white"
            viewBox="0 0 30 30">
        <path d="M15,3C8.373,3,3,8.373,3,15c0,5.623,3.872,10.328,9.092,11.63C12.036,26.468,12,26.28,12,26.047v-2.051 c-0.487,0-1.303,0-1.508,0c-0.821,0-1.551-0.353-1.905-1.009c-0.393-0.729-0.461-1.844-1.435-2.526 c-0.289-0.227-0.069-0.486,0.264-0.451c0.615,0.174,1.125,0.596,1.605,1.222c0.478,0.627,0.703,0.769,1.596,0.769 c0.433,0,1.081-0.025,1.691-0.121c0.328-0.833,0.895-1.6,1.588-1.962c-3.996-0.411-5.903-2.399-5.903-5.098 c0-1.162,0.495-2.286,1.336-3.233C9.053,10.647,8.706,8.73,9.435,8c1.798,0,2.885,1.166,3.146,1.481C13.477,9.174,14.461,9,15.495,9 c1.036,0,2.024,0.174,2.922,0.483C18.675,9.17,19.763,8,21.565,8c0.732,0.731,0.381,2.656,0.102,3.594 c0.836,0.945,1.328,2.066,1.328,3.226c0,2.697-1.904,4.684-5.894,5.097C18.199,20.49,19,22.1,19,23.313v2.734 c0,0.104-0.023,0.179-0.035,0.268C23.641,24.676,27,20.236,27,15C27,8.373,21.627,3,15,3z" />
      </svg>
    </a>

    <!-- linkedin -->
    <a href="https://www.linkedin.com/in/caua-mattos" target="_blank" style="
      display: flex;
      align-items: center;
      justify-content: center;
      height: 2rem;
      width: 2rem;
      padding: 0.5rem;
      border-radius: 0.5rem;
      background: #0077b550;
      transition: background 0.3s;
      "
      aria-label="linkedin"
      >
      <svg xmlns="http://www.w3.org/2000/svg" fill="white" height="24" width="24" viewBox="0 0 24 24">
        <path d="M4.98 3.5C4.98 4.88 3.88 6 2.5 6S0 4.88 0 3.5 1.12 1 2.5 1s2.48 1.12 2.48 2.5zM.5 8h4V24h-4V8zm7.5 0h3.6v2.2h.05c.5-.95 1.72-2 3.55-2 3.8 0 4.5 2.5 4.5 5.7V24h-4v-7.2c0-1.7 0-3.9-2.4-3.9-2.4 0-2.7 1.9-2.7 3.8V24h-4V8z"/>
    </svg>
    </a>

    <!-- gmail -->
    <a href="mailto:caua.h4k@gmail.com" target="_blank" style="
      display: flex;
      align-items: center;
      justify-content: center;
      height: 2rem;
      width: 2rem;
      padding: 0.2rem;
      border-radius: 0.5rem;
      background: rgba(255, 255, 255, 0.05);
      transition: background 0.3s;
      "
      aria-label="gmail"
      >
      <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="24" height="24" viewBox="0 0 48 48">
        <path fill="#4caf50" d="M45,16.2l-5,2.75l-5,4.75L35,40h7c1.657,0,3-1.343,3-3V16.2z"></path><path fill="#1e88e5" d="M3,16.2l3.614,1.71L13,23.7V40H6c-1.657,0-3-1.343-3-3V16.2z"></path><polygon fill="#e53935" points="35,11.2 24,19.45 13,11.2 12,17 13,23.7 24,31.95 35,23.7 36,17"></polygon><path fill="#c62828" d="M3,12.298V16.2l10,7.5V11.2L9.876,8.859C9.132,8.301,8.228,8,7.298,8h0C4.924,8,3,9.924,3,12.298z"></path><path fill="#fbc02d" d="M45,12.298V16.2l-10,7.5V11.2l3.124-2.341C38.868,8.301,39.772,8,40.702,8h0 C43.076,8,45,9.924,45,12.298z"></path>
    </svg>
    </a>


  </div>
</nav>


    <!-- blur divs -->
    <div class="glow-div" style="transform: translate(-150%, -250%); box-shadow: 0 0 80px 40px mediumturquoise; background-color: blue">123</div>
    <div class="glow-div" style="transform: translate(100%, 250%); box-shadow: 0 0 100px 80px mediumturquoise; background-color: purple">123</div>
    <svg xmlns="http://www.w3.org/2000/svg"
            fill="url(#blueGradient)"
            viewBox="0 0 30 30"
            class="glow-svg"
            height="20rem">
        <defs>
            <linearGradient id="blueGradient" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stop-color="#36D1DC" />
            <stop offset="100%" stop-color="#5B86E5" />
            </linearGradient>
        </defs>
        <path d="M15,3C8.373,3,3,8.373,3,15c0,5.623,3.872,10.328,9.092,11.63C12.036,26.468,12,26.28,12,26.047v-2.051 c-0.487,0-1.303,0-1.508,0c-0.821,0-1.551-0.353-1.905-1.009c-0.393-0.729-0.461-1.844-1.435-2.526 c-0.289-0.227-0.069-0.486,0.264-0.451c0.615,0.174,1.125,0.596,1.605,1.222c0.478,0.627,0.703,0.769,1.596,0.769 c0.433,0,1.081-0.025,1.691-0.121c0.328-0.833,0.895-1.6,1.588-1.962c-3.996-0.411-5.903-2.399-5.903-5.098 c0-1.162,0.495-2.286,1.336-3.233C9.053,10.647,8.706,8.73,9.435,8c1.798,0,2.885,1.166,3.146,1.481C13.477,9.174,14.461,9,15.495,9 c1.036,0,2.024,0.174,2.922,0.483C18.675,9.17,19.763,8,21.565,8c0.732,0.731,0.381,2.656,0.102,3.594 c0.836,0.945,1.328,2.066,1.328,3.226c0,2.697-1.904,4.684-5.894,5.097C18.199,20.49,19,22.1,19,23.313v2.734 c0,0.104-0.023,0.179-0.035,0.268C23.641,24.676,27,20.236,27,15C27,8.373,21.627,3,15,3z" />
        </svg>

        <svg xmlns="http://www.w3.org/2000/svg"
            fill="url(#purpleGradient)"
            viewBox="0 0 50 50"
            class="glow-svg-2"
            height="18rem">
        <defs>
            <linearGradient id="purpleGradient" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stop-color="#36D1DC" />
            <stop offset="100%" stop-color="#5B86E5" />
            </linearGradient>
        </defs>
        <path d="M41,4H9C6.24,4,4,6.24,4,9v32c0,2.76,2.24,5,5,5h32c2.76,0,5-2.24,5-5V9C46,6.24,43.76,4,41,4z M17,20v19h-6V20H17z M11,14.47c0-1.4,1.2-2.47,3-2.47s2.93,1.07,3,2.47c0,1.4-1.12,2.53-3,2.53C12.2,17,11,15.87,11,14.47z M39,39h-6c0,0,0-9.26,0-10 c0-2-1-4-3.5-4.04h-0.08C27,24.96,26,27.02,26,29c0,0.91,0,10,0,10h-6V20h6v2.56c0,0,1.93-2.56,5.81-2.56 c3.97,0,7.19,2.73,7.19,8.26V39z"/>
        </svg>

    <!-- hero -->
    <div class="main-section" style="display: flex; flex-direction: column; align-items: center; gap: 1rem;">
        <div style="display: flex; flex-direction: column; align-items: center; gap: 2rem">
            <div style="background-color: white; padding: 0.2rem 1rem; border-radius: 5px; opacity: 1">
                <div>
                    <div style="color: #2B2B2B; font-weight: 800; display: flex; justify-content: space-between; align-items: center; gap: 1rem;">
                        Desafio Front-End
                        <img src="/voltera-logo.png" alt="" style="height: 1.5rem; width: auto;">
                        x
                        <img src="/svelte-logo.png" alt="" style="height: 2rem; width: auto;">
                    </div>
                </div>
            </div>
            <div style="display: flex; flex-direction: column; gap: 1rem; justify-content: center; align-items: center;">
                <h2 class="title" style="font-weight: 800">Olá, {data.data?.name ?? "visitante!"}</h2>
                <p class="subtitle" style="font-weight: 300; text-align: center; width: 12rem; opacity: 50%">{"Digite um nome abaixo e receba uma estimativa precisa da idade atual dessa pessoa"}</p>
            </div>

            <div style="width: 100%; max-width: 24rem">
                <input
                class="input"
                type="text"
                placeholder="Digite um nome"
                bind:value={input}
                oninput={() => updateUserQuery(input)}
                name="name"
                />
            </div>
            <!-- divisor -->
            <div style="width: 100%; height: 0.5px; background-color: rgba(255, 255, 255, 0.3);"></div>
        </div>


        {#if data.data?.name}
            <p style="text-align: center;">
                <span style="font-weight: 800;">{data.data.name}</span>
                possui aproximadamente {data.data.age} anos de idade...
            </p>
        {:else}
            <p style="text-align: center;">
                A idade estimada irá aparecer aqui...
            </p>
        {/if}



        <!-- contacts -->
          <div style="
            display: flex;
            justify-content: center;
            align-items: center;
            font-family: 'Inter', sans-serif;
            padding: 1rem;
          ">

            <div style="
              background: rgba(255, 255, 255, 0.05);
              border: 1px solid rgba(255, 255, 255, 0.15);
              border-radius: 1rem;
              padding: 2rem;
              width: 100%;
              max-width: 24rem;
              backdrop-filter: blur(20px);
              -webkit-backdrop-filter: blur(20px);
              box-shadow: 0 0 30px rgba(0,0,0,0.4);
              display: flex;
              flex-direction: column;
              gap: 1.5rem;
              color: white;
            ">
            <div style="text-align: center; display: flex; flex-direction:column; gap: 0.5rem;">
                <h2 style="font-size: 1.5rem; text-align: center; font-size: 1rem;">
                    Achou um resultado interessante?
                </h2>
                <p style="opacity: 0.5; font-size: small">Entre em contato através do:</p>
            </div>

            <div style="
                display: flex;
                justify-content: center;
                gap: 1rem;
            ">
                <!-- github btn -->
                <button
                    style="
                    display: flex;
                    align-items: center;
                    justify-content: center;
                    gap: 0.75rem;
                    background-color: #24292e;
                    color: white;
                    border: none;
                    border-radius: 0.5rem;
                    padding: 0.75rem 1rem;
                    font-size: 1rem;
                    cursor: pointer;
                    transition: background 0.3s ease;
                    width: 100%;
                    "
                    aria-label="github"
                >
                <svg height="24" viewBox="0 0 16 16" width="24" fill="white" xmlns="http://www.w3.org/2000/svg">
                  <path d="M8 0C3.58 0 0 3.68 0 8.22c0 3.63 2.29 6.71 5.47 7.79.4.08.55-.18.55-.39v-1.37c-2.22.49-2.69-1.09-2.69-1.09-.36-.95-.88-1.2-.88-1.2-.72-.51.05-.5.05-.5.79.06 1.21.84 1.21.84.71 1.25 1.87.89 2.33.68.07-.53.28-.89.5-1.1-1.77-.21-3.63-.91-3.63-4.04 0-.89.31-1.61.82-2.18-.08-.21-.36-1.05.08-2.2 0 0 .67-.22 2.2.84a7.5 7.5 0 0 1 4 0c1.52-1.06 2.2-.84 2.2-.84.44 1.15.16 1.99.08 2.2.51.57.82 1.29.82 2.18 0 3.14-1.87 3.83-3.65 4.03.29.25.54.73.54 1.48v2.2c0 .22.15.47.56.39C13.71 14.93 16 11.85 16 8.22 16 3.68 12.42 0 8 0z"/>
                </svg>
              </button>

                <!-- linkedin btn -->
                <button
                    style="
                    display: flex;
                    align-items: center;
                    justify-content: center;
                    gap: 0.75rem;
                        background-color: #0077b5;
                        color: white;
                        border: none;
                        border-radius: 0.5rem;
                        padding: 0.75rem 1rem;
                        font-size: 1rem;
                        cursor: pointer;
                        transition: background 0.3s ease;
                        width: 100%;
                        "
                        aria-label="linkedin"
                    >
                    <svg xmlns="http://www.w3.org/2000/svg" fill="white" height="24" width="24" viewBox="0 0 24 24">
                        <path d="M4.98 3.5C4.98 4.88 3.88 6 2.5 6S0 4.88 0 3.5 1.12 1 2.5 1s2.48 1.12 2.48 2.5zM.5 8h4V24h-4V8zm7.5 0h3.6v2.2h.05c.5-.95 1.72-2 3.55-2 3.8 0 4.5 2.5 4.5 5.7V24h-4v-7.2c0-1.7 0-3.9-2.4-3.9-2.4 0-2.7 1.9-2.7 3.8V24h-4V8z"/>
                    </svg>
                </button>

                <!-- gmail btn -->
                <button
                    style="
                    display: flex;
                    align-items: center;
                    justify-content: center;
                    gap: 0.75rem;
                        background-color: white;
                        color: white;
                        border: none;
                        border-radius: 0.5rem;
                        padding: 0.75rem 1rem;
                        font-size: 1rem;
                        cursor: pointer;
                        transition: background 0.3s ease;
                        width: 100%;
                        "
                        aria-label="gmail"
                    >
                    <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="24" height="24" viewBox="0 0 48 48">
                        <path fill="#4caf50" d="M45,16.2l-5,2.75l-5,4.75L35,40h7c1.657,0,3-1.343,3-3V16.2z"></path><path fill="#1e88e5" d="M3,16.2l3.614,1.71L13,23.7V40H6c-1.657,0-3-1.343-3-3V16.2z"></path><polygon fill="#e53935" points="35,11.2 24,19.45 13,11.2 12,17 13,23.7 24,31.95 35,23.7 36,17"></polygon><path fill="#c62828" d="M3,12.298V16.2l10,7.5V11.2L9.876,8.859C9.132,8.301,8.228,8,7.298,8h0C4.924,8,3,9.924,3,12.298z"></path><path fill="#fbc02d" d="M45,12.298V16.2l-10,7.5V11.2l3.124-2.341C38.868,8.301,39.772,8,40.702,8h0 C43.076,8,45,9.924,45,12.298z"></path>
                    </svg>
                </button>
        </div>
        <!-- separator -->
        <div style="
        display: flex;
        align-items: center;
        width: 100%;
        gap: 0.5rem;
        color: #d1d5db;
      ">
        <div style="
          flex: 1;
          height: 1px;
          background-color: #d1d5db;
        "></div>

        ou

        <div style="
          flex: 1;
          height: 1px;
          background-color: #d1d5db;
        "></div>
      </div>

      <div>
        <!-- whatsapp btn -->
        <a href="https://wa.me/21972045968/" aria-label="whatsapp">
          <button
          style="
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 0.75rem;
              background-color: rgba(0, 255, 0, 0.4);
              color: black;
              font-weight: 600;
              border: none;
              border-radius: 0.5rem;
              padding: 0.55rem 0.55rem;
              font-size: 1rem;
              cursor: pointer;
              transition: background 0.3s ease;
              width: 100%;
              "
              aria-label="whatsapp"
          >
          <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="32" height="32" viewBox="0 0 48 48">
              <path fill="#fff" d="M4.868,43.303l2.694-9.835C5.9,30.59,5.026,27.324,5.027,23.979C5.032,13.514,13.548,5,24.014,5c5.079,0.002,9.845,1.979,13.43,5.566c3.584,3.588,5.558,8.356,5.556,13.428c-0.004,10.465-8.522,18.98-18.986,18.98c-0.001,0,0,0,0,0h-0.008c-3.177-0.001-6.3-0.798-9.073-2.311L4.868,43.303z"></path><path fill="#fff" d="M4.868,43.803c-0.132,0-0.26-0.052-0.355-0.148c-0.125-0.127-0.174-0.312-0.127-0.483l2.639-9.636c-1.636-2.906-2.499-6.206-2.497-9.556C4.532,13.238,13.273,4.5,24.014,4.5c5.21,0.002,10.105,2.031,13.784,5.713c3.679,3.683,5.704,8.577,5.702,13.781c-0.004,10.741-8.746,19.48-19.486,19.48c-3.189-0.001-6.344-0.788-9.144-2.277l-9.875,2.589C4.953,43.798,4.911,43.803,4.868,43.803z"></path><path fill="#cfd8dc" d="M24.014,5c5.079,0.002,9.845,1.979,13.43,5.566c3.584,3.588,5.558,8.356,5.556,13.428c-0.004,10.465-8.522,18.98-18.986,18.98h-0.008c-3.177-0.001-6.3-0.798-9.073-2.311L4.868,43.303l2.694-9.835C5.9,30.59,5.026,27.324,5.027,23.979C5.032,13.514,13.548,5,24.014,5 M24.014,42.974C24.014,42.974,24.014,42.974,24.014,42.974C24.014,42.974,24.014,42.974,24.014,42.974 M24.014,42.974C24.014,42.974,24.014,42.974,24.014,42.974C24.014,42.974,24.014,42.974,24.014,42.974 M24.014,4C24.014,4,24.014,4,24.014,4C12.998,4,4.032,12.962,4.027,23.979c-0.001,3.367,0.849,6.685,2.461,9.622l-2.585,9.439c-0.094,0.345,0.002,0.713,0.254,0.967c0.19,0.192,0.447,0.297,0.711,0.297c0.085,0,0.17-0.011,0.254-0.033l9.687-2.54c2.828,1.468,5.998,2.243,9.197,2.244c11.024,0,19.99-8.963,19.995-19.98c0.002-5.339-2.075-10.359-5.848-14.135C34.378,6.083,29.357,4.002,24.014,4L24.014,4z"></path><path fill="#40c351" d="M35.176,12.832c-2.98-2.982-6.941-4.625-11.157-4.626c-8.704,0-15.783,7.076-15.787,15.774c-0.001,2.981,0.833,5.883,2.413,8.396l0.376,0.597l-1.595,5.821l5.973-1.566l0.577,0.342c2.422,1.438,5.2,2.198,8.032,2.199h0.006c8.698,0,15.777-7.077,15.78-15.776C39.795,19.778,38.156,15.814,35.176,12.832z"></path><path fill="#fff" fill-rule="evenodd" d="M19.268,16.045c-0.355-0.79-0.729-0.806-1.068-0.82c-0.277-0.012-0.593-0.011-0.909-0.011c-0.316,0-0.83,0.119-1.265,0.594c-0.435,0.475-1.661,1.622-1.661,3.956c0,2.334,1.7,4.59,1.937,4.906c0.237,0.316,3.282,5.259,8.104,7.161c4.007,1.58,4.823,1.266,5.693,1.187c0.87-0.079,2.807-1.147,3.202-2.255c0.395-1.108,0.395-2.057,0.277-2.255c-0.119-0.198-0.435-0.316-0.909-0.554s-2.807-1.385-3.242-1.543c-0.435-0.158-0.751-0.237-1.068,0.238c-0.316,0.474-1.225,1.543-1.502,1.859c-0.277,0.317-0.554,0.357-1.028,0.119c-0.474-0.238-2.002-0.738-3.815-2.354c-1.41-1.257-2.362-2.81-2.639-3.285c-0.277-0.474-0.03-0.731,0.208-0.968c0.213-0.213,0.474-0.554,0.712-0.831c0.237-0.277,0.316-0.475,0.474-0.791c0.158-0.317,0.079-0.594-0.04-0.831C20.612,19.329,19.69,16.983,19.268,16.045z" clip-rule="evenodd"></path>
              </svg>
      </button>
        </a>


      </div>

        </div>
    </div>

    <div class="footer-text" style="width: 100%; opacity: 0.5; display: flex; justify-content: center; text-align: center; font-size: 0.9rem; font-weight: 200;">
        Esse projeto foi feito por Cauã de Mattos Pereira, para o desafio da vaga de desenvolvedor front-end para a Voltera Energia.
    </div>

    </div>
</div>

<style>
    .glow-svg {
    position: absolute;
    z-index: -1;
    transition: transform 20s ease-in-out infinite alternate;
    animation: float 20s ease-in-out infinite alternate;
    transform: translate(100%, 80%)
  }



  .glow-svg-2 {
    position: absolute;
    z-index: -1;
    animation: float2 5s ease-in-out infinite alternate;
    transform: translate(-100%, -120%)
  }


    .glow-div {
    position: absolute;
    height: 12rem;
    width: 12rem;
    border-radius: 50%;
    filter: blur(100px);
    z-index: -1;
  }

  @keyframes floatGlow {
    0% {
      transform: translate(-100%, -250%) scale(1);
    }
    50% {
      transform: translate(-80%, -270%) scale(1.05);
    }
    100% {
      transform: translate(-90%, -240%) scale(1);
    }
  }
    * {
        box-sizing: border-box;
        margin: 0;
        padding: 0;
        color: white;
        font-weight: normal;
        font-size: medium;
    }

    :global(html), :global(body) {
        height: 100%;
        width: 100%;
        margin: 0;
        padding: 0;
        font-family: 'Inter', sans-serif;
    }

    :global(html) {
        background: linear-gradient(332deg, rgba(24, 13, 84, 1) 0%, rgba(8, 16, 42, 1) 50%);
    }

    .main {
        width: 100%;
        height: 100%;
        display: flex;
        justify-content: center;
        align-items: center;
    }

    h2 {
        font-weight: normal;
    }

    .footer-text {
    position: absolute;
    bottom: 5%;
  }

    .title {
        font-size: 2.4rem;
        text-align: center;
    }

    /* .subtitle {
        font-size: 1.2rem;
        text-align: center;
        padding: 0 2rem;
    } */

    .input {
    width: 100%;
    padding: 0.5rem 0.75rem;
    border: 1px solid rgba(255, 255, 255);
    border-radius: 0.5rem;
    background: rgba(255, 255, 255, 0.05);
    color: white;
    font-size: 1rem;
    font-family: 'Inter', sans-serif;
    outline: none;
    transition: all 0.3s ease;
    backdrop-filter: blur(4px);
    -webkit-backdrop-filter: blur(4px);
  }

  .input::placeholder {
    color: rgba(255, 255, 255);
    font-weight: 200;
    font-size:small;
  }

  .input:focus {
    border-color: rgba(0, 255, 255, 0.6);
    background: rgba(255, 255, 255, 0.1);
    box-shadow: 0 0 0 3px rgba(0, 255, 255, 0.2);
  }

  @media (max-width: 480px) {
  .main-section {
    padding-top: 20rem;
  }

  .footer-text {
    position: relative;
    width: 100%;
  }

  .glow-svg {
    transform: translate(35%, 150%)
  }

  .glow-svg-2 {
    transform: translate(-90%, -90%)
  }

  .nav-links {
    opacity: 0;
    width: 0;
    display: none;
  }


}


</style>
