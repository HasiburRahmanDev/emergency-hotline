// counting hearts

const hearts = document.querySelectorAll(".card-heart");
const heartCount = document.getElementById("heart-count");

let count = 0;
for (const heart of hearts) {
  heart.addEventListener("click", function () {
    count++;
    heartCount.innerText = count;
  });
}

const date = new Date().toLocaleTimeString();
function callHandle(id) {
  const coinElement = document.getElementById("coin-count");
  let coinValue = parseInt(coinElement.innerText);

  if (coinValue < 20) {
    alert(
      "Not enough coins to make a call! you required 20 coins to make a call"
    );
    return;
  }

  const callHistoryParent = document.getElementById("call-history-parent");
  const name = document.getElementById(`name-${id}`).innerText;
  const number = document.getElementById(`number-${id}`).innerText;

  alert(`calling ${name} ${number}...`);
  coinValue -= 20;
  coinElement.innerText = coinValue;

  const div = document.createElement("div");
  div.innerHTML = `<div
          class="flex justify-between items-center py-1 px-2 bg-gray-100 m-2 rounded-lg"
        >
          <div>
            <h1 class="font-bold">${name}</h1>
            <h1>${number}</h1>
          </div>
          <div>
            <h1>${date}</h1>
          </div>
        </div>`;
  callHistoryParent.appendChild(div);
}
const clrBtn = document.getElementById("clr-btn");
clrBtn.addEventListener("click", function () {
  const callHistoryParent = document.getElementById("call-history-parent");
  while (callHistoryParent.children.length > 1) {
    callHistoryParent.removeChild(callHistoryParent.lastElementChild);
  }
});

// Copy section got help from ChatGPT

const copyCountElem = document.getElementById("copy-count");
let copyCount = 0;

for (let i = 1; i <= 9; i++) {
  const copyBtn = document.getElementById(`copy-card${i}`);
  if (copyBtn) {
    copyBtn.addEventListener("click", function () {
      const numberElem = document.getElementById(`number-card${i}`);
      if (numberElem) {
        navigator.clipboard.writeText(numberElem.innerText);
        copyCount++;
        copyCountElem.innerText = copyCount;
        alert(
          `Number ${numberElem.innerText} copied! You can paste it anywhere.`
        );
      }
    });
  }
}

document.getElementById("call-btn1").addEventListener("click", function () {
  callHandle("card1");
});
document.getElementById("call-btn2").addEventListener("click", function () {
  callHandle("card2");
});
document.getElementById("call-btn3").addEventListener("click", function () {
  callHandle("card3");
});
document.getElementById("call-btn4").addEventListener("click", function () {
  callHandle("card4");
});
document.getElementById("call-btn5").addEventListener("click", function () {
  callHandle("card5");
});
document.getElementById("call-btn6").addEventListener("click", function () {
  callHandle("card6");
});
document.getElementById("call-btn7").addEventListener("click", function () {
  callHandle("card7");
});
document.getElementById("call-btn8").addEventListener("click", function () {
  callHandle("card8");
});
document.getElementById("call-btn9").addEventListener("click", function () {
  callHandle("card9");
});
