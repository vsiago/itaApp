import React, { useState, useEffect } from 'react';
import { View, Button, ActivityIndicator } from 'react-native';
import PlaceFeedItem from './placesFeedItem';
import axios from 'axios';

const FeedPlaces = () => {
  const [feedData, setFeedData] = useState([]);
  const [searchQuery, setSearchQuery] = useState('pet');
  const [loading, setLoading] = useState(true); // Estado de carregamento

  useEffect(() => {
    const fetchData = async () => {
      try {
        setLoading(true); // Define o estado de carregamento como verdadeiro antes da busca
        const response = await axios.get(`https://api.unsplash.com/search/photos/?client_id=w4wSZ_z6x6CFC1WsGivgi7U4oTbulIyaFlHEUSLK5P8&query=${searchQuery}`);
        setFeedData(response.data.results); // Ajuste para acessar response.data.results
      } catch (error) {
        console.error(error);
      } finally {
        setLoading(false); // Define o estado de carregamento como falso após a busca
      }
    };

    fetchData();
  }, [searchQuery]);

  const handleSearch = (query) => {
    setSearchQuery(query);
  };

  return (
    <View style={{ flex: 1 }}>
      <View style={{ flexDirection: 'row', justifyContent: 'space-around', marginTop: 20 }}>
        <Button title="Praias" onPress={() => handleSearch('praia')} />
        <Button title="Escolas" onPress={() => handleSearch('escola')} />
        <Button title="Unidades de Saúde" onPress={() => handleSearch('saude')} />
      </View>
      {loading ? ( // Mostra um indicador de carregamento enquanto os dados estão sendo buscados
        <ActivityIndicator size="large" color="#0000ff" style={{ marginTop: 20 }} />
      ) : (
        <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
          {feedData.map((item) => (
            <PlaceFeedItem
              key={item.id} // Use a chave única para re-renderizar corretamente os itens do feed
              imageURL={item.urls.regular}
              title={item.alt_description}
              description="Aqui vai uma descricao de um material da Prefeitura para o público clicar e consumir."
              likes={Math.floor(Math.random() * 1000)}
            />
          ))}
        </View>
      )}
    </View>
  );
};

export default FeedPlaces;
