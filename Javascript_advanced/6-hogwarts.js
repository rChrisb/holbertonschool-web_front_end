const studentsHogwarts = {
  privateScrore: 0,
  name: null,
  changeScoreBy(points) {
    this.privateScrore += points;
  },
  setName(newName) {
    this.name = newName;
  },
  rewardStudent() {
    this.changeScoreBy(1);
  },
  penalizeStudent() {
    this.changeScoreBy(-1);
  },
  getScore() {
    return `${this.name}: ${this.privateScrore}`;
  },
};

const harry = Object.create(studentsHogwarts);
harry.name = "Harry";
harry.rewardStudent();
harry.rewardStudent();
harry.rewardStudent();
harry.rewardStudent();
console.log(harry.getScore());
const draco = Object.create(studentsHogwarts);
draco.name = "Draco";
draco.rewardStudent();
draco.penalizeStudent();
draco.penalizeStudent();
draco.penalizeStudent();
console.log(draco.getScore());
