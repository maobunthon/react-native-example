import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import MyButton from './CustomButton'
export default class DetailsScreen extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            extraText: '',
            btnMoreLess: 'Read more',
            myButtonText: null
        }
    }

    toggle = () => {
        const { btnMoreLess } = this.state
        if (btnMoreLess === 'Read more') {
            this.setState({
                btnMoreLess: 'Read less',
                extraText: 'with more text'
            })
        } else {
            this.setState({
                btnMoreLess: 'Read more',
                extraText: ''
            })
        }
    }
    
    handleMyButtonClick = (btnNumber) => {
        let myButtonText = `my button ${btnNumber} clicked`
        if (btnNumber === 'clear') {
            myButtonText = null
        }

        // while myButtonText has same name as variable we can write only one
        this.setState({
            myButtonText
        })

        // Same to this 
        // this.setState({
        //     myButtonText: myButtonText
        // })
    }

    render() {
        const { btnMoreLess, extraText, myButtonText } = this.state
        return (
        <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
            <Text>This is my description {extraText}</Text>
            
            
            {/* this is button from react native */}
            <TouchableOpacity
                style={{ backgroundColor: 'blue', padding: 10 }}
                onPress={this.toggle}
            >
            <Text style={{color: 'white'}}>{ btnMoreLess }</Text>
            </TouchableOpacity>

            <View style={{ marginVertical: 100, width: '100%', height: 1, backgroundColor: 'red' }}></View>
            
            {
                // this line mean, if my button has text, show text "My button text"
                myButtonText && <Text>My button Text {myButtonText}</Text>
            }

            {/* this is button component that we created for example of using props */}
            <MyButton 
                backgroundColor='red'
                titleColor='white'
                title='Button 1'
                onPress={() => this.handleMyButtonClick('one')}
            ></MyButton>
            <MyButton 
                style={{marginVertical: 5}}
                backgroundColor='green'
                titleColor='white'
                title='Button 2'
                onPress={() => this.handleMyButtonClick('two')}
            ></MyButton>
            <MyButton 
                backgroundColor='gray'
                title='Clear'
                onPress={() => this.handleMyButtonClick('clear')}
            ></MyButton>
        </View>
        );
    }
}