function gradingStudents(grades) {
  return grades.map((grade) => {
    const nextMultipleOf5 = (Math.ceil(grade / 5) * 5)
    const difference = nextMultipleOf5 - grade

    return difference >= 3 || grade < 38 ? grade : nextMultipleOf5
  })
}

const grades = [73, 67, 38, 33]

console.log(gradingStudents(grades))