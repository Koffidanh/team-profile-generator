class Intern {
    constructor(name, id, email, schoolName,role,icon) {
        this.name = name;
        this.id = id;
        this.email = email;
        this.schoolName = schoolName;
        this.role = role;
        this.icon = icon;
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
    getIcon() {
        return this.icon;
    }
}
module.exports = Intern;
