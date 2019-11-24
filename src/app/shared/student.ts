export interface IStudent {
    _id: String;
    student_name: String;
    student_email: String;
    dob: Date;
    gender: String;
}

export class Student implements IStudent {
    _id: String;
    student_name: String;
    student_email: String;
    dob: Date;
    gender: String;

    constructor(student: IStudent)
    constructor(student: any){
        this._id = (student && student._id) || null;
        this.student_name = (student && student.student_name) || null;
        this.student_email = (student && student.student_email) || null;
        this.dob = (student && student.dob) || null;
        this.gender = (student && student.gender) || null;
    }
 }