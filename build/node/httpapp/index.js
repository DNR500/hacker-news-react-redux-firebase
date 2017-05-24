'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _express = require('express');

var _express2 = _interopRequireDefault(_express);

var _http = require('http');

var _path = require('path');

var _path2 = _interopRequireDefault(_path);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const app = (0, _express2.default)();
const http = (0, _http.Server)(app);
let server;

function start(port, staticAssetsDirectory, callback) {
  const staticPath = _path2.default.resolve(__dirname, '../../../', staticAssetsDirectory);
  app.use(_express2.default.static(staticPath));
  server = http.listen(port || 3000, () => {
    if (callback) callback();
  });
}

function stop() {
  if (server) {
    server.close();
  }
}

exports.default = {
  start,
  stop,
  app,
  http
};
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9ub2RlL2h0dHBhcHAvaW5kZXguanMiXSwibmFtZXMiOlsiYXBwIiwiaHR0cCIsInNlcnZlciIsInN0YXJ0IiwicG9ydCIsInN0YXRpY0Fzc2V0c0RpcmVjdG9yeSIsImNhbGxiYWNrIiwic3RhdGljUGF0aCIsInJlc29sdmUiLCJfX2Rpcm5hbWUiLCJ1c2UiLCJzdGF0aWMiLCJsaXN0ZW4iLCJzdG9wIiwiY2xvc2UiXSwibWFwcGluZ3MiOiI7Ozs7OztBQUFBOzs7O0FBQ0E7O0FBQ0E7Ozs7OztBQUVBLE1BQU1BLE1BQU0sd0JBQVo7QUFDQSxNQUFNQyxPQUFPLGtCQUFPRCxHQUFQLENBQWI7QUFDQSxJQUFJRSxNQUFKOztBQUVBLFNBQVNDLEtBQVQsQ0FBZUMsSUFBZixFQUFxQkMscUJBQXJCLEVBQTRDQyxRQUE1QyxFQUFzRDtBQUNwRCxRQUFNQyxhQUFhLGVBQUtDLE9BQUwsQ0FBYUMsU0FBYixFQUF3QixXQUF4QixFQUFxQ0oscUJBQXJDLENBQW5CO0FBQ0FMLE1BQUlVLEdBQUosQ0FBUSxrQkFBUUMsTUFBUixDQUFlSixVQUFmLENBQVI7QUFDQUwsV0FBU0QsS0FBS1csTUFBTCxDQUFZUixRQUFRLElBQXBCLEVBQTBCLE1BQU07QUFDdkMsUUFBSUUsUUFBSixFQUFjQTtBQUNmLEdBRlEsQ0FBVDtBQUdEOztBQUVELFNBQVNPLElBQVQsR0FBZ0I7QUFDZCxNQUFJWCxNQUFKLEVBQVk7QUFDVkEsV0FBT1ksS0FBUDtBQUNEO0FBQ0Y7O2tCQUVjO0FBQ2JYLE9BRGE7QUFFYlUsTUFGYTtBQUdiYixLQUhhO0FBSWJDO0FBSmEsQyIsImZpbGUiOiJpbmRleC5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBleHByZXNzIGZyb20gJ2V4cHJlc3MnO1xuaW1wb3J0IHsgU2VydmVyIH0gZnJvbSAnaHR0cCc7XG5pbXBvcnQgcGF0aCBmcm9tICdwYXRoJztcblxuY29uc3QgYXBwID0gZXhwcmVzcygpO1xuY29uc3QgaHR0cCA9IFNlcnZlcihhcHApO1xubGV0IHNlcnZlcjtcblxuZnVuY3Rpb24gc3RhcnQocG9ydCwgc3RhdGljQXNzZXRzRGlyZWN0b3J5LCBjYWxsYmFjaykge1xuICBjb25zdCBzdGF0aWNQYXRoID0gcGF0aC5yZXNvbHZlKF9fZGlybmFtZSwgJy4uLy4uLy4uLycsIHN0YXRpY0Fzc2V0c0RpcmVjdG9yeSk7XG4gIGFwcC51c2UoZXhwcmVzcy5zdGF0aWMoc3RhdGljUGF0aCkpO1xuICBzZXJ2ZXIgPSBodHRwLmxpc3Rlbihwb3J0IHx8IDMwMDAsICgpID0+IHtcbiAgICBpZiAoY2FsbGJhY2spIGNhbGxiYWNrKCk7XG4gIH0pO1xufVxuXG5mdW5jdGlvbiBzdG9wKCkge1xuICBpZiAoc2VydmVyKSB7XG4gICAgc2VydmVyLmNsb3NlKCk7XG4gIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQge1xuICBzdGFydCxcbiAgc3RvcCxcbiAgYXBwLFxuICBodHRwLFxufTtcbiJdfQ==