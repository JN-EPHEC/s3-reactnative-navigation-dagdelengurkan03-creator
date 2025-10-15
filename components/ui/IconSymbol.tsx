import React from 'react';
import { View, Text, ViewProps, StyleProp, ViewStyle } from 'react-native';

export type IconSymbolProps = {
  name: string;
  size?: number;
  color?: string;
  weight?: string;
  style?: StyleProp<ViewStyle>;
} & ViewProps;

export function IconSymbol({ name, size = 16, color = '#000', style, ...rest }: IconSymbolProps) {
  // Minimal placeholder: render the name as text. Real project will replace with proper icons.
  return (
    <View {...rest} style={style}>
      <Text style={{ fontSize: size, color }}>{name}</Text>
    </View>
  );
}

export default IconSymbol;
