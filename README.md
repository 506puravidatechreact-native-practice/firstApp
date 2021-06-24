# firstApp
This is the first app modified created using the basic steps 

Installing dependencies#
You will need Node, Watchman, the React Native command line interface, Xcode and CocoaPods.

While you can use any editor of your choice to develop your app, you will need to install Xcode in order to set up the necessary tooling to build your React Native app for iOS.

Node & Watchman#
We recommend installing Node and Watchman using Homebrew. Run the following commands in a Terminal after installing Homebrew:

brew install node
brew install watchman
If you have already installed Node on your system, make sure it is Node 12 or newer.

Watchman is a tool by Facebook for watching changes in the filesystem. It is highly recommended you install it for better performance.

Xcode#
The easiest way to install Xcode is via the Mac App Store. Installing Xcode will also install the iOS Simulator and all the necessary tools to build your iOS app.

If you have already installed Xcode on your system, make sure it is version 10 or newer.

Command Line Tools#
You will also need to install the Xcode Command Line Tools. Open Xcode, then choose "Preferences..." from the Xcode menu. Go to the Locations panel and install the tools by selecting the most recent version in the Command Line Tools dropdown.

Xcode Command Line Tools

Installing an iOS Simulator in Xcode#
To install a simulator, open Xcode > Preferences... and select the Components tab. Select a simulator with the corresponding version of iOS you wish to use.

CocoaPods#
CocoaPods is built with Ruby and it will be installable with the default Ruby available on macOS. You can use a Ruby Version manager, however we recommend that you use the standard Ruby available on macOS unless you know what you're doing.

Using the default Ruby install will require you to use sudo when installing gems. (This is only an issue for the duration of the gem installation, though.)

sudo gem install cocoapods
For more information, please visit CocoaPods Getting Started guide.

React Native Command Line Interface#
React Native has a built-in command line interface. Rather than install and manage a specific version of the CLI globally, we recommend you access the current version at runtime using npx, which ships with Node.js. With npx react-native <command>, the current stable version of the CLI will be downloaded and executed at the time the command is run.

Creating a new application#
If you previously installed a global react-native-cli package, please remove it as it may cause unexpected issues.

You can use React Native's built-in command line interface to generate a new project. Let's create a new React Native project called "AwesomeProject":

npx react-native init AwesomeProject
This is not necessary if you are integrating React Native into an existing application, if you "ejected" from Expo, or if you're adding iOS support to an existing React Native project (see Integration with Existing Apps). You can also use a third-party CLI to init your React Native app, such as Ignite CLI.

[Optional] Using a specific version or template#
If you want to start a new project with a specific React Native version, you can use the --version argument:

npx react-native init AwesomeProject --version X.XX.X
You can also start a project with a custom React Native template, like TypeScript, with --template argument:

npx react-native init AwesomeTSProject --template react-native-template-typescript
Note If the above command is failing, you may have old version of react-native or react-native-cli installed globally on your pc. Try uninstalling the cli and run the cli using npx.

Running your React Native application#
Step 1: Start Metro#
First, you will need to start Metro, the JavaScript bundler that ships with React Native. Metro "takes in an entry file and various options, and returns a single JavaScript file that includes all your code and its dependencies."—Metro Docs

To start Metro, run npx react-native start inside your React Native project folder:

npx react-native start
react-native start starts Metro Bundler.

If you use the Yarn package manager, you can use yarn instead of npx when running React Native commands inside an existing project.

If you're familiar with web development, Metro is a lot like webpack—for React Native apps. Unlike Kotlin or Java, JavaScript isn't compiled—and neither is React Native. Bundling isn't the same as compiling, but it can help improve startup performance and translate some platform-specific JavaScript into more widely supported JavaScript.

Step 2: Start your application#
Let Metro Bundler run in its own terminal. Open a new terminal inside your React Native project folder. Run the following:

npx react-native run-ios
You should see your new app running in the iOS Simulator shortly.

AwesomeProject on iOS

npx react-native run-ios is one way to run your app. You can also run it directly from within Xcode.

If you can't get this to work, see the Troubleshooting page.

Running on a device#
The above command will automatically run your app on the iOS Simulator by default. If you want to run the app on an actual physical iOS device, please follow the instructions here.

Modifying your app#
Now that you have successfully run the app, let's modify it.

Open App.js in your text editor of choice and edit some lines.
Hit ⌘R in your iOS Simulator to reload the app and see your changes!
That's it!#
Congratulations! You've successfully run and modified your first React Native app.
