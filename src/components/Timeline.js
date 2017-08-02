import React from 'react';

const Timeline = () => {
  return (
    <div className="mypost-list">
      <div className="timeline-body">
        <div className="timeline m-border">
          <div className="timeline-item border-info">
            <div className="item-content">
              <div className="text-small">11:30</div>
              <p>Routine Checkup</p>
            </div>
          </div>
          <div className="timeline-item border-warning border-l">
            <div className="item-content">
              <div className="text-small">10:30</div>
              <p>Operation </p>
            </div>
          </div>
          <div className="timeline-item border-warning">
            <div className="item-content">
              <div className="text-small">3 days ago</div>
              <p>Routine Checkup</p>
            </div>
          </div>
          <div className="timeline-item border-danger">
            <div className="item-content">
              <div className="text--muted">Thu, 10 Mar</div>
              <p>Routine Checkup</p>
            </div>
          </div>
          <div className="timeline-item border-info">
            <div className="item-content">
              <div className="text-small">Sat, 5 Mar</div>
              <p>Routine Checkup</p>
            </div>
          </div>
          <div className="timeline-item border-danger">
            <div className="item-content">
              <div className="text-small">Sun, 11 Feb</div>
              <p>Blood checkup test</p>
            </div>
          </div>
          <div className="timeline-item border-info">
            <div className="item-content">
              <div className="text-small">Thu, 17 Jan</div>
              <p>Admit patient ward no. 21</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Timeline;
