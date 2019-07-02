import React, { Component } from 'react';
import { ScrollView, RefreshControl } from 'react-native';
import axios from 'axios';
import ListagemNoticiasHome from './ListagemNoticiasHome';

export default class Home extends Component {
	constructor(props){
		super(props);
		this.state = {
			refreshing: false,
			noticias: []
		}
	}

	componentDidMount() {
		axios.get('https://vxm.com.br/cliente/VXMApp/noticias.php')
			.then(response => this.setState({ noticias: response.data }));	
	}

	onRefresh = () => {
		axios.get('https://vxm.com.br/cliente/VXMApp/noticias.php')
			.then(response => this.setState({ noticias: response.data, refreshing: false }))
			.catch((e) =>{console.warn(noticias)})
	}

	renderNoticia = () => {
		return this.state.noticias.map(noticia =>
		  	<ListagemNoticiasHome key={noticia.key} noticia={noticia} />
		);
	}

	render() {
		return (
			<ScrollView style={{ flex: 1, backgroundColor: "#FFF" }}
				refreshControl={
					<RefreshControl
						refreshing={this.state.refreshing}
						onRefresh={this.onRefresh}
						colors={["#f8981d", "#000"]} 
					/>
				}
			>
				{this.renderNoticia()}
			</ScrollView>
		);
	}
}