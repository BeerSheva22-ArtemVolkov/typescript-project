import Rectangle from "./Rectangle";

export default class Square extends Rectangle {
    constructor(height: number) {
        super(height, height);
    }
}