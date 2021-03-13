class NotFoundException extends Error {
    constructor() {
        super('Model Not Found')
        this.code = 404
    }
}

module.exports = NotFoundException