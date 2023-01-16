export interface Usuario {
    id?: string,
    name: string,
    cpf?: string,
    email: string,
    password: string,  
    memberSince?: Date,
    profile?: number[]
}