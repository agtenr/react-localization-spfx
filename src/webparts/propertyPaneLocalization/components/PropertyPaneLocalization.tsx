import * as React from 'react';
import styles from './PropertyPaneLocalization.module.scss';
import { IPropertyPaneLocalizationProps } from './IPropertyPaneLocalizationProps';
import { strings } from "../../../loc/strings";

export default class PropertyPaneLocalization extends React.Component<IPropertyPaneLocalizationProps, {}> {
  public render(): React.ReactElement<IPropertyPaneLocalizationProps> {
    return (
      <div className={ styles.propertyPaneLocalization }>
        <div className={ styles.container }>
          <div className={ styles.row }>
            <div className={ styles.column }>
              <p>Selected locale: {this.props.locale}</p>
              <p>My Greeting: {strings.MY_GREETING}</p>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
