const quiz = {
  totalScore: 0,
  apiKey: "sBjsQ21WjEpEqLNrxxNTf7doGc6aaCF6tvBvrXrE",
  async fetchQuizData(category) {
    const response = await fetch(
      `https://quizapi.io/api/v1/questions?apiKey=${this.apiKey}&category=${category}&difficulty=Easy&limit=10`
    );
    if (response.ok) {
      const data = await response.json();
      this.showQuestions(data);
    }
  },
  showQuestions(data) {
    const wrapper = document.querySelector(".wrapper");
    const questionContainer = document.createElement("div");
    const questionList = document.createElement("ol");
    const submitBtn = document.createElement("button");
    submitBtn.textContent = "Submit";
    submitBtn.classList = "submit";

    wrapper.textContent = "";
    wrapper.classList.remove("wrapper");
    wrapper.classList = "question-container";

    data.forEach((datum, index) => {
      const questionListItem = document.createElement("li");
      const choiceList = document.createElement("ul");

      questionList.classList = "question__title";
      questionListItem.append(datum.question);

      const choices = Object.entries(datum.answers);
      choices.forEach((choice) => {
        if (choice[1] !== null) {
          const choiceListItem = document.createElement("li");
          const radio = document.createElement("input");
          const label = document.createElement("label");
          label.classList = "choice";
          radio.setAttribute("type", "radio");
          radio.value = choice[0];
          label.textContent = choice[1];
          label.insertAdjacentElement("afterbegin", radio);
          radio.name = index;
          choiceListItem.append(label);
          choiceList.appendChild(choiceListItem);

          choiceListItem.addEventListener("click", (e) => {
            questionListItem.dataset.score = this.assignPoint(
              datum.correct_answers,
              e.target.value
            );
          });
        }
      });

      questionListItem.append(choiceList);
      questionList.append(questionListItem);
    });
    questionContainer.append(questionList);
    submitBtn.addEventListener("click", () => {
      this.computeTotalScore();
    });
    wrapper.append(questionContainer, submitBtn);
  },
  assignPoint(correct_answers, userChoice) {
    let score = 0;
    console.log(correct_answers[`${userChoice}_correct`]);
    if (correct_answers[`${userChoice}_correct`] === "true") {
      score = 1;
    }
    return score;
  },
  computeTotalScore() {
    const questions = document.querySelectorAll(".question__title li");
    console.log("clicked");
    questions.forEach((question) => {
      if (parseInt(question.dataset.score)) {
        this.totalScore += parseInt(question.dataset.score);
      }
    });
    this.showResult();
  },
  showResult() {
    const wrapper = document.querySelector(".question-container");
    const result = document.createElement("h2");
    wrapper.classList.remove(".question-container");
    wrapper.classList = "wrapper";
    result.textContent = `Your score is: ${this.totalScore}/10`;
    result.classList = "result";
    wrapper.textContent = "";
    wrapper.append(result);
  },
};

function showCategories(e) {
  const categoriesList = ["Linux", "Docker", "SQL", "CMS", "Code", "DevOps"];
  const fragment = document.createDocumentFragment();
  const wrapper = document.querySelector(".wrapper");
  const categoryTitle = document.createElement("h2");
  if (e.key === "Enter") {
    categoriesList.forEach((category) => {
      const button = document.createElement("button");
      button.textContent = category;
      button.classList = "category";
      fragment.appendChild(button);
    });
    categoryTitle.textContent = "Select a Category";
    categoryTitle.classList = "category__title";
    wrapper.textContent = "";
    wrapper.append(categoryTitle, fragment);
  }
  chooseCategory();
}

window.addEventListener("keyup", showCategories);

function chooseCategory() {
  const categories = document.querySelectorAll(".category");
  categories.forEach((category) =>
    category.addEventListener("click", (e) => {
      quiz.fetchQuizData(e.target.innerText);
    })
  );
}
