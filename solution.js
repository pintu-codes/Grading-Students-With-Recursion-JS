function gradingStudents(grades) {
  return grades.map((grade) => {
    if (grade > 37) {
      const offset = 5 - (grade % 5);
      if (offset < 3) {
        grade += offset;
      }
    }
    return grade;
  });
}

console.log(gradingStudents([0,25,38,56,89,77,78,57,58]));
