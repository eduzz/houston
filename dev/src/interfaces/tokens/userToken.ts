export default interface IUserToken {
  id: number;
  email: string;
  firstName: string;
  lastName?: string;
  roles: string[];
  exp: number;

  fullName: string;
}
