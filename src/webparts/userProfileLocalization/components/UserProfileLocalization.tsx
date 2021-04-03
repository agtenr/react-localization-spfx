import * as React from 'react';
import styles from './UserProfileLocalization.module.scss';
import { IUserProfileLocalizationProps } from './IUserProfileLocalizationProps';
import { strings } from "../../../loc/strings";

export default class UserProfileLocalization extends React.Component<IUserProfileLocalizationProps, {}> {
  public render(): React.ReactElement<IUserProfileLocalizationProps> {
    return (
      <div className={ styles.userProfileLocalization }>
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
