import React from 'react'
import '../css/homevideo.css'

const Homevideo = () => {
  return (
    <div className="">

        {/* 紀錄片 */}
        <div className='df fd-c aln-itm-c Container'>
            <h2 className='videoTitle'>紀錄片：創作背後的故事</h2>
            <p className='videoBrief'>
              這部紀錄片展示了藝術家創作過程中的靈感與故事，讓觀眾更深入了解每件作品背後的意義。
            </p>
            <iframe
                // width="800"
                // height="450"
                src="https://www.youtube.com/embed/aSooyTSjAh8?si=ipN_XdFP10r0U-gH"
                title="YouTube video player"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                referrerPolicy="strict-origin-when-cross-origin"
                allowFullScreen
            ></iframe>
        </div>

        <hr style={{ margin: '40px 0', borderColor: '#ccc' }} />

        <div style={{ marginTop: '30px', textAlign: 'center' }}>
          <h3 className='mg-b-10'>關於藝術家</h3>
          <p style={{ lineHeight: '3', fontSize: '16px', color: '#555', maxWidth: '600px', margin: '0 auto' }}>
            我的作品<br/>
            起草創作 像要誕生的嬰兒<br/>
            創作時 像充滿慾望的青少年<br/>
            完成時 宛如追求完美的中年<br/>
            展出時 如同過往的先人<br/>
            讓人品頭論足<br/>
            人總是在八卦是非中<br/>
            找尋一點自性的空間
          </p>
        </div>

        {/* 推薦內容 */}
        <div style={{ marginTop: '50px', textAlign: 'center' }}>
          <h3 className='mg-b-20'>推薦內容</h3>
          <div className="df jc-c fl-wp">
            <a
              href='/critics/1'
              target="_blank"
              style={{ width: '400px', height:"400px",margin: '10px', display:"block", overflow:"hidden"}}
              >
                <img src="https://live.staticflickr.com/65535/54442665986_788ceb4ff6_w.jpg" alt="image" style={{height:"80%"}}/>
                <p>從外在進入內心，認識本我，自身蛻變：路徑是階梯</p>
            </a>
            <a
              href='/critics/2'
              target="_blank"
              style={{ width: '400px', height:"400px",margin: '10px', display:"block", overflow:"hidden" }}
            >
                <img src="https://live.staticflickr.com/65535/54441809002_a7757e2ef7.jpg" alt="image" style={{height:"80%"}}/>
                <p>風・海・記憶──莊志輝的藝術創作</p>
            </a>
          </div>
        </div>

        <div style={{ textAlign: 'center', marginTop: '20px' }}>
          <p>想了解更多？查看以下資源：</p>
          <ul className='' style={{ listStyleType: 'none', padding: 0 }}>
            <li>
              <a href="https://maps.app.goo.gl/A4tttWxRBfXKYTRf8" target="_blank" rel="noopener noreferrer" className='dib pd-10'>
                新竹市東區學府路19號
              </a>
            </li>
            <li>
              <a href="https://www.facebook.com/search/top/?q=%E8%8E%8A%E5%BF%97%E8%BC%9D%E8%97%9D%E8%A1%93%E5%89%B5%E4%BD%9C%E5%B7%A5%E4%BD%9C%E5%AE%A4" target="_blank" rel="noopener noreferrer">
                莊志輝藝術創作工作室
              </a>
            </li>
          </ul>
        </div>
      </div>
  )
}

export default Homevideo