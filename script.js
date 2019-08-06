class List {
  constructor(divId, list, users) {
    this.divId = divId;
    this.list = list;
    this.users = users;
  }

  init() {
    document.querySelector(this.divId).addEventListener('click', (ev) => {
      if(ev.target.tagName === 'LI') {
        const idx = ((ev.target.dataset.key*1) - 1);
        this.users[idx].selected = !this.users[idx].selected;
        this.render();
      }
    });
    this.render();
  }

  render() {
    const people = this.users.filter(user => {
      return user.list === this.list;
    });

    const html = `
      <h2>${this.list}</h2>
      <ul>
        ${
          people.map(user => `<li data-key="${user.id}"${user.selected ? 'class="selected"' : ''}>${user.name}</li>`).join('')
        }
      </ul>
    `;
    document.querySelector(this.divId).innerHTML = html;
  }
}

const users = [
  { id: 1, name: 'moe', list: 'First' },
  { id: 2, name: 'larry', list: 'Second' },
  { id: 3, name: 'curly', list: 'Third' },
  { id: 4, name: 'lucy', list: 'Third', selected: true },
];

const firstList = new List('#first', 'First', users);
firstList.init();

const secondList = new List('#second', 'Second', users);
secondList.init();

const thirdList = new List('#third', 'Third', users);
thirdList.init();



