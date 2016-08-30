import React, { Component } from 'react';
import { ReactMultilingual } from './';
import { connect } from 'react-redux';
import { updateActivePage } from '../actions';

class Firstpage extends Component {
  handleClick(e){
    this.props.dispatch(updateActivePage(e));
  }

  render() {
    return (
      <section className={`firstpage${this.props.active ? " active" : ""}`} onClick={!this.props.active ? this.handleClick.bind(this, "article") : null}>
        <div className="l-apple-box--double"></div>
        <div className="l-apple-box--double"></div>
        
        <div className="wrapper">
          
          <h1 className="firstpage__title--ko">
            한국<br/>
            인터넷<br/>
            관광<br/>
            안내서
          </h1>
          <h1 className="firstpage__title--en">
            Korean<br/>
            Internet<br/>
            Tour<br/>
            Guide
          </h1>
          <br className="clearing" />


          <div className="firstpage__event">
            <p className="ml-en">
              2016.10.1
            </p>
            <h1 className="firstpage__title--ko">
              가지 않은<br/>
              길
            </h1>
            <h1 className="firstpage__title--en">
              Alternative <br/>
              Paths
            </h1>
            <br className="clearing" />
          </div>

          <div className="firstpage__event--secondary">
            <p className="ml-en">
              2016.10.8
            </p>
            <h1 className="firstpage__title--ko">
              한국 인터넷<br/>
              관광의 날
            </h1>
            <h1 className="firstpage__title--en">
              Korean <br/>
              Internet <br/>
              Tour Day
            </h1>
            <br className="clearing" />
          </div>
          
          <ReactMultilingual configuration={["ko", "en", "punct", "num"]} isRawHTML={false}>
            { 
              this.props.locale == "ko" ? 
              <div className="firstpage__desc">
                <p>
                  1966년 “과학입국 기술자립”이라는 지표를 걸고 한국과학기술연구원(KIST)이 설립되었다. KIST의 설립은 조국 근대화 사업의 일환으로, 일련의 정부출연연구소 설립의 시작과 함께 선진국으로 유출된 우수 인재를 다시 유치하는 ‘역두뇌유출’ 방침의 시작을 장식했다. 1976년에는 한국전자기술연구소(현 한국전자통신연구원, ETRI)가 설립되었고, 그보다 삼 년 후 귀국해 이곳에서 책임연구원으로 일하기 시작한 전길남은 한국의 인터넷 연결(1990년, 미국에 이어 세계에서 두 번째)에 결정적인 역할을 해서 “대한민국 인터넷의 아버지”라고 불리게 된다. 즉 한국에서 인터넷이 일찍 널리 도입된 것은 국가적 성장정책에 힘입은 기술 이식의 성격이 강하다. 
                </p>
                <p>
                  한편 한국 최초의 웹사이트는 1994년 KAIST 소속 대학원생이 제작한 한국 관광 자료 제공 사이트(<a href="https://web.archive.org/web/19961212180232/http://cair.kaist.ac.kr/korea/index.html" target="_blank">cair.kaist.ac.kr</a>)로 알려져 있다. 김병학은 한국관광공사에서 출판한 “Welcome to Korea”라는 영문 관광안내책자의 내용을 스캔해 글과 이미지 전문을 웹사이트에 게재했다. 제작자의 소속을 제외하면 국가적 정책이나 기술산업과 무관한 개인의 비공식적 작업이었지만, 그럼에도 불구하고 최초의 웹사이트가 국가에서 외국인 대상으로 만든 관광 자료를 담고 있었다는 점은 흥미로운 우연이다. 한국 웹은 국가적 지원을 바탕으로 형성된 기술적/제도적 인프라와, 한국을 세상에 알리는 내용을 공유한 개인 제작자가 만나는 지점에서 시작한 것이다.
                </p>
                <p>
                  인터넷의 역사는 국가 차원에서의 투자와 규제, 자율적인 제작 및 연구 문화, 산업 자본의 도입과 확장, 사회 정의를 위한 노력 등 다양한 요소가 얽히며 진행되어 왔다. 이러한 역사를 거쳐 오늘날에 이른 인터넷은, 내지 인터넷으로 상징되는 디지털 기술과 거기 얽힌 다양한 인간 활동은, 여러 층위에 걸쳐 작용한다. 지구적 규모에서 지형과 지정학이 요동치기도 하고, 초국가적 산업활동과 지자체의 인프라가 상호작용하기도 하며, 가정 내의 역학과 개인의 사고방식이 변화하기도 한다. 이 프로젝트는 이처럼 우리가 만들어왔고 또한 우리를 만들어온 인터넷의 역사를 지역적인 관점에서 바라본다. 마치 한국 최초의 웹사이트처럼, 이 프로젝트는 관광 자료를 담고 있다. 〈한국 인터넷 관광 안내서〉는 그 최초의 웹사이트가 존재할 수 있었던 두 가지 조건인 국가적 정책과 개인 제작자의 층위를 살펴보며, 그 과정에서 소프트웨어 인터페이스의 역할에 주목한다.
                </p>
                <p>
                  〈안내서〉는 한국 인터넷의 지역성을 드러내는 대표적인 두 행선지로 액티브엑스(ActiveX)와 제로보드(Zeroboard)를 지목한다. 공인인증체계/쇼핑/은행/관공서 웹사이트 등에서 접하게 되는 보안모듈을 통칭하는 액티브엑스와 게시판형 CMS인 제로보드는 한국 초기 웹에서 활발히 사용되고 최근까지도 지배적인 소프트웨어로서 살아남으며 한국 웹의 양식을 형성하는 데 기여했을 뿐만 아니라, 한국 인터넷 사용자의 행동 양식을 긴 시간에 걸쳐 조각해왔다. 제로보드는 한 명의 개인이 비상업적으로 만든 소프트웨어가 널리 사용되면서 제작에 대한 접근성을 증대시키고, 나아가 온라인 커뮤니티를 형성하는 구심점이자 도구로 기능했다는 점에서 참여와 평등에 기여했다고 볼 수 있다. 하지만 제로보드의 인기에 힘입어 사실상 한국 웹의 표준적 양식으로 자리 잡은 회원제 게시판 인터페이스가 어떤 행태와 경험을 고착시켰는지는 양가적인 평가의 여지가 있다. 한편 액티브엑스는 정부와 관련 업계가 내린 기술적 결정이 어떻게 사용자와 제작자 모두에게 막대한 영향을 끼쳐왔는지 드러낸다. 그 영향은 사회적 의사결정의 대리인들이 무책임하고 비효율적일 때 생기는 신뢰와 비용의 문제로, 또 사용자를 주어진 모든 선택지에 “예”로 답해야만 하는 수동적 객체로 전락시키는 삶의 기술적 조건으로 나타난다.
                </p>
                <p>
                  우리는 이들 인터페이스와 그 주변을 살펴봄으로써, 제작자의 설계 과정과 의도, 사용자의 실제 경험, 프로토콜에 관한 의사결정, 지식과 의견의 생산 및 유통 등 다양한 층위를 아우르는 장면들을 수집한다. 이는 한국 인터넷의 전반적인 경향이 어떠했는지를 조망하는 시점에서 바라본 장면일 수도 있고, 의도된 설계 방식과 실제 사용 방식 사이의 균열이 생겨날 때, 그 균열 사이로 드러나는 독특한 풍경일 수도 있다. 이 같은 장면들의 목록은 다양한 정보가 듬성듬성 포함된 데이터베이스이자 선택적 아카이브로서, A(액티브엑스)에서 Z(제로보드) 사이 다양한 조망점을 수록한 일종의 ‘관광 가이드’를 구성한다. 한국 인터넷에서 사용된 이들 소프트웨어가 우리에게 남긴 레거시는 무엇인가? 그 과정에서 우리는 어떤 주체가 되었(거나 되지 않았)으며, 어떤 사회를 만들었(거나 만들지 않았)나? 〈안내서〉는 빠르게 변해온 미디어 환경을 되돌아보고 현 좌표를 점검할 것을 제안하며, 나아가 앞으로의 지향점과 그것을 위한 방법론을 상상하는 대화를 기대한다.
                </p>
              </div>
              : 
              <div className="firstpage__desc">
                <p>
                  In 1966, the Korea Institute of Science and Technology (KIST) was founded; one of its slogans was State Establishment through Science, Self-Support through Technology. KIST was the harbinger of the "reverse brain-drain" initiative—governmental efforts to bring back talented researchers who went abroad, partly by founding a series of government-funded research institutions. One of such researchers was Kilnam Chon, who returned to Korea to work at the Korea Institute of Electronics Technology (currently the Electronics and Telecommunications Research Institute), three years after its foundation in 1976. Chon is known as the "father of the Korean internet" because of his crucial role leading to the country's establishment of internet connection in 1990—making it the second country in the world to be connected to the internet. The early introduction of the internet in Korea can be described as a case of technology transfer, backed by a national development policy. 
                </p>
                <p>
                  Meanwhile, the first Korean website is known to be <a href="https://web.archive.org/web/19961212180232/http://cair.kaist.ac.kr/korea/index.html" target="_blank">cair.kaist.ac.kr</a>, which was made in 1994 by a graduate student at KAIST and that featured tourist information for foreigners. Byung-hak Kim's website displayed the full content including text and image of "Welcome to Korea," a tourist information booklet written in English by the Korea Tourism Organization. This website was a personal project, not so much in direct relation with national policy or tech industry except for the creator's occupation; the fact that it nevertheless contained a government-made tourist information targeting foreigners is an interesting coincidence. The Korean web started out in the intersection of the nation's government-supported techno-political infrastructure and an individual creator's decision to share information designed to promote the country to foreigners.
                </p>
                <p>
                  The history of the internet is a process of diverse intertwining elements, such as (inter)national investment and regulations, independent research and creative culture, the introduction and expansion of industrial capital, and efforts towards social justice. The resulting internet, or the immense aggregate of digital technology and human activity that is symbolized by the internet, operates on multiple layers. Terrains and geopolitics fluctuate on a global scale; transnational corporate activities and regional infrastructure interact; family dynamics and individual thought processes change. This project surveys the history of the internet, that both was shaped by us and shaped us, through a local perspective. Just like the first Korean website, this project contains tourist information. Korean Internet Tour Guide (KITG) looks at two layers related to the conditions that made the first Korean website possible: government policy and the individual creator. In doing so, it focuses on the role of the software interface.
                </p>
                <p>
                  As a starting point, KITG addresses two destinations that are representative of the locality of the Korean internet: ActiveX and Zeroboard. ActiveX here refers to the government-imposed security framework applied to authentication certificates, online shopping, online banking and government websites; Zeroboard is a bulletin board style content management system. Both have been widely used in the early Korean web, and is influencing the appearance of the Korean web until now; furthermore, they have been shaping the Korean internet user's behavior over a prolonged period of time. Zeroboard, initially developed noncommercially by an individual, gained widespread adoption; not only did it have a role in increased access to web development, but it also served as the tool and pivot for emerging online communities—in this sense, it contributed to a more participatory and equal web. However, there is room for a more nuanced critique when it comes to the behavior and experience that was encouraged by bulletin board based closed online community interface, which became the de facto standard of Korean web thanks to Zeroboard's popularity. Meanwhile, ActiveX demonstrates the big influence that technical decisions made by the government and stakeholders have over both users and creators. One way that influence manifests itself is as the problem of trust and subsequent costs, caused by the irresponsibility and inefficiency from the part of agents of social decision making; another is as the technical condition of life that turns the user into a passive object, only able to answer "Yes" to given choices.
                </p>
                <p>
                  KITG is an attempt to examine the history of Korean internet from the points of view of both users and producers as well as insiders and observers. It is a collection of moments in which diverse social elements such as technological conditions, users, work style, and political and economic interests have contributed in shaping the country’s internet; these moments center around software interfaces that people used to access the internet and participate in its production. Such technological-cultural pursuit begins with two interface software particular to the Korean context, ActiveX and Zeroboard. Multi-layered moments that span across design processes, the producer’s intention, user experience, protocol-related decision-making on the protocol, knowledge/opinion production and distribution may provide an overview of what the Korean internet has been; alternately, these moments may reveal a peculiar landscape through the chasm that appears when the intended design does not match real usage. This list is at once a database of loosely structured diverse information and a selective archive—it results in a kind of Tour Guide that holds varied vantage points from A (ActiveX) to Z (Zeroboard). KITG suggests that we reflect on our fast-changing media environment, while anticipating new methods and dialogues for exploring future directions.
                </p>
              </div>            }
          </ReactMultilingual>

          <ReactMultilingual configuration={["ko", "en", "punct", "num"]} isRawHTML={false}>
            { 
              this.props.locale == "ko" ? 
              <div className="thanksto--ko">
                <p>
                〈한국 인터넷 관광 안내서〉<br/>
                SeMA 비엔날레 미디어시티 서울 2016 커미션<br/>
                <br/>
                강이룬, 고아침, 소원영<br/><br/>
                도움주신 분들<br/>
                도도, 송호준, 이미영, 장혜영,<br/>
                정성학, 조동원, 최빛나, 최승준
                </p>
                <p>
                〈한국 인터넷 관광 안내서〉에 수록된 각종 목록은 2016년 현재 진행 중인 작업입니다. 향후 수정사항이나 인쇄본에 수록되지 않는 내용 등 〈안내서〉의 전체 내용을 웹사이트(http://k-www.kr)에서 확인할 수 있습니다. k-www.kr은 2017년 8월까지 운영되며, 그 이후에는 인터넷 아카이브(https://web.archive.org/web/k-www.kr)를 이용할 수 있습니다.
                </p>
              </div> : 
              <div className="thanksto--en">
                <p>
                  Korean Internet Tour Guide<br/>
                  Commissioned by SeMA Biennale Mediacity Seoul 2016
                </p>
                <p>
                  A project by E Roon Kang, Achim Koh and Wonyoung So
                </p>
                <p>
                  With the help of Haeyoung Chang, Binna Choi, Seung Joon Choi, Dodo, Dongwon Jo, Seonghak Jung, Miyoung Yi, and Hojun Song
                </p>
                <p>
                  The lists included in Korean Internet Tour Guide are works in progress as of 2016. The complete Guide, including updates to the lists and content not printed in this book, is available at the project's website, http://k-www.kr. The domain k-www.kr will be maintained until August 2017; for future use, please refer to the Internet Archive (https://web.archive.org/web/k-www.kr).
                </p>

              </div>
            }
          </ReactMultilingual>

         

        </div>
      </section>
    );
  }
}

let mapStateToProps = state => {
  return {
    active: state.active == "article",
    locale: state.locale
  }
};

export default connect(mapStateToProps)(Firstpage);
