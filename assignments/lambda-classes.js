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
}

class Student extends Person {
    constructor(attributes){
        super(attributes);
        this.previousBackground = attributes.previousBackground;
        this.className = attributes.className;
        this.favSubjects = attributes.favSubjects;
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
    favSubjects: ['Psychology', ' Nootropics', ' Technology', ' Music']
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
    favSubjects: ['Film History', ' Sports Management', ' Spanish']
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