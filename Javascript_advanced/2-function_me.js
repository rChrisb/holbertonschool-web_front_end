const welcomeMessage = function (fullName) {
  const closure = function () {
    alert(`Welcome ${fullName}`);
  };
  return closure;
};
const guillaume = welcomeMessage("Guillaume");

const alex = welcomeMessage("Alex");

const fred = welcomeMessage("Fred");
