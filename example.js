/* eslint new-cap: "off" */

import React, { Component } from 'react';
import ReactDOM from 'react-dom';

import { ReactInput, parseDigit } from 'input-format';
import { parse, format, asYouType, isValidNumber } from 'libphonenumber-js';

class DemoComponent extends Component {
  constructor(props) {
    super(props);
    this.onChange = this.onChange.bind(this);
    // this.parseNumbers = this.parseNumbers.bind(this);
    this.formatNumber = this.formatNumber.bind(this);

    this.state = {
      value: '',
      parse: '213-373-4253',
      format: '2133734253',
      country: 'US',
    };
  }

  onChange(value) {
    this.setState({ value });
  }

  formatNumber(value) {
    const asYouTypes = new asYouType(this.state.country);
    const text = asYouTypes.input(value);

    return { text, template: asYouTypes.template };
  }

  render() {
    // const input_format   = window['input-format']

    // const ReactInput        = input_format.ReactInput
    // const templateParser    = input_format.templateParser
    // const templateFormatter = input_format.templateFormatter
    // const parseDigit        = input_format.parseDigit

    const asYouTypes = new asYouType(this.state.country);

    asYouTypes.input(this.state.value);

    let parsedNumber = 'Unknown country';
    let nationalFormattedNumber = 'Unknown country';
    let internationalFormattedNumber = 'Unknown country';
    let internationalFormattedNumberInPlaintext = 'Unknown country';

    try {
      parsedNumber = JSON.stringify(parse(this.state.parse, this.state.country));
      nationalFormattedNumber = format(parse(this.state.format, this.state.country), 'National');
      internationalFormattedNumber = format(parse(this.state.format, this.state.country), 'International');
      internationalFormattedNumberInPlaintext = format(parse(this.state.format, this.state.country), 'International_plaintext');
    } catch (error) {
      if (error.message.indexOf('Unknown country code') !== 0) {
        throw error;
      }
    }
    console.log(parsedNumber);
    console.log(nationalFormattedNumber);
    console.log(internationalFormattedNumber);
    console.log(internationalFormattedNumberInPlaintext);

    return (
      <div>
        <ReactInput
          autoFocus
          value={ this.state.value }
          onChange={ this.onChange }
          parse={ (character, value) => {
              // Leading plus is allowed
            if (character === '+') {
              if (!value) {
                return character;
              }
            }

              // Digits are allowed
            return parseDigit(character);
          } }
          format={ this.formatNumber }
        />

        <div className="section">
          <div className="section__line">Value: {this.state.value}</div>
          <div className="section__line">Default country:
          <input
            type="text"
            value={ this.state.country }
            onChange={ (event) => this.setState({ country: event.target.value }) }
            style={ { width: '40px', marginLeft: '6px' } }
          />
          </div>
          <div className="section__line">Actual country: {asYouTypes.country}</div>
          <div className="section__line">National: {asYouTypes.country && format(asYouTypes.national_number, asYouTypes.country, 'National')}</div>
          <div className="section__line">Valid: {String(isValidNumber(this.state.value, asYouTypes.country))}</div>

          <br />

        Note: Phone number validation here is loose because it uses the (default) reduced metadata set. For more precise phone number validation use <code>metadata.full.json</code>. <a href="https://github.com/catamphetamine/libphonenumber-js#isvalidnumberparsed_number">Read more</a>
        </div>
      </div>
    );
  }
}

ReactDOM.render(
  <DemoComponent />,
  document.getElementById('root')
);
