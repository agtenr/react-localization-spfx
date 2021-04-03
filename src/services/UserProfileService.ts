import { sp } from "@pnp/sp/presets/all";
import { dateAdd } from "@pnp/common";
import { IUserProfileService } from "./IUserProfileService";
import { WebPartContext } from '@microsoft/sp-webpart-base';

export class UserProfileService implements IUserProfileService {

  private _defaultLocale: string = "en-us";

  constructor(context: WebPartContext) {
    sp.setup(context);
  }

  public async getUserProfileLanguage(userProfileProperty: string): Promise<string> {
    const userProfile = await sp.profiles.myProperties
      .select("UserProfileProperties")
      .usingCaching({
        key: "sp-cache-userprofile",
        expiration: dateAdd(new Date(), "day", 1)
      })
      .get();

    if (userProfile.UserProfileProperties.some((item) => item.Key === userProfileProperty)) {
      const language = userProfile.UserProfileProperties.filter((item) => item.Key === userProfileProperty)[0].Value;
      return !!language ? language.toLocaleLowerCase() : this._defaultLocale;
    } else {
      return this._defaultLocale;
    }
  }
}
