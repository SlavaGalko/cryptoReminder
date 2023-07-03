const nameOfCoin = document.querySelector(".nameOfCoin").value;
const priceOfCoin = document.querySelector(".priceOfCoin").value;
const btn_submit = document.querySelector(".btn_submit");

let userCoinName;
let userCoinPrice;
let timerId1;
let counterOfReminds = 0;
let count = 0;

let h5_sec2_1 = document.querySelector(".h5_sec2_1");
let btn_delete1 = document.querySelector(".btn_delete1");

let h5_sec2_2 = document.querySelector(".h5_sec2_2");
let btn_delete2 = document.querySelector(".btn_delete2");

let h5_sec2_3 = document.querySelector(".h5_sec2_3");
let btn_delete3 = document.querySelector(".btn_delete3");

let h5_sec2_4 = document.querySelector(".h5_sec2_4");
let btn_delete4 = document.querySelector(".btn_delete4");

let h5_sec2_5 = document.querySelector(".h5_sec2_5");
let btn_delete5 = document.querySelector(".btn_delete5");

let h5_sec2_6 = document.querySelector(".h5_sec2_6");
let btn_delete6 = document.querySelector(".btn_delete6");

let h5_sec2_7 = document.querySelector(".h5_sec2_7");
let btn_delete7 = document.querySelector(".btn_delete7");

let h5_sec2_8 = document.querySelector(".h5_sec2_8");
let btn_delete8 = document.querySelector(".btn_delete8");

let h5_sec2_9 = document.querySelector(".h5_sec2_9");
let btn_delete9 = document.querySelector(".btn_delete9");

let h5_sec2_10 = document.querySelector(".h5_sec2_10");
let btn_delete10 = document.querySelector(".btn_delete10");

let h5_sec2_11 = document.querySelector(".h5_sec2_11");
let btn_delete11 = document.querySelector(".btn_delete11");

let h5_sec2_12 = document.querySelector(".h5_sec2_12");
let btn_delete12 = document.querySelector(".btn_delete12");

let audio1 = new Audio("audio1.mp3");

let whatTurn;

btn_submit.addEventListener("click", function () {
  const nameOfCoin = document.querySelector(".nameOfCoin").value;
  const priceOfCoin = document.querySelector(".priceOfCoin").value;

  const beforePromise = new Promise(function (resolve, reject) {
    fetch(`https://fapi.binance.com/fapi/v1/ticker/price?symbol=${nameOfCoin}`)
      .then(function (response) {
        return response.json();
      })
      .then(function (data) {
        let whatTurn;
        if (data.price != undefined && data.price != null && data.price != "") {
          if (data.price >= priceOfCoin) {
            whatTurn = "short";
            console.log(`whatTurn = ${whatTurn}`);
          } else if (data.price <= priceOfCoin) {
            whatTurn = "long";
            console.log(`whatTurn = ${whatTurn}`);
          }
          resolve(whatTurn);
        }
      });
  });

  beforePromise.then(function (data) {
    cryptoSetInterval(data);
  });
});

function cryptoSetInterval(whatRowNeed) {
  const nameOfCoin = document.querySelector(".nameOfCoin").value;
  const priceOfCoin = document.querySelector(".priceOfCoin").value;
  counterOfReminds++;

  userCoinName = nameOfCoin.toUpperCase();
  userCoinPrice = +priceOfCoin;

  if (nameOfCoin != "" && nameOfCoin != null && nameOfCoin != undefined) {
    if (counterOfReminds == 1) {
      h5_sec2_1.classList.remove("hide");
      btn_delete1.classList.remove("hide");

      h5_sec2_1.innerText = `Котировка: ${nameOfCoin.toUpperCase()}. Цена уведомления: ${userCoinPrice}`;
      cryptoIntervalStart(
        userCoinPrice,
        userCoinName,
        "first",
        userCoinPrice,
        whatRowNeed
      );
      //треба перевірити щоб всім я передав параметр whatRowNeed, щоб на основі цього вирішувати чи лонг чи шорт
    } else if (counterOfReminds == 2) {
      h5_sec2_2.classList.remove("hide");
      btn_delete2.classList.remove("hide");

      h5_sec2_2.innerText = `Котировка: ${nameOfCoin.toUpperCase()}. Цена уведомления: ${userCoinPrice}`;

      cryptoIntervalStart(userCoinPrice, userCoinName, "second", userCoinPrice);
    } else if (counterOfReminds == 3) {
      h5_sec2_3.classList.remove("hide");
      btn_delete3.classList.remove("hide");

      h5_sec2_3.innerText = `Котировка: ${nameOfCoin.toUpperCase()}. Цена уведомления: ${userCoinPrice}`;
      cryptoIntervalStart(userCoinPrice, userCoinName, "third", userCoinPrice);
    } else if (counterOfReminds == 4) {
      h5_sec2_4.classList.remove("hide");
      btn_delete4.classList.remove("hide");

      h5_sec2_4.innerText = `Котировка: ${nameOfCoin.toUpperCase()}. Цена уведомления: ${userCoinPrice}`;
      cryptoIntervalStart(userCoinPrice, userCoinName, "fourth", userCoinPrice);
    } else if (counterOfReminds == 5) {
      h5_sec2_5.classList.remove("hide");
      btn_delete5.classList.remove("hide");

      h5_sec2_5.innerText = `Котировка: ${nameOfCoin.toUpperCase()}. Цена уведомления: ${userCoinPrice}`;
      cryptoIntervalStart(userCoinPrice, userCoinName, "fifth", userCoinPrice);
    } else if (counterOfReminds == 6) {
      h5_sec2_6.classList.remove("hide");
      btn_delete6.classList.remove("hide");

      h5_sec2_6.innerText = `Котировка: ${nameOfCoin.toUpperCase()}. Цена уведомления: ${userCoinPrice}`;
      cryptoIntervalStart(userCoinPrice, userCoinName, "sixth", userCoinPrice);
    } else if (counterOfReminds == 7) {
      h5_sec2_7.classList.remove("hide");
      btn_delete7.classList.remove("hide");

      h5_sec2_7.innerText = `Котировка: ${nameOfCoin.toUpperCase()}. Цена уведомления: ${userCoinPrice}`;
      cryptoIntervalStart(
        userCoinPrice,
        userCoinName,
        "seventh",
        userCoinPrice
      );
    } else if (counterOfReminds == 8) {
      h5_sec2_8.classList.remove("hide");
      btn_delete8.classList.remove("hide");

      h5_sec2_8.innerText = `Котировка: ${nameOfCoin.toUpperCase()}. Цена уведомления: ${userCoinPrice}`;
      cryptoIntervalStart(userCoinPrice, userCoinName, "eigth", userCoinPrice);
    } else if (counterOfReminds == 9) {
      h5_sec2_9.classList.remove("hide");
      btn_delete9.classList.remove("hide");

      h5_sec2_9.innerText = `Котировка: ${nameOfCoin.toUpperCase()}. Цена уведомления: ${userCoinPrice}`;
      cryptoIntervalStart(userCoinPrice, userCoinName, "nineth", userCoinPrice);
    } else if (counterOfReminds == 10) {
      h5_sec2_10.classList.remove("hide");
      btn_delete10.classList.remove("hide");

      h5_sec2_10.innerText = `Котировка: ${nameOfCoin.toUpperCase()}. Цена уведомления: ${userCoinPrice}`;
      cryptoIntervalStart(userCoinPrice, userCoinName, "ten", userCoinPrice);
    } else if (counterOfReminds == 11) {
      h5_sec2_11.classList.remove("hide");
      btn_delete11.classList.remove("hide");

      h5_sec2_11.innerText = `Котировка: ${nameOfCoin.toUpperCase()}. Цена уведомления: ${userCoinPrice}`;
      cryptoIntervalStart(userCoinPrice, userCoinName, "eleven", userCoinPrice);
    } else if (counterOfReminds == 12) {
      h5_sec2_12.classList.remove("hide");
      btn_delete12.classList.remove("hide");

      h5_sec2_12.innerText = `Котировка: ${nameOfCoin.toUpperCase()}. Цена уведомления: ${userCoinPrice}`;
      cryptoIntervalStart(userCoinPrice, userCoinName, "twelve", userCoinPrice);
    } else if (counterOfReminds >= 13) {
      alert("Нельзя больше добавить упоминаний!");
    }
  }
}

function cryptoIntervalStart(
  cryptoPrice,
  cryptoName,
  whatRow,
  whatName,
  whatSide
) {
  let promise = new Promise(function (resolve, reject) {
    timerId1 = setInterval(function () {
      fetch(
        `https://fapi.binance.com/fapi/v1/ticker/price?symbol=${cryptoName}`
      )
        .then(function (response) {
          return response.json();
        })
        .then(function (data) {
          let correctData = +data.price;
          let toFixedData = correctData;

          if (whatRow == "first") {
            h5_sec2_1.innerText = `Котировка: ${cryptoName}. Цена уведомления: ${whatName}. Цена ${cryptoName}: ${toFixedData}`;

            if (whatSide == "long") {
              if (toFixedData >= cryptoPrice) {
                resolve({ name: cryptoName, price: toFixedData, number: 1 });
                clearInterval(timerId1);
              }
            } else if (whatSide == "short") {
              if (toFixedData <= cryptoPrice) {
                resolve({ name: cryptoName, price: toFixedData, number: 1 });
                clearInterval(timerId1);
              }
            }
          } else if (whatRow == "second") {
            h5_sec2_2.innerText = `Котировка: ${cryptoName}. Цена уведомления: ${whatName}. Цена ${cryptoName}: ${toFixedData}`;

            if (whatSide == "long") {
              if (toFixedData >= cryptoPrice) {
                resolve({ name: cryptoName, price: toFixedData, number: 2 });
                clearInterval(timerId1);
              }
            } else if (whatSide == "short") {
              if (toFixedData <= cryptoPrice) {
                resolve({ name: cryptoName, price: toFixedData, number: 2 });
                clearInterval(timerId1);
              }
            }
          } else if (whatRow == "third") {
            h5_sec2_3.innerText = `Котировка: ${cryptoName}. Цена уведомления: ${whatName}. Цена ${cryptoName}: ${toFixedData}`;

            if (whatSide == "long") {
              if (toFixedData >= cryptoPrice) {
                resolve({ name: cryptoName, price: toFixedData, number: 3 });
                clearInterval(timerId1);
              }
            } else if (whatSide == "short") {
              if (toFixedData <= cryptoPrice) {
                resolve({ name: cryptoName, price: toFixedData, number: 3 });
                clearInterval(timerId1);
              }
            }
          } else if (whatRow == "fourth") {
            h5_sec2_4.innerText = `Котировка: ${cryptoName}. Цена уведомления: ${whatName}. Цена ${cryptoName}: ${toFixedData}`;

            if (whatSide == "long") {
              if (toFixedData >= cryptoPrice) {
                resolve({ name: cryptoName, price: toFixedData, number: 4 });
                clearInterval(timerId1);
              }
            } else if (whatSide == "short") {
              if (toFixedData <= cryptoPrice) {
                resolve({ name: cryptoName, price: toFixedData, number: 4 });
                clearInterval(timerId1);
              }
            }
          } else if (whatRow == "fifth") {
            h5_sec2_5.innerText = `Котировка: ${cryptoName}. Цена уведомления: ${whatName}. Цена ${cryptoName}: ${toFixedData}`;

            if (whatSide == "long") {
              if (toFixedData >= cryptoPrice) {
                resolve({ name: cryptoName, price: toFixedData, number: 5 });
                clearInterval(timerId1);
              }
            } else if (whatSide == "short") {
              if (toFixedData <= cryptoPrice) {
                resolve({ name: cryptoName, price: toFixedData, number: 5 });
                clearInterval(timerId1);
              }
            }
          } else if (whatRow == "sixth") {
            h5_sec2_6.innerText = `Котировка: ${cryptoName}. Цена уведомления: ${whatName}. Цена ${cryptoName}: ${toFixedData}`;

            if (whatSide == "long") {
              if (toFixedData >= cryptoPrice) {
                resolve({ name: cryptoName, price: toFixedData, number: 6 });
                clearInterval(timerId1);
              }
            } else if (whatSide == "short") {
              if (toFixedData <= cryptoPrice) {
                resolve({ name: cryptoName, price: toFixedData, number: 6 });
                clearInterval(timerId1);
              }
            }
          } else if (whatRow == "seventh") {
            h5_sec2_7.innerText = `Котировка: ${cryptoName}. Цена уведомления: ${whatName}. Цена ${cryptoName}: ${toFixedData}`;

            if (whatSide == "long") {
              if (toFixedData >= cryptoPrice) {
                resolve({ name: cryptoName, price: toFixedData, number: 7 });
                clearInterval(timerId1);
              }
            } else if (whatSide == "short") {
              if (toFixedData <= cryptoPrice) {
                resolve({ name: cryptoName, price: toFixedData, number: 7 });
                clearInterval(timerId1);
              }
            }
          } else if (whatRow == "eigth") {
            h5_sec2_8.innerText = `Котировка: ${cryptoName}. Цена уведомления: ${whatName}. Цена ${cryptoName}: ${toFixedData}`;

            if (whatSide == "long") {
              if (toFixedData >= cryptoPrice) {
                resolve({ name: cryptoName, price: toFixedData, number: 8 });
                clearInterval(timerId1);
              }
            } else if (whatSide == "short") {
              if (toFixedData <= cryptoPrice) {
                resolve({ name: cryptoName, price: toFixedData, number: 8 });
                clearInterval(timerId1);
              }
            }
          } else if (whatRow == "nineth") {
            h5_sec2_9.innerText = `Котировка: ${cryptoName}. Цена уведомления: ${whatName}. Цена ${cryptoName}: ${toFixedData}`;

            if (whatSide == "long") {
              if (toFixedData >= cryptoPrice) {
                resolve({ name: cryptoName, price: toFixedData, number: 9 });
                clearInterval(timerId1);
              }
            } else if (whatSide == "short") {
              if (toFixedData <= cryptoPrice) {
                resolve({ name: cryptoName, price: toFixedData, number: 9 });
                clearInterval(timerId1);
              }
            }
          } else if (whatRow == "ten") {
            h5_sec2_10.innerText = `Котировка: ${cryptoName}. Цена уведомления: ${whatName}. Цена ${cryptoName}: ${toFixedData}`;

            if (whatSide == "long") {
              if (toFixedData >= cryptoPrice) {
                resolve({ name: cryptoName, price: toFixedData, number: 10 });
                clearInterval(timerId1);
              }
            } else if (whatSide == "short") {
              if (toFixedData <= cryptoPrice) {
                resolve({ name: cryptoName, price: toFixedData, number: 10 });
                clearInterval(timerId1);
              }
            }
          } else if (whatRow == "eleven") {
            h5_sec2_11.innerText = `Котировка: ${cryptoName}. Цена уведомления: ${whatName}. Цена ${cryptoName}: ${toFixedData}`;

            if (whatSide == "long") {
              if (toFixedData >= cryptoPrice) {
                resolve({ name: cryptoName, price: toFixedData, number: 11 });
                clearInterval(timerId1);
              }
            } else if (whatSide == "short") {
              if (toFixedData <= cryptoPrice) {
                resolve({ name: cryptoName, price: toFixedData, number: 11 });
                clearInterval(timerId1);
              }
            }
          } else if (whatRow == "twelve") {
            h5_sec2_12.innerText = `Котировка: ${cryptoName}. Цена уведомления: ${whatName}. Цена ${cryptoName}: ${toFixedData}`;
            if (whatSide == "long") {
              if (toFixedData >= cryptoPrice) {
                resolve({ name: cryptoName, price: toFixedData, number: 12 });
                clearInterval(timerId1);
              }
            } else if (whatSide == "short") {
              if (toFixedData <= cryptoPrice) {
                resolve({ name: cryptoName, price: toFixedData, number: 12 });
                clearInterval(timerId1);
              }
            }
          }
        });
    }, 500);
  });

let timerIdForCheckSleep;
let agreeForBlick = true;

function recurseFunctionToBlick(){
  if (agreeForBlick == false) {
    return;
  }

  setTimeout(()=>{
    document.body.classList.add('red');
    document.body.classList.remove('blue');
  },5);

  setTimeout(()=>{
    document.body.classList.add('blue');
    document.body.classList.remove('red');
  },10);

  setTimeout(recurseFunctionToBlick, 100);

  console.log('работает рекурсия')

}

  promise
    .then(function (data) {
      if (data.number == 1) {
        audio1.play();

        document.querySelector('.container').classList.add('hide');


        let newContainer = document.createElement('div');
        newContainer.classList.add('containerForSleep');
        newContainer.innerHTML = `
          <p class="textForSleep">${data.name} достиг ${data.price} цены!</p>
          <div class="wrapperForSleep">
            <button class="buttonCheckSleep">STOP</button>
          </div>

        `;
        document.body.append(newContainer);
        agreeForBlick = true;
        recurseFunctionToBlick();

        document.querySelector('.buttonCheckSleep').addEventListener('click', () => {
          clearInterval(timerIdForCheckSleep);
          document.querySelector('.containerForSleep').remove();
          document.querySelector('.container').classList.remove('hide');
          audio1.pause();

          document.querySelector('.nameOfCoin').value = '';
          document.querySelector('.nameOfCoin').focus();
          document.querySelector('.priceOfCoin').value = '';
          agreeForBlick = false;
        }, {once:true});


        setTimeout(()=>{
          timerIdForCheckSleep = setInterval( () => {
            audio1.play();
          },3000);
        },5);


    // це я написав тільки для першого, ще потрібно кожному дописати щоб в нього таке вискакувало

        counterOfReminds--;
        h5_sec2_1.classList.add("hide");
        btn_delete1.classList.add("hide");



      } else if (data.number == 2) {
        audio1.play();
        alert(`${data.name} достиг ${data.price} цены!`);
        counterOfReminds--;
        h5_sec2_2.classList.add("hide");
        btn_delete2.classList.add("hide");
      } else if (data.number == 3) {
        audio1.play();
        alert(`${data.name} достиг ${data.price} цены!`);
        counterOfReminds--;
        h5_sec2_3.classList.add("hide");
        btn_delete3.classList.add("hide");
      } else if (data.number == 4) {
        audio1.play();
        alert(`${data.name} достиг ${data.price} цены!`);
        counterOfReminds--;
        h5_sec2_4.classList.add("hide");
        btn_delete4.classList.add("hide");
      } else if (data.number == 5) {
        audio1.play();
        alert(`${data.name} достиг ${data.price} цены!`);
        counterOfReminds--;
        h5_sec2_5.classList.add("hide");
        btn_delete5.classList.add("hide");
      } else if (data.number == 6) {
        audio1.play();
        alert(`${data.name} достиг ${data.price} цены!`);
        counterOfReminds--;
        h5_sec2_6.classList.add("hide");
        btn_delete6.classList.add("hide");
      } else if (data.number == 7) {
        audio1.play();
        alert(`${data.name} достиг ${data.price} цены!`);
        counterOfReminds--;
        h5_sec2_7.classList.add("hide");
        btn_delete7.classList.add("hide");
      } else if (data.number == 8) {
        audio1.play();
        alert(`${data.name} достиг ${data.price} цены!`);
        counterOfReminds--;
        h5_sec2_8.classList.add("hide");
        btn_delete8.classList.add("hide");
      } else if (data.number == 9) {
        audio1.play();
        alert(`${data.name} достиг ${data.price} цены!`);
        counterOfReminds--;
        h5_sec2_9.classList.add("hide");
        btn_delete9.classList.add("hide");
      } else if (data.number == 10) {
        audio1.play();
        alert(`${data.name} достиг ${data.price} цены!`);
        counterOfReminds--;
        h5_sec2_10.classList.add("hide");
        btn_delete10.classList.add("hide");
      } else if (data.number == 11) {
        audio1.play();
        alert(`${data.name} достиг ${data.price} цены!`);
        counterOfReminds--;
        h5_sec2_11.classList.add("hide");
        btn_delete11.classList.add("hide");
      } else if (data.number == 12) {
        audio1.play();
        alert(`${data.name} достиг ${data.price} цены!`);
        counterOfReminds--;
        h5_sec2_12.classList.add("hide");
        btn_delete12.classList.add("hide");
      }
    })
    .catch(function (err) {
      console.log(err);
    });
}

// Логіка вже дописана вся на те коли уведомлялки приходять і так далі. Тільки дописати потрібно наступне:

//написати обработчик собития для delete кнопки біля уведомлялок. Але щоб також відкатувало всі ті проверочні змінні. і так далі щоб по новому колу без проблем запускалось воно.
