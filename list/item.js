import React from 'react';
import { View, Text, Button, StyleSheet, Alert, ScrollView, Image } from 'react-native';

export default function TaleItem({ item, handleDelete, handleDetail }) {
    const alertDelete = (name, handleDelete) => {
        return Alert.alert(
            'Xóa truyện', // tham so dau tien: title
            `Bạn có muốn xóa không?`, // tham so t2: content
            [
                {
                    text: 'Có',
                    onPress: () => { handleDelete(name) }
                },
                {
                    text: 'Không',
                    onPress: () => { }
                }
            ],
            { cancleable: false } // cho click ra ben ngoai alert hay khong (true -> disable)
        )
    };
    const alertDetail = (item, handleDetail) => { var setDetail = true; var indexItem = item; handleDetail(indexItem, setDetail); };
    const IsFull = (isFull) => {
        var trangthai = '';
        if (isFull == true) {
            trangthai = 'Đầy đủ'
        }
        else {
            trangthai= 'Đang cập nhật'
        }
        return (trangthai);
    }
    return (
        <ScrollView style={style.row}>
            <View style={style.container}>
                <Image style={{ width: 100, height: 100, marginBottom: 10, borderRadius: 20 }} source={{ uri: item.avatar }} />
                <Text style={style.textcontainer}><Text style={style.titlecontainer}>Tên Truyện:</Text> {item.name}</Text>
                <Text style={style.textcontainer}><Text style={style.titlecontainer}>Thể Loại:</Text> {item.category}</Text>
                <Text style={style.textcontainer}><Text style={style.titlecontainer}>Số chương:</Text> {item.total_chapter}</Text>
                <Text style={style.textcontainer}><Text style={style.titlecontainer}>Trạng thái:</Text> {IsFull(item.is_full)}</Text>
            </View>
            <View>
                <Button title='DELETE' onPress={() => { alertDelete(item.name, handleDelete)}} />
                <Button title='DETAIL' onPress={() => { alertDetail(item, handleDetail) }}/>
            </View>

        </ScrollView>
    )
}

const style = StyleSheet.create({
    row: {
        borderWidth: 1,
        width: 250,
        borderRadius: 20,
        marginBottom: 20,
        paddingTop: 20,
        paddingLeft: 20,
        paddingRight: 20
    },
    container: {
        textAlign: "center",
            backgroundColor: '#fff',
            alignItems: 'center',
            justifyContent: 'center',
    },
    textcontainer: {
        textAlign: "center",
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
        color: 'red'

    },
    titlecontainer: {
        fontWeight: "bold",
        color: 'black',
    }
});
