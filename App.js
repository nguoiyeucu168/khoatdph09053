import React from 'react';
import { StyleSheet, Text, View, Picker, Button, TextInput, Modal, FlatList, Image } from 'react-native';
import TaleItem from './list/item';
export default function App() {
    const IsFull = (isFull) => {
        var trangthai = '';
        if (isFull == true) {
            trangthai = 'Đầy đủ'
        }
        else {
            trangthai = 'Đang cập nhật'
        }
        return (trangthai);
    }
    const tale = [
        {
            avatar: 'https://lh3.googleusercontent.com/proxy/2JbuQA-Iw4vNThuC5ys-KkcP2piUW0rvuimViP9k_NvwoACKh3uE8_xGbxDDg1gl-te6FLEhKcBq6JNcS1tNhQEu4OgbNfI',
            name: 'Sherlock Home: Hình nhân biết múa',
            category: 'Trinh thám',
            total_chapter: 136,
            is_full: true,
        },
        {
            avatar: 'https://static.8cache.com/cover/o/eJzLyTDR180LKc8Kjw9w9kly1Q9z8nUxyTQ3Ms721HeEgmxvC_3MsEKLgJLCxIqIcv1yI0NT3QxjIyMAUTMSjA==/dau-la-dai-luc.jpg',
            name: 'Đấu La Đại Lục',
            category: 'Huyền Huyễn',
            total_chapter: 560,
            is_full: true,
        },
        {
            avatar: 'https://static.8cache.com/cover/o/eJzLyTDT17WITwqMNNQtNKp01A_zNXY1ifQuc8301HeEghwTR_1IV8PsTO-w4HKTUP1iAwC-dBAE/pham-nhan-tu-tien.jpg',
            name: 'Phàm Nhân Tu Tiên',
            category: 'Tiên Hiệp',
            total_chapter: 1230,
            is_full: false,
        },
        {
            avatar: 'https://www.thegioidienanh.vn/stores/news_dataimages/hath/092017/01/17/4505_chu_thich_2.jpg',
            name: 'Hoa Thiên Cốt',
            category: 'Huyền Huyễn',
            total_chapter: 600,
            is_full: false,
        },
        {
            avatar: 'https://sachvui.com/cover/2015/thukiemancuuluc.JPG',
            name: 'Thư Kiếm Ân Cừu Lục',
            category: 'Kiếm Hiệp',
            total_chapter: 230,
            is_full: true,
        }

    ]
    const [tales, setTalesChange] = React.useState(tale);
    const handleDelete = (name) => {
        let newList = tales;
        newList = newList.filter((tale) => tale.name != name);

        tale == newList;
        setTalesChange(newList);
        console.log(tales);
    }
    const [indexItem, onChangindexItem] = React.useState(tale[0]);
    const [name, onChangeName] = React.useState('');
    const [age, onChangeAge] = React.useState('');
    var enablebutton = true;
    const [showDetailModal, setShowDetailModal] = React.useState(false);
    const [showModal, setShowModal] = React.useState(true);
    const handleDetail = (indexItem, setDetail) => {
        setShowDetailModal(setDetail);
        onChangindexItem(indexItem);
    }
    const setEnableButton = () => {
        if (!name.trim() == '' && age>=18) {
            enablebutton = false;
        }
        else {
            enablebutton = true;
        }
    }
    return (
        
        <View style={styles.container}>
         
            <View style={styles.container}>
                <Text><Text style={{fontWeight: 'bold'}}>Tên người dùng:</Text> ${name}</Text>
                <Button title='Cancel' onPress={() => {
                    setShowModal(true);
                }} />
                <FlatList 
                    data={tales}
                    renderItem={({ item }) => (
                        <TaleItem item={item} handleDelete={handleDelete} handleDetail={handleDetail}/>
                    )}
                    keyExtractor={(item, index) => index}
                />

            </View>
            <Modal visible={showModal}>
                <View style={styles.container} >
                    <Text style={styles.title}>Nhập tên của bạn</Text>
                    <TextInput style={styles.input} 
                        value={name} onChangeText={(value) => onChangeName(value)} onSubmitEditing={setEnableButton()}
                    />

                    <Text style={styles.title}>Nhập tuổi của bạn</Text>
                    <TextInput 
                        style={styles.input}
                        value={age} onChangeText={(value) => onChangeAge(value)} underlineColorAndroid='transparent' keyboardType={'numeric'}


                    />
                    <Button  title='Vào đọc truyện' disabled={enablebutton} onPress={() => {
                        setShowModal(false);
                    }} />
                </View >
            </Modal>
            <Modal visible={showDetailModal}>
                <View style={styles.container}>
                    <Image style={{ width: 200, height: 200, marginBottom: 10, borderRadius: 20 }} source={{ uri: indexItem.avatar }} />
                 
                    <View>
                        <Text ><Text style={styles.textTile} >Tên Truyện:</Text> {indexItem.name}</Text>
                        <Text ><Text style={styles.textTile} >Thể Loại:</Text> {indexItem.category}</Text>
                        <Text ><Text style={styles.textTile} >Số chương:</Text> {indexItem.total_chapter}</Text>
                        <Text ><Text style={styles.textTile} >Trạng thái:</Text> {IsFull(indexItem.is_full)}</Text>
                    </View>
                    <Button title='Cancel' onPress={() => { setShowDetailModal(false) }} />
                </View>
            </Modal>
        </View>

  );
}

const styles = StyleSheet.create({
    container: {
        marginTop: 20,
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
    },
    textTile: {
        fontSize: 19,
        color: 'red',
        fontWeight: 'bold'
    },
    input: {
        height: 40, width: 200, textAlign: 'center',
        borderColor: 'blue',
        borderWidth: 1,
        borderRadius: 60,
        paddingLeft: 20,
        paddingRight: 20,
        marginTop: 10,
        marginBottom: 10
    },
    title: {
        fontSize: 18,
        color: 'red',
        fontWeight: 'bold'
    }

});
