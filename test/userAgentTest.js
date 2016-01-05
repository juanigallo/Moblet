var expect = require('chai').expect,
    ua = require('../index');

describe('get-user-agent', function(){
    it('test mobile user agent', function() {
        var agent = ua.detectDevice('Mozilla/5.0 (Linux; U; Android 4.0.3; ko-kr; LG-L160L Build/IML74K) AppleWebkit/534.30 (KHTML, like Gecko) Version/4.0 Mobile Safari/534.30');

        expect(agent).to.be.equal('mobile');
    });

    it('test tablet user agent', function() {
        var agent = ua.detectDevice('Mozilla/5.0 (iPad; CPU OS 7_0_3 like Mac OS X) AppleWebKit/537.51.1 (KHTML, like Gecko) Version/7.0 Mobile/11B511 Safari/9537.53`')
        expect(agent).to.be.equal('tablet');
    });

    it('test iPad mini to be tablet', function() {
        var agent = ua.detectDevice('Mozilla/5.0 (iPad; CPU OS 7_0_4 like Mac OS X) AppleWebKit/537.51.1 (KHTML, like Gecko) Version/7.0 Mobile/11B554a Safari/9537.53');
        expect(agent).to.be.equal('tablet');
    });

    it('test desktop user agent', function() {
        var agent = ua.detectDevice('Mozilla/5.0 (Windows NT 6.1) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/41.0.2228.0 Safari/537.36');
        expect(agent).to.be.equal('desktop');
    });
});