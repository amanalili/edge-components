// @flow

import React, { Component } from 'react'
import type { Node } from 'react'
import { StyleSheet, Text as RNText, View } from 'react-native'

import THEME from '../edge-theme.js'

const rawStyles = {
  headerText: {
    // fontFamily: THEME.FONTS.DEFAULT,
    color: THEME.COLORS.WHITE,
    fontSize: 24
  },
  header: {
    padding: 24,
    alignItems: 'center',
    justifyContent: 'center'
  }
}
const styles = StyleSheet.create(rawStyles)

export type TextProps = {
  children?: Node,
  // $FlowFixMe
  style?: StyleSheet.Styles
}
export class Text extends Component<TextProps> {
  render () {
    const { children, style } = this.props
    return <RNText style={[styles.headerText, style]}>{children}</RNText>
  }
}

export type Props = {
  children?: Node,
  // $FlowFixMe
  style?: StyleSheet.Styles
}
export class Header extends Component<Props> {
  static Text = Text
  render () {
    const { children, style } = this.props
    return <View style={[styles.header, style]}>{children}</View>
  }
}

export default Header
