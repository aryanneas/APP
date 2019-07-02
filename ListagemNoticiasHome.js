import React from 'react';
import { Text, View, Image, TouchableWithoutFeedback} from 'react-native';
import { CardSection } from '../comum';
import { Actions } from 'react-native-router-flux';

const ListagemNoticiasHome = ({ noticia }) =>{
	const { 
		key, 
		titulo,  
		dataHora, 
		image, 
		thumbnail_image, 
		texto, 
		url,
		categoria 
	} = noticia;

	return(
		<View>
			<CardSection>
				<TouchableWithoutFeedback 
					onPress={
						() => Actions.interna({
							cod: key, 
							titulo: titulo, 
							dataHora: dataHora, 
							image: image,
							texto: texto, 
							url: url,
							categoria: categoria 
						})
					}>
					<View style={styles.thumbnailContainerStyle}>
						<Image 
						source={{ uri: thumbnail_image }} 
						style={styles.thumbnailStyle}
						/>
					</View>
				</TouchableWithoutFeedback>
				
				<View style={styles.container}> 
					<Text 
					onPress={
						() => Actions.interna({
							cod: key, 
							titulo: titulo, 
							dataHora: dataHora, 
							image: image,
							texto: texto, 
							url: url,
							categoria: categoria 
						})
					} 
					style={styles.tituloStyle}
					numberOfLines={1} 
					ellipsizeMode="tail"> 
						{titulo} 
					</Text> 

					<Text 
					onPress={
						() => Actions.interna({
							cod: key, 
							titulo: titulo, 
							dataHora: dataHora, 
							image: image,
							texto: texto, 
							url: url,
							categoria: categoria  
						})
					} 
					style={styles.descStyle}
					numberOfLines={3} 
					ellipsizeMode="tail"> 
						{texto}
					</Text> 
				</View>	
			</CardSection>	

			<CardSection>
				<TouchableWithoutFeedback 
					onPress={
						() => Actions.interna({
							cod: key, 
							titulo: titulo, 
							dataHora: dataHora, 
							image: image,
							texto: texto, 
							url: url,
							categoria: categoria 
						})
					}>
					<View style={styles.thumbnailContainerStyle}>
						<Image 
						source={{ uri: thumbnail_image }} 
						style={styles.thumbnailStyle}
						/>
					</View>
				</TouchableWithoutFeedback>
				
				<View style={styles.container}> 
					<Text 
					onPress={
						() => Actions.interna({
							cod: key, 
							titulo: titulo, 
							dataHora: dataHora, 
							image: image,
							texto: texto, 
							url: url,
							categoria: categoria  
						})
					} 
					style={styles.tituloStyle}
					numberOfLines={1} 
					ellipsizeMode="tail"> 
						{titulo} 
					</Text> 

					<Text 
					onPress={
						() => Actions.interna({
							cod: key, 
							titulo: titulo, 
							dataHora: dataHora, 
							image: image,
							texto: texto, 
							url: url,
							categoria: categoria  
						})
					}  
					style={styles.descStyle}
					numberOfLines={3} 
					ellipsizeMode="tail"> 
						{texto}
					</Text> 
				</View>								
			</CardSection>	

			<View style={styles.cardDestaque}> 
				<TouchableWithoutFeedback 
					onPress={
						() => Actions.interna({
							cod: key, 
							titulo: titulo, 
							dataHora: dataHora, 
							image: image,
							texto: texto, 
							url: url,
							categoria: categoria 
						})
					}>
					<View style={styles.containerDestaqueStyle}>
						<Image 
						source={{uri: image}} 
						style={[styles.imgDestaqueStyle, {height: 200}]} 
						/>
					</View>	
				</TouchableWithoutFeedback>

				<View>
					<Text 
					onPress={
						() => Actions.interna({
							cod: key, 
							titulo: titulo, 
							dataHora: dataHora, 
							image: image,
							texto: texto, 
							url: url,
							categoria: categoria  
						})
					} 
					style={[
						styles.tituloStyle, 
						{
						marginTop: 0,
						marginBottom: 10
						}
					]}>
					{titulo}
					</Text>
				</View>	
			</View>	
		</View>	
	);
};

export default ListagemNoticiasHome;

const styles = {
	headerContentStyle: {
		flexDirection: 'column',
		justifyContent: 'space-around'
	},

	container:{
		flexDirection:'row', 
		flex: 1, 
		flexWrap: 'wrap', 
		justifyContent: 'center', 
		alignItems: 'center'
	},

	tituloStyle: {
		fontSize: 12,
		fontWeight: 'bold',
		fontFamily: "Arial",
		lineHeight: 20,
		color: '#000',
		marginTop: 17,
	},

	descStyle:{
		fontSize: 11,
		fontWeight: 'normal',
		fontFamily: 'Arial',
		lineHeight: 18,
		color: '#0F0F0F',
	},

	thumbnailStyle: {
		height: 90,
		width: 70,
		borderRadius: 5,
		marginRight: 10,
		marginBottom: 10,
		marginTop: 10
	},

	thumbnailContainerStyle: {
		alignItems: 'flex-start',
		justifyContent: 'center',				
	},

	imgDestaqueStyle:{
		flex: 1, 
		marginTop: 10, 
		marginBottom: 10, 
		borderRadius: 5
	},

	containerDestaqueStyle:{
		backgroundColor: '#fff',
		justifyContent: 'flex-start',
		flexDirection: 'row',
		position: 'relative',
	},

	cardDestaque:{
		marginHorizontal: 10, 
		borderBottomWidth: 1,
		borderBottomColor: '#ddd',
	}
};