// CODE here for your Lambda Classes

class Person {
    constructor(attributes){
        this.name = attributes.name;
        this.age = attributes.age;
        this.location = attributes.location;
        this.gender = attributes.gender;
    }
    speak(){
        return `Hello my name is ${this.name}, I am from ${this.location}`;
    }
}

class Instructor extends Person {
    constructor(attributes){
        super(attributes);
        this.specialty = attributes.specialty;
        this.favLanguage = attributes.favLanguage;
        this.catchPrase = attributes.catchPrase;
    }
    demo(subject){
        return `Today we are learning about ${subject}!`;
    }
    grade(student, subject){
        return `${student.name} receives a perfect score on ${subject}`;
    }
    changeGrade(student){
        let rand = Math.floor(Math.random() * 5) + 1;
        let addMinus = Math.floor(Math.random() * 2);
        let type = ''
        if (addMinus % 2 === 0){
            type = '+'
            student.grade += rand;
        } else {
            type = '-'
            student.grade -= rand;
        }
        if (student.grade > 100){
            student.grade = 100;
            return `${student.name} has a perfect score of 100`;
        } else if (student.grade < 0){
            student.grade = 0;
            return `${student.name} has a grade of 0 and is riding the struggle bus, which is now in flames.`;
        } else {
            return `${this.name} changed ${student.name}'s grade by ${type}${rand} points to ${student.grade}`;
        }
    }
}

class Student extends Person {
    constructor(attributes){
        super(attributes);
        this.previousBackground = attributes.previousBackground;
        this.className = attributes.className;
        this.favSubjects = attributes.favSubjects;
        this.grade = attributes.grade;
    }
    listsSubjects(){
        return `${this.name}'s favorite subjects are ${[...this.favSubjects]}`;
    }
    PRAssignment(subject){
        return `${this.name} has submitted a PR for ${subject}`;
    }
    sprintChallenge(subject){
        return `${this.name} has begun sprint challenge on ${subject}`;
    }
    graduate(){
        return this.grade >= 70 ? `${this.name} graduated from Lambda with a score of ${this.grade}!`
        : `${this.name} isn't ready to graduate yet. Keep working to get those grades up past 70%!`
    }
}

class ProjectManager extends Instructor {
    constructor(attributes){
        super(attributes);
        this.gradClassName = attributes.gradClassName;
        this.favInstructor = attributes.favInstructor;
    }
    standup(channel){
        return `${this.name} announces to ${channel} @channel standy times!`;
    }
    debugsCode(student, subject){
        return `${this.name} debugs ${student.name}'s code on ${subject}`;
    }
}

// Instructor Objects
const josh = new Instructor({
    name: 'Josh',
    location: 'Utah',
    age: 30,
    gender: 'male',
    favLanguage: 'JavaScript',
    specialty: 'Front-end',
    catchPhrase: `Check yourself before you wreck yourself`
});

const ryan = new Instructor({
    name: 'Ryan',
    location: 'Mars',
    age: 32,
    gender: 'male',
    favLanguage: 'JavaScript',
    specialty: 'React',
    catchPhrase: `Don't forget the homies!`
});

// Student Objects
const andrew = new Student({
    name: 'Andrew',
    location: 'Austin',
    age: 28,
    gender: 'male',
    favLanguage: 'Python',
    specialty: 'Web Scraping',
    catchPhrase: `Same same... but different`,
    previousBackground: 'Digital Marketing',
    className: 'Web18',
    favSubjects: ['Psychology', ' Nootropics', ' Technology', ' Music'],
    grade: 96
});

const nate = new Student({
    name: 'Nate',
    location: 'Dallas',
    age: 27,
    gender: 'male',
    favLanguage: 'JavaScript',
    specialty: 'Node.js',
    catchPhrase: `What's a catchphrase?`,
    previousBackground: 'Real Estate',
    className: 'Web19',
    favSubjects: ['Film History', ' Sports Management', ' Spanish'],
    grade: 88
});

// PM Objects
const steve = new ProjectManager({
    name: 'Steve',
    location: 'Tampa',
    age: 35,
    gender: 'male',
    favLanguage: 'JavaScript',
    specialty: 'React',
    catchPhrase: `Semicolons never saved anybody`,
    gradClassName: 'Web14',
    favInstructor: josh
});

const joby = new ProjectManager({
    name: 'Joby',
    location: 'NYC',
    age: 33,
    gender: 'male',
    favLanguage: 'Swift',
    specialty: 'iOS',
    catchPhrase: `Will code for food`,
    gradClassName: 'Web14',
    favInstructor: ryan
});

console.log(josh.demo('FlexBox'));
console.log(ryan.grade(andrew, 'AdvancedCSS'));
console.log(andrew.listsSubjects());
console.log(nate.PRAssignment('Preprocessors'));
console.log(andrew.sprintChallenge('JavaScript IV'));
console.log(steve.standup('web17_pm-steve'));
console.log(joby.debugsCode(andrew, 'proprototypes'));

// Stretch
console.log(steve.changeGrade(andrew));
console.log(nate.graduate());