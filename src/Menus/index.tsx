import * as React from "react";
import * as PropTypes from "prop-types";

import { fade } from "../common/colorManipulator";
import ElementState from "../ElementState";
import ThemeType from "../styles/ThemeType";

export interface DataProps {
  direction?: "top" | "right" | "bottom" | "left";
  titleNode?: any;
  canToggleShow?: boolean;
  showItems?: boolean;
  itemContainerStyle?: React.CSSProperties;
  itemStyle?: React.CSSProperties;
  autoShowItems?: boolean;
}

export interface MenusProps extends DataProps, React.HTMLAttributes<HTMLDivElement> {}

export interface MenusState {
  currShowItems?: boolean;
  height?: string;
  width?: string;
  borderWidth?: string;
}

export default class Menus extends React.Component<MenusProps, MenusState> {
  static defaultProps: MenusProps = {
    className: "",
    direction: "bottom",
    autoShowItems: false
  };

  static contextTypes = { theme: PropTypes.object };
  context: { theme: ReactUWP.ThemeType };

  state: MenusState = { currShowItems: this.props.showItems };

  refs: { container: ElementState; itemsContainer: HTMLDivElement };

  itemsElm: HTMLDivElement[] = [];

  componentDidMount() {
    this.setItemStyleValue(true);
  }

  componentWillReceiveProps(nextProps: MenusProps) {
    this.setState({
      currShowItems: nextProps.showItems
    });
  }

  setItemStyleValue = (update = false) => {
    const { width, height, borderWidth } = window.getComputedStyle(this.refs.container.getDOM());
    if (update) {
      this.setState({ width, height, borderWidth });
    } else {
      this.state = { ...this.state, width, height, borderWidth };
    }
  }

  toggleShowItems = (e?: React.SyntheticEvent<HTMLDivElement> | boolean) => {
    this.setItemStyleValue();
    const { canToggleShow } = this.props;
    const setToState = typeof e === "boolean";
    let { currShowItems } = this.state;
    if (setToState) {
      this.setState({
        currShowItems: Boolean(e)
      });
      return;
    };
    if (this.state.currShowItems !== canToggleShow ? (!this.state.currShowItems) : true) {
      this.setState((prevState, prevProps) => {
        return { showItems: canToggleShow ? (!this.state.currShowItems) : true };
      });
    }
  }

  unShowItems = () => this.toggleShowItems(false);

  getPxNumber = (str: string | number) => typeof str === "string" ? Number(str.slice(0, str.length - 2)) : str;

  addPxStr = (str1: string, str2: string) => `${this.getPxNumber(str1) + this.getPxNumber(str2)}`;

  getItemsContainerStyle = () => {
    const { direction, children } = this.props;
    const { currShowItems, width, height, borderWidth } = this.state;
    const maxHeight = currShowItems ? `${React.Children.count(children) * this.getPxNumber(height)}px` : 0;
    const baseStyle: React.CSSProperties = {
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      justifyContent: "center",
      position: "absolute",
      pointerEvents: currShowItems ? "none" : "all",
      transition: "all .25s 0s ease-in-out",
      width,
      overflow: currShowItems ? "visible" : "hidden",
      maxHeight: maxHeight
    };
    switch (direction) {
      case "bottom": {
        return {
          top: height,
          ...baseStyle
        };
      }
      case "left": {
        return {
          top: 0,
          right: width,
          ...baseStyle
        };
      }
      case "right": {
        return {
          top: 0,
          left: width,
          ...baseStyle
        };
      }
      case "top": {
        return {
          top: `-${maxHeight}`,
          left: 0,
          ...baseStyle
        } as React.CSSProperties;
      }
      default: {
        break;
      }
    }
  }

  render() {
    // tslint:disable-next-line:no-unused-variable
    const { style, direction, autoShowItems, showItems, itemContainerStyle, titleNode, children, itemStyle, ...attributes } = this.props;
    const { currShowItems, width, height, borderWidth } = this.state;
    const { theme } = this.context;

    const centerFlex = {
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      flex: "0 0 auto"
    } as React.CSSProperties;

    const baseStyle: React.CSSProperties = {
      ...centerFlex,
      cursor: "pointer",
      pointerEvents: "all",
      height: style.height || height,
      width: style.width || width,
      color: theme.baseMediumHigh,
      transition: "all .25s 0s ease-in-out",
      background: theme.altHigh,
      fontSize: 14
    };
    const baseHoverStyle: React.CSSProperties = {
      background: fade(theme.accent, 0.5)
    };

    return (
      <ElementState
        {...attributes}
        ref="container"
        style={{
          ...baseStyle,
          ...style
        }}
        hoverStyle={currShowItems ? void(0) : { ...baseHoverStyle }}
        onHover={autoShowItems ? () => this.toggleShowItems(true) : void(0)}
        unHover={autoShowItems ? () => { this.toggleShowItems(false); } : void(0)}
        onClick={this.toggleShowItems}
      >
        <div>
          <div style={{ width: "100%", height: "100%" }}>{titleNode}</div>
          <div
            ref="itemsContainer"
            style={theme.prepareStyles({
              ...this.getItemsContainerStyle(),
              ...(currShowItems ? itemContainerStyle : void(0))
            })}
          >
            {React.Children.map(children, (child, index) => (
              <ElementState
                key={`${index}`}
                style={{
                  ...baseStyle,
                  border: "2px solid transparent",
                  ...itemStyle
                }}
                hoverStyle={{
                  ...baseHoverStyle,
                  border: `2px solid ${theme.baseMediumLow}`,
                  background: theme.accent
                }}
              >
                <div>
                  {child}
                </div>
              </ElementState>
            ))}
          </div>
        </div>
      </ElementState >
    );
  }
}
