const heroText = document.getElementById("hero-text");

const typewriter = new Typewriter(heroText, {
  loop: false,
  deleteSpeed: 5,
  autoStart: true,
  delay: 50,
});

typewriter
  .pauseFor(1000)
  .typeString("Hei,")
  .pauseFor(700)
  .typeString(" Simon her! <span class='wave'>👋</span>")
  .pauseFor(1500)
  .typeString("<br>Jeg er en 21 år gammel student.")
  .pauseFor(1500)
  .deleteChars(8)
  .typeString("musikkprodusent.")
  .pauseFor(2500)
  .deleteChars(16)
  .typeString("forretningsutvikler.")
  .pauseFor(2500)
  .deleteChars(20)
  .typeString("utvikler.")
  .start();

/* When the user scrolls down, hide the navbar. When the user scrolls up, show the navbar */

let prevScrollPos = window.pageYOffset;
console.log(window.pageYOffset);
window.onscroll = function () {
  let currentScrollPos = window.pageYOffset;
  if (prevScrollPos > currentScrollPos) {
    document.getElementById("navbar").style.top = "0";
  } else {
    document.getElementById("navbar").style.top = "-65px";
  }
  prevScrollPos = currentScrollPos;
};

let image = document.getElementById("#image-file").image;
print(image);
/*
const smoothScroll = function (target, duration) {
  let target = document.querySelector(target);
  let targetPosition = target.getBoundingClientRect().top;
  let startPosition = window.pageYOffset;
  let distance = targetPosition - startPosition;
  let startTime = null;

  function animation(currentTime) {
    if (startTime === null) startTime = currentTime;
    let timeElapsed = currentTime - startTime;
    let run = ease(timeElapsed, startPosition, distance, duration);
    window.scrollTo(0, run);
    if (timeElapsed < duration) requestAnimationFrame(animation);
  }
  function ease(t, b, c, d) {
    t /= d / 2;
    if (t < 1) return (c / 2) * t * t + b;
    t--;
    return (-c / 2) * (t * (t - 2) - 1) + b;
  }

  requestAnimationFrame(animation);
};

const downArrow = document.querySelector(".fa-angle-double-down");

downArrow.addEventListener("click", function () {
  smoothScroll(".music-section", 1000);
});

*/

/*

const ctx = document.getElementById("myChart").getContext("2d");

const myChart = new Chart(ctx, {
  type: "bar",
  responsive: true,
  data: {
    labels: ["Red", "Blue", "Yellow", "Green", "Purple", "Orange"],
    datasets: [
      {
        label: "# of Votes",
        data: [12, 19, 3, 5, 2, 3],
        backgroundColor: [
          "rgba(255, 99, 132, 0.2)",
          "rgba(54, 162, 235, 0.2)",
          "rgba(255, 206, 86, 0.2)",
          "rgba(75, 192, 192, 0.2)",
          "rgba(153, 102, 255, 0.2)",
          "rgba(255, 159, 64, 0.2)",
        ],
        borderColor: [
          "rgba(255, 99, 132, 1)",
          "rgba(54, 162, 235, 1)",
          "rgba(255, 206, 86, 1)",
          "rgba(75, 192, 192, 1)",
          "rgba(153, 102, 255, 1)",
          "rgba(255, 159, 64, 1)",
        ],
        borderWidth: 1,
      },
    ],
  },
  options: {
    scales: {
      yAxes: [
        {
          ticks: {
            beginAtZero: true,
          },
        },
      ],
    },
  },
});
*/
