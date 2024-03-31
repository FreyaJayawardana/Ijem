const trueName = "Gilang";
const heart = document.getElementById("heart");
const alert = document.getElementById("alert");
const nextBtn = document.getElementById("nextBtn");
const req1 = document.getElementById("req1");
const pass = document.getElementById("pass");
const sec2 = document.getElementById("page-2");
const animasi1 = document.getElementById("a-b1");
pass.addEventListener("keyup", function () {
  if (pass.value == trueName) {
    heart.style.color = "red";
    req1.style.display = "block";
    nextBtn.style.display = "block";
    alert.style.display = "none";
    sec2.style.display = "flex";
  } else {
    heart.style.color = "white";
    alert.style.display = "block";
    nextBtn.style.display = "none";
    req1.style.display = "none";
  }
});
const sec3 = document.getElementById("page-3");
const nextS3 = document.getElementById("s2t3");
nextS3.onclick = function () {
  sec3.style.display = "block";
};
