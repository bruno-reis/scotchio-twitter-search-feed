var React = require('react');

var UserImg = React.createClass({
  componentDidMount: function() {
    var $this = this;
    this.img = new Image();
    var defaultSrc = '../assets/avatar.png';
    this.img.onerror = function() {
      if ($this.isMounted()) {
        $this.setState({
          src: defaultSrc
        });
      }
    };
    this.img.src = this.state.src;
  },
  
  getInitialState: function() {
    return {
      src: this.props.src
    };
  },
  
  render: function() {
    return <img src={this.state.src} />;
  }
});

module.exports = UserImg;