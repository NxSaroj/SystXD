<script>
  import Button from "./lib/Button.svelte";
  import Title from "./lib/Title.svelte";
  import Border from "./lib/Border.svelte";
  import Navbar from "./lib/Navbar.svelte";
  import "./app.css";
  import Index from "./components/resuable/Index.svelte";
  import Box from "./lib/Box.svelte";
</script>
<Navbar />
<Title />

<Button icon='<i class="fa-brands fa-github"></i>' text="Github" href="https://github.com/SystXD/"/>
<Index text="Skills"/>

<Border />

<Index text="Projects"/>

<Box />