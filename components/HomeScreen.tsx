import React, { useEffect, useState } from 'react';
import {
    View,
    Text,
    StyleSheet,
    FlatList,
    ActivityIndicator,
    StatusBar
} from 'react-native';
import { useNavigation } from '@react-navigation/native'; // Navigasyon için (örneğin geri gitme)

// 4. Adım Madde 4: TypeScript Post Interface
interface Post {
    userId: number;
    id: number;
    title: string;
    body: string;
}

const HomeScreen = () => {
    const [posts, setPosts] = useState<Post[]>([]);
    const [loading, setLoading] = useState<boolean>(true); // Yüklenme durumu


    useEffect(() => {
        fetch('https://jsonplaceholder.typicode.com/posts')
            .then((response) => response.json())
            .then((data: Post[]) => {
                setPosts(data);
                setLoading(false);
                console.log('--- Post Verileri Konsol Çıktısı ---');
                console.log(data.slice(0, 5));
                console.log('--- Konsol Çıktısı Bitti ---');
            })
            .catch((error) => {
                console.error('Veri çekme hatası:', error);
                setLoading(false);
            });
    }, []); // 
    const renderPostItem = ({ item }: { item: Post }) => (
        <View style={styles.postCard}>

            <Text style={styles.postTitle}>{item.title}</Text>

            <Text style={styles.postBody}>{item.body}</Text>
            <Text style={styles.userIdText}>Kullanıcı ID: {item.userId}</Text>
        </View>
    );
    if (loading) {

        return (
            <View style={styles.loadingContainer}>
                <ActivityIndicator size="large" color="#ff00d0ff" />
                <Text style={styles.loadingText}>Gönderiler Yükleniyor...</Text>
            </View>
        );
    }
    return (
        <View style={styles.container}>
            <StatusBar barStyle="dark-content" />
            { }
            <FlatList
                data={posts}
                renderItem={renderPostItem}
                keyExtractor={(item) => item.id.toString()}
                contentContainerStyle={styles.listContent}
            />
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#f5f5f5',
    },
    loadingContainer: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#fff',
    },
    loadingText: {
        marginTop: 10,
        fontSize: 16,
        color: '#007AFF',
    },
    listContent: {
        padding: 10,
    },
    postCard: {
        backgroundColor: '#fff',
        padding: 15,
        borderRadius: 10,
        marginBottom: 10,
        // Gölge efekti
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.1,
        shadowRadius: 3.84,
        elevation: 5,
        borderLeftWidth: 5,
        borderLeftColor: '#007AFF', // Küçük renkli çizgi ekledik
    },
    postTitle: {
        fontSize: 18,
        fontWeight: 'bold',
        marginBottom: 5,
        color: '#333',
        lineHeight: 22,
    },
    postBody: {
        fontSize: 14,
        color: '#666',
        marginBottom: 10,
    },
    userIdText: {
        fontSize: 12,
        color: '#aaa',
        textAlign: 'right',
    }
});

export default HomeScreen;