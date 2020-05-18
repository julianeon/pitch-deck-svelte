<script>
  export let infoDesk;
  export let infoMobile;  
  import MediaQuery from "./MediaQuery.svelte";
  
  let index = 0;
  let display = true;
  
  function advanceClick(object) {
      if (index===object.length-1){
	  index=0;
      } else {
	  index+=1;
      }
  }

</script>

<style>
  .fullscreen {
      background-color: #294582;
      padding-right: 3vw;
      padding-top: 1px;
      color: white;
      text-align: center;
      font-size: 3em;
      font-weight: 10;
      height: 100vh;
  }

  .mobilefull {
      background-color: #294582;
      padding-right: 3vw;
      padding-top: 1px;
      color: white;
      text-align: center;
      height: 100vh;
  }

  .letter {
      background-color: black;
      padding-right: 3vw;
      padding-top: 1px;
      color: white;
      text-align: center;
      font-size: 2em;
      font-weight: 10;
      height: 100vh;
  }

  .card {
      background-color:#294582;
      margin-left: 10vw;
      margin-right: 10vw;
      padding-top: 5vh;
      padding-bottom: 5vh;
  }

  note {
      float: left;
      text-align: left;
      font-size: medium;
      background-color: #294582;
      width: 100vw;
  }
  
  .deskh1 {
      text-transform: uppercase;
      font-size: 2em;
      font-weight: 100;
      font-family: 'Nanum Myeongjo', serif;      
  }

  .mobileh1 {
      text-transform: uppercase;
      font-family: 'Nanum Myeongjo', serif;      
  }
  
  .deskpad {
      padding-left: 3vw;
  }

  .mobilepad {
      padding-left: 2vw;
  }
  
  button {
      display: block;
  }

  .active {
      background-color: black;
      color: white;
  }
</style>

<MediaQuery query="(max-width: 800px)" let:matches>
  {#if matches}
    <div class="mobilefull" on:click={advanceClick(infoMobile)}>
      <h1 class="mobileh1">{infoMobile[index].title}</h1>
      <p class="mobilepad">{@html infoMobile[index].text}</p>
    </div>
  {:else}
    <div class="{display ? 'fullscreen' : 'letter'}" on:click={advanceClick(infoDesk)}>
      <button
	class="{display ? 'active' : ''}"
	on:click="{() => display = !display}"
	>
	{display ? 'letterbox' : 'fullscreen'}
      </button>

      <div class="{display ? '' : 'card'}">
	<h1 class="deskh1">{infoDesk[index].title}</h1>
	<p class="deskpad">{@html infoDesk[index].text}</p>
      </div>
    </div>
  {/if}
</MediaQuery>


