import React from "react";
import {
    createStackNavigator,
    createSwitchNavigator
} from "react-navigation";
import StackViewStyleInterpolator from 'react-navigation/src/views/StackView/StackViewStyleInterpolator';

import Ad from "../pages/ad";

import Index from "../pages/index";
import PhotoGallery from "../utils/photoGallery";
import FullScreenVideo from "../utils/fullScreenVideo";
import PageDetail from "../pages/page/detail";

import GoodsList from "../pages/goods/list";
import GoodsDetail from "../pages/goods/detail";

import Pay from "../pages/pay";
import PaySuccess from "../pages/pay/success";

import UserLogin from "../pages/user/login";
import UserInfo from "../pages/user/info";
import UserRegister from "../pages/user/register";
import UserFindPassword from "../pages/user/findPassword";
import UserChangePassword from "../pages/user/changePassword";
import UserAddressAdd from "../pages/user/address/add";
import UserAddressEdit from "../pages/user/address/edit";
import UserAddressList from "../pages/user/address/list";

import CartOrderFill from "../pages/cart/orderFill";

import OrderList from "../pages/order/list";
import OrderDetail from "../pages/order/detail";

import RefundDetail from "../pages/refund/detail";
import RefundList from "../pages/refund/list";
import RefundLogisticsFill from "../pages/refund/logisticsFill";
import RefundServiceApply from "../pages/refund/serviceApply";
import RefundServiceType from "../pages/refund/serviceType";

import AddressAdd from "../pages/address/add";
import AddressEdit from "../pages/address/edit";
import AddressList from "../pages/address/list";

import EvaluateAdd from "../pages/evaluate/add";
import EvaluateAdditional from "../pages/evaluate/additional";
import EvaluateDetail from "../pages/evaluate/detail";
import EvaluateList from "../pages/evaluate/list";

import CollectGoods from "../pages/collect/goods";
import CustomDiscount from "../pages/custom/CustomDiscount";
import BalanceTixian from "../pages/custom/balanceTixian";
import BalanceChangeRecords from "../pages/custom/balanceChangeRecords";
import ChargeListPage from "../pages/chongzhi/chargePageList";
import ChargeItemPage from "../pages/chongzhi/chargeItemPage";
import ChargeOrderFill from "../pages/chongzhi/chargeOrderFill";
import BalanceTixianRecords from "../pages/custom/balanceTixianRecords";
import About from "../pages/user/about";
import Agent from "../pages/Agent";
import AgentInfo from "../pages/Agent/agentInfo";
import AgentOrderList from "../pages/Agent/agentOrderList";
import ContactService from "../pages/user/ContactService";
import YinsiPage from "../pages/user/yinsi";

const modalStyleStackNames = [
    'UserLogin',
    'FullScreenVideo',
];

function getCurrentRouteName(navigationState) {
    if (!navigationState) {
        return null;
    }
    const route = navigationState.routes[navigationState.index];
    // dive into nested navigators
    if (route.routes) {
        return getCurrentRouteName(route);
    }
    return route.routeName;
}

const indexNavigationOptions = ({navigation, screenProps}) => ({
    'Home': {
        title: screenProps.homeTitle
    },
    'Category': {
        title: '??????'
    },
    'Cart': {
        title: '?????????',
    },
    'Agent': {
        title: '??????',
    },
    'User': {
        title: '??????',
    },
})

const AppStack = createStackNavigator(
    {
        Index: {
            screen: Index,
            navigationOptions: ({navigation, screenProps}) => {
                return indexNavigationOptions({navigation, screenProps})[getCurrentRouteName(navigation.state)]
            }
        },
        PageDetail: {
            screen: PageDetail,
        },
        // ??????????????????
        PhotoGallery: {
            screen: PhotoGallery,
            navigationOptions: {
                header: null,
            }
        },
        FullScreenVideo: {
            screen: FullScreenVideo
        },
        // category
        GoodsList: {
            screen: GoodsList,
            navigationOptions: {
                title: '????????????'
            }
        },
        GoodsDetail: {
            screen: GoodsDetail,
            navigationOptions: {
                title: '????????????'
            }
        },
        Pay: {
            screen: Pay,
            navigationOptions: {
                title: '?????????'
            }
        },
        PaySuccess: {
            screen: PaySuccess,
            navigationOptions: {
                title: '????????????',
                headerLeft: null,
                headerStyle: {
                    backgroundColor: "#fff",
                    elevation: 0,//??????????????????
                    borderBottomWidth: 0,
                },
            }
        },
        // user
        UserLogin: {
            screen: UserLogin,
            navigationOptions: {
                title: '??????'
            }
        },
        UserInfo: {
            screen: UserInfo,
            navigationOptions: {
                title: '????????????'
            }
        },
        UserRegister: {
            screen: UserRegister,
            navigationOptions: {
                title: '??????'
            }
        },
        UserFindPassword: {
            screen: UserFindPassword,
            navigationOptions: {
                title: '????????????'
            }
        },
        UserChangePassword: {
            screen: UserChangePassword,
            navigationOptions: {
                title: '????????????'
            }
        },
        UserAddressAdd: {
            screen: UserAddressAdd,
            navigationOptions: {
                title: '??????????????????'
            }
        },
        UserAddressEdit: {
            screen: UserAddressEdit,
            navigationOptions: {
                title: '??????????????????'
            }
        },
        UserAddressList: {
            screen: UserAddressList,
            navigationOptions: {
                title: '??????????????????'
            }
        },
        // cart
        CartOrderFill: {
            screen: CartOrderFill,
            navigationOptions: {
                title: '????????????'
            }
        },
        // order
        OrderList: {
            screen: OrderList,
            navigationOptions: {
                title: '????????????'
            }
        },
        OrderDetail: {
            screen: OrderDetail,
            navigationOptions: {
                title: '????????????'
            }
        },
        // refund
        RefundDetail: {
            screen: RefundDetail,
            navigationOptions: {
                title: '????????????'
            }
        },
        RefundList: {
            screen: RefundList,
            navigationOptions: {
                title: '????????????'
            }
        },
        RefundLogisticsFill: {
            screen: RefundLogisticsFill,
            navigationOptions: {
                title: '????????????????????????'
            }
        },
        RefundServiceApply: {
            screen: RefundServiceApply,
            navigationOptions: {
                title: '????????????'
            }
        },
        RefundServiceType: {
            screen: RefundServiceType,
            navigationOptions: {
                title: '????????????????????????'
            }
        },
        // address
        AddressAdd: {
            screen: AddressAdd,
            navigationOptions: {
                title: '??????????????????'
            }
        },
        AddressEdit: {
            screen: AddressEdit,
            navigationOptions: {
                title: '??????????????????'
            }
        },
        AddressList: {
            screen: AddressList,
            navigationOptions: {
                title: '??????????????????'
            }
        },
        // evaluate
        EvaluateAdd: {
            screen: EvaluateAdd,
            navigationOptions: {
                title: '??????'
            }
        },
        EvaluateAdditional: {
            screen: EvaluateAdditional,
            navigationOptions: {
                title: '????????????'
            }
        },
        EvaluateDetail: {
            screen: EvaluateDetail,
            navigationOptions: {
                title: '????????????'
            }
        },
        EvaluateList: {
            screen: EvaluateList,
            navigationOptions: {
                title: '????????????'
            }
        },
        CollectGoods: {
            screen: CollectGoods,
            navigationOptions: {
                title: '????????????'
            }
        },
        //?????????????????????
        CustomDiscount: {
            screen: CustomDiscount,
            navigationOptions: {
                title: '?????????????????????'
            }
        },
        //????????????
        BalanceTixian: {
            screen: BalanceTixian,
            navigationOptions: {
                title: '????????????'
            }
        },
        //????????????
        BalanceTixianRecords: {
            screen: BalanceTixianRecords,
            navigationOptions: {
                title: '????????????'
            }
        },
        //??????????????????
        BalanceChangeRecords: {
            screen: BalanceChangeRecords,
            navigationOptions: {
                title: '????????????'
            }
        },
        //????????????
        ChargePageList: {
            screen: ChargeListPage,
            navigationOptions: {
                title: '????????????'
            }
        },
        //???????????????
        ChargeItemPage: {
            screen: ChargeItemPage,
            navigationOptions: {
                title: '??????'
            }
        },
        //???????????????
        ChargeOrderFill: {
            screen: ChargeOrderFill,
            navigationOptions: {
                title: '????????????'
            }
        },
        //????????????
        About: {
            screen: About,
            navigationOptions: {
                title: '??????????????????APP??????'
            }
        },
        AgentInfo: {
            screen: AgentInfo,
            navigationOptions: {
                title: '??????????????????'
            }
        },
        AgentOrderList: {
            screen: AgentOrderList,
            navigationOptions: {
                title: '??????????????????'
            }
        },
        ContactService: {
            screen: ContactService,
            navigationOptions: {
                title: '????????????'
            }
        },
        YiSiPage: {
            screen: YinsiPage,
            navigationOptions: {
                title: '???????????????????????????'
            }
        }
    },
    {
        navigationOptions: ({navigation}) => ({
            headerBackTitle: null,
            gesturesEnabled: true,
            headerStyle: {
                backgroundColor: "#fff",
                elevation: 0,//??????????????????
                borderBottomWidth: 0.5,
                borderBottomColor: '#dcdcdc',
            },
            headerTintColor: '#000',
        }),
        headerTransitionPreset: 'uikit',
        mode: "card",
        transitionConfig: (e) => ({
            screenInterpolator: (sceneProps) => {
                const {scene} = sceneProps;
                const {route} = scene;
                if (modalStyleStackNames.includes(route.routeName)) {
                    return StackViewStyleInterpolator.forVertical(sceneProps);
                }
                return StackViewStyleInterpolator.forHorizontal(sceneProps);
            }
        })
    }
);

const AdStack = createStackNavigator({
    Ad: {
        screen: Ad,
        navigationOptions: {
            header: null
        }
    }
});

export default createSwitchNavigator(
    {
        Ad: AdStack,
        App: AppStack,
    }, {
        initialRouteName: 'Ad',
    }
)