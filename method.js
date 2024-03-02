const student = {
    name: 'Sagor Alam',
    money: 5000,
    study: 'CSE',
    subjects: ['Calculus', 'Algebra', 'Problem Solving'],
    exam: function () {
        // console.log(this.name,'is participating in an exam');
        return this.name + 'is participating in an exam';
    },
    improveExam: function (subject) {
        this.exam();
        return `${ this.name } is taking improvement exam on ${ subject }`
    },
    treatFee: function (amount, tips) {
        this.money = this.money - amount - tips;
        return this.money;
    }
}
// student.exam();
const output = student.exam();
// console.log(output);

const reExam = student.improveExam('Algebra');
// console.log(reExam);

const remaining = student.treatFee(900, 50);
console.log(remaining);

const extraRemaining = student.treatFee(400, 100);
console.log(extraRemaining);