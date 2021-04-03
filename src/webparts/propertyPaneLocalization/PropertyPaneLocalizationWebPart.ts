import * as React from 'react';
import * as ReactDom from 'react-dom';
import { Version } from '@microsoft/sp-core-library';
import {
  IPropertyPaneConfiguration,
  PropertyPaneTextField
} from '@microsoft/sp-property-pane';
import { BaseClientSideWebPart } from '@microsoft/sp-webpart-base';

import PropertyPaneLocalization from './components/PropertyPaneLocalization';
import { IPropertyPaneLocalizationProps } from './components/IPropertyPaneLocalizationProps';

import { strings } from "../../loc/strings";

export interface IPropertyPaneLocalizationWebPartProps {
  locale: string;
}

export default class PropertyPaneLocalizationWebPart extends BaseClientSideWebPart<IPropertyPaneLocalizationWebPartProps> {

  public async onInit(): Promise<void> {
    strings.setLanguage(this.properties.locale);
  }

  public render(): void {
    const element: React.ReactElement<IPropertyPaneLocalizationProps> = React.createElement(
      PropertyPaneLocalization,
      {
        locale: this.properties.locale
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
                PropertyPaneTextField('locale', {
                  label: "Locale"
                })
              ]
            }
          ]
        }
      ]
    };
  }
}
