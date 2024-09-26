const {getDefaultConfig, mergeConfig} = require('@react-native/metro-config');
const path = require('path');

/**
 * Metro configuration
 * https://reactnative.dev/docs/metro
 *
 * @type {import('metro-config').MetroConfig}
 */
const config = {
    watchFolders: [
        path.resolve(__dirname, '../shared'), 
        path.resolve(__dirname, '../../node_modules'),
        path.resolve(__dirname, '../../node_modules/@tfa-form/shared')
    ],
};

module.exports = mergeConfig(getDefaultConfig(__dirname), config);
