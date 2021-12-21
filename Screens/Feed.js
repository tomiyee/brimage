import * as React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { Avatar, Button, Card, Title, Paragraph } from 'react-native-paper';
import { Searchbar } from 'react-native-paper';

const LeftContent = props => <Avatar.Icon {...props} icon="folder" />

const CardComponent = () => (
  <Card style={styles.card}>
    <Card.Title title="Card Title" subtitle="Card Subtitle" left={LeftContent} />
    <Card.Content>
      <Title>Card title</Title>
      <Paragraph>Card content</Paragraph>
    </Card.Content>
    <Card.Cover source={{ uri: 'https://picsum.photos/700' }} />
    <Card.Actions>
      <Button>Cancel</Button>
      <Button>Ok</Button>
    </Card.Actions>
  </Card>
);

const Feed = () => {
  // The Search Query for the Feed
  const [searchQuery, setSearchQuery] = React.useState('');
  // Whenever the search query is updated, do stuff
  const onChangeSearch = query => setSearchQuery(query);
  return (
    <View style={styles.container}>
      <Searchbar
        style={styles.searchbar}
        placeholder="Search"
        onChangeText={onChangeSearch}
        value={searchQuery}
      />
      <View style={styles.cardList}>
        <CardComponent />
        <CardComponent />
        <CardComponent />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    paddingVertical: '20px',
    flex: 1,
    alignItems: 'center',
  },
  searchbar: {
    width: '100vw',
    maxWidth: '800px',
  },
  cardList: {
    marginVertical: '20px',
    flex: 1,
    flexDirection: 'column',
    alignItems: 'center', 
    gap: '1em',
  },
  card: {
    width: '100vw',
    maxWidth: '800px',
  },
});

export default Feed;