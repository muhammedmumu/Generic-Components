import { useEffect, useRef, useState } from 'react';
import ReactDOM from 'react-dom';
import { DEFAULT_CONVERTER, converters } from './transformers';
import makeStyles from '@mui/styles/makeStyles';
import { ChromePicker } from 'react-color';
import useClickAway from 'hooks/useClickAway';
import AppProviders from 'providers/AppProviders';
import { useTheme } from '@mui/material/styles';

const useStyles = makeStyles((theme) => ({
  palette: {
    display: 'inline-block',
    background: 'none',
    padding: useTheme().spacing(1),
    verticalAlign: 'baseline',
    lineHeight: 1,
    width: '1.5rem',
    height: '1.5rem',
    border: `1px solid #707070`,
    borderRadius: useTheme().spacing(0.5),
    '&:focus, &:hover': {
      borderColor: useTheme().palette.primary.main,
    },
    '&:focus': {
      outline: 'none',
    },
  },
}));

function ColorPickerModule({ onChange, defaultColor, convert, leftAlign }) {
  const [color, setColor] = useState(defaultColor);
  const [showPicker, setShowPicker] = useState(false);
  const classes = useStyles();
  const pickerContainerRef = useRef();

  useEffect(() => {
    onChange(color);
  }, [color, onChange]);

  useEffect(() => setColor(defaultColor), [defaultColor]);

  useClickAway(pickerContainerRef, () => {
    setShowPicker(false);
  });

  return (
    <AppProviders>
      <div ref={pickerContainerRef}>
        <button
          className={classes.palette}
          onClick={() => setShowPicker((p) => !p)}
          style={{ backgroundColor: color }}
        ></button>
        {showPicker && (
          <div style={{ position: 'relative', zIndex: 99 }}>
            <div
              style={{
                position: 'absolute',
                top: '0.5rem',
                ...(leftAlign ? { left: 0 } : { right: 0 }),
              }}
            >
              <ChromePicker
                color={color}
                onChange={(color) => setColor(converters[convert](color))}
              />
            </div>
          </div>
        )}
      </div>
    </AppProviders>
  );
}

ColorPickerModule.defaultProps = {
  defaultColor: '#fff',
  convert: DEFAULT_CONVERTER,
  leftAlign: false,
};

export function renderColorPicker(el, { onChange, defaultColor, convert }) {
  ReactDOM.unmountComponentAtNode(el); // Clean up any previously mounted component on the same node ref
  el &&
    ReactDOM.render(
      <ColorPickerModule
        onChange={onChange}
        defaultColor={defaultColor}
        convert={convert}
      />,
      el,
    );
}

export function convertColor(color, defaultColor){

  let colorf
  const colorNameList = {"aliceblue":"#f0f8ff","antiquewhite":"#faebd7","aqua":"#00ffff","aquamarine":"#7fffd4","azure":"#f0ffff",
            "beige":"#f5f5dc","bisque":"#ffe4c4","black":"#000000","blanchedalmond":"#ffebcd","blue":"#0000ff","blueviolet":"#8a2be2","brown":"#a52a2a","burlywood":"#deb887",
            "cadetblue":"#5f9ea0","chartreuse":"#7fff00","chocolate":"#d2691e","coral":"#ff7f50","cornflowerblue":"#6495ed","cornsilk":"#fff8dc","crimson":"#dc143c","cyan":"#00ffff",
            "darkblue":"#00008b","darkcyan":"#008b8b","darkgoldenrod":"#b8860b","darkgray":"#a9a9a9","darkgreen":"#006400","darkkhaki":"#bdb76b","darkmagenta":"#8b008b","darkolivegreen":"#556b2f",
            "darkorange":"#ff8c00","darkorchid":"#9932cc","darkred":"#8b0000","darksalmon":"#e9967a","darkseagreen":"#8fbc8f","darkslateblue":"#483d8b","darkslategray":"#2f4f4f","darkturquoise":"#00ced1",
            "darkviolet":"#9400d3","deeppink":"#ff1493","deepskyblue":"#00bfff","dimgray":"#696969","dodgerblue":"#1e90ff",
            "firebrick":"#b22222","floralwhite":"#fffaf0","forestgreen":"#228b22","fuchsia":"#ff00ff",
            "gainsboro":"#dcdcdc","ghostwhite":"#f8f8ff","gold":"#ffd700","goldenrod":"#daa520","gray":"#808080","green":"#008000","greenyellow":"#adff2f",
            "honeydew":"#f0fff0","hotpink":"#ff69b4",
            "indianred ":"#cd5c5c","indigo":"#4b0082","ivory":"#fffff0","khaki":"#f0e68c",
            "lavender":"#e6e6fa","lavenderblush":"#fff0f5","lawngreen":"#7cfc00","lemonchiffon":"#fffacd","lightblue":"#add8e6","lightcoral":"#f08080","lightcyan":"#e0ffff","lightgoldenrodyellow":"#fafad2",
            "lightgrey":"#d3d3d3","lightgreen":"#90ee90","lightpink":"#ffb6c1","lightsalmon":"#ffa07a","lightseagreen":"#20b2aa","lightskyblue":"#87cefa","lightslategray":"#778899","lightsteelblue":"#b0c4de",
            "lightyellow":"#ffffe0","lime":"#00ff00","limegreen":"#32cd32","linen":"#faf0e6",
            "magenta":"#ff00ff","maroon":"#800000","mediumaquamarine":"#66cdaa","mediumblue":"#0000cd","mediumorchid":"#ba55d3","mediumpurple":"#9370d8","mediumseagreen":"#3cb371","mediumslateblue":"#7b68ee",
            "mediumspringgreen":"#00fa9a","mediumturquoise":"#48d1cc","mediumvioletred":"#c71585","midnightblue":"#191970","mintcream":"#f5fffa","mistyrose":"#ffe4e1","moccasin":"#ffe4b5",
            "navajowhite":"#ffdead","navy":"#000080",
            "oldlace":"#fdf5e6","olive":"#808000","olivedrab":"#6b8e23","orange":"#ffa500","orangered":"#ff4500","orchid":"#da70d6",
            "palegoldenrod":"#eee8aa","palegreen":"#98fb98","paleturquoise":"#afeeee","palevioletred":"#d87093","papayawhip":"#ffefd5","peachpuff":"#ffdab9","peru":"#cd853f","pink":"#ffc0cb","plum":"#dda0dd","powderblue":"#b0e0e6","purple":"#800080",
            "rebeccapurple":"#663399","red":"#ff0000","rosybrown":"#bc8f8f","royalblue":"#4169e1",
            "saddlebrown":"#8b4513","salmon":"#fa8072","sandybrown":"#f4a460","seagreen":"#2e8b57","seashell":"#fff5ee","sienna":"#a0522d","silver":"#c0c0c0","skyblue":"#87ceeb","slateblue":"#6a5acd","slategray":"#708090","snow":"#fffafa","springgreen":"#00ff7f","steelblue":"#4682b4",
            "tan":"#d2b48c","teal":"#008080","thistle":"#d8bfd8","tomato":"#ff6347","turquoise":"#40e0d0",
            "violet":"#ee82ee",
            "wheat":"#f5deb3","white":"#ffffff","whitesmoke":"#f5f5f5",
            "yellow":"#ffff00","yellowgreen":"#9acd32"};

    color = ""+ color;

    let r;
    let g;
    let b;
    
    if (!color) {
        return ;
    }        
    if (color.charAt(0) == "#") {
        colorf = color;
        //
        return colorf;
    }          
    if (color.substr(0,4) == 'rgb('){
      const nums = /(.*?)rgb\((\d+),\s*(\d+),\s*(\d+)\)/i.exec(color),
          r = parseInt(nums[2], 10).toString(16),
          g = parseInt(nums[3], 10).toString(16),
          b = parseInt(nums[4], 10).toString(16);

      
      return "#"+ (
          (r.length == 1 ? "0"+ r : r) +
          (g.length == 1 ? "0"+ g : g) +
          (b.length == 1 ? "0"+ b : b)
      );
    }else if (color.substr(0,4) == 'rgba'){
      let a
      const colorstriped = color.replace('rgba(','').replace(')','');
      const colorelements = (colorstriped.split(","));                
          if ((colorelements.length-1) == 3){
            r = parseInt(colorelements[0],10).toString(16);
            g = parseInt(colorelements[1],10).toString(16);
            b = parseInt(colorelements[2],10).toString(16);
            a = parseInt(Math.round(colorelements[3]*255),10).toString(16);
            return "#"+ (
              (r.length == 1 ? "0"+ r : r) +
              (g.length == 1 ? "0"+ g : g) +
              (b.length == 1 ? "0"+ b : b) +
              (a.length == 1 ? "0"+ a : a)
              );
          }    
    }else{
      if (color !== undefined){        
        colorf = colorNameList[color.toLowerCase()];  
        if (!colorf || colorf === undefined){                
        }else{
            return colorf;
        }
      }
    }        
    if (defaultColor === undefined){
      return 'none';
    }else{
      return defaultColor;
    }              
}
