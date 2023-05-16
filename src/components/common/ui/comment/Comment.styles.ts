import {SxProps, Theme} from "@mui/material/styles";

const wrapper: SxProps<Theme> = {
  maxWidth: '740px',
  height: '100%',
  padding: '11px 16px 12px 16px',
  backgroundColor: '#292929',
  borderRadius: '4px',
  margin: '10px'
}

const text: SxProps<Theme> = {
  fontFamily: 'Manrope',
  fontStyle: 'normal',
  fontWeight: 400,
  fontSize: '14px',
  lineHeight: '140%',
  marginBottom: '2px',
  textAlign: 'left',
}

const date: SxProps<Theme> = {
  height: '17px',
  width: '100%',
  fontFamily: 'Manrope',
  fontStyle: 'normal',
  fontWeight: 400,
  fontSize: '14px',
  lineHeight: '140%',
  textAlign: 'right',
  color: '#737373'
}

export { wrapper, text, date }