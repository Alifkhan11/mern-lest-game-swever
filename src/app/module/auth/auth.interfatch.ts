export type TUserRegistration={
    name:string,
    email:string,
    password:string,
    confirmPassword:string,
    role:'admin'|'user',
    isDeleted:boolean
}

export type TUserLogin={
    email:string,
    password:string
}