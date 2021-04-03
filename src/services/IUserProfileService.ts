export interface IUserProfileService {
  getUserProfileLanguage(userProfileProperty: string): Promise<string>;
}
