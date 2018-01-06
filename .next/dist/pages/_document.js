'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _getPrototypeOf = require('babel-runtime/core-js/object/get-prototype-of');

var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);

var _classCallCheck2 = require('babel-runtime/helpers/classCallCheck');

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = require('babel-runtime/helpers/createClass');

var _createClass3 = _interopRequireDefault(_createClass2);

var _possibleConstructorReturn2 = require('babel-runtime/helpers/possibleConstructorReturn');

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _inherits2 = require('babel-runtime/helpers/inherits');

var _inherits3 = _interopRequireDefault(_inherits2);

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _document = require('next\\dist\\server\\document.js');

var _document2 = _interopRequireDefault(_document);

var _styledComponents = require('styled-components');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _jsxFileName = 'D:\\rarty-prototype\\pages\\_document.js?entry';


var MyDocument = function (_Document) {
  (0, _inherits3.default)(MyDocument, _Document);

  function MyDocument() {
    (0, _classCallCheck3.default)(this, MyDocument);

    return (0, _possibleConstructorReturn3.default)(this, (MyDocument.__proto__ || (0, _getPrototypeOf2.default)(MyDocument)).apply(this, arguments));
  }

  (0, _createClass3.default)(MyDocument, [{
    key: 'render',
    value: function render() {
      var sheet = new _styledComponents.ServerStyleSheet();
      var main = sheet.collectStyles(_react2.default.createElement(_document.Main, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 7
        }
      }));
      var styleTags = sheet.getStyleElement();

      return _react2.default.createElement('html', {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 11
        }
      }, _react2.default.createElement(_document.Head, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 12
        }
      }, _react2.default.createElement('title', {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 13
        }
      }, 'Rarty - Something'), _react2.default.createElement('link', { rel: 'stylesheet', href: '/static/css/bootstrap.min.css', __source: {
          fileName: _jsxFileName,
          lineNumber: 14
        }
      }), _react2.default.createElement('link', { rel: 'stylesheet', href: 'https://cdnjs.cloudflare.com/ajax/libs/material-design-iconic-font/2.2.0/css/material-design-iconic-font.min.css', __source: {
          fileName: _jsxFileName,
          lineNumber: 15
        }
      }), _react2.default.createElement('link', { href: 'https://fonts.googleapis.com/css?family=Kanit:300,400,500', rel: 'stylesheet', __source: {
          fileName: _jsxFileName,
          lineNumber: 16
        }
      }), _react2.default.createElement('link', { href: 'https://fonts.googleapis.com/css?family=Open+Sans:400,600', rel: 'stylesheet', __source: {
          fileName: _jsxFileName,
          lineNumber: 17
        }
      }), _react2.default.createElement('link', { href: 'https://fonts.googleapis.com/css?family=Montserrat:600', rel: 'stylesheet', __source: {
          fileName: _jsxFileName,
          lineNumber: 18
        }
      }), _react2.default.createElement('meta', { name: 'theme-color', content: '#000', __source: {
          fileName: _jsxFileName,
          lineNumber: 19
        }
      }), _react2.default.createElement('meta', { name: 'description', content: 'Change me', __source: {
          fileName: _jsxFileName,
          lineNumber: 20
        }
      }), _react2.default.createElement('meta', { name: 'keywords', content: 'Change me', __source: {
          fileName: _jsxFileName,
          lineNumber: 21
        }
      }), styleTags), _react2.default.createElement('body', {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 24
        }
      }, _react2.default.createElement('div', { className: 'root', __source: {
          fileName: _jsxFileName,
          lineNumber: 25
        }
      }, main), _react2.default.createElement(_document.NextScript, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 28
        }
      })));
    }
  }]);

  return MyDocument;
}(_document2.default);

exports.default = MyDocument;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInBhZ2VzXFxfZG9jdW1lbnQuanMiXSwibmFtZXMiOlsiRG9jdW1lbnQiLCJIZWFkIiwiTWFpbiIsIk5leHRTY3JpcHQiLCJTZXJ2ZXJTdHlsZVNoZWV0IiwiaW5qZWN0R2xvYmFsIiwiTXlEb2N1bWVudCIsInNoZWV0IiwibWFpbiIsImNvbGxlY3RTdHlsZXMiLCJzdHlsZVRhZ3MiLCJnZXRTdHlsZUVsZW1lbnQiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBLEFBQU8sQUFBWSxBQUFNLEFBQU07Ozs7QUFDL0IsQUFBUyxBQUFrQjs7Ozs7OztJLEFBRU47Ozs7Ozs7Ozs7OzZCQUNWLEFBQ1A7VUFBTSxRQUFOLEFBQWMsQUFBSSxBQUNsQjtVQUFNLGFBQU8sQUFBTSw4QkFBYyxBQUFDOztvQkFBRDtzQkFBakMsQUFBYSxBQUFvQixBQUNqQztBQURpQztBQUFBLE9BQUEsQ0FBcEI7VUFDUCxZQUFZLE1BQWxCLEFBQWtCLEFBQU0sQUFFeEI7OzZCQUNFLGNBQUE7O29CQUFBO3NCQUFBLEFBQ0U7QUFERjtBQUFBLE9BQUEsa0JBQ0UsQUFBQzs7b0JBQUQ7c0JBQUEsQUFDRTtBQURGO0FBQUEseUJBQ0UsY0FBQTs7b0JBQUE7c0JBQUE7QUFBQTtBQUFBLFNBREYsQUFDRSxBQUNBLDhEQUFNLEtBQU4sQUFBVSxjQUFhLE1BQXZCLEFBQTRCO29CQUE1QjtzQkFGRixBQUVFLEFBQ0E7QUFEQTtrREFDTSxLQUFOLEFBQVUsY0FBYSxNQUF2QixBQUE0QjtvQkFBNUI7c0JBSEYsQUFHRSxBQUNBO0FBREE7a0RBQ00sTUFBTixBQUFXLDZEQUE0RCxLQUF2RSxBQUEyRTtvQkFBM0U7c0JBSkYsQUFJRSxBQUNBO0FBREE7a0RBQ00sTUFBTixBQUFXLDZEQUE0RCxLQUF2RSxBQUEyRTtvQkFBM0U7c0JBTEYsQUFLRSxBQUNBO0FBREE7a0RBQ00sTUFBTixBQUFXLDBEQUF5RCxLQUFwRSxBQUF3RTtvQkFBeEU7c0JBTkYsQUFNRSxBQUNBO0FBREE7a0RBQ00sTUFBTixBQUFXLGVBQWMsU0FBekIsQUFBaUM7b0JBQWpDO3NCQVBGLEFBT0UsQUFDQTtBQURBO2tEQUNNLE1BQU4sQUFBVyxlQUFjLFNBQXpCLEFBQWlDO29CQUFqQztzQkFSRixBQVFFLEFBQ0E7QUFEQTtrREFDTSxNQUFOLEFBQVcsWUFBVyxTQUF0QixBQUE4QjtvQkFBOUI7c0JBVEYsQUFTRSxBQUNDO0FBREQ7VUFWSixBQUNFLEFBWUEsNEJBQUEsY0FBQTs7b0JBQUE7c0JBQUEsQUFDRTtBQURGO0FBQUEseUJBQ0UsY0FBQSxTQUFLLFdBQUwsQUFBZTtvQkFBZjtzQkFBQSxBQUNHO0FBREg7U0FERixBQUNFLEFBR0EsdUJBQUEsQUFBQzs7b0JBQUQ7c0JBbEJOLEFBQ0UsQUFhRSxBQUlFLEFBSVA7QUFKTztBQUFBOzs7OztBQXhCOEIsQTs7a0JBQW5CLEEiLCJmaWxlIjoiX2RvY3VtZW50LmpzP2VudHJ5Iiwic291cmNlUm9vdCI6IkQ6L3JhcnR5LXByb3RvdHlwZSJ9