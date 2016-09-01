import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Description } from './'; 
import { updateActivePage } from '../actions';
import 'gsap';
import { ReactMultilingual } from './'; 
import LazyLoad from 'react-lazyload';

class Circa2000 extends Component {

  componentWillReceiveProps(newProps){
    
    if (newProps.permalink != this.props.permalink) {
      TweenMax.to(this.refSection, 1, { ease: Power3.easeInOut, 
        scrollTop: 0
      });
    }
    
  }


  handleClick(e){
    this.props.dispatch(updateActivePage(e));
  }

  render() {
    return (
      <section ref={ c => { this.refSection = c; }} className={`list${this.props.active ? " active" : ""}`} style={{ height: this.props.screenHeight}} onClick={!this.props.active ? this.handleClick.bind(this, "list") : null}>
        <div className="l-apple-box--double"></div>
        <div className="l-apple-box--double"></div>
       
        
        <div className="wrapper">
          <ReactMultilingual isRawHTML={false} configuration={["ko", "en", "num", "punct"]}>
            <h3>유승준 하나로통신 CF 따라올테면 따라와봐(1999?)</h3>

            <LazyLoad height={315}>
                <iframe width="100%" height="315" src="https://www.youtube.com/embed/XfrDTBLf_R8" frameborder="0" allowfullscreen></iframe>
            </LazyLoad>

            <div className="l-apple-box--double"></div>

            <h3>메가패스 CF - 메가패스 장군 편 (2001)</h3>
            <LazyLoad height={315}>
                <iframe width="100%" height="315" src="https://www.youtube.com/embed/PhHxZJJYzA0" frameborder="0" allowfullscreen></iframe>
            </LazyLoad>
            <div className="l-apple-box--double"></div>

            <h3>코넷 CF - 쌈장 이기석 편 (1999)</h3>
            <LazyLoad height={315}>
                <iframe width="100%" height="315" src="https://www.youtube.com/embed/36R4212MFn4" frameborder="0" allowfullscreen></iframe>
            </LazyLoad>
            <div className="l-apple-box--double"></div>

            <h3>천리안 CF - 날 따라 해봐요 편 (2000)</h3>
            <LazyLoad height={315}>
                <iframe width="100%" height="315" src="https://www.youtube.com/embed/XVhXwjDOfc8" frameborder="0" allowfullscreen></iframe>
            </LazyLoad>
            <div className="l-apple-box--double"></div>

            <h3>하이홈쩜컴 CF - 파출소 편 (2000)</h3>
            <LazyLoad height={315}>
                <iframe width="100%" height="315" src="https://www.youtube.com/embed/cspuRqhyiuI" frameborder="0" allowfullscreen></iframe>
            </LazyLoad>
            <div className="l-apple-box--double"></div>

            <h3>인터파크 CF - 음반 구입 편 (2000)</h3>
            <LazyLoad height={315}>
                <iframe width="100%" height="315" src="https://www.youtube.com/embed/VxDRDuDbwk4" frameborder="0" allowfullscreen></iframe>
            </LazyLoad>
            <div className="l-apple-box--double"></div>

            <h3>CJ몰 CF - 그녀는 무엇을 모르는가 편 (2002)</h3>
            <LazyLoad height={315}>
                <iframe width="100%" height="315" src="https://www.youtube.com/embed/bBdqfWeHfwE" frameborder="0" allowfullscreen></iframe>
            </LazyLoad>
            <div className="l-apple-box--double"></div>

            <h3>한국관광공사 CF - 웰컴 투 코리아 편 (1998)</h3>
            <LazyLoad height={315}>
                <iframe width="100%" height="315" src="https://www.youtube.com/embed/SIcyOrGVLqo" frameborder="0" allowfullscreen></iframe>
            </LazyLoad>
            <div className="l-apple-box--double"></div>

            <h3>삼성그룹 CF - 밀레니엄 프론티어 편 (1999)</h3>
            <LazyLoad height={315}>
                <iframe width="100%" height="315" src="https://www.youtube.com/embed/Wtpo_IzHSI4" frameborder="0" allowfullscreen></iframe>
            </LazyLoad>
            <div className="l-apple-box--double"></div>

            <h3>LG그룹 CF - 밀레니엄 드림 편 (1999)</h3>
            <LazyLoad height={315}>
                <iframe width="100%" height="315" src="https://www.youtube.com/embed/97ey1mnMVdM" frameborder="0" allowfullscreen></iframe>
            </LazyLoad>
            <div className="l-apple-box--double"></div>

            <h3>네띠앙 - 상형문자편 (1999)</h3>
            <a href="http://blog.naver.com/dokken0109/220252705356" target="_blank">http://blog.naver.com/dokken0109/220252705356</a><br/>
            <LazyLoad height={315}>
                <iframe width="100%" height="306" src="http://serviceapi.nmv.naver.com/flash/convertIframeTag.nhn?vid=F1D131C0309CC2933DDFE1EF2CCD5ACC9C71&outKey=V128e605faf0651428239021dc9e8493b20994deb6075865d6540021dc9e8493b2099" frameborder="no" scrolling="no"></iframe>
            </LazyLoad>
            <div className="l-apple-box--double"></div>


            <h3>하이텔 - 인터넷 새나라편 (1999)</h3>
            <a href="http://blog.naver.com/dokken0109/220457343795" target="_blank">http://blog.naver.com/dokken0109/220457343795</a><br/>
            <LazyLoad height={315}>
                <iframe width="100%" height="306" src="http://serviceapi.nmv.naver.com/flash/convertIframeTag.nhn?vid=793DCA1EEF11D866413BBB16F34AC9175D92&outKey=V125eff30bd1fe38e4e7dc78f33607c66f996c805e5a532cddca7c78f33607c66f996" frameborder="no" scrolling="no"></iframe>
            </LazyLoad>
            <div className="l-apple-box--double"></div>


            <h3>옥션 - 인터넷 경매편 (1999)</h3>
            <a href="http://blog.naver.com/dokken0109/220252685285" target="_blank">http://blog.naver.com/dokken0109/220252685285</a><br/>
            <LazyLoad height={315}>
                <iframe width="100%" height="306" src="http://serviceapi.nmv.naver.com/flash/convertIframeTag.nhn?vid=A3C5A6A5345F007EE21C094D0787416655BF&outKey=V1283f21a4a04e587ba291b6811099841c5e0bb0efeb2cfef613f1b6811099841c5e0" frameborder="no" scrolling="no"></iframe>
            </LazyLoad>
            <div className="l-apple-box--double"></div>

            <h3>다음커뮤니케이션 - 광야편 (1999)</h3>
            <a href="
            http://blog.naver.com/dokken0109/220252698244" target="_blank">http://blog.naver.com/dokken0109/220252698244</a>
            <LazyLoad height={315}>
                <iframe width="100%" height="306" src="http://serviceapi.nmv.naver.com/flash/convertIframeTag.nhn?vid=F8DE3A6B224D595875AE67F2F9897408C13F&outKey=V123340561f6d1659a8b5a3b7ab56c20de3cb0c802162a5f362e4a3b7ab56c20de3cb" frameborder="no" scrolling="no"></iframe>
            </LazyLoad>
            <div className="l-apple-box--double"></div>

            <h3>나우누리 - 파란피편 (1999)</h3>
            <a href="http://blog.naver.com/dokken0109/220220362141" target="_blank">http://blog.naver.com/dokken0109/220220362141</a>
            <LazyLoad height={315}>
                <iframe width="100%" height="306" src="http://serviceapi.nmv.naver.com/flash/convertIframeTag.nhn?vid=D8FDA8E5122F92040AF7A138C997517B84EE&outKey=V128b56f2bc0968f3d10c19e3ee1bb08efd89b781d21aa5d539f919e3ee1bb08efd89" frameborder="no" scrolling="no"></iframe>
            </LazyLoad>
            <div className="l-apple-box--double"></div>

            <h3>채널아이 1</h3>
            <a href="http://blog.naver.com/dokken0109/120102224008" target='_blank'>http://blog.naver.com/dokken0109/120102224008</a>
            <h3>채널아이 2</h3>
            <a href="http://blog.naver.com/dokken0109/120102495502" target='_blank'>http://blog.naver.com/dokken0109/120102495502</a>

            <img src="https://d2mxuefqeaa7sj.cloudfront.net/s_38ED0EE3215277DB0EB667BA3E795B285B6EA33C1ED41406363D42068C118D21_1471577196087_channeli_1.jpg" alt=""/>
            <img src="https://d2mxuefqeaa7sj.cloudfront.net/s_38ED0EE3215277DB0EB667BA3E795B285B6EA33C1ED41406363D42068C118D21_1471577196094_channeli_2.jpg" alt=""/>
            <div className="l-apple-box--double"></div>


            <h3>다음 카페 (2002)</h3>
            <a href="http://blog.naver.com/dokken0109/220287727062" target="_blank">http://blog.naver.com/dokken0109/220287727062</a>

            <LazyLoad height={315}>
                <iframe width="100%" height="306" src="http://serviceapi.nmv.naver.com/flash/convertIframeTag.nhn?vid=AF2513D3A06BD36EB405B1B943DB31A9A2C7&outKey=V124b9104adabbc5446c68242ee627ad7684b1a9f60505864f29b8242ee627ad7684b" frameborder="no" scrolling="no"></iframe>
            </LazyLoad>
            <div className="l-apple-box--double"></div>


            <h3>네이버 카페 (2004)</h3>
            <a href="http://blog.naver.com/dokken0109/220353190712" target="_blank">http://blog.naver.com/dokken0109/220353190712</a>
            <LazyLoad height={315}>
                <iframe width="100%" height="306" src="http://serviceapi.nmv.naver.com/flash/convertIframeTag.nhn?vid=EF58AF4AE37682D4E7611A77E8C034EB743A&outKey=V127329a0e0b23a985a986ac265f0176e6eccf0624fa036b538436ac265f0176e6ecc" frameborder="no" scrolling="no"></iframe>
            </LazyLoad>
            <div className="l-apple-box--double"></div>


            <h3>싸이월드 - 인간 파도편(2004)</h3>
            <a href="http://blog.naver.com/dokken0109/220375388471" target="_blank">http://blog.naver.com/dokken0109/220375388471</a>
            <LazyLoad height={315}>
                <iframe width="100%" height="306" src="http://serviceapi.nmv.naver.com/flash/convertIframeTag.nhn?vid=C9E2BAB6F7D9D5835269B99281D97B8DE156&outKey=V1210ec95102a23c93ffb0af7884589909a7fd695e22a38af19350af7884589909a7f" frameborder="no" scrolling="no"></iframe>
            </LazyLoad>
            <div className="l-apple-box--double"></div>


            <h3>아이맥 (1999)</h3>
            <a href="http://blog.naver.com/dokken0109/120211282248" target="_blank">http://blog.naver.com/dokken0109/120211282248</a>
            <LazyLoad height={315}>
                <iframe width="100%" height="306" src="http://serviceapi.nmv.naver.com/flash/convertIframeTag.nhn?vid=F8E6E88317091E3DF4F4343B1734C0A7D68A&outKey=V127a8beea0895a964f67880ae4db2f78ed65ba2e3f42c25cd8aa880ae4db2f78ed65" frameborder="no" scrolling="no"></iframe>
            </LazyLoad>
            <div className="l-apple-box--double"></div>


            <h3>삼성카드 올앳 (2000)</h3>
            <a href="http://blog.naver.com/dokken0109/220185872781" target="_blank">http://blog.naver.com/dokken0109/220185872781</a>
            <LazyLoad height={315}>
                <iframe width="100%" height="306" src="http://serviceapi.nmv.naver.com/flash/convertIframeTag.nhn?vid=5AD86B37C24F6894F07CD96732A009E527A9&outKey=V127225deb003be065007977d5a4b782b3374e148f771ea61ff4c977d5a4b782b3374" frameborder="no" scrolling="no"></iframe>
            </LazyLoad>
            <div className="l-apple-box--double"></div>

            <h3>주부닷컴 (2000)</h3>
            <a href="http://blog.naver.com/dokken0109/220254319647" target="_blank">http://blog.naver.com/dokken0109/220254319647</a>
            <LazyLoad height={315}>
                <iframe width="100%" height="306" src="http://serviceapi.nmv.naver.com/flash/convertIframeTag.nhn?vid=7142315AB98AA82501CE14A8165B6FEAE357&outKey=V124191019d7e7018c3ba231e17f531b10e290db5e2354dfc8b8b231e17f531b10e29" frameborder="no" scrolling="no"></iframe>
            </LazyLoad>
            <div className="l-apple-box--double"></div>

            <h3>초고속 인터넷 제대로 (2000)</h3>
            <a href="http://blog.naver.com/dokken0109/220273116510" target="_blank">http://blog.naver.com/dokken0109/220273116510</a>
            <LazyLoad height={315}>
                <iframe width="100%" height="306" src="http://serviceapi.nmv.naver.com/flash/convertIframeTag.nhn?vid=64173852079EF83F076FFC00F15DF45674A3&outKey=V125500f0ca7b34455aa9c823a4febb9d969583ada3258f7cf5d3c823a4febb9d9695" frameborder="no" scrolling="no"></iframe>
            </LazyLoad>
            <div className="l-apple-box--double"></div>

            <h3>국정홍보처 (2000)</h3>
            <a href="http://blog.naver.com/dokken0109/220324172149" target="_blank">http://blog.naver.com/dokken0109/220324172149</a>
            <LazyLoad height={315}>
                <iframe width="100%" height="306" src="http://serviceapi.nmv.naver.com/flash/convertIframeTag.nhn?vid=2F0632C1522DB6FA276C887123972D5F4A95&outKey=V1288a11ff80906e1c5bd343b1734c0a7d68a83b7b47d3cae0002343b1734c0a7d68a" frameborder="no" scrolling="no"></iframe>
            </LazyLoad>
            <div className="l-apple-box--double"></div>

            <h3>세이클럽 (2000)</h3>
            <a href="http://blog.naver.com/dokken0109/220175459410" target="_blank">http://blog.naver.com/dokken0109/220175459410</a>
            <LazyLoad height={315}>
                <iframe width="100%" height="306" src="http://serviceapi.nmv.naver.com/flash/convertIframeTag.nhn?vid=342E959E0F01DBD87784249E91D73A3A030D&outKey=V1289847a340b4ce160fa9e87d1bcb5955daff78c765985188b209e87d1bcb5955daf" frameborder="no" scrolling="no"></iframe>
            </LazyLoad>
            <div className="l-apple-box--double"></div>


            <h3>프리챌 (2000)</h3>
            <a href="http://blog.naver.com/dokken0109/220175453631" target="_blank">http://blog.naver.com/dokken0109/220175453631</a>
            <LazyLoad height={315}>
                <iframe width="100%" height="306" src="http://serviceapi.nmv.naver.com/flash/convertIframeTag.nhn?vid=8538D59B8F070D9323DE09A50CB4C302D8F9&outKey=V128d59b8f0070d9323de09a50cb4c302d8f9d79be4728b742ad309a50cb4c302d8f9" frameborder="no" scrolling="no"></iframe>
            </LazyLoad>
            <div className="l-apple-box--double"></div>


            <h3>새롬 (2000)</h3>
            <a href="http://blog.naver.com/dokken0109/220262937526" target="_blank">http://blog.naver.com/dokken0109/220262937526</a>
            <LazyLoad height={315}>
                <iframe width="100%" height="306" src="http://serviceapi.nmv.naver.com/flash/convertIframeTag.nhn?vid=8538D59B8F070D9323DE09A50CB4C302D8F9&outKey=V122d059b8f070d9323de09a50cb4c302d8f987b8dd8a5bf8a8ab09a50cb4c302d8f9" frameborder="no" scrolling="no"></iframe>
            </LazyLoad>
            <div className="l-apple-box--double"></div>

            <h3>유니텔 (2000)</h3>
            <a href="http://blog.naver.com/dokken0109/220175452592" target="_blank">http://blog.naver.com/dokken0109/220175452592</a>
            <LazyLoad height={315}>
                <iframe width="100%" height="306" src="http://serviceapi.nmv.naver.com/flash/convertIframeTag.nhn?vid=DD25644F14BD3B5C67A5B1B943DB31A9A2C7&outKey=V1230600702f7e202b2dee1a8ccd12c2fc6288884a3f9a2bf4d9ee1a8ccd12c2fc628" frameborder="no" scrolling="no"></iframe>
            </LazyLoad>
            <div className="l-apple-box--double"></div>


            <h3>msn (2000)</h3>
            <a href="http://blog.naver.com/dokken0109/220175454631" target="_blank">http://blog.naver.com/dokken0109/220175454631</a>
            <LazyLoad height={315}>
                <iframe width="100%" height="306" src="http://serviceapi.nmv.naver.com/flash/convertIframeTag.nhn?vid=5BAC09AFD095DFE3F5839FBAC37C07F8CBB8&outKey=V1287d621c50c745cb1f5338657ee98c82b523ade888dfd6335d7338657ee98c82b52" frameborder="no" scrolling="no"></iframe>
            </LazyLoad>
            <div className="l-apple-box--double"></div>
            <div className="l-apple-box--double"></div>
            <div className="l-apple-box--double"></div>


          </ReactMultilingual>
        </div>
        <div className="l-apple-box--double"></div>
        <div className="l-apple-box--double"></div>

      </section>
    );
  }
}

let mapStateToProps = state => {
  return {
    screenHeight: state.screenHeight,
    active: state.active == "list"
  }
};

export default connect(mapStateToProps)(Circa2000);