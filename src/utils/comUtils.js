/*
 * @Descripttion: 
 * @version: 
 * @Author: lc
 * @Date: 2022-08-12 11:53:17
 * @LastEditors: lc
 * @LastEditTime: 2022-08-12 16:23:29
 */
const getText = (text, target) => {
  return target &&text && text.indexOf(target) !== -1 ? target : ''
}
const initStyles = (info) => {
  return {
    color: info.attr.color,
    fontSize: info.attr.fontSize + 'px',
    lineHeight: info.attr.lineHeight + 'px',
    textAlign: info.attr.textAlign,
    fontWeight: getText(info.attr.textStyle, 'bold'),
    fontStyle: getText(info.attr.textStyle, 'italic'),
    textDecoration: getText(info.attr.textStyle, 'underline'),
    backgroundColor: info.attr.backgroundColor,
    backgroundImage: `url(${info.attr.backgroundImage})`,
    backgroundRepeat: info.attr.backgroundRepeat,
    backgroundSize: info.attr.backgroundSize === "customize" ?
      `${info.attr.backgroundwidth} ${info.attr.backgroundheight}` :
      info.attr.backgroundSize,
    width: info.attr.width + info.attr.widthUnit,
    height: info.attr.height + info.attr.heightUnit,
    padding: `${info.attr.padding[0] || 0}px ${info.attr.padding[1] || 0}px ${
        info.attr.padding[2] || 0
      }px ${info.attr.padding[3] || 0}px`,
    margin: `${info.attr.margin[0] || 0}px ${info.attr.margin[1] || 0}px ${
        info.attr.margin[2] || 0
      }px ${info.attr.margin[3] || 0}px`,
    ZIndex: info.attr.ZIndex,
    position: info.attr.position,
    left: info.attr.left ? info.attr.left + "px" : "auto",
    right: info.attr.right ? info.attr.right + "px" : "auto",
    bottom: info.attr.bottom ? info.attr.bottom + "px" : "auto",
    top: info.attr.top ? info.attr.top + "px" : "auto",
    float: info.attr.float,
    clear: info.attr.clear,
    borderWidth: info.attr.borderWidth + "px",
    borderColor: info.attr.borderColor,
    borderStyle: info.attr.borderStyle,
    borderTopWidth: (info.attr.borderTopWidth || " ") + "px",
    borderRightWidth: (info.attr.borderRightWidth || " ") + "px",
    borderBottomWidth: (info.attr.borderBottomWidth || " ") + "px",
    borderLeftWidth: (info.attr.borderLeftWidth || " ") + "px",
    borderTopColor: info.attr.borderTopColor || " ",
    borderRightColor: info.attr.borderRightColor || " ",
    borderBottomColor: info.attr.borderBottomColor || " ",
    borderLeftColor: info.attr.borderLeftColor || " ",
    borderTopStyle: info.attr.borderTopStyle || " ",
    borderRightStyle: info.attr.borderRightStyle || " ",
    borderBottomStyle: info.attr.borderBottomStyle || " ",
    borderLeftStyle: info.attr.borderLeftStyle || " ",
    borderRadius: info.attr.radiusType === "apart" ?
      `${
              (info.attr.borderRadiusApart[0] || 0) +
              info.attr.borderRadiusUnitApart[0]
            } ${
              (info.attr.borderRadiusApart[1] || 0) +
              info.attr.borderRadiusUnitApart[1]
            } ${
              (info.attr.borderRadiusApart[2] || 0) +
              info.attr.borderRadiusUnitApart[2]
            } ${
              (info.attr.borderRadiusApart[3] || 0) +
              info.attr.borderRadiusUnitApart[3]
            }` :
      `${info.attr.borderRadius + info.attr.borderRadiusUnit}`,
  };
};

export {
  initStyles
}