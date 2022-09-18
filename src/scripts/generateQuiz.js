export default function GenerateQuiz(allCountries) {
  let quiz = {
    flag: null,
    question: "",
    answer: "",
    options: [],
  };

  if (allCountries == undefined) return quiz;

  let randomCountry =
    allCountries[Math.floor(Math.random() * allCountries.length)];
  let questionType = Math.random();

  if (questionType < 0.5) {
    quiz.question = `${randomCountry.capital[0]} is the capital of which country?`;
    quiz.answer = `${randomCountry.name.common}`;
  } else {
    quiz.flag = randomCountry.flags.svg;
    quiz.question = "Which country does this flag belong to?";
    quiz.answer = randomCountry.name.common;
  }

  let wrongCountries = allCountries.filter(
    (country) => country.name.common !== quiz.answer
  );

  const countOfAnswers = 4;
  const positionOfCorrectAnswer = Math.floor(
    Math.random() * (countOfAnswers)
  );
  console.log(positionOfCorrectAnswer)
  const answers = [];

  for (let i = 0; i < countOfAnswers; i++) {
    if (i === positionOfCorrectAnswer) {
      answers.push(quiz.answer);
    } else {
      let randomAnswer =
        wrongCountries[Math.floor(Math.random() * wrongCountries.length)];
      wrongCountries = wrongCountries.filter(
        (country) => country.name.common !== randomAnswer.name.common
      );

      answers.push(randomAnswer.name.common);
    }
  }
  
  quiz.options = answers;

  return quiz;
}
