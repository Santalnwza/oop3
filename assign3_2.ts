const CourseStatus = {
    Open: "Open",
    Closed: "Closed",
    Full: "Full"
} as const;

type CourseStatus = typeof CourseStatus[keyof typeof CourseStatus];

interface Student {
    name: string;
    id: number;
}

interface Course {
    title: string;
    code: string;
    status: CourseStatus;
    students: Student[];
}

function enroll(student: Student, course: Course): void {
    if (course.status === CourseStatus.Open) {
        course.students.push(student);
        console.log(`Successfully enrolled ${student.name} in ${course.title}.`);
    } else {
        console.log(`Cannot enroll ${student.name}. Course ${course.title} is currently ${course.status}.`);
    }
}

const student1: Student = { id: 6601, name: "Somchai" };
const student2: Student = { id: 6602, name: "Somsri" };

const TypeScriptCourse: Course = {
    title: "Intro to TypeScript",
    code: "TS101",
    status: CourseStatus.Open,
    students: []
};

const JavaCourse: Course = {
    title: "Advanced Java",
    code: "JV202",
    status: CourseStatus.Full,
    students: []
};

enroll(student1, TypeScriptCourse); 
enroll(student2, JavaCourse);