const cohort = {
  name: 'May2022',
  id: 1234,
  names: ['abi', 'dora', 'hayley', 'miranda']
};

const student = (object) => {
  console.log(`${object.id} - ${object.name} - ${object.names.length} students in this cohort`)
}

console.log(student(cohort))