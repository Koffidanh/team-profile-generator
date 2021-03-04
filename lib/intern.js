class Intern {
    constructor(name, id, email, schoolName,role) {
        this.name = name;
        this.id = id;
        this.email = email;
        this.schoolName = schoolName;
        this.role = role;
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
    getRole() {
        return this.role;
    }
}
module.exports = Intern;
