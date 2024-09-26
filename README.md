# tfa-form

# Monorepo for React Projects with Yarn Workspaces

This monorepo contains multiple React applications and shared packages, managed with Yarn workspaces

## Folder Structure

```
/packages
  /web        # React app for web
  /mobile     # React Native app
  /shared     # Shared utilities or components
```

## Prerequisites

Ensure you have the following installed on your system:
- **Node.js** (v20.x or higher)
- **Yarn** (v3.6.4 or higher)
- **CocoaPods** (for iOS development)

## Setup Instructions

1. **Clone the repository**:
   ```bash
   git clone https://github.com/aderahenry/tfa-form.git
   ```

2. **Navigate into the project directory**:
   ```bash
   cd tfa-form
   ```

3. **Install dependencies**:
   Use Yarn to install all dependencies across the monorepo:
   ```bash
   yarn install
   ```

4. **Running the Web App**:
   Navigate to the `web` package and start the development server:
   ```bash
   yarn workspace web dev/run
   ```

5. **Building the Web App**:
   To build the production-ready version of the web app:
   ```bash
   yarn workspace web build
   ```

6. **Running the Mobile App**:
   ```bash
   yarn workspace mobile start
   ```

7. **Installing iOS Pods**:
   After installing the dependencies, navigate to the `ios` directory inside the `mobile` package and install the CocoaPods:
   ```bash
   cd packages/mobile/ios
   pod install
   ```
   Once the pods are installed, you can run the app on iOS using:
   ```bash
   yarn workspace mobile ios
   ```

8. **Shared Code**:
   Shared logic (such as utilities or validation) is located in the `shared` package and can be imported into any workspace:
   ```js
   import { Shared } from 'shared';
   ```

9. **Rebuilding Shared Package**:
   If you make changes to the `shared` package, ensure you run the following command to build the shared package and apply the changes:
   ```bash
   yarn workspace shared build
   ```

## Useful Commands

- **Install new dependencies in a specific workspace**:
  ```bash
  yarn workspace [workspace-name] add [package-name]
  ```

- **Add a dependency to all workspaces**:
  ```bash
  yarn add [package-name] -W
  ```

- **Run a command in all workspaces**:
  ```bash
  yarn workspaces run [command]
  ```

## License

This project is licensed under the MIT License.