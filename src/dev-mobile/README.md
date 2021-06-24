## Starting the development server

<TerminalBlock cmd={['expo start']} />

When you run `expo start` (or `npm start`), Expo CLI starts Metro Bundler, which is an HTTP server that compiles the JavaScript code of our app using [Babel](https://babeljs.io/) and serves it to the Expo app. It also pops up Expo Dev Tools, a graphical interface for Expo CLI.

> 👋 You can close the Expo Dev Tools window and disable it from starting in the future by pressing `shift+d` in your terminal running Expo CLI. Start it again at any time by pressing `d` in the terminal running Expo CLI.

## Opening the app on your phone/tablet

> 👨‍👩‍👧‍👧 You can open the project on multiple devices simultaneously. Go ahead and try it on an iPhone and Android phone at the same time if you have both handy.

- 🍎 On your iPhone or iPad, open the default Apple "Camera" app and scan the QR code you see in the terminal or in Expo Dev Tools.
- 🤖 On your Android device, press "Scan QR Code" on the "Projects" tab of the Expo Go app and scan the QR code you see in the terminal or in Expo Dev Tools.

<details><summary><h4>Is the app not loading on your device?</h4></summary>
<p>

First, make sure that you are on the same wifi network on your computer and your device.

If it still doesn't work, it may be due to the router configuration &mdash; this is common for public networks. You can work around this by choosing the "Tunnel" connection type in Expo Dev Tools, then scanning the QR code again.

> 🐢 Using the "Tunnel" connection type will make app reloads considerably slower than on "LAN" or "Local", so it's best to avoid tunnel when possible. You may want to install a simulator/emulator to speed up development if "Tunnel" is required for accessing your machine from another device on your network.

</p>
</details>

<details><summary><h4>Using a simulator or emulator?</h4></summary>
<p>

If you are using a simulator or emulator, you may find the following Expo CLI keyboard shortcuts to be useful:

- Pressing `i` will open in an [iOS simulator](../workflow/ios-simulator.md).
- Pressing `a` will open in an [Android emulator or connected device](../workflow/android-studio-emulator.md).
- Pressing `w` will open in your browser. Expo supports all major browsers.

</p>
</details>