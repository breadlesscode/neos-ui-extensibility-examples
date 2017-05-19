# Extensibility examples for Neos UI

See examples in "Resources/Private" and Configuration/Settings.yaml.

To see the API, check "EXTENSIBILITY.md" in the Neos.Neos.Ui Git Repository.

## Installation

```
cd Packages/Application/
git clone git@github.com:neos/neos-ui-extensibility-examples.git Neos.Neos.Ui.ExtensibilityExamples
cd ../../
./flow package:rescan
```

# How to build the examples

As we have not published the `@neos-project/neos-ui-extensibility` package on NPM yet, you manually need to do the following:

- Go to `../Neos.Ui/packages/neos-ui-extensibility`; and run `npm link`

- Now, go to `Resources/Private/[ExampleName]` and run `npm link @neos-project/neos-ui-extensibility`.

- Then, run `npm install` as usual.


# Examples

## CustomStylingForEditor

- Adds custom button for CKEditor, to add a custom CSS style

## CustomEditor

- adds custom editor for inspector

## ColorPickerEditor

- a little more advanced example for a color picker editor.

## ReplacingComponentsViaUnplannedExtensibility

- showcasing how to add a custom theme
