export enum RoleEnum {
    ROLE_ADMIN,
    ROLE_CLIENT
}

export type CredentialsDTO ={
    username:string
    password:string;
}

export type AccessTokenPayloadDTO = {
    exp: number;
    user_name: string;
    authorities: RoleEnum[];
    jti: string;
    client_id: string;
    scope: string[];
  };
  