import React from 'react'
import { useParams } from 'react-router'
import critics from '../datas/critics.json'
import criticsContent1 from '../datas/criticsContent/text01.json'
import criticsContent2 from '../datas/criticsContent/text02.json'
import criticsContent3 from '../datas/criticsContent/text03.json'
import criticsContent4 from '../datas/criticsContent/text04.json'
import criticsContent5 from '../datas/criticsContent/text05.json'
import criticsContent6 from '../datas/criticsContent/text06.json'

import { Critics1, Critics2, Critics3, Critics4, Critics5, Critics6, Critics7, Critics8 } from './critics/index-critics'
import '../css/criticsArticle.css'


// 適用每個json檔案中的格式都統一，但比較麻煩，客製化程度低
const PaternCritics = () => {
    const { CriticsItem } = useParams()
    
    // 根據 CriticsItem 選擇對應的 criticsContent
    const criticsContent = 
    CriticsItem === '1' ? criticsContent1 :
    CriticsItem === '2' ? criticsContent2 :
    CriticsItem === '3' ? criticsContent3 :
    CriticsItem === '4' ? criticsContent4 :
    CriticsItem === '5' ? criticsContent5 :
    CriticsItem === '6' ? criticsContent6 : [];

    const criticsTitleRender = (criticId) => (
        critics.filter((critic) => criticId===critic.id)
        .map((item, index) => (
            <div className='bd-b mg-b-30 df jc-sb aln-itm-fe' key={index}>
                <h2 className=''>{item.title}</h2>
                <h4>{item.position} {item.author} {item.year}</h4>
            </div>
        ))
    )
    
    const criticsRender = criticsContent.map((critic, index) => {

        const contentRender = criticsContent.map((criticContent, criticIndex) => {

            const topicRender = criticContent.topic.map((topic, topicIndex) => {
                return(
                    <h4 key={topicIndex} className='fw-b' style={{color:'#000'}}>{topic}</h4>
                )
            })

            const paragraphRender = criticContent.content.map((paragraph, paragraphInex) => {
                return(
                    <h4 key={paragraphInex} className='mg-b-10' style={{color:'#000', fontWeight:'200'}}>{paragraph}</h4>
                )
            })

            return(
                <div key={criticIndex} style={{marginBottom:'40px'}}>
                    <div className='mg-b-20'>
                        {topicRender}
                    </div>
                    <div>
                        {paragraphRender}
                    </div>
                </div>
            )

        }) 

        if( critic.id == CriticsItem ){
            return(
                <div key={`${index}`}>
                    {criticsTitleRender(critic.id)}
                    {contentRender}
                </div>
            )
        }
    })


    return (
        <div className='Container'>
            {criticsRender}
        </div>
    )
}


// 適用於客製化每個頁面
const CriticsContent = () => {
    const { CriticsItem } = useParams()

      // 建立映射表
      const criticsMapping = {
        '1': Critics1,
        '2': Critics2,
        '3': Critics3,
        '4': Critics4,
        '5': Critics5,
        '6': Critics6,
        '7': Critics7,
        '8': Critics8
    };

    // 根據 CriticsItem 從映射表中取出對應的內容
    const mappedCriticsItemNumber = parseInt(CriticsItem, 10);
    const MappedCritics = criticsMapping[mappedCriticsItemNumber];
    console.log(MappedCritics)

    return (
        <div className='Container'>
            {MappedCritics ? <MappedCritics/> : <h2>No Item found.</h2>}
        </div>
    )
}

export default CriticsContent