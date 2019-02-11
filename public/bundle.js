(function(){function r(e,n,t){function o(i,f){if(!n[i]){if(!e[i]){var c="function"==typeof require&&require;if(!f&&c)return c(i,!0);if(u)return u(i,!0);var a=new Error("Cannot find module '"+i+"'");throw a.code="MODULE_NOT_FOUND",a}var p=n[i]={exports:{}};e[i][0].call(p.exports,function(r){var n=e[i][1][r];return o(n||r)},p,p.exports,r,e,n,t)}return n[i].exports}for(var u="function"==typeof require&&require,i=0;i<t.length;i++)o(t[i]);return o}return r})()({1:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

// makes each job's card
const jobFactory = jobElement => {
  return `<section>
    <h3>${jobElement.organization}</h3>
    <div>${jobElement.city}, ${jobElement.state}</div>
    <div>${jobElement.start_year} to ${jobElement.end_year}</div>
    <div>${jobElement.role}</div>
    </section>`;
};

var _default = jobFactory;
exports.default = _default;

},{}],2:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

// use fetch to get the list of jobs from the api
const getJobs = () => {
  return fetch("https://api.stevebrownlee.com/jobs/").then(res => res.json());
};

var _default = getJobs;
exports.default = _default;

},{}],3:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _fetcher = _interopRequireDefault(require("./fetcher.js"));

var _factory = _interopRequireDefault(require("./factory.js"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// display all the jobs in reverse order on the DOM
const listEl = document.querySelector("#lister");

const showAllJobs = () => {
  (0, _fetcher.default)().then(resultObject => {
    let jobArray = resultObject.results;
    jobArray.reverse().forEach(element => {
      listEl.innerHTML += (0, _factory.default)(element);
    });
  });
};

var _default = showAllJobs;
exports.default = _default;

},{"./factory.js":1,"./fetcher.js":2}],4:[function(require,module,exports){
"use strict";

var _lister = _interopRequireDefault(require("./lister.js"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

(0, _lister.default)();

},{"./lister.js":3}]},{},[4])
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5vZGVfbW9kdWxlcy9icm93c2VyLXBhY2svX3ByZWx1ZGUuanMiLCIuLi9zY3JpcHRzL2ZhY3RvcnkuanMiLCIuLi9zY3JpcHRzL2ZldGNoZXIuanMiLCIuLi9zY3JpcHRzL2xpc3Rlci5qcyIsIi4uL3NjcmlwdHMvbWFpbi5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTs7Ozs7Ozs7QUNBQTtBQUVBLE1BQU0sVUFBVSxHQUFHLFVBQVUsSUFBSTtBQUM3QixTQUFRO1VBQ0YsVUFBVSxDQUFDLFlBQWE7V0FDdkIsVUFBVSxDQUFDLElBQUssS0FBSSxVQUFVLENBQUMsS0FBTTtXQUNyQyxVQUFVLENBQUMsVUFBVyxPQUFNLFVBQVUsQ0FBQyxRQUFTO1dBQ2hELFVBQVUsQ0FBQyxJQUFLO2VBSnZCO0FBTUgsQ0FQRDs7ZUFTZSxVOzs7Ozs7Ozs7OztBQ1hmO0FBRUEsTUFBTSxPQUFPLEdBQUcsTUFBTTtBQUNsQixTQUFPLEtBQUssQ0FBQyxxQ0FBRCxDQUFMLENBQ04sSUFETSxDQUNELEdBQUcsSUFBSSxHQUFHLENBQUMsSUFBSixFQUROLENBQVA7QUFFSCxDQUhEOztlQUtlLE87Ozs7Ozs7Ozs7O0FDTGY7O0FBQ0E7Ozs7QUFIQTtBQUtBLE1BQU0sTUFBTSxHQUFHLFFBQVEsQ0FBQyxhQUFULENBQXVCLFNBQXZCLENBQWY7O0FBRUEsTUFBTSxXQUFXLEdBQUcsTUFBTTtBQUN0QiwwQkFDQyxJQURELENBQ00sWUFBWSxJQUFJO0FBQ2xCLFFBQUksUUFBUSxHQUFHLFlBQVksQ0FBQyxPQUE1QjtBQUNBLElBQUEsUUFBUSxDQUFDLE9BQVQsR0FBbUIsT0FBbkIsQ0FBMkIsT0FBTyxJQUFJO0FBQ2xDLE1BQUEsTUFBTSxDQUFDLFNBQVAsSUFBb0Isc0JBQVcsT0FBWCxDQUFwQjtBQUNILEtBRkQ7QUFHSCxHQU5EO0FBT0gsQ0FSRDs7ZUFVZSxXOzs7Ozs7QUNqQmY7Ozs7QUFFQSIsImZpbGUiOiJnZW5lcmF0ZWQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlc0NvbnRlbnQiOlsiKGZ1bmN0aW9uKCl7ZnVuY3Rpb24gcihlLG4sdCl7ZnVuY3Rpb24gbyhpLGYpe2lmKCFuW2ldKXtpZighZVtpXSl7dmFyIGM9XCJmdW5jdGlvblwiPT10eXBlb2YgcmVxdWlyZSYmcmVxdWlyZTtpZighZiYmYylyZXR1cm4gYyhpLCEwKTtpZih1KXJldHVybiB1KGksITApO3ZhciBhPW5ldyBFcnJvcihcIkNhbm5vdCBmaW5kIG1vZHVsZSAnXCIraStcIidcIik7dGhyb3cgYS5jb2RlPVwiTU9EVUxFX05PVF9GT1VORFwiLGF9dmFyIHA9bltpXT17ZXhwb3J0czp7fX07ZVtpXVswXS5jYWxsKHAuZXhwb3J0cyxmdW5jdGlvbihyKXt2YXIgbj1lW2ldWzFdW3JdO3JldHVybiBvKG58fHIpfSxwLHAuZXhwb3J0cyxyLGUsbix0KX1yZXR1cm4gbltpXS5leHBvcnRzfWZvcih2YXIgdT1cImZ1bmN0aW9uXCI9PXR5cGVvZiByZXF1aXJlJiZyZXF1aXJlLGk9MDtpPHQubGVuZ3RoO2krKylvKHRbaV0pO3JldHVybiBvfXJldHVybiByfSkoKSIsIi8vIG1ha2VzIGVhY2ggam9iJ3MgY2FyZFxuXG5jb25zdCBqb2JGYWN0b3J5ID0gam9iRWxlbWVudCA9PiB7XG4gICAgcmV0dXJuIGA8c2VjdGlvbj5cbiAgICA8aDM+JHtqb2JFbGVtZW50Lm9yZ2FuaXphdGlvbn08L2gzPlxuICAgIDxkaXY+JHtqb2JFbGVtZW50LmNpdHl9LCAke2pvYkVsZW1lbnQuc3RhdGV9PC9kaXY+XG4gICAgPGRpdj4ke2pvYkVsZW1lbnQuc3RhcnRfeWVhcn0gdG8gJHtqb2JFbGVtZW50LmVuZF95ZWFyfTwvZGl2PlxuICAgIDxkaXY+JHtqb2JFbGVtZW50LnJvbGV9PC9kaXY+XG4gICAgPC9zZWN0aW9uPmA7XG59XG5cbmV4cG9ydCBkZWZhdWx0IGpvYkZhY3Rvcnk7IiwiLy8gdXNlIGZldGNoIHRvIGdldCB0aGUgbGlzdCBvZiBqb2JzIGZyb20gdGhlIGFwaVxuXG5jb25zdCBnZXRKb2JzID0gKCkgPT4ge1xuICAgIHJldHVybiBmZXRjaChcImh0dHBzOi8vYXBpLnN0ZXZlYnJvd25sZWUuY29tL2pvYnMvXCIpXG4gICAgLnRoZW4ocmVzID0+IHJlcy5qc29uKCkpO1xufTtcblxuZXhwb3J0IGRlZmF1bHQgZ2V0Sm9iczsiLCIvLyBkaXNwbGF5IGFsbCB0aGUgam9icyBpbiByZXZlcnNlIG9yZGVyIG9uIHRoZSBET01cblxuaW1wb3J0IGdldEpvYnMgZnJvbSBcIi4vZmV0Y2hlci5qc1wiO1xuaW1wb3J0IGpvYkZhY3RvcnkgZnJvbSBcIi4vZmFjdG9yeS5qc1wiO1xuXG5jb25zdCBsaXN0RWwgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI2xpc3RlclwiKTtcblxuY29uc3Qgc2hvd0FsbEpvYnMgPSAoKSA9PiB7XG4gICAgZ2V0Sm9icygpXG4gICAgLnRoZW4ocmVzdWx0T2JqZWN0ID0+IHtcbiAgICAgICAgbGV0IGpvYkFycmF5ID0gcmVzdWx0T2JqZWN0LnJlc3VsdHM7XG4gICAgICAgIGpvYkFycmF5LnJldmVyc2UoKS5mb3JFYWNoKGVsZW1lbnQgPT4ge1xuICAgICAgICAgICAgbGlzdEVsLmlubmVySFRNTCArPSBqb2JGYWN0b3J5KGVsZW1lbnQpO1xuICAgICAgICB9KVxuICAgIH0pXG59XG5cbmV4cG9ydCBkZWZhdWx0IHNob3dBbGxKb2JzOyIsImltcG9ydCBzaG93QWxsSm9icyBmcm9tIFwiLi9saXN0ZXIuanNcIjtcblxuc2hvd0FsbEpvYnMoKTsiXX0=
