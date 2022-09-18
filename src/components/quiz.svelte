<script>
  import Option from "./option.svelte";
  import GenerateQuiz from "../scripts/generateQuiz";
  import CacheCountryList from "../scripts/cacheCountryList";
  import { onMount } from "svelte";
  import Results from "./results.svelte";

  $: selected = null;
  $: right = null;
  $: wrong = null;

  $: resultsView = false;

  let score = 0;

  $: btnMode = 3;
  $: quiz = {
    flag: null,
    question: "",
    answer: "",
    options: [],
  };

  let allCountries = [];

  const letters = ["A", "B", "C", "D"];

  onMount(() => {
    let _ = localStorage.getItem("countries");

    if (_ == null) {
      CacheCountryList();
      _ = localStorage.getItem("countries");
    }

    allCountries = JSON.parse(_);

    quiz = GenerateQuiz(allCountries);
  });

  const handleOptionSelect = (option) => {
    if (right != null) return;
    selected = option;
    btnMode = 0;
  };

  const handleBtnClick = () => {
    console.log(quiz.answer);

    if (btnMode === 0) {
      if (selected === quiz.answer) {
        right = quiz.answer;
        selected = null;
        score++;
        btnMode = 1;
      } else {
        wrong = selected;
        right = quiz.answer;
        selected = null;
        btnMode = 2;
      }
      return;
    }

    if (btnMode === 1) {
      btnMode = -1;
      quiz = GenerateQuiz(allCountries);
      selected = null;
      right = null;
      wrong = null;
      return;
    }

    if (btnMode === 2) {
      resultsView = true;
      btnMode = 3;
      return;
    }

    if (btnMode === 3) {
      resultsView = false;
      btnMode = -1;
      quiz = GenerateQuiz(allCountries);
      selected = null;
      right = null;
      wrong = null;
      score = 0;
      return;
    }
  };
</script>

<div class="quiz">
  <div class="header">
    <p class="title">COUNTRY QUIZ</p>
    <img src="/adventure.svg" alt="adventure" />
  </div>

  <div class="container">
    {#if !resultsView}
      <img
        class={`${quiz.flag ? "flag" : "hidden"}`}
        src={quiz.flag}
        alt="img"
      />

      <div class="quest">{quiz.question}</div>

      <div class="opt">
        {#each quiz.options as option, index}
          <Option
            idx={letters[index]}
            txt={option}
            onclick={() => {
              handleOptionSelect(option);
            }}
            selected={selected === option}
            right={right === option}
            wrong={wrong === option}
          />
        {/each}
      </div>

      <div class="ctrl">
        <button on:click={handleBtnClick}>
          {btnMode === 0
            ? "Submit"
            : btnMode === 1
            ? "Next"
            : btnMode === 2
            ? "View Results"
            : "..."}
        </button>
      </div>
    {:else}
      <div class="results">
        <img src="/winners.svg" alt="winner" />
        <p class="title">Results</p>
        <div class="score-text">
          <span>You got </span>
          <span class="score">{score}</span>
          <span>correct {score != 1 ? "answers" : "answer"}</span>
        </div>

        <button on:click={handleBtnClick}> Try Again </button>
      </div>
    {/if}
  </div>
</div>

<style lang="scss">
  .hidden {
    display: none;
  }

  .quiz {
    width: 400px;
    margin-left: auto;
    margin-right: auto;

    .header {
      width: 450px;
      display: flex;
      justify-content: space-between;
      align-items: flex-end;

      .title {
        color: white;
        font-weight: 700;
        font-size: 30px;
        margin-bottom: 10px;
      }

      img {
        width: 162px;
        position: relative;
        top: 41px;
      }
    }

    .container {
      background: white;
      box-shadow: 0px 0px 20px rgba(0, 0, 0, 0.2);
      padding: 60px 25px 25px 25px;
      width: 400px;
      border-radius: 24px;
      transition: he 0.5s;

      .flag {
        width: 84px;
        height: 54px;
        border-radius: 7px;
        object-fit: scale-down;

        filter: drop-shadow(0px 4px 12px rgba(0, 0, 0, 0.2));
        margin-bottom: 15px;
      }

      .quest {
        font-weight: 700;
        font-size: 20px;
        color: rgba(47, 82, 123, 1);
      }

      .opt {
        display: flex;
        flex-direction: column;
        gap: 25px;

        margin-top: 32px;
      }

      .ctrl {
        width: 100%;
        display: flex;
        align-items: center;
        justify-content: flex-end;

        margin-top: 20px;

        button {
          cursor: pointer;

          width: 120px;
          height: 45px;
          background: #f9a826;
          box-shadow: 0px 2px 4px rgba(252, 168, 47, 0.4);

          border-radius: 7px;
          outline: none;
          border: none;

          color: white;
          font-weight: 700;
          font-size: 15px;
        }
      }
    }

    .results {

      display: flex;
      flex-direction: column;
      align-items: center;

      .title {
        margin-top: 80px;
        max-height: 15px;
        font-size: 42px;
        font-weight: 700;
        color: rgba(29, 53, 93, 1);
      }

      .score-text {
        span {
          font-weight: 400;
          font-size: 20px;
          color: rgba(29, 53, 93, 1);
        }

        .score {
          font-weight: 700;
          font-size: 40px;
          color: rgba(111, 207, 151, 1);
        }
      }

      button {
        cursor: pointer;
        padding: 15px 60px;
        margin-top: 50px;
        border-radius: 12px;
        background: none;
        border: 3px solid rgba(29, 53, 93, 1);
        color: rgba(29, 53, 93, 1);
        font-weight: 600;
        font-size: 18px;
      }
    }
  }
</style>
