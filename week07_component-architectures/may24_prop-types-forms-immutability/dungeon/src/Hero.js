import React, { Component } from 'react';
import PropTypes from 'prop-types';
import './Hero.css';

class Hero extends Component {
        
    render() {
        const { hero } = this.props;
        return (
            <div className="hero">
                <label>
                    Name:
                    <span className="value">
                        {hero.name}
                    </span>        
                </label>
                <label>
                    Health:
                    <span className="value">
                        {hero.health}/{hero.maxHealth}
                    </span>
                </label>
            </div>
        );
    }
}

Hero.propTypes = {
    hero: PropTypes.object.isRequired
}

export default Hero

