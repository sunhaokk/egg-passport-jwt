'use strict';

const mock = require('egg-mock');

describe('test/init.test.js', () => {
  let app;
  before(() => {
    app = mock.app({
      baseDir: 'apps/init-test',
    });
    return app.ready();
  });

  after(() => app.close());
  afterEach(mock.restore);

  it('should GET /', () => {
    return app.httpRequest()
      .get('/')
      .expect('hi, init')
      .expect(200);
  });
});
