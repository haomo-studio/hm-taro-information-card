import Taro from '@tarojs/taro';
export default {
  hmInformationCard: {
    display: 'flex',
    alignItems: 'center',
    flexDirection: 'row',
    justifyContent: 'center',
    width: Taro.pxTransform(750),
    height: Taro.pxTransform(596)
  },
  box: {
    display: 'flex',
    alignItems: 'flex-start',
    flexDirection: 'column',
    justifyContent: 'center',
    borderRadius: Taro.pxTransform(39),
    boxShadow: '0px 10px 30px rgba(209, 213, 223, 0.50)',
    backgroundColor: '#ffffff',
    width: Taro.pxTransform(721),
    height: Taro.pxTransform(518)
  },
  hd: {
    boxSizing: 'border-box',
    display: 'flex',
    alignItems: 'center',
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingRight: Taro.pxTransform(62),
    paddingLeft: Taro.pxTransform(58),
    width: Taro.pxTransform(721),
    height: Taro.pxTransform(80)
  },
  container: { display: 'flex', flexDirection: 'row' },
  tagWrap: {
    boxSizing: 'border-box',
    display: 'flex',
    alignItems: 'center',
    flexDirection: 'row',
    borderRadius: Taro.pxTransform(39),
    backgroundColor: '#fec4b0',
    paddingRight: Taro.pxTransform(18),
    paddingLeft: Taro.pxTransform(16),
    height: Taro.pxTransform(80)
  },
  tag: {
    opacity: 1,
    textAlign: 'center',
    lineHeight: Taro.pxTransform(35),
    whiteSpace: 'nowrap',
    color: '#f64000',
    fontSize: Taro.pxTransform(23),
    fontWeight: 400
  },
  nameClass: {
    display: 'flex',
    alignItems: 'flex-start',
    flexDirection: 'column',
    marginLeft: Taro.pxTransform(29),
    height: Taro.pxTransform(80)
  },
  wrap: { display: 'flex', flexDirection: 'row', marginTop: Taro.pxTransform(2) },
  alexander: {
    opacity: 1,
    width: Taro.pxTransform(109),
    height: Taro.pxTransform(41),
    lineHeight: Taro.pxTransform(41),
    whiteSpace: 'nowrap',
    color: '#141821',
    fontSize: Taro.pxTransform(27),
    fontWeight: 400
  },
  dataClass: { display: 'flex', flexDirection: 'row' },
  data: {
    opacity: 1,
    width: Taro.pxTransform(187),
    height: Taro.pxTransform(35),
    lineHeight: Taro.pxTransform(35),
    whiteSpace: 'nowrap',
    color: '#858997',
    fontSize: Taro.pxTransform(23),
    fontWeight: 400
  },
  titleImg: { width: Taro.pxTransform(35), height: Taro.pxTransform(8) },
  summaryClass: {
    display: 'flex',
    position: 'relative',
    flexDirection: 'row',
    justifyContent: 'center',
    marginTop: Taro.pxTransform(49),
    width: Taro.pxTransform(719),
    height: Taro.pxTransform(94)
  },
  summary: {
    position: 'relative',
    opacity: 1,
    width: Taro.pxTransform(592),
    height: Taro.pxTransform(94),
    overflow: 'hidden',
    textOverflow: 'ellipsis',
    lineHeight: Taro.pxTransform(47),
    color: '#141821',
    fontSize: Taro.pxTransform(31),
    fontWeight: 400
  },
  word: {
    position: 'absolute',
    top: Taro.pxTransform(47),
    left: Taro.pxTransform(526),
    opacity: 1,
    lineHeight: Taro.pxTransform(47),
    whiteSpace: 'nowrap',
    color: '#141821',
    fontFamily: 'Helvetica',
    fontSize: Taro.pxTransform(31),
    fontWeight: 'normal'
  },
  ft: {
    display: 'flex',
    alignItems: 'center',
    flexDirection: 'row',
    marginTop: Taro.pxTransform(132),
    height: Taro.pxTransform(47)
  },
  shoucang: { marginLeft: Taro.pxTransform(64), width: Taro.pxTransform(35), height: Taro.pxTransform(29) },
  num: {
    opacity: 1,
    marginLeft: Taro.pxTransform(16),
    width: Taro.pxTransform(53),
    height: Taro.pxTransform(47),
    lineHeight: Taro.pxTransform(47),
    whiteSpace: 'nowrap',
    color: '#141821',
    fontFamily: 'Helvetica',
    fontSize: Taro.pxTransform(31),
    fontWeight: 'normal'
  },
  like: {
    opacity: 1,
    width: Taro.pxTransform(62),
    height: Taro.pxTransform(47),
    lineHeight: Taro.pxTransform(47),
    whiteSpace: 'nowrap',
    color: '#141821',
    fontSize: Taro.pxTransform(31),
    fontWeight: 400
  }
};
