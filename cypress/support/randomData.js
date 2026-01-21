export class RandomData {

  getRandomString(length = 8) {
      return Math.random().toString(36).substring(2, 2 + length);
  }

  getUsername() {
      return `user_${this.getRandomString(6)}`;
  }

  getPassword(length = 8) {
      const letters = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ';
      const numbers = '0123456789';
      const specialChars = '!@#$%^&*';

      const all = letters + numbers + specialChars;

      return (
          letters[Math.floor(Math.random() * letters.length)] +
          numbers[Math.floor(Math.random() * numbers.length)] +
          specialChars[Math.floor(Math.random() * specialChars.length)] +
          Array.from({ length: length - 3 }, () =>
              all[Math.floor(Math.random() * all.length)]
          ).join('')
      );
  }

  generateRandomData() {
      const username = this.getUsername();
      const password = this.getPassword();
      return { username, password };
  }

  // NEW: Generate random order data
  generateRandomOrderData() {
      const name = `Name_${this.getRandomString(5)}`;
      const country = `Country_${this.getRandomString(4)}`;
      const city = `City_${this.getRandomString(4)}`;
      const card = Math.floor(Math.random() * 1e16).toString(); // 16-digit card
      const month = 'April';
      const year = '2026';

      return { name, country, city, card, month, year };
  }
}
