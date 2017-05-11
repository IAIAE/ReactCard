'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var React = require('react');
var Component = React.Component;
var ReactDOM = require('react-dom');
var Flipsnap = require('flipsnap');

var styles = {
    viewport: {
        overflowX: 'hidden',
        width: '100%',
        writingMode: 'initial',
        position: 'relative'
    },
    holder: {
        whiteSpace: 'nowrap',
        writingMode: 'vertical-lr'
    }
};

var CrossCard = function (_Component) {
    _inherits(CrossCard, _Component);

    function CrossCard(props) {
        _classCallCheck(this, CrossCard);

        return _possibleConstructorReturn(this, (CrossCard.__proto__ || Object.getPrototypeOf(CrossCard)).call(this, props));
    }

    _createClass(CrossCard, [{
        key: 'getDistance',
        value: function getDistance() {
            if (!this.item_vw) {
                return 0;
            } else {
                var aItem = this.refs.holder.childNodes[0];
                return Math.Max(+aItem.style.marginLeft, +aItem.style.marginRight) + this.item_vw;
            }
        }
    }, {
        key: 'updateWidth',
        value: function updateWidth() {
            this.vw = this.refs.viewport.clientWidth;
            var aItem = this.refs.holder.childNodes;
            if (aItem) {
                this.item_vw = aItem[0].clientWidth;
            }
            this.holderWidth = this.refs.holder.clientWidth;
        }
    }, {
        key: 'componentDidMount',
        value: function componentDidMount() {
            var _props = this.props,
                distance = _props.distance,
                stick = _props.stick,
                duration = _props.duration;

            this.flipsnap = Flipsnap(this.refs.holder, Object.assign({
                transitionDuration: duration || 150
            }, distance && { distance: distance }));
        }
    }, {
        key: 'next',
        value: function next() {
            this.flipsnap && this.flipsnap.toNext();
        }
    }, {
        key: 'prev',
        value: function prev() {
            this.flipsnap && this.flipsnap.toPrev();
        }
    }, {
        key: 'moveTo',
        value: function moveTo(num, fast) {
            if (!fast) {
                this.flipsnap.moveToPoint(num);
            }
        }
    }, {
        key: 'componentWillUnMount',
        value: function componentWillUnMount() {
            this.flipsnap.destroy();
        }
    }, {
        key: 'render',
        value: function render() {
            var props = this.props;
            var stick = props.stick,
                duration = props.duration;

            return React.createElement(
                'div',
                { ref: 'viewport', className: props.className, style: styles.viewport },
                React.createElement(
                    'div',
                    { ref: 'holder', style: styles.holder },
                    props.children.map(function (child, index) {
                        return React.createElement(
                            'div',
                            { key: index, style: {
                                    writingMode: 'initial',
                                    boxSizing: 'border-box'
                                } },
                            child
                        );
                    })
                )
            );
        }
    }]);

    return CrossCard;
}(Component);

module.exports = CrossCard;

