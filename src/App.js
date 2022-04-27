import { animated, useTrail, useSpring } from 'react-spring'
import React, { useEffect, useState } from 'react';
import resultJsonArray from './promotion.mbti.json';
import { getViewData } from './promotion.mbti.question';
import './mstyle-add-on.css';

function App() {
  const [viewState, setViewState] = useState(0);
  const [currentQuestion, setCurrentQuestion] = useState(getViewData(1));
  const [progress, setProgress] = useState(0);
  const [resultData, setResultData] = useState(null);
  const [resultCode, setResultCode] = useState(null);
  const [isMobile, setIsMobile] = useState(false);

  const [showA, setShowA] = useState(false);
  const [motionDefence, setMotionDefence] = useState(false); // [NOTE] 중간 진입 시 모션 render 갱신을 위한 디펜스 state

  const userInfo = {
    code: 'p01',
    userno: '0',
    userid: 'guest',
    reset: true,
  }

  const config = {
    opacityProps: {
      from: { opacity: 0, y: 20, },
      to: { opacity: showA ? 1 : 0, y: showA ? 0 : 20 },
    }
  }

  const fadeStyles = useSpring({
    ...config.opacityProps,
    delay: 100,
  });

  const fadeStyles2 = useSpring({
    ...config.opacityProps,
    delay: 170,
  });

  const fadeStyles3 = useSpring({
    ...config.opacityProps,
    delay: 230,
  });

  const fadeStyles4 = useSpring({
    ...config.opacityProps,
    delay: 250,
  });

  const fadeStyles5 = useSpring({
    ...config.opacityProps,
    delay: 300,
  });

  const trail = useTrail(currentQuestion.links.length, {
    config: { mass: 1, tension: 400, friction: 30 },
    opacity: 1,
    y: 0,
    from: { opacity: 0, y: 20 },
    reset: true,
  })

  const [trailRecommend, api] = useTrail(resultData ? resultData.pdTitle.length : 4, () => ({
    config: { mass: 15, tension: 1400, friction: 200 },
    opacity: 0,
    y: 20,
    from: { opacity: 0, y: 20 },
    reset: true,
  }))

  useEffect(() => {
    let resultcode;

    if(new RegExp(/bnkrmall.co.kr\/mw\//).test(window.location.href)) setIsMobile(true);

    if(document.applicantSubFrm) {
      userInfo.code = document.applicantSubFrm.code.value;
      userInfo.userno = Number.parseInt(document.applicantSubFrm.userno.value);
      userInfo.userid = document.applicantSubFrm.userid.value;

      resultcode = document.applicantSubFrm.resultcode.value;
    }

    if(resultcode) {
      setResultCode(resultcode);
      const resultId = Number.parseInt(resultcode.split('r')[1]);
      setResultData(resultJsonArray[resultId - 1]);
      setViewState(2);
    }
  }, [])

  useEffect(() => {
    if(viewState === 0) {
      setShowA(true)
    }

    if(viewState === 1) {
      setShowA(false)
    }

    if(viewState === 2) {
      setShowA(true);
      setTimeout(() => {
        setMotionDefence(true);
        api.start({ opacity: 1, y: 0 });
      }, 400)
    }
    
  }, [viewState])

  useEffect(() => {
    if(viewState === 1) {
      if (currentQuestion.viewStateId === 1) {
        setProgress(1);
      } else if (currentQuestion.viewStateId > 1 && currentQuestion.viewStateId <= 3) {
        setProgress(2);
      } else if (currentQuestion.viewStateId > 3 && currentQuestion.viewStateId <= 7) {
        setProgress(3);
      } else {
        setProgress(4);
      }
    }
  }, [currentQuestion])

  function setResult(resultId) {

    const result_code = 'r' + resultId.toString().padStart(2, 0);
    setResultCode(result_code);

    // [API]
    window.infoReg(userInfo, result_code);

    setViewState(2);
    setResultData(resultJsonArray[resultId - 1]);
  }

  function signup() {

    if(userInfo.userno > 0) {
      alert('이미 가입되어 있는 회원입니다.');
    } else {
      // [API]
      window.signupCnt(userInfo.code);
      const joinLink = isMobile ? '/mw/member/join_agree.do' : '/member/join_agree.do';
      window.open(joinLink);
    }
  }

  function callSnsExtern(type) {

    // [API]
    window.snsCnt(type, resultCode);
  }

  let introImg;
  if(isMobile) 
    introImg = <img className="intro_img" src="/imgs/promotion/mbti/mbti_intro_m.png" alt="mbti image" />
  else 
    introImg = <img className="intro_img" src="/imgs/promotion/mbti/mbti_intro.svg" alt="mbti image" />

  return (
    <>
    {/* <div className="member_header">
        <a href="/">메인으로</a>
    </div> */}

    <div className="wrapper-mbti">
      {/* <!-- intro 페이지 .active로 활성화 --> */}
        {viewState === 0 &&
        <div className="util_wrap agree step_wrap step_intro active">
            <animated.div className="util_top" style={{...fadeStyles}}>
                {introImg}
                <div className="title font-56 font font-supersize color-222 font-bold">나와 <span className="font color-purple">찰떡궁합</span>인 <br />
                    장난감은?</div>
            </animated.div>
            <animated.div className="join_middle" style={{...fadeStyles2}}>
                <p className="text font font-13 color-555">BNKR 몰에서 길 잃은 당신을 위해! 나와 찰떡궁합 상품은 <br />
                    무엇이 있을까? <span className="font font-bold">취향 테스트 GO GO!</span></p>
            </animated.div>

            <animated.div className="box_verity" style={{...fadeStyles3}}>
                <div id="requestCertifyNc" className="type_btn submit_btn">
                    <a href="#" className="btn btn-box color-purple hovNone" onClick={
                      (e) => {
                        setViewState(viewState + 1)
                        setTimeout(()=>{
                          setCurrentQuestion(getViewData(1))
                        }, 0)
                        e.preventDefault()
                      }}>START</a>
                </div>
            </animated.div>
        </div>
        }

        {/* <!-- intro에서 question으로 넘어오면 .progress_wrap.active / .step_question.active 로 활성화--> */}
        {viewState === 1 && currentQuestion &&
        <>
        <div className="progress_wrap active">
            <div className="progress_top">
                <p className="font font-14 font-medium">나와 <span className="font color-purple">찰떡궁합</span>인 장난감은?</p>
                <p className="font font-14 font-medium"><span className="crnt_step">0{progress}</span>/04</p>
            </div>
            <div className="progress_box">
                <div className="progress_bar" style={{width: (progress * 25)+'%', transition: 'all 0.4s'}}></div>
            </div>
        </div>
        <div className="step_wrap step_questions active">
            <div className="question_wrap">
                <div className="q_numb font color-white font-12 font-bold">{currentQuestion.qTit}</div>
                <p className="question font font-18 font-bold">
                  {currentQuestion.qDesc.split('\n').map(line => {
                      return (<>{line}<br/></>)
                    })
                  }
                </p>
            </div>
            <div className="answer_wrap">
            {trail.map(({y, ...styles}, index) => (  
              
              <animated.button key={index.toString()} className="answer font font-14 font-medium color-purple border-rad-4"
                style={{
                  ...styles,
                  transform: y.interpolate(y => `translate3d(0,${y}px,0)`)
                }}
                onClick={() => {
                  if(currentQuestion.links[index].next)
                    setCurrentQuestion(getViewData(currentQuestion.links[index].next));
                  else {
                    // console.log(currentQuestion.links[index].result)
                    setResult(currentQuestion.links[index].result);
                  }
                }}>
                  {currentQuestion.links[index].nextTxt}
                </animated.button>
                
            ))}
            </div>
        </div>
        </>
        }

        {/* <!-- 결과페이지 .active로 활성화 --> */}
        {viewState === 2 && resultData &&
        <>
        <div className={`step_wrap step_result active ${resultData.pdRoot === 'ichiban' ? 'res_ichiban' : ''}`}>
            <div className="res_top">
                <animated.p className="font font-medium" style={fadeStyles}>나와 찰떡궁합은?</animated.p>
                <animated.h4 className="font font-supersize font-26 color-purple mgt10" style={fadeStyles2}>“ <span className="res_type">{resultData.resTit}</span> ”</animated.h4>
                
                <animated.p className="type_desc font font-14" dangerouslySetInnerHTML={{ __html: resultData.desc}}  style={fadeStyles3}/>
                  
            </div>

            <div className="res_mid result_product">
                <animated.div className="tit_wrap" style={{...fadeStyles4, textAlign: 'center'}}>
                  <img src="/imgs/promotion/mbti/res_line_top.svg" alt="" />
                  <h5 className="pd_tit font font-16 font-bold">
                    {resultData.pdRoot === 'ichiban' ?
                    <>이치방쿠지란?</>:
                    <>{resultData.fullName}의 대표상품</>
                    }
                  </h5>
                </animated.div>
                
                <ul className="pd_list">

                {trailRecommend.map(({y, ...styles}, index) => (
                  <animated.li key={index.toString()} className="pd_item"
                  style={{
                    ...styles,
                    transform: y.to(y => `translate3d(0,${y}px,0)`)
                  }}
                  >
                    <img className="item_img" src={process.env.PUBLIC_URL + `/imgs/promotion/mbti/${resultData.pdRoot}/${index + 1}.jpg`} alt="" />
                    <p className="item_tit font font-13" dangerouslySetInnerHTML={{ __html: resultData.pdTitle[index]}} />
                  </animated.li>
                ))}
                
                    {/* {resultData.pdTitle.map((title, idx) => (
                      <li className="pd_item" key={title}>
                        <img className="item_img" src={process.env.PUBLIC_URL + `/imgs/promotion/mbti/${resultData.pdRoot}/${idx + 1}.jpg`} alt="" />
                        <p className="item_tit font font-13" dangerouslySetInnerHTML={{ __html: title}} />
                      </li>  
                    ))} */}

                </ul>
                <animated.img style={{...fadeStyles4}} src="/imgs/promotion/mbti/res_line_bottom.svg" alt="" />
            </div>
            
            <animated.div className="res_bottom" style={fadeStyles5}>
                <div className="btn_res_wrap">
                    <div className="type_btn submit_btn">
                        <a href={isMobile ? resultData.linkM : resultData.link} className="btn btn-box color-purple border-rad-4 no_pd" target="_blank">
                        {resultData.pdRoot === 'ichiban' ? <>{resultData.fullName}</>
                        :
                          <>더 많은 <span className="res_type">{resultData.resTit}</span> 상품 보러가기</>
                        }
                        </a>
                        {
                          resultData.pdRoot !== 'ichiban' && 
                          <a href="#" className="btn btn-box color-purple btn_ico member_join border-rad-4" onClick={(e) => { signup(); e.preventDefault(); e.stopPropagation(); }}><span className="ico"></span><span>회원가입 바로가기</span></a>
                        }
                        <a href="#" className="btn btn-box color-purple btn_ico test_again border-rad-4" 
                          onClick={(e) => { 
                            window.location.href = isMobile ? '/mw/promotion/promotion.do?code=p01' : '/promotion/promotion.do?code=p01';
                            e.preventDefault(); 
                            e.stopPropagation(); }}
                        ><span className="ico"></span><span>테스트 다시하기</span></a>
                    </div>
                </div>
                <div className="share_wrap">
                    <p className="font font-14 font-medium">친구에게 공유하기</p>
                    <div className="sns_wrap">
                        <div className="sns kakao">
                            <img className="sns_img" src="/imgs/promotion/mbti/ico-kakao.png" alt="" />
                            {/* <input type="button" value="카카오톡" onClick={() => window.snsCnt('kakaotalk', resultcode)} /> */}
                            <input type="button" value="카카오톡" className="commonNone" onClick={() => callSnsExtern('kakaotalk')} />
                        </div>
                        <div className="sns insta">
                            <img className="sns_img" src="/imgs/promotion/mbti/ico-facebook.svg" alt="" />
                            <input type="button" value="페이스북" className="commonNone" onClick={() => callSnsExtern('facebook')} />
                        </div>
                        <div className="sns link">
                            <img className="sns_img" src="/imgs/promotion/mbti/ico-link.svg" alt="" />
                            <input type="text" id ="shareUrl" className="commonNone"/><input type="button" value="URL" className='commonNone' onClick={() => window.copyUrlToClipboard(resultCode)} />
                        </div>
                    </div>
                </div>
            </animated.div>
        </div>
        </>
        }
      </div>
    </>
  );
}

export default App;
