export interface SignInRequest {
  username: string;
  password: string;
}

export interface SingInResponse {
  id: string;
  email: string;
  last_name: string;
  first_name: string;
  username: string;
  roles: [];
  access_token: string;
}