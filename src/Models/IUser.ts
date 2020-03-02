import { string } from "prop-types"

export interface IUserDetails {
  FirstName: string,
  LastName:string,
  FriendlyName: string,
  KnownAs: string,
  Location: string,
  JobTitle: string,
  SubTitle: string,
  Description: string,
  Experience: string
};

export interface IUserContacts {
  Mobile: string,
  Email: string,
  LinkedIn: string,
  Github: string
};