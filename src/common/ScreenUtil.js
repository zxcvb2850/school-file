/*
*   页面做适配
* */

import {Dimensions, PixelRatio} from 'react-native'

export const DEVICE_WIDTH = Dimensions.get('window').width;      //设备的宽度
export const DEVICE_HEIGHT = Dimensions.get('window').height;    //设备的高度
export const dp2px = dp => PixelRatio.getPixelSizeForLayoutSize(dp);
export const px2dp = px => PixelRatio.roundToNearestPixel(px);

export const PIXEL_RATIO = PixelRatio.get();      //当前设备的像素密度         //1.8000000
const DEFAULT_PIXEL = 2;                           //iphone6的像素密度
//px转换成dp
const w2 = 750 / DEFAULT_PIXEL;
const h2 = 1334 / DEFAULT_PIXEL;
const scale = DEVICE_WIDTH / w2;   //获取缩放比例
/**
 * 设置text为sp
 * @param size sp
 * return number dp
 */
export const FONT_SIZE = PixelRatio.getFontScale();                      //返回字体大小缩放比例       //1.499999

export function setSpText(size) {
    size = Math.round((size * scale / 2) * PIXEL_RATIO / FONT_SIZE);
    return size / DEFAULT_PIXEL;
}

export function scaleSize(size) {
    size = Math.round(size * scale + 0.5);
    return size / DEFAULT_PIXEL;
}