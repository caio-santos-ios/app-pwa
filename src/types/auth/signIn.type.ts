export type TSignIn = {
    cpf: string;
    password: string;
}

export const ResetSignIn: TSignIn = {
    cpf: "",
    password: ""
}

export type TSignInResponse = {
    token: string;
    refreshToken: string;
    name: string;
    email: string;
    admin: string;
    photo: string;
    logoCompany: string;
    nameCompany: string;
    nameStore: string;
    modules: any[];
    typeUser: string;
    typePlan: string;
    subscriberPlan: string;
    expirationDate: string;
}

export const ResetSignInResponse: TSignInResponse = {
    token: "",
    refreshToken: "",
    name: "",
    email: "",
    admin: "",
    photo: "",
    logoCompany: "",
    nameCompany: "",
    nameStore: "",
    modules: [],
    typeUser: "",
    typePlan: "",
    subscriberPlan: "",
    expirationDate: ""
}