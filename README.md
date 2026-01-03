# Daily Fetal Movement Tracker

A React Native application for tracking fetal movements (kicks) with timer functionality and local data persistence.

## Installation

```bash
git clone https://github.com/Atrex198/FetalTracker
cd FetalTracker

# Install dependencies
npm install

# For iOS only
cd ios && pod install && cd ..
```

## Running the Application

### Android
```bash
npm run android
```

### iOS
```bash
npm run ios
```

### Start Metro Bundler
```bash
npm start
```

## Building Release APK

```bash
cd android
./gradlew assembleRelease
```

APK location: `android/app/build/outputs/apk/release/app-release.apk`

## Libraries Used

### Core Dependencies
- **react-native**: 0.83.1 - Framework for building native mobile apps
- **react**: 19.2.0 - UI library
- **typescript**: 5.8.3 - Type safety

### State Management & Storage
- **zustand**: 5.0.9 - State management with persistence
- **@react-native-async-storage/async-storage**: 2.2.0 - Local storage for persisting data

### Navigation
- **@react-navigation/native**: 7.1.26 - Navigation framework
- **@react-navigation/native-stack**: 7.9.0 - Native stack navigator
- **react-native-screens**: 4.19.0 - Native screen components
- **react-native-safe-area-context**: 5.6.2 - Safe area insets handling

### UI Components
- **expo-blur**: 15.0.8 - Blur effects for modals
- **react-native-linear-gradient**: 2.8.3 - Gradient backgrounds

## Data Structure

### Record Object
```typescript
interface RecordData {
  date: string;    // Format: "4 Jan 2026"
  day: string;     // Day of week: "Saturday"
  time: string;    // Time taken: "MM:SS"
}
```

### Zustand Store Schema
```typescript
interface DataStore {
  records: RecordData[];              // Array of saved sessions
  setRecords: (newRecord: RecordData) => void;
  modalVisible: boolean;              // Info modal state
  setModalVisible: (visible: boolean) => void;
  seconds: number;                    // Timer state
  setSeconds: (seconds: number) => void;
  start: boolean;                     // Timer running state
  setStart: (start: boolean) => void;
}
```


## Assumptions Made

1. There is inconsistency in design. I saw time stored in mins/the assignment asked to store in mins but in last design it is stored in 00:00. I chose the later format as it will show user seconds too.

2. Some Design changes example making "Record fetal movement" to "Record Fetal Movement"

3. Some numbers were bold in Steps to count fetal kicks modal, I removed bold from all numbers.

4. What if I am not getting enough kicks was static, added a modal that gives user further instructions.



