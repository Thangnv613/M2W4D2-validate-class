export class ClassRegex {
    private CLASS_REGEX: RegExp = /^[C|A|P][0-9]{4}[G-M]$/;
    public validate(regex: string): boolean {
        return this.CLASS_REGEX.test(regex);
    } 
}