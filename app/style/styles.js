const bgImg = require('../images/poz.jpg');

export const mainComponent = {
  backgroundImage: String.prototype.concat("url('.", bgImg, "')"),
    backgroundRepeat: 'repeat',
     minHeight: '100%',
    position: 'relative',
    backgroundColor: 'black',
    border: 'transparent',
    width: '100%',

};

export const currentIcon = {
  fontSize: '3em',
    color: 'white',
};

export const forcastDay = {
  marginTop: '10px',
  marginBottom: '10px',
    color: 'white',
};

export const hcenter = {
  display: 'flex',
  justifyContent: 'center',
    color: 'white'

};

export const detail = {
    fontSize: '2em',
    color: 'white',

};

export const icons = {
    fontSize: '1em',
    color: 'white',

};