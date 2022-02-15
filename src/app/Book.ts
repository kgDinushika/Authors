export class Book {
    constructor(private _name: string, private _authorId: number, private _isbn: string, private _photo:string) {

    }

    get name() {
        return this._name;
    }

    set name(bookName) {
        this._name = bookName;
    }

    get authorId() {
        return this._authorId;
    }

    set authorId(authorId) {
        this._authorId = authorId;
    }

    get isbn() {
        return this._isbn;
    }

    set isbn(value) {
        this._isbn = value;
    }

    get photo() {
        return this._photo;
    }

    set photo(path) {
        this._photo = path;
    }
}