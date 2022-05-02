// https://www.codewars.com/kata/6089c7992df556001253ba7d
class Song {
  constructor(title, artist, listeners) {
    this.title = title;
    this.artist = artist;
    this.listeners = [];
  }

  howMany(array) {
    let result = 0;

    array.forEach(listener => {
      if (this.listeners?.includes(listener.toLowerCase())) {
        result += 0;
      } else {
        this.listeners?.push(listener.toLowerCase());
        result += 1;
      }
    });

    return result;
  }
}
