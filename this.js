// console.log(this);

const kodomAli = {
    name: 'Sagor Alam',
    money: 5000,
    study: 'CSE',
    subjects: ['Calculus', 'Algebra', 'Problem Solving'],
    exam: function () {
        // console.log(this.name,'is participating in an exam');
        console.log(this);
        return this.name + 'is participating in an exam';
    },
    examArrow: () => {
        console.log(this);
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
kodomAli.exam();

const badamAli = {
    name: 'badam Kaku',
    money: 8000
}
badamAli.exam = kodomAli.exam;
badamAli.exam();

function clickHandler() {
    console.log('inside click handler', this);
}
document.getElementById('btn-click2').addEventListener('click', function () {
    console.log(this);
})