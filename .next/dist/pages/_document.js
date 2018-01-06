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
      var main = sheet.collectStyles(_react2.default.createElement(_document.Main, null));
      var styleTags = sheet.getStyleElement();

      return _react2.default.createElement('html', null, _react2.default.createElement(_document.Head, null, _react2.default.createElement('title', null, 'Rarty - Rent a dress, Chase a dream'), _react2.default.createElement('link', { rel: 'stylesheet', href: '/static/css/bootstrap.css' }), _react2.default.createElement('meta', { name: 'viewport', content: 'width=device-width, initial-scale=1, shrink-to-fit=no' }), _react2.default.createElement('link', { rel: 'stylesheet', href: 'https://cdnjs.cloudflare.com/ajax/libs/material-design-iconic-font/2.2.0/css/material-design-iconic-font.min.css' }), _react2.default.createElement('link', { href: 'https://fonts.googleapis.com/css?family=Kanit:300,400,500', rel: 'stylesheet' }), _react2.default.createElement('link', { href: 'https://fonts.googleapis.com/css?family=Open+Sans:400,600', rel: 'stylesheet' }), _react2.default.createElement('link', { href: 'https://fonts.googleapis.com/css?family=Montserrat:600', rel: 'stylesheet' }), _react2.default.createElement('meta', { name: 'theme-color', content: '#000' }), _react2.default.createElement('meta', { name: 'description', content: 'Change me' }), _react2.default.createElement('meta', { name: 'keywords', content: 'Change me' }), styleTags), _react2.default.createElement('body', null, _react2.default.createElement('div', { className: 'root' }, main), _react2.default.createElement(_document.NextScript, null)));
    }
  }]);

  return MyDocument;
}(_document2.default);

exports.default = MyDocument;