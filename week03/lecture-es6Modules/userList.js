// console.log('Hello from userList');

const someStudents = [
  { name: 'Eudes', age: 30 },
  { name: 'Harun', age: 28 },
  { name: 'Kat', age: 27 },
];

let moreStudents = [
  { name: 'Priyanka', age: 30 },
  { name: 'Rohini', age: 28 },
  { name: 'Lukas', age: 27 },
];

const rosterListing = document.querySelector('.rosterListing');

someStudents.forEach((student) => {
  const p = document.createElement('p');
  p.textContent = `Name: ${student.name}, Age: ${student.age}`;
  rosterListing.appendChild(p);
});

const loadMoreStudents = (e) => {
  moreStudents.forEach((student) => {
    const p = document.createElement('p');
    p.textContent = `Name: ${student.name}, Age: ${student.age}`;
    rosterListing.appendChild(p);
  });
  e.target.disabled = true;
};

// export default loadMoreStudents;

export { moreStudents, loadMoreStudents as default };
