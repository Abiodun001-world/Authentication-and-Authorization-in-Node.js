// model/user.js
class User {
    constructor(username, password, role = 'user') {
      this.username = username;
      this.password = password;
      this.role = role;
    }
  }
  
  // Sample users for testing
  const users = [
    new User('admin', 'adminPassword', 'admin'),
    new User('user1', 'user1Password'),
    new User('user2', 'user2Password'),
  ];
  
  module.exports = { User, users };
  