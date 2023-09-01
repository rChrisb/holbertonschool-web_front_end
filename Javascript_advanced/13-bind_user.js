const user = {
  hobby: "Calligraphy",
  favoriteSport: "Hockey",
  astrologicalSign: "Aries",
  firstName: "Buillaume",
  lastName: "Ialva",
  location: "Telaviv",
  occupation: "Engineer",
};

const logWelcomeUser = function (welcomeString) {
  console.log(
    `${welcomeString}, ${this.firstName}. Your occupation is ${this.occupation}`
  );
};

const bindLogWelcomeUser = logWelcomeUser.bind(user);
bindLogWelcomeUser("Welcome");
