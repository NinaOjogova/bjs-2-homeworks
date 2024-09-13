function Student(name, gender, age) {
  this.marks = [];
  this.name = name;
  this.gender = gender;
  this.age = age;
}
new Student("Ольга", "Женский", 22);
new Student("Николай", "Мужской", 34);
Student.prototype.setSubject = function (subjectName) {
  this.subject = subjectName;
}

Student.prototype.addMarks = function (...marksToAdd) {
  if (this.marks) {
    this.marks.push(...marksToAdd);
  } else {
    return 0;
  }
}

Student.prototype.getAverage = function (marks) {
   if (this.marks && this.marks.length > 0) {
    return this.marks.reduce((sum, current) => sum + current, 0) / this.marks.length;
    } else {
      return 0;
    }
}

Student.prototype.exclude = function (reason) {
  delete this.subject;
  delete this.marks;
  this.excluded = reason;
}
