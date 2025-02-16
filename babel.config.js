module.exports = function (api) {
  api.cache(true);
  const plugins = ['react-native-unistyles/plugin'];

  return {
    presets: ['babel-preset-expo'],
    plugins,
  };
};