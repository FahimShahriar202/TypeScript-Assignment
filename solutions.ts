const multiplyValue =(value:number, multiplier:number=2 )=>{
    if (multiplier == 0){
    
        return 0;
    } 
    else{
        console.log(value*multiplier);
        return value*multiplier;

    }
}





type funcStrNumBool = string | number | boolean;

const processInput = (input:funcStrNumBool)=>{

    if (typeof(input) === "string"){
        return input.trim().toLowerCase()
    }
    else if (typeof(input) === "number"){
        return input*10;
    }
    else if(typeof(input) === "boolean"){
        if (input === true){
            return "Active";
        }
        else{
            return "Inactive";
        }
    }
}




const formatCoordinate =(
    coordinate: readonly [number, number, string]
): string=>{
    const [latitude, longitude, locationName] = coordinate;

    return `Location: ${locationName} (${latitude}, ${longitude})`;
}




const concatenateArrays= <T>(...arr:T[][]):T[]=>{
    let concatArr : T[] = [];

    for(let i = 0; i<arr.length; i++){
        for (let j=0; j<arr[i].length; j++){
            concatArr.push(arr[i][j]);
        }
    }

    return concatArr;

}




interface Course {
    title: string;
    students: number;
    isPublished: boolean;

}

const getPopularCourses =(course:Course[], minStudents:number)=>{
    let newArr: Course[] = [];
    for (let i=0; i<course.length; i++){
        if (course[i].isPublished===true && course[i].students>=minStudents){
            newArr.push(course[i]);
        }
    }

    return newArr;
}





const pluckValues = <T, K extends keyof T>(
    items: T[],
    key: K
): T[K][] => {

    let result: T[K][] = [];

    for (let i = 0; i < items.length; i++) {
        result.push(items[i][key]);
    }

    return result;
};






class Employee{
    constructor(
        protected name: string,
        private _baseSalary: number
    ){

    }

    getDetails():string{
        return `Employee: ${this.name}, Base Salary: ${this._baseSalary}`

    }
}

class Manager extends Employee{
    constructor(
        name: string,
        baseSalary: number,
        private _department: string
    ){
        super(name, baseSalary);
    }

    getRoleInfo(): string{
        return `Manager of ${this._department}: ${this.name}`
    }
}








const validateAgeAsync = (age: number): Promise<string> => {

    return new Promise((resolve, reject) => {

        if (age >= 18) {
            setTimeout(() => {
                resolve("Access Granted");
            }, 1000);
        }
        else {
            reject(new Error("Access Denied: Must be 18 or older"));
        }

    });

};

   
