import React from 'react';
import {
	StyleSheet,
	Image, Dimensions
} from 'react-native';
import LoadingScreen from "../../theme/components/Loading";

export default class Thumbnails extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			loading: true
		}
	}

	componentDidMount() {
		let {source, layoutWidth} = this.props;
		let widthImage = layoutWidth ? layoutWidth : Dimensions.get('window').width;
		let {width, height} = Image.resolveAssetSource(source);
		if (typeof source.uri === 'undefined') {
			this.setState({
				loading: false,
				width: widthImage,
				height: widthImage * height / width
			})
		} else {
			Image.getSize(source.uri, (widthImg, heightImg) => {
				this.setState({
					loading: false,
					width: widthImage/2,
					height: (widthImage/2) * (heightImg/2) / (widthImg/2)
				})
			}, (error) => {
				console.log('e get img: ', error.message)
				this.setState({
					loading: false,
					width: widthImage,
					height: widthImage * 100 / widthImage
				})
			});
		}
	}

	render() {
		if (this.state.loading) return <LoadingScreen/>
		let {style} = this.props;
		return <Image {...this.props} style={[style, {width: this.state.width, height: this.state.height}]}/>
	}
}
