const welcome = function (firstName, lastName) {
  let fullName = firstName + " " + lastName;
  const displayFullName = function () {
    alert(`Welcome ${fullName}!`);
  };
  displayFullName();
};
