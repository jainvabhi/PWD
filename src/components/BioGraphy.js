import React from 'react';

const BioGraphy = () => {
  return (
    <div className="mypost-list">
        <div className="post-box">
            <p>It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. </p>
            <p>It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. </p>
        </div>
        <div className="post-box">
            <h4>General Report</h4>                                        
            <div className="body p-l-0 p-r-0">
                <ul className="list-unstyled">
                    <li>
                        <div>Blood Pressure</div>
                        <div className="progress">
                            <div className="progress-bar progress-bar-success progress-bar-striped active" role="progressbar" aria-valuenow="40" aria-valuemin="0" aria-valuemax="100" style="width: 40%"> <span className="sr-only">40% Complete (success)</span> </div>
                        </div>
                    </li>
                    <li>
                        <div>Heart Beat</div>
                        <div className="progress">
                            <div className="progress-bar progress-bar-info progress-bar-striped active" role="progressbar" aria-valuenow="20" aria-valuemin="0" aria-valuemax="100" style="width: 20%"> <span className="sr-only">20% Complete</span> </div>
                        </div>
                    </li>
                    <li>
                        <div>Haemoglobin</div>
                        <div className="progress">
                            <div className="progress-bar progress-bar-warning progress-bar-striped active" role="progressbar" aria-valuenow="60" aria-valuemin="0" aria-valuemax="100" style="width: 60%"> <span className="sr-only">60% Complete (warning)</span> </div>
                        </div>
                    </li>
                    <li>
                        <div>Sugar</div>
                        <div className="progress">
                            <div className="progress-bar progress-bar-danger progress-bar-striped active" role="progressbar" aria-valuenow="80" aria-valuemin="0" aria-valuemax="100" style="width: 80%"> <span className="sr-only">80% Complete (danger)</span> </div>
                        </div>
                    </li>
                </ul>
            </div>
        </div>
        <h4>Education</h4>
        <ul className="dis">
            <li>B.Com from Ski University</li>
            <li>In hac habitasse platea dictumst.</li>
            <li>In hac habitasse platea dictumst.</li>
            <li>Vivamus elementum semper nisi.</li>
            <li>Praesent ac sem eget est egestas volutpat.</li>
        </ul>
        <h4>Past Visit History</h4>
        <ul className="dis">
            <li>Integer tincidunt.</li>
            <li>Praesent vestibulum dapibus nibh.</li>
            <li>Integer tincidunt.</li>
            <li>Praesent vestibulum dapibus nibh.</li>
            <li>Integer tincidunt.</li>
            <li>Praesent vestibulum dapibus nibh.</li>
        </ul>
    </div>
  );
};

export default BioGraphy;
