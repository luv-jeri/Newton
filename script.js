const userInput = document.getElementById('user-input');
const findButton = document.getElementById('find-button');

class GithubCard {
  #wrapper = document.getElementById('wrapper');
  constructor(avatar_url, name, login, bio) {
    this.avatar_url = avatar_url;
    this.name = name;
    this.login = login;
    this.bio = bio;
    this.card = null;
  }
  create() {
    const card = document.createElement('div');
    card.classList.add = 'git-card';
    const img = document.createElement('img');
    img.src = this.avatar_url;
    img.height = 100;
    img.width = 100;
    const name = document.createElement('h2');
    name.innerText = this.name;
    const a = document.createElement('a');
    a.href = `http://github.com/${this.login}`;
    a.innerText = this.login;
    const login = document.createElement('h3');
    login.innerText = this.login;
    const bio = document.createElement('p');
    bio.innerText = this.bio;
    const button = document.createElement('button');
    button.innerText = 'Remove';
    button.addEventListener('click', () => {
      this.remove();
    })
    card.append(img, name, a, login, bio, button);
    this.card = card;
    return card;
  }
  render() {
    this.create();
    this.#wrapper.append(this.card);
  }
  remove() {
    this.card.remove();
  }
}

const findUser = () => {
  const promise = axios.get(`https://api.github.com/users/${userInput.value}`);

  promise.then((response) => {
    const userCard = new GithubCard(
      response.data.avatar_url,
      response.data.name,
      response.data.login,
      response.data.bio
    );
    userCard.render();
  });
};

findButton.addEventListener('click', findUser);
