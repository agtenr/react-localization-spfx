import * as React from 'react';
import * as ReactDom from 'react-dom';
import {
  IPropertyPaneConfiguration,
  PropertyPaneTextField
} from '@microsoft/sp-property-pane';
import { BaseClientSideWebPart, WebPartContext } from '@microsoft/sp-webpart-base';

import UserProfileLocalization from './components/UserProfileLocalization';
import { IUserProfileLocalizationProps } from './components/IUserProfileLocalizationProps';

import { IUserProfileService, UserProfileService } from "../../services";

import { strings } from "../../loc/strings";

export interface IUserProfileLocalizationWebPartProps {
  userProfileProperty: string;
}

export default class UserProfileLocalizationWebPart extends BaseClientSideWebPart<IUserProfileLocalizationWebPartProps> {

  private _locale: string;

  public async onInit(): Promise<void> {
    const userProfileService: IUserProfileService = new UserProfileService(this.context);
    this._locale = await userProfileService.getUserProfileLanguage(this.properties.userProfileProperty);
    strings.setLanguage(this._locale);
  }

  public render(): void {
    const element: React.ReactElement<IUserProfileLocalizationProps> = React.createElement(
      UserProfileLocalization,
      {
        locale: this._locale
      }
    );

    ReactDom.render(element, this.domElement);
  }

  protected onDispose(): void {
    ReactDom.unmountComponentAtNode(this.domElement);
  }


  protected getPropertyPaneConfiguration(): IPropertyPaneConfiguration {
    return {
      pages: [
        {
          header: {
            description: "Properties"
          },
          groups: [
            {
              groupName: "General",
              groupFields: [
                PropertyPaneTextField('userProfileProperty', {
                  label: strings.USER_PROFILE_LOCALIZATION_LABEL
                })
              ]
            }
          ]
        }
      ]
    };
  }
}
