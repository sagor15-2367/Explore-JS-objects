const group = {
    name: 'Sagor Alam',
    money: 5000,
    study: 'CSE',
    subjects: ['Calculus', 'Algebra', 'Problem Solving'],
    exam: function () {
        // console.log(this.name,'is participating in an exam');
        return this.name + ' is participating in an exam';
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

const result=group.exam();
// console.log(result);

const badam={
    name:'Badam kaku',
    money:7000
}
const result2=group.exam.call(badam);
const badamMoney=group.treatFee.call(badam,400,40)
// console.log(result2);
// console.log(badamMoney);
const badamMoney2=group.treatFee.apply(badam,[1000,100]);
// console.log(badamMoney2);
const badamTreat=group.treatFee.bind(badam);
const remaining=badamTreat(1000,100);
console.log(remaining);



