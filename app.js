let count = 0;

const value = document.getElementById("value");

const btns = document.querySelectorAll(".btn");

btns.forEach((btn) => {
  btn.addEventListener("click", (e) => {
    if (e.currentTarget.classList.contains("decrease")) {
      count--;
      console.log(count);
    } else if (e.currentTarget.classList.contains("increase")) {
      count++;
      console.log(count);
    } else if (e.currentTarget.classList.contains("reset")) {
      count = 0;
      console.log(count);
    }

    if (count > 0) {
      value.style.color = "green";
    }

    if (count < 0) {
      value.style.color = "red";
    }

    if (count === 0) {
      value.style.color = "#222";
    }

    value.textContent = count;
  });
});
