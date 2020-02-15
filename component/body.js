import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import BodyHead from './body-head'

export default () => {
    return (
        <View style={styles.siteBody}>
            <BodyHead />
            <View style={styles.siteBody_Body}>
                <Text style={styles.siteText}>여기는 사이트 바디입니다 - 바디입니다</Text>
            </View>
        </View>
    )
}
const styles = StyleSheet.create({
    siteBody: {
        flex: 10,
        backgroundColor: 'plum',
        alignItems: 'center',
        justifyContent: 'center',
    },
})