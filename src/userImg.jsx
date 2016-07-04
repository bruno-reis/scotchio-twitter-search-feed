var React = require('react');

class UserImg extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      src: this.props.src
    };
  }

  componentDidMount() {
    this.img = new Image();
    var defaultSrc = '../assets/avatar.png';
    this.img.onError = () => {
        this.setState({
          src: defaultSrc
        });
    };
    this.img.src = this.state.src;
  }

  render() {
    return <img src={this.state.src} />;
  }
}

module.exports = UserImg;