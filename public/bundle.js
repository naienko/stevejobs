(function(){function r(e,n,t){function o(i,f){if(!n[i]){if(!e[i]){var c="function"==typeof require&&require;if(!f&&c)return c(i,!0);if(u)return u(i,!0);var a=new Error("Cannot find module '"+i+"'");throw a.code="MODULE_NOT_FOUND",a}var p=n[i]={exports:{}};e[i][0].call(p.exports,function(r){var n=e[i][1][r];return o(n||r)},p,p.exports,r,e,n,t)}return n[i].exports}for(var u="function"==typeof require&&require,i=0;i<t.length;i++)o(t[i]);return o}return r})()({1:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

// makes each job's card
const jobFactory = jobElement => {
  let end_year = jobElement.end_year;

  if (end_year === null) {
    end_year = "now";
  }

  return `<section>
    <h3>${jobElement.organization}</h3>
    <div>${jobElement.city}, ${jobElement.state}</div>
    <div>${jobElement.start_year} to ${end_year}</div>
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5vZGVfbW9kdWxlcy9icm93c2VyLXBhY2svX3ByZWx1ZGUuanMiLCIuLi9zY3JpcHRzL2ZhY3RvcnkuanMiLCIuLi9zY3JpcHRzL2ZldGNoZXIuanMiLCIuLi9zY3JpcHRzL2xpc3Rlci5qcyIsIi4uL3NjcmlwdHMvbWFpbi5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTs7Ozs7Ozs7QUNBQTtBQUVBLE1BQU0sVUFBVSxHQUFHLFVBQVUsSUFBSTtBQUM3QixNQUFJLFFBQVEsR0FBRyxVQUFVLENBQUMsUUFBMUI7O0FBQ0EsTUFBSSxRQUFRLEtBQUssSUFBakIsRUFBdUI7QUFDbkIsSUFBQSxRQUFRLEdBQUcsS0FBWDtBQUNIOztBQUNELFNBQVE7VUFDRixVQUFVLENBQUMsWUFBYTtXQUN2QixVQUFVLENBQUMsSUFBSyxLQUFJLFVBQVUsQ0FBQyxLQUFNO1dBQ3JDLFVBQVUsQ0FBQyxVQUFXLE9BQU0sUUFBUztXQUNyQyxVQUFVLENBQUMsSUFBSztlQUp2QjtBQU1ILENBWEQ7O2VBYWUsVTs7Ozs7Ozs7Ozs7QUNmZjtBQUVBLE1BQU0sT0FBTyxHQUFHLE1BQU07QUFDbEIsU0FBTyxLQUFLLENBQUMscUNBQUQsQ0FBTCxDQUNOLElBRE0sQ0FDRCxHQUFHLElBQUksR0FBRyxDQUFDLElBQUosRUFETixDQUFQO0FBRUgsQ0FIRDs7ZUFLZSxPOzs7Ozs7Ozs7OztBQ0xmOztBQUNBOzs7O0FBSEE7QUFLQSxNQUFNLE1BQU0sR0FBRyxRQUFRLENBQUMsYUFBVCxDQUF1QixTQUF2QixDQUFmOztBQUVBLE1BQU0sV0FBVyxHQUFHLE1BQU07QUFDdEIsMEJBQ0MsSUFERCxDQUNNLFlBQVksSUFBSTtBQUNsQixRQUFJLFFBQVEsR0FBRyxZQUFZLENBQUMsT0FBNUI7QUFDQSxJQUFBLFFBQVEsQ0FBQyxPQUFULEdBQW1CLE9BQW5CLENBQTJCLE9BQU8sSUFBSTtBQUNsQyxNQUFBLE1BQU0sQ0FBQyxTQUFQLElBQW9CLHNCQUFXLE9BQVgsQ0FBcEI7QUFDSCxLQUZEO0FBR0gsR0FORDtBQU9ILENBUkQ7O2VBVWUsVzs7Ozs7O0FDakJmOzs7O0FBRUEiLCJmaWxlIjoiZ2VuZXJhdGVkLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXNDb250ZW50IjpbIihmdW5jdGlvbigpe2Z1bmN0aW9uIHIoZSxuLHQpe2Z1bmN0aW9uIG8oaSxmKXtpZighbltpXSl7aWYoIWVbaV0pe3ZhciBjPVwiZnVuY3Rpb25cIj09dHlwZW9mIHJlcXVpcmUmJnJlcXVpcmU7aWYoIWYmJmMpcmV0dXJuIGMoaSwhMCk7aWYodSlyZXR1cm4gdShpLCEwKTt2YXIgYT1uZXcgRXJyb3IoXCJDYW5ub3QgZmluZCBtb2R1bGUgJ1wiK2krXCInXCIpO3Rocm93IGEuY29kZT1cIk1PRFVMRV9OT1RfRk9VTkRcIixhfXZhciBwPW5baV09e2V4cG9ydHM6e319O2VbaV1bMF0uY2FsbChwLmV4cG9ydHMsZnVuY3Rpb24ocil7dmFyIG49ZVtpXVsxXVtyXTtyZXR1cm4gbyhufHxyKX0scCxwLmV4cG9ydHMscixlLG4sdCl9cmV0dXJuIG5baV0uZXhwb3J0c31mb3IodmFyIHU9XCJmdW5jdGlvblwiPT10eXBlb2YgcmVxdWlyZSYmcmVxdWlyZSxpPTA7aTx0Lmxlbmd0aDtpKyspbyh0W2ldKTtyZXR1cm4gb31yZXR1cm4gcn0pKCkiLCIvLyBtYWtlcyBlYWNoIGpvYidzIGNhcmRcblxuY29uc3Qgam9iRmFjdG9yeSA9IGpvYkVsZW1lbnQgPT4ge1xuICAgIGxldCBlbmRfeWVhciA9IGpvYkVsZW1lbnQuZW5kX3llYXI7XG4gICAgaWYgKGVuZF95ZWFyID09PSBudWxsKSB7XG4gICAgICAgIGVuZF95ZWFyID0gXCJub3dcIjtcbiAgICB9XG4gICAgcmV0dXJuIGA8c2VjdGlvbj5cbiAgICA8aDM+JHtqb2JFbGVtZW50Lm9yZ2FuaXphdGlvbn08L2gzPlxuICAgIDxkaXY+JHtqb2JFbGVtZW50LmNpdHl9LCAke2pvYkVsZW1lbnQuc3RhdGV9PC9kaXY+XG4gICAgPGRpdj4ke2pvYkVsZW1lbnQuc3RhcnRfeWVhcn0gdG8gJHtlbmRfeWVhcn08L2Rpdj5cbiAgICA8ZGl2PiR7am9iRWxlbWVudC5yb2xlfTwvZGl2PlxuICAgIDwvc2VjdGlvbj5gO1xufVxuXG5leHBvcnQgZGVmYXVsdCBqb2JGYWN0b3J5OyIsIi8vIHVzZSBmZXRjaCB0byBnZXQgdGhlIGxpc3Qgb2Ygam9icyBmcm9tIHRoZSBhcGlcblxuY29uc3QgZ2V0Sm9icyA9ICgpID0+IHtcbiAgICByZXR1cm4gZmV0Y2goXCJodHRwczovL2FwaS5zdGV2ZWJyb3dubGVlLmNvbS9qb2JzL1wiKVxuICAgIC50aGVuKHJlcyA9PiByZXMuanNvbigpKTtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IGdldEpvYnM7IiwiLy8gZGlzcGxheSBhbGwgdGhlIGpvYnMgaW4gcmV2ZXJzZSBvcmRlciBvbiB0aGUgRE9NXG5cbmltcG9ydCBnZXRKb2JzIGZyb20gXCIuL2ZldGNoZXIuanNcIjtcbmltcG9ydCBqb2JGYWN0b3J5IGZyb20gXCIuL2ZhY3RvcnkuanNcIjtcblxuY29uc3QgbGlzdEVsID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiNsaXN0ZXJcIik7XG5cbmNvbnN0IHNob3dBbGxKb2JzID0gKCkgPT4ge1xuICAgIGdldEpvYnMoKVxuICAgIC50aGVuKHJlc3VsdE9iamVjdCA9PiB7XG4gICAgICAgIGxldCBqb2JBcnJheSA9IHJlc3VsdE9iamVjdC5yZXN1bHRzO1xuICAgICAgICBqb2JBcnJheS5yZXZlcnNlKCkuZm9yRWFjaChlbGVtZW50ID0+IHtcbiAgICAgICAgICAgIGxpc3RFbC5pbm5lckhUTUwgKz0gam9iRmFjdG9yeShlbGVtZW50KTtcbiAgICAgICAgfSlcbiAgICB9KVxufVxuXG5leHBvcnQgZGVmYXVsdCBzaG93QWxsSm9iczsiLCJpbXBvcnQgc2hvd0FsbEpvYnMgZnJvbSBcIi4vbGlzdGVyLmpzXCI7XG5cbnNob3dBbGxKb2JzKCk7Il19
