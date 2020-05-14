export interface User {
    mail?: string,
    pw?: string,
    phone?:string,
    address?: string
}

export function createUser(m: string, pass: string, num:string, add: string){
    let newUser = {
        mail: m,
        pw: pass,
        phone: num,
        address: add
    }
    return newUser;
}