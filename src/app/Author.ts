export class Author {

    constructor(private _id: number, private _name: string, private _photo: string) {

    }

    get name() {
        return this._name;
    }

    set name(value) {
        this._name = value;
    }

    get id() {
        return this._id;
    }

    set id(idValue) {
        this._id = idValue;
    }

    get photo() {
        return this._photo;
    }

    set photo(path) {
        this._photo = path;
    }
}