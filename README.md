# react-localization-spfx

## Summary

This sample contains 2 sample web parts that demonstrate the usage of react-localization in SPFx.
 - PropertyPaneLocalization: This web part determines the language as a setting in the web part property pane
 - UserProfileLocalization: This web part determines the language based on a specific user profile property 

## Minimal path to awesome
 - pull the code
 - run `npm install` in the root of the project
 - run `gulp serve`

## Testing the samples
### PropertyPaneLocalization
The PropertyPaneLocalization web part can be tested in the local workbench because it does not need any SharePoint connection.
In the property pane of the web part, you can pass in a locale key as a string. In this sample only en-us and nl-be are supported.
See next chapter on how to add languages

### UserProfileLocalization
The UserProfileLocalization web part cannot be tested in the local workbench because it uses PnPjs and it needs any SharePoint context.
In the property pane of the web part, you can pass in the name of the user profile property to be used (e.g. SPS-MUILanguages).
To test, add the debug string to you SharePoint site url (`?debug=true&noredir=true&debugManifestsFile=https://localhost:4321/temp/manifests.js`) 
In this sample only en-us and nl-be are supported. See next chapter on how to add languages

## Adding languages
Use the steps below to add new languages:
 1. Create a new locale file in the loc folder (e.g. fr-fr.ts)
 2. Implment all the labels in this file
 3. Add an extra import to the strings file (e.g. `import { frStrings } from "./fr-fr";`)
 4. Add the import to the LocalizedString method (e.g. `fr: frStrings`)
