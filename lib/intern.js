class Intern {
    constructor(name, id, email, schoolName) {
        this.name = name;
        this.id = id;
        this.email = email;
        this.schoolName = schoolName;
    }
    getName() {
        return this.name;
    }
    getId() {
        return this.id;
    }
    getEmail() {
        return this.email;
    }
    getSchoolName() {
        return this.schoolName;
    }
}
module.exports = Intern;
