import React, {Component} from 'react';
import { Motion, StaggeredMotion, spring } from 'react-motion';
import classNames from 'classnames';
import PropTypes from 'prop-types';

import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import { faHome, faBriefcase, faProjectDiagram, faTools } from '@fortawesome/free-solid-svg-icons';
 
import {MENU} from '../../Helpers/Enums';
import './DiscMenu.css';

class DiscMenu extends Component {
  constructor(props) {
    super(props);
    
    this.state = {
      active: false,
    }
    this._onItemClick = this._onItemClick.bind(this);
    this._onClick = this._onClick.bind(this);
  }
  
  _onClick() {
    this.setState({ 
      active: !this.state.active 
    });
  }
  _onItemClick(item){
    this._onClick();
    this.props.onItemClick(item)
  }

  render() {
    const menus = Object.keys(MENU).map(key=> MENU[key]);
    const metric =  { x: -45, o: 0 };
    return (
      <div className="container">
        <ButtonGroup>
          <StaggeredMotion
            defaultStyles={menus.map(() => metric)}
            styles={prevInterpolatedStyles => prevInterpolatedStyles.map((_, i) => {
              return i === prevInterpolatedStyles.length - 1
                ? {
                  x: spring(this.state.active ? 0 : -45, { stiffness: 330, damping: 20 }),
                  o: spring(this.state.active ? 1 : 0, { stiffness: 330, damping: 20 }),
                } : {
                  x: spring(prevInterpolatedStyles[i + 1].x, { stiffness: 330, damping: 20 }),
                  o: spring(prevInterpolatedStyles[i + 1].o, { stiffness: 330, damping: 20 }),
                };
            })}
          >
            {interpolatingStyles =>
              <ButtonGroup style={{ 
                background: this.state.active ? '#333' : 'transparent',
              }}>
                {interpolatingStyles.map((style, i) =>
                  <Button
                    key={menus[i]}
                    onClick={() => this._onItemClick(menus[i])} 
                    style={{
                      position: 'relative',
                      right: style.x,
                      opacity: style.o,
                      pointerEvents: this.state.active ? 'auto' : 'none',
                    }}
                  >
                    <Tooltip text={menus[i]} />
                    {this.iconFor(menus[i])}
                 </Button>
                )}
              </ButtonGroup>
            }
          </StaggeredMotion>
          
          <Motion
            defaultStyle={{ s: 0.675 }}
            style={{ s: spring(this.state.active ? 1 : 0.675, { stiffness: 330, damping: 14 }) }}
          >
            {interpolatingStyles =>
              <Button 
                className="button--large" 
                onClick={this._onClick} 
                style={{ 
                  transform: 'scale(' + interpolatingStyles.s + ')',
                }}
              >
                <span className={this.state.active ? 'icon active' : 'icon'} />
              </Button>
            }
          </Motion>
        </ButtonGroup>
      </div>
    );
  }

    iconFor(menu){
        switch(menu){
            case MENU.PROJECTS:
                return (
                    <FontAwesomeIcon icon={faProjectDiagram}/>
                );
            case MENU.EXPERIENCE:
                return (
                    <FontAwesomeIcon icon={faBriefcase}/>
                );
            case MENU.SKILLS:
                return (
                    <FontAwesomeIcon icon={faTools}/>
                );
            default: 
                return(
                    <FontAwesomeIcon icon={faHome}/>
                );
        }
    }
}

/**
 * <Tooltip />
 */
const Tooltip = (props) => <span className="tooltip">{props.text}</span>;

/**
 * <ButtonGroup />
 */
const ButtonGroup = (props) => <div className={classNames('button-group', props.active)} style={props.style}>{props.children}</div>;

/**
 * <Button />
 */
const Button = (props) => <button className={classNames('button', props.className)} style={props.style} onClick={props.onClick}>{props.children}</button>;

DiscMenu.propTypes = {
    onItemClick: PropTypes.func
}
export default DiscMenu;