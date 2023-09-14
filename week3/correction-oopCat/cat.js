export default class Cat {
  #name;
  #hunger;
  #tiredness;
  #loneliness;
  #happiness;
  #container;

  constructor(name, initialStats, domContainer) {
    this.#name = name;
    this.#hunger = initialStats;
    this.#tiredness = initialStats;
    this.#loneliness = initialStats;
    this.#happiness = -initialStats + 10;
    this.#container = domContainer;
    this.init();
  }

  init() {
    const figure = document.createElement('figure');
    figure.classList.add('flex', 'flex-col', 'items-center', 'gap-4');

    const img = document.createElement('img');
    img.src = 'https://cataas.com/cat';
    img.alt = 'A cute cat';
    img.classList.add(
      'w-30',
      'sm:w-48',
      'md:w-56',
      'lg:w-96',
      'aspect-square',
      'object-center',
      'object-cover',
      'rounded-full'
    );

    const figCap = document.createElement('figcaption');
    figCap.textContent = `Hi, I am ${this.#name}`;
    figCap.classList.add('text-2xl');

    figure.appendChild(img);
    figure.appendChild(figCap);

    const btnWrapper = document.createElement('div');
    btnWrapper.classList.add(
      'btm-nav',
      'static',
      'mb-2',
      'px-4',
      'max-w-xl',
      'gap-4'
    );

    const feedBtn = document.createElement('button');
    feedBtn.classList.add('text-white', 'bg-primary', 'rounded-xl');
    feedBtn.textContent = 'Feed';
    feedBtn.addEventListener('click', () => this.feed());

    const playBtn = document.createElement('button');
    playBtn.classList.add('text-white', 'bg-primary', 'rounded-xl');
    playBtn.textContent = 'Play';
    playBtn.addEventListener('click', () => this.pet());

    const restBtn = document.createElement('button');
    restBtn.classList.add('text-white', 'bg-primary', 'rounded-xl');
    restBtn.textContent = `Let ${this.#name} rest`;
    restBtn.addEventListener('click', () => this.sleep());

    btnWrapper.appendChild(feedBtn);
    btnWrapper.appendChild(playBtn);
    btnWrapper.appendChild(restBtn);

    this.#container.replaceChildren(figure, btnWrapper);
    this.displayStatus();
  }

  displayStatus() {
    const currentStats = document.querySelector('#catStats');
    if (currentStats) currentStats.remove();
    const statLine = document.createElement('div');
    statLine.setAttribute('id', 'catStats');
    statLine.classList.add('flex', 'items-center', 'gap-8');

    const statlineClasses = [
      'text-white',
      'bg-neutral',
      'px-4',
      'py-2',
      'rounded-lg',
      'text-center',
      'basis-full',
    ];
    const hungerDiv = document.createElement('div');
    hungerDiv.classList.add(...statlineClasses);
    hungerDiv.innerHTML = `Hunger <br> ${this.#hunger}`;
    const sleepDiv = document.createElement('div');
    sleepDiv.classList.add(...statlineClasses);
    sleepDiv.innerHTML = `Tiredness <br> ${this.#tiredness}`;
    const boredomDiv = document.createElement('div');
    boredomDiv.classList.add(...statlineClasses);
    boredomDiv.innerHTML = `Loneliness <br> ${this.#loneliness}`;
    const satisfactionDiv = document.createElement('div');
    satisfactionDiv.classList.add(...statlineClasses);
    satisfactionDiv.innerHTML = `Happiness <br> ${this.#happiness}`;

    statLine.appendChild(hungerDiv);
    statLine.appendChild(sleepDiv);
    statLine.appendChild(boredomDiv);
    statLine.appendChild(satisfactionDiv);
    this.#container.prepend(statLine);
  }

  feed() {
    if (this.#hunger <= 0) return alert('I am not hungry anymore');
    this.#hunger--;
    this.makeHappy(this.#hunger);
  }

  sleep() {
    if (this.#tiredness <= 0) return alert("I don't want to sleep anymore!");
    this.#tiredness--;
    this.#hunger++;
    this.makeHappy(this.#tiredness, this.#hunger);
  }

  pet() {
    if (this.#loneliness <= 0) return alert('LEAVE ME ALOOOOOOONE');
    this.#loneliness--;
    this.#tiredness++;
    this.makeHappy(this.#loneliness, this.#tiredness);
  }

  makeHappy(decreased, increased = 0) {
    if (!decreased) this.#happiness++;
    if (increased > 8) this.#happiness--;
    this.displayStatus();
    if (!this.#happiness) this.endGame('neglect');
    if (
      (!this.#hunger && !this.#tiredness && !this.#loneliness) ||
      this.#happiness === 10
    ) {
      this.#happiness = 10;
      this.displayStatus();
      this.endGame();
    }
  }

  endGame(reason) {
    const dialog = document.createElement('dialog');
    dialog.classList.add('modal');

    const dialogBox = document.createElement('div');
    dialogBox.classList.add('modal-box', 'text-center');

    const p = document.createElement('p');
    this.#happiness === 10
      ? (p.textContent = `${this.#name} is very happy! Well done!`)
      : (p.textContent = `It seems ${this.#name} ran away from ${reason}`);

    const btn = document.createElement('button');
    btn.classList.add('btn', 'btn-secondary', 'mt-4');
    btn.textContent = 'Start again';

    btn.addEventListener('click', () => {
      document.location.reload();
    });

    dialogBox.appendChild(p);
    dialogBox.appendChild(btn);
    dialog.appendChild(dialogBox);
    this.#container.appendChild(dialog);
    dialog.showModal();
  }
}
