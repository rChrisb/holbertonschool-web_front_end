const globalVariable = "Welcome";

const outer = function () {
  alert(globalVariable);
  let course = "Holberton";
  const inner = function () {
    alert(`${globalVariable} ${course}`);
    let exclamation = "!";
    const inception = function () {
      alert(`${globalVariable} ${course}${exclamation}`);
    };
    inception();
  };
  inner();
};
outer();
