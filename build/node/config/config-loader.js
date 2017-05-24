'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = configLoader;

var _fs = require('fs');

var _fs2 = _interopRequireDefault(_fs);

var _path = require('path');

var _path2 = _interopRequireDefault(_path);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function configLoader() {
  const env = process.env.NODE_ENV || 'development';
  const filepath = _path2.default.resolve(__dirname, `./../../../config/${env}-config.json`);

  return new Promise((resolve, reject) => {
    _fs2.default.readFile(filepath, 'utf8', (err, data) => {
      if (err) {
        reject(err);
      }
      resolve(JSON.parse(data));
    });
  });
}
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9ub2RlL2NvbmZpZy9jb25maWctbG9hZGVyLmpzIl0sIm5hbWVzIjpbImNvbmZpZ0xvYWRlciIsImVudiIsInByb2Nlc3MiLCJOT0RFX0VOViIsImZpbGVwYXRoIiwicmVzb2x2ZSIsIl9fZGlybmFtZSIsIlByb21pc2UiLCJyZWplY3QiLCJyZWFkRmlsZSIsImVyciIsImRhdGEiLCJKU09OIiwicGFyc2UiXSwibWFwcGluZ3MiOiI7Ozs7O2tCQUd3QkEsWTs7QUFIeEI7Ozs7QUFDQTs7Ozs7O0FBRWUsU0FBU0EsWUFBVCxHQUF3QjtBQUNyQyxRQUFNQyxNQUFNQyxRQUFRRCxHQUFSLENBQVlFLFFBQVosSUFBd0IsYUFBcEM7QUFDQSxRQUFNQyxXQUFXLGVBQUtDLE9BQUwsQ0FBYUMsU0FBYixFQUF5QixxQkFBb0JMLEdBQUksY0FBakQsQ0FBakI7O0FBRUEsU0FBTyxJQUFJTSxPQUFKLENBQVksQ0FBQ0YsT0FBRCxFQUFVRyxNQUFWLEtBQXFCO0FBQ3RDLGlCQUFHQyxRQUFILENBQVlMLFFBQVosRUFBc0IsTUFBdEIsRUFBOEIsQ0FBQ00sR0FBRCxFQUFNQyxJQUFOLEtBQWU7QUFDM0MsVUFBSUQsR0FBSixFQUFTO0FBQ1BGLGVBQU9FLEdBQVA7QUFDRDtBQUNETCxjQUFRTyxLQUFLQyxLQUFMLENBQVdGLElBQVgsQ0FBUjtBQUNELEtBTEQ7QUFNRCxHQVBNLENBQVA7QUFRRCIsImZpbGUiOiJjb25maWctbG9hZGVyLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IGZzIGZyb20gJ2ZzJztcbmltcG9ydCBwYXRoIGZyb20gJ3BhdGgnO1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBjb25maWdMb2FkZXIoKSB7XG4gIGNvbnN0IGVudiA9IHByb2Nlc3MuZW52Lk5PREVfRU5WIHx8ICdkZXZlbG9wbWVudCc7XG4gIGNvbnN0IGZpbGVwYXRoID0gcGF0aC5yZXNvbHZlKF9fZGlybmFtZSwgYC4vLi4vLi4vLi4vY29uZmlnLyR7ZW52fS1jb25maWcuanNvbmApO1xuXG4gIHJldHVybiBuZXcgUHJvbWlzZSgocmVzb2x2ZSwgcmVqZWN0KSA9PiB7XG4gICAgZnMucmVhZEZpbGUoZmlsZXBhdGgsICd1dGY4JywgKGVyciwgZGF0YSkgPT4ge1xuICAgICAgaWYgKGVycikge1xuICAgICAgICByZWplY3QoZXJyKTtcbiAgICAgIH1cbiAgICAgIHJlc29sdmUoSlNPTi5wYXJzZShkYXRhKSk7XG4gICAgfSk7XG4gIH0pO1xufVxuIl19