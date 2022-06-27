/* eslint-disable */

import React, {cloneElement, ReactElement, useState} from 'react';
import {
  StyleProp,
  Text,
  TextInput,
  TextInputProps,
  TextStyle,
  View,
  ViewStyle,
} from 'react-native';
import tw from '../../../lib/tailwind';
import {colors} from '../../../theme';

/**
 * Text Field Input for Text Input and Password
 */

interface TextFieldProps extends TextInputProps {
  /**
   * display left icon
   */
  leftIcon?: ReactElement;
  /**
   * display right icon
   */
  rightIcon?: ReactElement;
  /**
   * disabled attribute of text input
   */
  disabled?: boolean;
  /**
   * if false, the error message will be displayed
   */
  isValid?: boolean;
  /**
   * style attribute of text input
   */
  style?: StyleProp<TextStyle>;
  /**
   * error message
   */
  errorMessage?: string;
  /**
   * style attribute of error message
   */
  errorMessageStyle?: StyleProp<TextStyle>;
  /**
   * label of text input
   */
  label?: string;
  /**
   * style attribute of label
   */
  labelStyle?: StyleProp<TextStyle>;
  /**
   * style attribute of container
   */
  containerStyle?: StyleProp<ViewStyle>;
}

export const TextField = ({
  leftIcon,
  rightIcon,
  disabled = false,
  isValid = true,
  style,
  errorMessage,
  errorMessageStyle,
  label,
  labelStyle,
  containerStyle,
  ...props
}: TextFieldProps) => {
  const [focus, setFocus] = useState(false);
  return (
    <View style={[containerStyle]}>
      {label ? (
        <>
          <Text style={[tw`text-sm leading-5`, labelStyle]}>{label}</Text>
          <View
            style={[
              tw`relative mt-1 bg-neutral-white`,
              !disabled
                ? {
                    shadowColor: '#000',
                    shadowOpacity: 0.1,
                    shadowRadius: 5,
                    elevation: 5,
                  }
                : {},
            ]}>
            {leftIcon &&
              cloneElement(leftIcon, {
                style: tw`absolute left-[18px] top-[15px] h-[14px] ${
                  disabled
                    ? 'text-neutral-300'
                    : isValid
                    ? ''
                    : 'text-error-500'
                }`,
              })}
            {rightIcon &&
              cloneElement(rightIcon, {
                style: tw`absolute right-[18px] top-[15px] h-[14px] ${
                  disabled ? 'text-neutral-300' : ''
                }`,
              })}
            <TextInput
              placeholderTextColor={colors.neutral[300]}
              onFocus={() => {
                setFocus(true);
              }}
              onBlur={() => {
                setFocus(false);
              }}
              style={[
                tw`h-[44px] w-full py-3 px-4 ${leftIcon ? 'pl-[42px]' : ''} ${
                  rightIcon ? 'pr-[42px]' : ''
                } ${
                  isValid ? '' : 'border border-error-500'
                } rounded-[5px] text-sm
                            ${focus ? 'border border-selection-100' : ''}
                            ${
                              disabled
                                ? 'bg-neutral-50 border border-neutral-50 shadow-none text-neutral-300'
                                : ''
                            }`,
                style,
              ]}
              {...props}
              editable={!disabled}
              selectTextOnFocus={!disabled}
            />
          </View>
        </>
      ) : (
        <View
          style={[
            tw`relative mt-1 bg-neutral-white`,
            !disabled
              ? {
                  shadowColor: '#000',
                  shadowOpacity: 0.1,
                  shadowRadius: 5,
                  elevation: 5,
                }
              : {},
          ]}>
          {leftIcon &&
            cloneElement(leftIcon, {
              style: tw`absolute left-[18px] top-[15px] h-[14px] ${
                disabled ? 'text-neutral-300' : isValid ? '' : 'text-error-500'
              }`,
            })}
          {rightIcon &&
            cloneElement(rightIcon, {
              style: tw`absolute right-[18px] top-[15px] h-[14px] ${
                disabled ? 'text-neutral-300' : ''
              }`,
            })}
          <TextInput
            placeholderTextColor={colors.neutral[300]}
            onFocus={() => {
              setFocus(true);
            }}
            onBlur={() => {
              setFocus(false);
            }}
            style={[
              tw`h-[44px] w-full py-3 px-4 ${leftIcon ? 'pl-[42px]' : ''} ${
                rightIcon ? 'pr-[42px]' : ''
              } ${
                isValid ? '' : 'border border-error-500'
              } rounded-[5px] text-sm
                            ${focus ? 'border border-selection-100' : ''}
                            ${
                              disabled
                                ? 'bg-neutral-50 border border-neutral-50 shadow-none text-neutral-300'
                                : ''
                            }`,
              style,
            ]}
            {...props}
            editable={!disabled}
            selectTextOnFocus={!disabled}
          />
        </View>
      )}
      {!disabled && !isValid && errorMessage && (
        <Text
          style={[
            tw`mt-1 text-xs text-error-500 leading-[18px]`,
            errorMessageStyle,
          ]}>
          {errorMessage}
        </Text>
      )}
    </View>
  );
};
