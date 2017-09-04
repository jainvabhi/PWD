import React, { Component } from 'react';
import _ from 'lodash';

import Logo from './Logo';

import erpIcon from '../assets/images/erp.png';
import dataIngestion from '../assets/images/data-ingestion.png';
import dataQuality from '../assets/images/data-quality.png';
import streamingAnalytics from '../assets/images/streaming-analytics.png';
import remoteDiagnostics from '../assets/images/remote-diagnostics.png';
import autoReplenishment from '../assets/images/auto-replenishment.png';
import imageRecognition from '../assets/images/image-recognition.png';
import imageComparison from '../assets/images/image-comparison.png';
import liten from '../assets/images/liten.png';
import socialBanking from '../assets/images/social-banking.png';

export default class Home extends Component {
  constructor() {
    super();
    this._getAllBots = this._getAllBots.bind(this);

    this.state = {
      bots: BotList,
      filterType: 'home',
    };
  }

  _getAllBots(filterType) {
    this.setState({ filterType });
    if (
      filterType === 'home' ||
      filterType === 'all' ||
      filterType === 'top' ||
      filterType === 'new'
    ) {
      this.setState({ bots: BotList });
    } else {
      _.map(BotList, item => {
        if (item.name === filterType) {
          let bot = [item];
          this.setState({ bots: bot });
        }
      });
    }
  }

  render() {
    const filterType = this.state.filterType;
    const categoriesButtons = _.map(BotList, (item, i) => {
      let btn;
      if (item.name === filterType) {
        btn = (
          <button
            key={i}
            onClick={() => this._getAllBots(item.name)}
            className="list-group-item active"
          >
            {item.name}
          </button>
        );
      } else {
        btn = (
          <button
            key={i}
            onClick={() => this._getAllBots(item.name)}
            className="list-group-item"
          >
            {item.name}
          </button>
        );
      }
      return btn;
    });
    const botListItem = _.map(this.state.bots, (item, i) => {
      let bot = _.map(item.bots, (bot, j) => {
        let imageStyle = {
          backgroundImage: `url(${bot.icon})`,
        };
        return (
          <div className="bot-card" key={j}>
            <div className="bot-card-box">
              <div className="bot-card-image">
                <div className="bot-image-wrapper">
                  <div className="bot-view">
                    <div className="bot-image">
                      <div className="iconimage" style={imageStyle} />
                    </div>
                    <div className="bot-detail">
                      <div className="bot-title">
                        {bot.title}
                      </div>
                      <div className="bot-author">
                        {bot.author}
                      </div>
                      <div className="bot-preview">
                        <p>
                          {bot.description}
                        </p>
                      </div>
                    </div>
                    <div className="bot-extras">
                      <button className="bot-add">Add</button>
                    </div>
                  </div>
                </div>
              </div>
              <div className="bot-card-title">
                {bot.title}
              </div>
            </div>
          </div>
        );
      });
      return (
        <section key={i}>
          <h2>
            {item.name}
          </h2>
          <div className="bot-row d-flex">
            {bot}
          </div>
        </section>
      );
    });
    return (
      <div className="atom-app">
        <div className="atom-banner text-center">
          <div className="container">
            <Logo />
            <h2>ATOM Platform</h2>
          </div>
        </div>
        <section className="atom-body">
          <div className="container">
            <div className="atom-box">
              <div className="row">
                <div className="col-sm-3">
                  <div className="list-group">
                    <button
                      className={`list-group-item title ${filterType === 'home'
                        ? 'active'
                        : ''}`}
                      onClick={() => this._getAllBots('home')}
                    >
                      Home
                    </button>
                    <button
                      className={`list-group-item ${filterType === 'all'
                        ? 'active'
                        : ''}`}
                      onClick={() => this._getAllBots('all')}
                    >
                      All Bots
                    </button>
                    <button
                      className={`list-group-item ${filterType === 'top'
                        ? 'active'
                        : ''}`}
                      onClick={() => this._getAllBots('top')}
                    >
                      Top Bots
                    </button>
                    <button
                      className={`list-group-item ${filterType === 'new'
                        ? 'active'
                        : ''}`}
                      onClick={() => this._getAllBots('new')}
                    >
                      New Bots
                    </button>
                  </div>

                  <div className="list-group">
                    <h4 className="list-group-item title">Categories</h4>
                    {categoriesButtons}
                  </div>
                </div>
                <div className="col-sm-9">
                  {botListItem}
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    );
  }
}

const BotList = [
  {
    name: 'Data & Insights',
    bots: [
      {
        title: 'Data Ingestion Bot',
        icon: dataIngestion,
        author: 'Atom Admin',
        shortDescription: 'Big Data intake',
        description: 'Ingest high volume data into a data lake.',
      },
      {
        title: 'Data Quality Bot',
        icon: dataQuality,
        author: 'Atom Admin',
        shortDescription: 'Profile, standardize and curate data.',
        description:
          'Data Quality bot enables you to create Profile, standardize and curate data.',
      },
      {
        title: 'Streaming Analytics Bot',
        icon: streamingAnalytics,
        author: 'Atom Admin',
        shortDescription: 'Detect outliers and anomalies from data streams.',
        description:
          'Streaming Analytics bot detect outliers and anomalies from data streams.',
      },
    ],
  },
  {
    name: 'IOT',
    bots: [
      {
        title: 'Remote Diagnostics Bot',
        icon: remoteDiagnostics,
        author: 'Atom Admin',
        shortDescription:
          'Perform diagnostic tests on a remote machine/equipment.',
        description: 'Perform diagnostic tests on a remote machine/equipment',
      },
      {
        title: 'Auto Replenishment Bot',
        icon: autoReplenishment,
        author: 'Atom Admin',
        shortDescription: 'Place replenishment orders on Amazon Fresh.',
        description:
          'Auto Replenishment bot is to place replenishment orders on Amazon Fresh',
      },
    ],
  },
  {
    name: 'Image Processing',
    bots: [
      {
        title: 'Image Recognition Bot',
        icon: imageRecognition,
        author: 'Atom Admin',
        shortDescription: 'Recognizes images and auto-tag meta-data.',
        description:
          'Image Recognition bot Recognizes images and auto-tag meta-data.',
      },
      {
        title: 'Image Comparison Bot',
        icon: imageComparison,
        author: 'Atom Admin',
        shortDescription: 'Identify similar images from millions of images.',
        description:
          'Image Comparison bot Identify similar images from millions of images.',
      },
    ],
  },
  {
    name: 'Social Media',
    bots: [
      {
        title: 'Listen Bot',
        icon: liten,
        author: 'Atom Admin',
        shortDescription:
          'listen / publish messages across social media channels',
        description:
          'Litien Bot listen / publish messages across social media channel.',
      },
      {
        title: 'Support Banking Bot',
        icon: socialBanking,
        author: 'Atom Admin',
        shortDescription: 'Support Social Banking / Social Commerce',
        description:
          'Support Banking bot support Social Banking / Social Commerce',
      },
    ],
  },
  {
    name: 'System of Records',
    bots: [
      {
        title: 'ERP Bot',
        icon: erpIcon,
        author: 'Atom Admin',
        shortDescription: 'Create and Manage sales orders on ERP ',
        description: 'ERP Bot Create and Manage sales orders on ERP.',
      },
    ],
  },
];
