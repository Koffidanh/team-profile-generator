class Manager {
    constructor(name, id, email, officeNumber, role, icon) {
        this.name = name;
        this.id = id;
        this.email = email;
        this.officeNumber = officeNumber;
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
    getOfficeNumber() {
        return this.officeNumber;
    }
    getRole() {
        return this.role;
    }
    getIcon() {
        return this.icon;
    }
}
module.exports = Manager;
