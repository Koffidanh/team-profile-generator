class Engineer {
    constructor(name, id, email, gitHub,role,icon) {
        this.name = name;
        this.id = id;
        this.email = email;
        this.gitHub = gitHub;
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
    getGitHub() {
        return this.gitHub;
    }
    getRole() {
        return this.role;
    }
    getIcon() {
        return this.icon;
    }
}
module.exports = Engineer;
