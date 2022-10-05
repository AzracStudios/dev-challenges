<script>
  import Random from "./components/random.svelte";
  import { randomQuote, authorQuote } from "./quotes";
  import Quote from "./components/quote.svelte";
  import { onMount } from "svelte";
  import Author from "./components/author.svelte";

  $: quote = "";
  $: author = "";
  $: genre = "";

  const getNewQuote = () => {
    randomQuote().then((q) => {
      quote = q.data[0].quoteText;
      author = q.data[0].quoteAuthor;
      genre = q.data[0].quoteGenre;
    });
  };

  onMount(getNewQuote);
</script>

<div class="app">
  <Random handleClick={getNewQuote} />
  <Quote {quote} />
  <Author {author} {genre} />
</div>

<style lang="scss">
  * {
    margin: 0px;
    padding: 0px;
    box-sizing: border-box;
    font-family: Poppins;
  }

  .app {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: flex-start;
    height: 100vh;
    width: fit-content;
    margin-left: auto;
    margin-right: auto;
  }
</style>
