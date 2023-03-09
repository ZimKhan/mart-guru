import React, {Component} from 'react';
import {
    StyleSheet,
    View,
    Text,
    Image,
    ScrollView,
    TouchableOpacity, Linking
} from 'react-native';
import {List} from "antd-mobile-rn";
// import { updateUserInfo } from '../../actions/user';
import {PublicStyles, windowWidth} from '../../utils/style';
import {BaseComponent} from "../../components/basecomponent";

const Item = List.Item;

export default class YinsiPage extends BaseComponent {
    render() {
        return <ScrollView style={PublicStyles.ViewMax}>
            <View style={styles.title}>
                <Text>用户协议及隐私声明</Text>
            </View>
            <View style={styles.body}>
                <Text style={styles.content}>{'\t\t\t\t'}本软件尊重并保护所有使用服务用户的个人隐私权。为了给您提供更准确、更有个性化的 服务，本软件会按照本隐私权政策的规定使用和披露您的个人信息。但本软件将以高 度的勤勉、审慎义务对待这些信息。除本隐私权政策另有规定外，在未征得您事先许可的情况下 ，本软件不会将这些信息对外披露或向第三方提供。本软件会不时更新本隐私权政策 。 您在同意本软件服务使用协议之时，即视为您已经同意本隐私权政策全部内容。本隐私 权政策属于本软件服务使用协议不可分割的一部分。</Text>
                <Text style={styles.content}>{'\t\t\t\t'}1. 适用范围</Text>
                <Text style={styles.content}>{'\t\t\t\t'}a) 在您注册本软件帐号时，您根据本软件要求提供的个人注册信息；
                    b) 在您使用本软件网络服务，或访问本软件平台网页时，本软件自动接收并记 录的您的浏览器和计算机上的信息，包括但不限于您的IP地址、浏览器的类型、使用的语言、访 问日期和时间、软硬件特征信息及您需求的网页记录等数据；
                    c) 本软件通过合法途径从商业伙伴处取得的用户个人数据。
                    您了解并同意，以下信息不适用本隐私权政策：
                    a) 您在使用本软件平台提供的搜索服务时输入的关键字信息；
                    b) 本软件收集到的您在本软件发布的有关信息数据，包括但不限于参与活动、成交 信息及评价详情；
                    c) 违反法律规定或违反本软件规则行为及本软件已对您采取的措施。
                </Text>
                <Text style={styles.content}>{'\t\t\t\t'}2. 信息使用</Text>
                <Text style={styles.content}>{'\t\t\t\t'}a) 本软件不会向任何无关第三方提供、出售、出租、分享或交易您的个人信息，除非事先 得到您的许可，或该第三方和本软件（含本软件关联公司）单独或共同为您提供服务 ，且在该服务结束后，其将被禁止访问包括其以前能够访问的所有这些资料。
                    b) 本软件亦不允许任何第三方以任何手段收集、编辑、出售或者无偿传播您的个人信息。 任何本软件平台用户如从事上述活动，一经发现，本软件有权立即终止与该用户的服 务协议。
                    c) 为服务用户的目的，本软件可能通过使用您的个人信息，向您提供您感兴趣的信息，包 括但不限于向您发出产品和服务信息，或者与本软件合作伙伴共享信息以便他们向您发送 有关其产品和服务的信息（后者需要您的事先同意）。
                </Text>
                <Text style={styles.content}>{'\t\t\t\t'}3. 信息披露 在如下情况下，本软件将依据您的个人意愿或法律的规定全部或部分的披露您的个人信息 ：</Text>
                <Text style={styles.content}>{'\t\t\t\t'}a) 经您事先同意，向第三方披露；
                    b) 为提供您所要求的产品和服务，而必须和第三方分享您的个人信息；
                    c) 根据法律的有关规定，或者行政或司法机构的要求，向第三方或者行政、司法机构披露；
                    d) 如您出现违反中国有关法律、法规或者本软件服务协议或相关规则的情况，需要向第三 方披露；
                    e) 如您是适格的知识产权投诉人并已提起投诉，应被投诉人要求，向被投诉人披露，以便双方 处理可能的权利纠纷；
                    f) 在本软件平台上创建的某一交易中，如交易任何一方履行或部分履行了交易义务并提出 信息披露请求的，本软件有权决定向该用户提供其交易对方的联络方式等必要信息，以促 成交易的完成或纠纷的解决。
                    g) 其它本软件根据法律、法规或者网站政策认为合适的披露。
                </Text>
                <Text style={styles.content}>{'\t\t\t\t'}4. 信息存储和交换 本软件收集的有关您的信息和资料将保存在本软件及（或）其关联公司的服务器上， 这些信息和资料可能传送至您所在国家、地区或本软件收集信息和资料所在地的境外并在 境外被访问、存储和展示。</Text>
                <Text style={styles.content}>{'\t\t\t\t'}5. Cookie的使用</Text>
                <Text style={styles.content}>{'\t\t\t\t'}a) 在您未拒绝接受cookies的情况下，本软件会在您的计算机上设定或取用cookies ，以便您能登录或使用依赖于cookies的本软件平台服务或功能。本软件使用cookies 可为您提供更加周到的个性化服务，包括推广服务。
                    b) 您有权选择接受或拒绝接受cookies。 您可以通过修改浏览器设置的方式拒绝接受cookies。但如果您选择拒绝接受cookies，则您可能 无法登录或使用依赖于cookies的本软件网络服务或功能。
                    c) 通过本软件所设cookies所取得的有关信息，将适用本政策。
                </Text>
                <Text style={styles.content}>{'\t\t\t\t'}6. 信息安全</Text>
                <Text style={styles.content}>{'\t\t\t\t'}a) 本软件帐号均有安全保护功能，请妥善保管您的用户名及密码信息。本软件将通 过对用户密码进行加密等安全措施确保您的信息不丢失，不被滥用和变造。尽管有前述安全措施 ，但同时也请您注意在信息网络上不存在“完善的安全措施”。
                    b) 在使用本软件网络服务进行网上交易时，您不可避免的要向交易对方或潜在的交易对方 披露自己的个人信息，如联络方式或者邮政地址。请您妥善保护自己的个人信息，仅在必要的情 形下向他人提供。如您发现自己的个人信息泄密，尤其是本软件用户名及密码发生泄露， 请您立即联络本软件客服，以便本软件采取相应措施。
                </Text>
            </View>
        </ScrollView>;
    }

}

const styles = StyleSheet.create({
    title: {
        fontWeight: 'bold',
        fontSize: 16,
        flexDirection: 'row',
        alignItems: "center",
        justifyContent: 'center',
        padding: 15,
    },
    body: {
        fontSize: 12,
        padding:15,
    }
});
