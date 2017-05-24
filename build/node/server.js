'use strict';

var _configuration = require('./config/configuration');

var _configuration2 = _interopRequireDefault(_configuration);

var _httpapp = require('./httpapp');

var _httpapp2 = _interopRequireDefault(_httpapp);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

process.title = 'hacker-news-node';

_configuration2.default.init().then(() => {
  _httpapp2.default.start(3000, 'build/public/');
});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9ub2RlL3NlcnZlci5qcyJdLCJuYW1lcyI6WyJwcm9jZXNzIiwidGl0bGUiLCJpbml0IiwidGhlbiIsInN0YXJ0Il0sIm1hcHBpbmdzIjoiOztBQUFBOzs7O0FBQ0E7Ozs7OztBQUVBQSxRQUFRQyxLQUFSLEdBQWdCLGtCQUFoQjs7QUFFQSx3QkFBY0MsSUFBZCxHQUFxQkMsSUFBckIsQ0FBMEIsTUFBTTtBQUM5QixvQkFBT0MsS0FBUCxDQUFhLElBQWIsRUFBbUIsZUFBbkI7QUFDRCxDQUZEIiwiZmlsZSI6InNlcnZlci5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBjb25maWd1cmF0aW9uIGZyb20gJy4vY29uZmlnL2NvbmZpZ3VyYXRpb24nO1xuaW1wb3J0IHNlcnZlciBmcm9tICcuL2h0dHBhcHAnO1xuXG5wcm9jZXNzLnRpdGxlID0gJ2hhY2tlci1uZXdzLW5vZGUnO1xuXG5jb25maWd1cmF0aW9uLmluaXQoKS50aGVuKCgpID0+IHtcbiAgc2VydmVyLnN0YXJ0KDMwMDAsICdidWlsZC9wdWJsaWMvJyk7XG59KTtcblxuIl19