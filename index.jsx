'use strict';

import Taro, { Component } from '@tarojs/taro';
import { View, Text, Image } from '@tarojs/components';

import styles from './style.js';

import titleImg from './images/img_24030_0_1.png'
import shoucang from './images/img_24030_0_0.png'

class HmInformationCard extends Component {
  constructor(props) {
    super(props);
    let defaultState = {
      tag: '阿杰',
      alexander: '阿雷',
      data: '星期三',
      titleImg,
      summary: '全息用户界面提供输入到电子或机电设备通过通过手指通过复制全息图像什么',
      word: '…',
      shoucang,
      num: '783',
      like: '喜欢'
    };
    this.state = Object.assign(defaultState, JSON.parse(JSON.stringify(props)));
  }

  render() {
    return (
      <View style={styles.hmInformationCard}>
        <View style={styles.box}>
          <View style={styles.hd}>
            <View style={styles.container}>
              <View style={styles.tagWrap}>
                <Text style={styles.tag}>{this.state.tag}</Text>
              </View>
              <View style={styles.nameClass}>
                <View style={styles.wrap}>
                  <Text style={styles.alexander}>{this.state.alexander}</Text>
                </View>
                <View style={styles.dataClass}>
                  <Text style={styles.data}>{this.state.data}</Text>
                </View>
              </View>
            </View>
            <Image style={styles.titleImg} src={this.state.titleImg} />
          </View>
          <View style={styles.summaryClass}>
            <Text style={styles.summary}>{this.state.summary}</Text>
            <Text style={styles.word}>{this.state.word}</Text>
          </View>
          <View style={styles.ft}>
            <Image style={styles.shoucang} src={this.state.shoucang} />
            <Text style={styles.num}>{this.state.num}</Text>
            <Text style={styles.like}>{this.state.like}</Text>
          </View>
        </View>
      </View>
    );
  }
}
export default HmInformationCard;
