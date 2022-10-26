// #new keyword
// * new keyword id going to create a blank object for us
// * it will change the this keyword poniter to the new object
// * it is going to make variable points to the new object
function ProgramingLanguage(name, diff, year, framework, uses) {
  this.name = name;
  this.diff = diff;
  this.year = year;
  this.framework = framework;
  this.uses = uses;

  this.print = function () {
    console.log('This is ', this.name);
  };
  this.hello = "Hello";
  this.arr = [1,2,4]

}

const js = new ProgramingLanguage('JavaScript', 'easy', 1995, 'React', 'web');
const py = new ProgramingLanguage('Python', 'easy', 1991, 'Django', 'web');
const c = new ProgramingLanguage('C', 'hard', 1972, 'none', 'system');

js.print()
py.print()
