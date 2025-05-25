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
          <p style={{ fontSize: '16px', color: '#555', maxWidth: '600px', margin: '0 auto' }}>
            藝術家 莊志輝 擅長以獨特的視角捕捉生活的細節，並透過創作表達情感與故事。
            他的作品融合了現代與傳統元素，深受觀眾喜愛。
          </p>
        </div>

        {/* 推薦內容 */}
        <div style={{ marginTop: '50px', textAlign: 'center' }}>
          <h3>推薦內容</h3>
          <div className="df jc-c fl-wp">
            <a style={{ width: '400px', height:"400px",margin: '10px', display:"block", overflow:"hidden"}} href='https://www.asiafitnesstoday.com/in-the-mind-of-artist-chih-hui-chuang-taiwan/'>
                <img src="https://live.staticflickr.com/65535/54442861734_8986536930.jpg" alt="image" style={{height:"80%"}}/>
                {/* <iframe
                    width="360"
                    height="202.5" 
                    src="https://www.youtube.com/embed/aSooyTSjAh8?si=hTkTh6XpSOuULDdd"
                    title="YouTube video player"
                    frameborder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
                    referrerpolicy="strict-origin-when-cross-origin" 
                    allowfullscreen>
                </iframe> */}
              <p>作品名稱：光影之舞</p>
            </a>
            <a style={{ width: '400px', height:"400px",margin: '10px', display:"block", overflow:"hidden" }} href='https://news.ltn.com.tw/news/life/breakingnews/1549408'>
                <img src="https://img.ltn.com.tw/Upload/news/600/2015/12/23/1549408_3.jpg" alt="image" style={{height:"80%"}}/>
                {/* <iframe 
                    width="360" 
                    height="202.5" 
                    src="https://www.youtube.com/embed/ObYXbaKtgz8?si=9x2Aj8_MIgL9hMk7"
                    title="YouTube video player"
                    frameborder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                    referrerpolicy="strict-origin-when-cross-origin"
                    allowfullscreen>
                </iframe> */}
              <p>作品名稱：記憶的碎片</p>
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