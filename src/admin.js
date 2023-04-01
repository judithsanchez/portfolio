class User {
  constructor(username, password) {
    this.username = username;
    this.password = password;
  }

  checkCredentials(username, password) {
    return this.username === username && this.password === password;
  }
}

const judithsanchez = new User('yuyi', '120720');

export default judithsanchez;
