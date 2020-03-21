class Game {
  constructor(container) {
    this.container = container;
    this.wordElement = container.querySelector('.word');
    this.winsElement = container.querySelector('.status__wins');
    this.lossElement = container.querySelector('.status__loss');

    this.reset();

    this.registerEvents();
  }

  reset() {
    this.setNewWord();
    this.winsElement.textContent = 0;
    this.lossElement.textContent = 0;
  }

  registerEvents() {
    // подружил с вводом на разных языках\раскладках, и таймер.
    // но вот 2 и 3е задание если полностью делать, то для меня пока круче диплома... времени не хватает XD

    let interval;

    let timeFunck = () => {
      let timerCount = document.querySelector(".timer");
      let currentWord = document.querySelectorAll("div.word span")
      timerCount.textContent = currentWord.length;

      interval = setInterval(() => {
        if (timerCount.textContent == 0) {
          this.fail();
          currentWord = document.querySelectorAll("div.word span")
          timerCount.textContent = currentWord.length + 1;
        }
        --timerCount.textContent;
      }, 3000)
    }

    timeFunck();

    let showKey = (event) => {
      let keySymbol = "Key" + this.currentSymbol.textContent.toUpperCase(); // по сути универсальное приведение к event.code
      if (keySymbol == event.code) {
        if (this.currentSymbol.nextElementSibling == null) {
          clearInterval(interval);
          timeFunck();
          this.success();
          return;
        }
        this.success();
        
      } else {
        this.fail();
        clearInterval(interval);
        timeFunck();
      }
    }

    document.addEventListener( 'keypress', showKey );

    /*
      TODO:
      Написать обработчик события, который откликается
      на каждый введённый символ.
      В случае правильного ввода слова вызываем this.success()
      При неправильном вводе символа - this.fail();
     */
  }

  success() {
    this.currentSymbol.classList.add('symbol_correct');
    this.currentSymbol = this.currentSymbol.nextElementSibling;
    if (this.currentSymbol !== null) {
      return;
    }

    if (++this.winsElement.textContent === 10) {
      alert('Победа!');
      this.reset();
    }
    this.setNewWord();
  }

  fail() {
    if (++this.lossElement.textContent === 5) {
      alert('Вы проиграли!');
      this.reset();
    }
    this.setNewWord();
  }

  setNewWord() {
    const word = this.getWord();

    this.renderWord(word);
  }

  getWord() {
    const words = [
        'bob',
        'awesome',
        'netology',
        'hello',
        'kitty',
        'rock',
        'youtube',
        'popcorn',
        'cinema',
        'love',
        'javascript'
      ],
      index = Math.floor(Math.random() * words.length);

    return words[index];
  }

  renderWord(word) {
    const html = [...word]
      .map(
        (s, i) =>
          `<span class="symbol ${i === 0 ? 'symbol_current': ''}">${s}</span>`
      )
      .join('');
    this.wordElement.innerHTML = html;

    this.currentSymbol = this.wordElement.querySelector('.symbol_current');
  }
}

new Game(document.getElementById('game'))

a = "аф";
console.log(a.charCodeAt(0))
console.log(String.fromCharCode(1072))
