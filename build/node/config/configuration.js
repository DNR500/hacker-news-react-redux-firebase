'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _configLoader = require('./config-loader');

var _configLoader2 = _interopRequireDefault(_configLoader);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

let envSpecificConfig;

exports.default = {
  init() {
    return (0, _configLoader2.default)().then(config => {
      config.appId = process.env.APP_ID || config.appId;
      envSpecificConfig = config;
      return config;
    });
  },
  retrieve(key) {
    return envSpecificConfig[key];
  }
};
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9ub2RlL2NvbmZpZy9jb25maWd1cmF0aW9uLmpzIl0sIm5hbWVzIjpbImVudlNwZWNpZmljQ29uZmlnIiwiaW5pdCIsInRoZW4iLCJjb25maWciLCJhcHBJZCIsInByb2Nlc3MiLCJlbnYiLCJBUFBfSUQiLCJyZXRyaWV2ZSIsImtleSJdLCJtYXBwaW5ncyI6Ijs7Ozs7O0FBQUE7Ozs7OztBQUVBLElBQUlBLGlCQUFKOztrQkFFZTtBQUNiQyxTQUFPO0FBQ0wsV0FBTyw4QkFDSkMsSUFESSxDQUNFQyxNQUFELElBQVk7QUFDaEJBLGFBQU9DLEtBQVAsR0FBZUMsUUFBUUMsR0FBUixDQUFZQyxNQUFaLElBQXNCSixPQUFPQyxLQUE1QztBQUNBSiwwQkFBb0JHLE1BQXBCO0FBQ0EsYUFBT0EsTUFBUDtBQUNELEtBTEksQ0FBUDtBQU1ELEdBUlk7QUFTYkssV0FBU0MsR0FBVCxFQUFjO0FBQ1osV0FBT1Qsa0JBQWtCUyxHQUFsQixDQUFQO0FBQ0Q7QUFYWSxDIiwiZmlsZSI6ImNvbmZpZ3VyYXRpb24uanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgY29uZmlnTG9hZGVyIGZyb20gJy4vY29uZmlnLWxvYWRlcic7XG5cbmxldCBlbnZTcGVjaWZpY0NvbmZpZztcblxuZXhwb3J0IGRlZmF1bHQge1xuICBpbml0KCkge1xuICAgIHJldHVybiBjb25maWdMb2FkZXIoKVxuICAgICAgLnRoZW4oKGNvbmZpZykgPT4ge1xuICAgICAgICBjb25maWcuYXBwSWQgPSBwcm9jZXNzLmVudi5BUFBfSUQgfHwgY29uZmlnLmFwcElkO1xuICAgICAgICBlbnZTcGVjaWZpY0NvbmZpZyA9IGNvbmZpZztcbiAgICAgICAgcmV0dXJuIGNvbmZpZztcbiAgICAgIH0pO1xuICB9LFxuICByZXRyaWV2ZShrZXkpIHtcbiAgICByZXR1cm4gZW52U3BlY2lmaWNDb25maWdba2V5XTtcbiAgfSxcbn07XG4iXX0=