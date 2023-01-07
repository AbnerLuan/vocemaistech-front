export interface Usuario {
    id?: number,
    name: string,
    cpf?: string,
    email: string,
    password: string,  
    memberSince?: Date,
    profile?: string[]
}