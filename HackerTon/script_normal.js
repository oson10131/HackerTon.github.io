const answers = ["2", "3", "1", "3", "3"]; 

const questions = document.querySelectorAll(".question");

let correctCount = 0;

questions.forEach((question, index) => {
  const form = question.querySelector("form[name='ans']");
  const buttons = form.querySelectorAll("input[type='submit']");

  const result = document.createElement("span");
  result.style.marginLeft = "10px";
  result.style.fontSize = "20px";
  form.appendChild(result);

  buttons.forEach((button) => {
    button.addEventListener("click", (event) => {
      event.preventDefault();

      const chosen = button.value;
      const correct = answers[index];

      if (form.dataset.answered === "true") return;

      if (chosen === correct) {
        result.textContent = "O 정답!";
        result.style.color = "#22c55e";
        correctCount++;
      } else {
        result.textContent = "X 오답!";
        result.style.color = "#ef4444";
      }

      // 한번 판정된 문제는 다시 클릭 불가 처리
      form.dataset.answered = "true";
      buttons.forEach((b) => (b.disabled = true));

      // 모든 문제를 맞혔을 경우
      if (correctCount === answers.length) {
        setTimeout(() => {
          alert("모든 문제 정답입니다! 다음 페이지로 이동합니다.");
          window.location.href = "index_last.html";
        }, 800);
      }
    });
  });
});
