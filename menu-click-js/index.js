const arr = [
    {
      id: 1,
      text: 'В детстве Дима очень любил сидеть на горшке и раскрашивать картинки, годы идут, интересы меняются, теперь Дима любит сидеть на унитазе и читать газеты.'
    },
    { id: 2, text: '«Доброе утро!» - это когда на часах 11:00, на календаре лето, а за окном Атлантический океан.' },
    { id: 3, text: 'Мало кто знает лаборантку Марии и Пьера Кюри, да она особо и не светилась.' },
    { id: 4, text: 'По подсчетам ученых, 60% людей симулировало эволюцию.' },
    { id: 5, text: 'Чтобы не перепутать, бабушка одного котенка назвала Барсик, а второго утопила.' },
    { id: 6, text: 'Я часто сую пальцы в розетку, хотите спросить зачем, лучше спросите почему у меня такие тонкие пальцы.' },
    { id: 7, text: 'Я жутко сексуальный! Я когда в душе моюсь - ко мне даже шторка липнет.' },
  ];
  
  const jokeContainer = document.querySelector('.joke-container');
  const menu = document.querySelector('.menu');
  const menuItems = document.querySelectorAll('.list-items');
  const burgerMenu = document.querySelector('.burger-menu');
  const listContainer = document.querySelector('.list-container');
  const section = document.createElement('section');
  
  menuItems.forEach((element, id) => {
    element.setAttribute('id', id);
    element.addEventListener('click', menu_click);
  });
  
  function menu_click() {
    
    section.classList.add('section');
    section.setAttribute('prev', this.id);
    section.innerText = arr[this.id].text;
    let prev = jokeContainer.querySelector('section');
    if (prev)
      prev.remove();
    jokeContainer.insertAdjacentElement('afterbegin', section);
  }
  
  burgerMenu.addEventListener('click', burger_menu_click)
  
  function burger_menu_click() {
    let burgerMenuChilds = burgerMenu.getElementsByClassName('burger-lines');
  
    for (let i = 0; i < [...burgerMenuChilds].length; i++) {
        if (i == 0){
          burgerMenuChilds[i].classList.toggle('rotate-top__line');
        }
        if (i == 1) {
          burgerMenuChilds[i].classList.toggle('hidden-center-line');
        }
        if(i == 2){
          burgerMenuChilds[i].classList.toggle('rotate-bottom__line');
        }
    }
  
    menu.classList.toggle('menu-visibility');
    listContainer.classList.toggle('list-container-width');
  
    if(!menu.classList.contains('menu-visibility')){
      section.remove();
    }
  }