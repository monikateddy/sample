
import React, { Component } from 'react'
import { View, Image, Text, ScrollView, StyleSheet, Animated } from 'react-native'
import Feather from 'react-native-vector-icons/Feather'
import Entypo from 'react-native-vector-icons/Entypo'
import AntDesign from 'react-native-vector-icons/AntDesign'

//import Block from './v-component/CIcon'

import { CIcon as Icon } from './v-component/Icon'

export default class App extends Component{
    constructor(props){
        super(props)
        this.state={
            familyTree: [
                { image: "https://2.bp.blogspot.com/-kPdyFN3v79E/WcwVQ2DKu2I/AAAAAAAAALk/iIaIR7tEQu8gxAiRFOHvhJ_8KEQZuNfcACLcBGAs/s640/PicsArt_09-28-02.43.38.jpg",
                  name: "Steve Jobs", 
                  desc: "You", 
                  count: "0",
                  partner_image: "http://t0.gstatic.com/licensed-image?q=tbn:ANd9GcSDsdlr1rVvV4zLu_ZiOaV0s9gGH9aHvUMWWV-SKUtlkK7QwxuKxHugcZXjmq-M",
                  partner_name: "Laurene Powell Jobs", 
                  partner_desc: "Laurene Powell Jobs is an American billionaire heiress, businesswoman", 
                  partner_count: "0",
                  child: [
                    {   image: "https://2.bp.blogspot.com/-kPdyFN3v79E/WcwVQ2DKu2I/AAAAAAAAALk/iIaIR7tEQu8gxAiRFOHvhJ_8KEQZuNfcACLcBGAs/s640/PicsArt_09-28-02.43.38.jpg",
                        name: "Steve Jobs", 
                        desc: "Testing description", 
                        count: "0",
                        partner_image: "http://t0.gstatic.com/licensed-image?q=tbn:ANd9GcSDsdlr1rVvV4zLu_ZiOaV0s9gGH9aHvUMWWV-SKUtlkK7QwxuKxHugcZXjmq-M",
                        partner_name: "Laurene Powell Jobs", 
                        partner_desc: "Laurene Powell Jobs is an American billionaire heiress, businesswoman", 
                        partner_count: "0",
                        child: [
                            {
                                image: "https://2.bp.blogspot.com/-kPdyFN3v79E/WcwVQ2DKu2I/AAAAAAAAALk/iIaIR7tEQu8gxAiRFOHvhJ_8KEQZuNfcACLcBGAs/s640/PicsArt_09-28-02.43.38.jpg",
                                name: "Steve Jobs", 
                                desc: "Testing description", 
                                count: "0",
                                partner_image: "http://t0.gstatic.com/licensed-image?q=tbn:ANd9GcSDsdlr1rVvV4zLu_ZiOaV0s9gGH9aHvUMWWV-SKUtlkK7QwxuKxHugcZXjmq-M",
                                partner_name: "Laurene Powell Jobs", 
                                partner_desc: "Laurene Powell Jobs is an American billionaire heiress, businesswoman", 
                                partner_count: "0",
                                child: [],
                            },
                            {
                                image: "https://2.bp.blogspot.com/-kPdyFN3v79E/WcwVQ2DKu2I/AAAAAAAAALk/iIaIR7tEQu8gxAiRFOHvhJ_8KEQZuNfcACLcBGAs/s640/PicsArt_09-28-02.43.38.jpg",
                                name: "Steve Jobs", 
                                desc: "Testing description", 
                                count: "0",
                                partner_image: "http://t0.gstatic.com/licensed-image?q=tbn:ANd9GcSDsdlr1rVvV4zLu_ZiOaV0s9gGH9aHvUMWWV-SKUtlkK7QwxuKxHugcZXjmq-M",
                                partner_name: "Laurene Powell Jobs", 
                                partner_desc: "Laurene Powell Jobs is an American billionaire heiress, businesswoman", 
                                partner_count: "0",
                                child: [],
                            },
                            {
                                image: "https://2.bp.blogspot.com/-kPdyFN3v79E/WcwVQ2DKu2I/AAAAAAAAALk/iIaIR7tEQu8gxAiRFOHvhJ_8KEQZuNfcACLcBGAs/s640/PicsArt_09-28-02.43.38.jpg",
                                name: "Steve Jobs", 
                                desc: "Testing description", 
                                count: "0",
                                partner_image: "http://t0.gstatic.com/licensed-image?q=tbn:ANd9GcSDsdlr1rVvV4zLu_ZiOaV0s9gGH9aHvUMWWV-SKUtlkK7QwxuKxHugcZXjmq-M",
                                partner_name: "Laurene Powell Jobs", 
                                partner_desc: "Laurene Powell Jobs is an American billionaire heiress, businesswoman", 
                                partner_count: "0",
                                child: [],
                            }
                        ],
                    }
                  ] 
                }
            ]
        }
    }


    renderPerson = ({item, index, prefix=""})=>{
        return(
            <View style={{height: 100, width: 240, backgroundColor: "white", padding: 10, borderRadius: 10, borderWidth: 2.5, borderColor: item[prefix+"desc"] == "You"? "#5ACC95" : "rgba(0,0,0,0.01)"}} key={Math.random()}>
                <View style={{flexDirection: "row", height: 42, marginBottom: 8}}>
                    <View style={{width: 42, height: 42, borderRadius: 5, overflow: 'hidden'}}>
                        <Image source={{uri: item[prefix+"image"]}} style={{height: "100%", width: "100%", resizeMode: "stretch"}}/>
                    </View>
                    <View style={{flex:1, paddingLeft: 10}}>
                        <Text numberOfLines={1} style={{fontSize: 14, fontFamily: "Roboto-Bold"}}>{item[prefix+"name"]}</Text>
                        <Text numberOfLines={1} style={{fontSize: 10, fontFamily: "Roboto-Regular", color: "#9E9DA3", flex:1, textAlignVertical: "center"}}>{item[prefix+"desc"]}</Text>
                    </View>
                </View>
                <View style={{flexDirection: "row", alignItems: "center"}}>
                    {Array(4).fill("0").map((el, i)=>{
                        return(
                            <Text style={{flex:1, fontSize: 12, fontFamily: "Roboto-Regular", textAlign: "left"}} key={i}>
                                <Icon IconComponent={Feather} name={"folder"} size={12}/>{"  "}{item[prefix+"count"]}
                            </Text>    
                        )
                    })}                                
                </View>
                <View style={{ position: "absolute", alignSelf: "center", bottom: -15, height: 25, width: 60, backgroundColor: "#D2F7E3", borderRadius: 5, alignItems: "center", justifyContent: "center"}}>
                    <Icon IconComponent={Entypo} name={"plus"} size={12} color={"#5ACC95"}/>
                </View>
            </View>
        )
    }

    childExpander = (child)=>{
        return(
            <View style={{position: 'absolute', top: 50, left: "50%", alignItems: "center", justifyContent: "center"}}>
                <View style={{width: 60, borderBottomWidth: 1.5, borderColor: "#9E9DA3"}}/>
                {child > 0? <View style={{height: child==1? 150 : 100, borderLeftWidth: 1.5, borderColor: '#9E9DA3'}}/> : null}
                {child > 0? 
                    <View style={{position: "absolute", top: -10, height: 20, width: 20, backgroundColor: "#9E9DA3", borderRadius: 100, alignItems: "center", justifyContent :"center" }}>
                        <Icon IconComponent={AntDesign} name={"caretdown"} size={10} style={{ color: "white" }}/>
                    </View>
                : null}
            </View>
        )
    }

    childExpanderAdv = (child)=>{
        return(
            child > 1 &&
                <View style={{ position: 'absolute', flexDirection: "row", bottom: -1.5, left: 150, height: 50, width: 600 * (child-1), borderWidth: 1.5, borderBottomWidth:0, borderTopRightRadius: 5, borderTopLeftRadius: 5, borderColor: "#9E9DA3" }}>
                    {Array(child-2).fill('0').map((el, i)=>{
                        return <View key={i} style={{position: "absolute", height: 50, borderLeftWidth: 1.5, borderColor: "#9E9DA3", left: (600*(i+1))}}/>
                    })}
                </View>
        )
    }

    coupleRender = ({ item, index, left=0 })=>{
        const child = item?.child?.length
        const _left = child == 1? 150 : 0
        return(
            <View key={index} style={{ marginLeft: left, backgroundColor: "transparent" }}>
                <View style={{height: 200, width: 600, flexDirection: "row", justifyContent: "space-between", paddingHorizontal: 30,  }}>
                    {this.renderPerson({item, index})}
                    {this.childExpander(child)}
                    {this.childExpanderAdv(child)}
                    {this.renderPerson({item, index, prefix: "partner_"})}
                </View>
                <View style={{ flexDirection: "row" }}>
                    {item?.child?.map((item, index)=>this.coupleRender({ item, index, left: _left }))}
                </View>
            </View>
        )
    }

    render(){
        const { familyTree } = this.state
        return(
            <ScrollView horizontal style={styles.container} contentContainerStyle={styles.scrollContainer}>
                <ScrollView style={styles.container} contentContainerStyle={styles.scrollContainer}>
                    {/* Render Family Tree Startes Here.. */}
                    {familyTree.map((item, index)=>this.coupleRender({ item, index }))}
                </ScrollView>
            </ScrollView>
        )
    }
}


const styles = StyleSheet.create({
    container: {
        flex:1,
        backgroundColor: "#f2f2f2",
    },
    scrollContainer: {
        flexGrow: 1,
        alignItems: "center",
        justifyContent: "center"
    }
})
