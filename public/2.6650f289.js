webpackJsonp([2], {
  MuRb: function(e, a, l) {
    'use strict';
    Object.defineProperty(a, '__esModule', { value: !0 });
    var t = l('AX2D'),
      n = l('KSGD'),
      u = l.n(n),
      s = l('RH2O'),
      m = l('bm0A'),
      d = function(e) {
        var a = e.user,
          l = e.hidePatientModal;
        return console.log(a), t.default.createElement(
          'div',
          { className: 'modal fade show custom-modal patientModal' },
          t.default.createElement(
            'div',
            { className: 'modal-dialog', role: 'document' },
            t.default.createElement(
              'div',
              { className: 'modal-content' },
              t.default.createElement(
                'div',
                { className: 'modal-header' },
                t.default.createElement(
                  'h5',
                  { className: 'modal-title' },
                  'Here is the Patient Detail:',
                ),
                t.default.createElement(
                  'button',
                  {
                    type: 'button',
                    onClick: l,
                    className: 'close',
                    'data-dismiss': 'modal',
                    'aria-label': 'Close',
                  },
                  t.default.createElement(
                    'span',
                    { 'aria-hidden': 'true' },
                    '×',
                  ),
                ),
              ),
              t.default.createElement(
                'div',
                { className: 'modal-body' },
                t.default.createElement(
                  'ul',
                  { className: 'list-group' },
                  t.default.createElement(
                    'li',
                    { className: 'list-group-item' },
                    t.default.createElement('span', null, 'Name:'),
                    ' ',
                    t.default.createElement('span', null, a.patient.name),
                  ),
                  t.default.createElement(
                    'li',
                    { className: 'list-group-item' },
                    t.default.createElement('span', null, 'Gender:'),
                    ' ',
                    t.default.createElement('span', null, 'Female'),
                  ),
                  t.default.createElement(
                    'li',
                    { className: 'list-group-item' },
                    t.default.createElement('span', null, 'Age:'),
                    ' ',
                    t.default.createElement('span', null, '35Y'),
                  ),
                  t.default.createElement(
                    'li',
                    { className: 'list-group-item' },
                    t.default.createElement('span', null, 'Race:'),
                    ' ',
                    t.default.createElement('span', null, 'R'),
                  ),
                  t.default.createElement(
                    'li',
                    { className: 'list-group-item' },
                    t.default.createElement('span', null, 'SSN:'),
                    ' ',
                    t.default.createElement('span', null, '999-999-9999'),
                  ),
                  t.default.createElement(
                    'li',
                    { className: 'list-group-item' },
                    t.default.createElement('span', null, 'Appointment Time:'),
                    ' ',
                    t.default.createElement('span', null, '10:30 AM'),
                  ),
                  t.default.createElement(
                    'li',
                    { className: 'list-group-item' },
                    t.default.createElement(
                      'span',
                      null,
                      'Medical Department:',
                    ),
                    ' ',
                    t.default.createElement('span', null, 'Veterinary Clinic'),
                  ),
                ),
              ),
            ),
          ),
        );
      };
    d.propTypes = {
      user: u.a.shape({}).isRequired,
      hidePatientModal: u.a.func,
    };
    var r = function(e) {
      return { user: e.user };
    };
    a.default = l.i(s.connect)(r, { hidePatientModal: m.f })(d);
  },
});
