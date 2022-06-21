import { ClassRegex } from "./ClassRegex";

let classRegex = new ClassRegex();
let validateCLass: string[] = ['C0318G'];
let invalidateCLass: string[] = ['M0318G', 'P0323A']

for (let classroom of validateCLass) {
    let isvalid: boolean = classRegex.validate(classroom);
    console.log("Class is " + classroom + " is valid " + isvalid);
    
}

for (let classroom of invalidateCLass) {
    let isvalid: boolean = classRegex.validate(classroom);
    console.log("Class is " + classroom + " is valid " + isvalid);

}