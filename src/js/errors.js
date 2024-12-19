class ErrorRepository { 
    constructor() {
        this.errors = new Map();
    } 

    add(code, description) {
        this.errors.set(code, description);
    }

    translate(code) {
        return this.errors.get(code) || 'Unknown error';
    }
}

export default ErrorRepository;