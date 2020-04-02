import React,{useState,useEffect} from 'react';
import {StyleSheet,View,Text, Image, 
	BackHandler,ToastAndroid,AsyncStorage
} from 'react-native';
import {Router, Overlay, Scene, Tabs, Drawer, Lightbox, Modal, Actions} from 'react-native-router-flux';
// import { Icon } from '@ant-design/react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import SplashScreen from 'react-native-splash-screen';
import Home from './src/home/Home';
import Goods from './src/goods/Goods';
import Login from './src/common/Common'
import Userinfor from './src/userInFor/UserInFor';
import SwiperPage from './src/common/SwiperPage';
import Publish from './src/userInFor/Publish';
import Register from './src/common/Register';
console.disableYellowBox = true;

const App = () => {
	let [isLogin,setLogin] = useState(false);
	let [isInstall,setInstall] = useState(true);
	let now = 0;
	let init = ()=>{
		AsyncStorage.getItem('isInstall')
		.then(res=>{
			console.log('isinstall',res)
			if(res){
				setInstall(false);
			}
			AsyncStorage.clear();
		})
		AsyncStorage.getItem('user')
		.then(res=>{
			let user = JSON.parse(res)
			console.log(user)
			if(!user){
				SplashScreen.hide();
			}
			if(user&&user.token){
				setLogin(true);
				SplashScreen.hide();
			}
		})
	}
	useEffect(()=>{
		init();
	},[])
	let afterInstall = ()=>{
		console.log('after install')
		setInstall(false)
	}
	if(isInstall){
		return <View style={{flex:1}}>
			<SwiperPage afterInstall={afterInstall}/>
		</View>
	}

	return (
		<Router
			backAndroidHandler={()=>{
				if(Actions.currentScene != 'home'){
					Actions.login();
					return true;
				}
				else{
					if(new Date().getTime()-now<2000){
						BackHandler.exitApp();
					}else{
						ToastAndroid.show('确定要退出吗',100);
						now = new Date().getTime();
						return true;
					}
				}
			}}
		>
			<Overlay>
			<Modal key="modal" hideNavBar>
				<Lightbox key="lightbox">
					<Drawer 
						key="drawer"
						contentComponent={()=><Text>drawer</Text>}
						drawerIcon={()=><Icon name="menu"/>}
						drawerWidth={400}
					>
						<Scene key="root">
							<Tabs 
								key='tabbar'
								hideNavBar
								activeTintColor="red"
								inactiveTintColor="gray"
								tabBarStyle={{backgroundColor:'white'}}
							>
								{/* 首页 */}
								<Scene key='homePage'
									hideNavBar
									title='首页'
									icon={
										({focused})=><Icon 
											color={focused?'red':'gray'} 
											name="home"
											size={30}
										/>
									}
								>
									<Scene key='home' 
										component={Home}
									/>
								</Scene>
								{/* 商品分类 */}
								<Scene key='goodsPage'
									hideNavBar
									title='商品分类'
									icon={
										({focused})=><Icon 
											color={focused?'red':'gray'} 
											name="th-large"
											size={26}
										/>
									}
								>
									<Scene key="goods" component={Goods}/>
								</Scene>
								{/* 用户中心 */}
								<Scene 
									key='userPage'
									// hideDrawerButton
									icon={({focused})=>
										<Icon 
											size={26}
											color={focused?'red':'gray'} 
											name='user'/>
										}
									title="用户中心"
								>
									<Scene hideNavBar component={Userinfor} />
									<Scene 
										navBarButtonColor='#eee'
										navigationBarStyle={{backgroundColor:'red'}}
										// renderRightButton='...'
										// rightButtonTextStyle={{color:'#fff'}}
										renderRightButton={<Image source={require('./right.jpg')}/>}
										hideTabBar 
										hideDrawerButton
										title='我的发布'
										titleStyle={{color:'#fff',textAlign:'center',flex:1}}
										key='publish' 
										component={Publish}
									/>
								</Scene>
							</Tabs>
						</Scene>
					</Drawer>
				</Lightbox>

				<Scene initial={!isLogin} key="login" component={Login} />
				<Scene key="register" component={Register} />
			</Modal>
			</Overlay>
		</Router>
	);
};

export default App;