'use client'

import { useState } from 'react'
import { ArrowUpRight, Cat, Check, Coffee, ConciergeBell, MapPin, MessageCircle, PawPrint, Sparkles, Stethoscope, Utensils, X } from 'lucide-react'

const cats = [
  ['01', '冬近月', '撒嬌黏人', '喜歡靠在身邊，用呼嚕交換摸摸。'],
  ['02', '小月', '撒嬌黏人', '會主動湊近觀察每一位新客人。'],
  ['03', '墨丸', '搗蛋', '小心你的袖口，牠可能已經盯上了。'],
  ['04', '茶茶', '高冷', '適合一起度過安靜午後的可靠夥伴。'],
  ['05', '灰燼', '高冷', '是否營業，取決於牠今天想不想睜眼。'],
  ['06', '露露', '撒嬌黏人', '請放慢腳步，讓牠自己決定距離。'],
  ['07', '疾風', '搗蛋', '撲、抓、追逐，都是牠的打招呼方式。'],
  ['08', '金幣', '貪吃', '聽到小魚乾就會從店裡任何角落現身。'],
  ['09', '霜星', '傲嬌', '表面不在意，其實默默記住了你。'],
  ['10', '棉花', '撒嬌黏人', '溫暖的體溫與緩慢的呼嚕是招牌。'],
  ['11', '跳跳', '搗蛋', '最擅長把陌生客人變成同伴。'],
  ['12', '夜巡', '高冷', '安靜地守在角落，等待有緣的客人。'],
]

const menuGroups = [
  { title: '入場方案', icon: Utensils, items: [['入場方案', '當日套餐：甜點 + 飲料，內容每日更換', '3w']] },
  { title: '貓咪互動道具', icon: Sparkles, items: [['小魚乾', '純餵食', '1w'], ['貓條', '純餵食', '3w'], ['貓咪交響樂', '貓咪會在你身旁大聲鳴叫，音量與時長依貓咪心情而定。｜購買後獲得一張貓爪信物卡，交給任一在場貓咪即可兌換', '10w'], ['特殊服務', '每隻貓咪內容不同，請洽現場說明。｜購買後獲得一張貓爪信物卡，交給任一在場貓咪即可兌換', '30w']] },
  { title: '周邊商品・隨機款', icon: Sparkles, items: [['隨機貓咪照', '', '5w'], ['隨機貓咪簽名照', '簽名僅部分貓咪有提供', '15w']] },
  { title: '周邊商品・現場拍攝', icon: MessageCircle, items: [['拍立得現場合影', '', '10w'], ['現場合影 + 簽名', '簽名僅部分貓咪有提供', '30w']] },
]

const personalityTags = ['全部', '撒嬌黏人', '傲嬌', '高冷', '貪吃', '搗蛋']

export default function Page() {
  const [activeTag, setActiveTag] = useState('全部')
  const [selectedCat, setSelectedCat] = useState<(typeof cats)[number] | null>(null)
  const visibleCats = activeTag === '全部' ? cats : cats.filter(([, , personality]) => personality === activeTag)

  return (
    <main className="site-shell">
      <nav className="topbar" aria-label="主要導覽">
        <a href="#top" className="brand"><span className="brand-mark"><Cat size={19} /></span><span>月下喵舍</span></a>
        <div className="nav-links"><a href="#about">關於店內</a><a href="#cats">貓咪名冊</a><a href="#menu">菜單與價目</a></div>
        <a className="nav-cta" href="https://discord.gg/u3mV7mMDXP" target="_blank" rel="noreferrer">加入 Discord <ArrowUpRight size={15} /></a>
      </nav>

      <section className="hero" id="top">
        <div className="hero-copy">
          <p className="eyebrow"><span className="eyebrow-line" /> EORZEA · CAT RP LOUNGE</p>
          <h1>讓貓咪<br /><em>選擇</em>你。</h1>
          <p className="hero-desc">一間沒有指名服務的貓咪 RP 店。<br />今天遇見誰，就把時間留給誰。</p>
          <div className="hero-actions"><a href="#menu" className="button button-dark">查看入場方案 <ArrowUpRight size={16} /></a><a href="#cats" className="text-link">認識 12 隻貓咪 <ArrowUpRight size={14} /></a></div>
        </div>
        <div className="hero-visual" aria-label="貓咪店內插畫區域">
          <div className="orbit orbit-one" /><div className="orbit orbit-two" /><div className="cat-silhouette"><Cat size={182} strokeWidth={1.1} /></div>
          <div className="float-note note-one"><span>12</span><small>隻貓咪</small></div><div className="float-note note-two"><span>RP</span><small>互動式體驗</small></div>
          <div className="stamp">EST.<br /><strong>∞</strong><br />KITTENS</div>
        </div>
      </section>

      <section className="intro section" id="about"><div className="section-label">01 / INSIDE THE HOUSE</div><div className="intro-grid"><div><h2>每一個角落，<br /><em>都有一種相遇。</em></h2></div><div className="intro-copy"><p>我們把店內分成四個區域，讓每種性格的貓咪，都有舒服自在的舞台。</p></div></div>
        <div className="room-grid" id="rooms"><article className="room-card room-counter"><span className="room-number">01</span><div className="room-icon"><ConciergeBell size={22} /></div><h3>櫃台</h3><p>報到、入場與今日菜單，從這裡開始你的貓咪邂逅。</p><small>想加購道具或周邊，也是來這裡找我們就對了。</small></article><article className="room-card room-play"><span className="room-number">02</span><div className="room-icon"><PawPrint size={22} /></div><h3>玩樂區</h3><p>活潑貓咪的聚集地。互動感強烈，撲、抓、追逐都可能發生。</p><small>這裡玩得比較野，踏進來前先做好被撲一下的心理準備喔。</small></article><article className="room-card room-tea"><span className="room-number">03</span><div className="room-icon"><Coffee size={22} /></div><h3>喝茶區</h3><p>性格溫和、不會主動攻擊的貓咪所在。安靜喝茶、聊天，或單純被療癒。</p><small>放心坐下吧，這裡的貓咪只想蹭蹭你、討摸摸。</small></article><article className="room-card room-med"><span className="room-number">04</span><div className="room-icon"><Stethoscope size={22} /></div><h3>醫護站</h3><p>為客人處理貓咪互動造成的傷口，也是街貓族結紮絕育的作業區。</p><small>這裡需要安靜恢復，謝謝你放輕腳步。</small></article></div>
      </section>

      <section className="cats-section section" id="cats"><div className="section-heading"><div><div className="section-label">02 / THE CATS</div><h2>今天，誰會坐在<br /><em>你的身邊？</em></h2></div><p>店內共有 12 隻貓咪。<br />沒有指名服務，一切交給命運與貓咪心情。</p></div><div className="tag-intro"><div className="tag-intro-heading"><span className="tag-intro-badge">標籤介紹</span><span>用性格，找到今晚適合你的相遇。</span></div><div className="tag-intro-grid"><div><strong>撒嬌黏人</strong><p>喜歡窩在你手邊，摸久了會發出呼嚕聲，多待在喝茶區。</p></div><div><strong>傲嬌</strong><p>嘴上嫌你煩，尾巴卻誠實地繞著你的手，偶爾會輕輕咬一口。</p></div><div><strong>高冷</strong><p>不太主動，但願意讓你靜靜坐在旁邊，是需要耐心的類型。</p></div><div><strong>貪吃</strong><p>看到貓條就衝過來，是最容易被貓用品吸引的類型。</p></div><div><strong>搗蛋</strong><p>偶爾會抓一下、咬一下純屬玩鬧，多待在玩樂區，互動最有隨機感。</p></div></div></div><div className="tag-filter" aria-label="依性格篩選貓咪"><span className="tag-filter-title">篩選貓咪</span>{personalityTags.map((tag) => <button type="button" className={activeTag === tag ? 'active' : ''} onClick={() => setActiveTag(tag)} key={tag}>{tag}</button>)}</div><div className="cat-grid">{visibleCats.map(([number, name, personality, desc]) => <button type="button" className="cat-card" key={number} onClick={() => setSelectedCat([number, name, personality, desc])}><img src="/cat-wintermoon.png" alt={`${name}的照片`} className="cat-photo" /><div><span className={`tag tag-${personality === '搗蛋' ? 'play' : personality === '貪吃' ? 'food' : personality === '高冷' || personality === '傲嬌' ? 'cool' : 'cling'}`}>{personality}</span><h3>{name}</h3><p>{desc}</p></div></button>)}</div></section>

      <section className="menu-section section" id="menu"><div className="menu-header"><div className="section-label light-label">03 / TODAY'S OFFERINGS</div><h2>菜單與<br /><em>消費項目</em></h2><p>所有價格以 RP 貨幣計算。內容與供應狀況以現場公告為準。</p></div><div className="menu-list">{menuGroups.map(({ title, icon: Icon, items }) => <div className="menu-group" key={title}><div className="menu-group-title"><div className="menu-icon"><Icon size={19} /></div><h3>{title}</h3></div>{items.map(([itemTitle, desc, price]) => <div className="menu-item" key={itemTitle}><div className="menu-name"><h3>{itemTitle}</h3>{desc && <p>{desc.split('｜').map((line, index) => <span className={index === 1 ? 'menu-note' : ''} key={line}>{line}</span>)}</p>}</div><strong>{price}</strong></div>)}</div>)}</div></section>

      <section className="rules section"><div className="rules-copy"><div className="section-label">04 / CAT BEHAVIOR & RULES</div><h2>先讀懂貓咪，<br /><em>再開始相處。</em></h2><p>每隻貓咪都有自己的情緒與界線。請先了解可能發生的互動，再享受今晚的相遇。</p></div><div className="rules-panels"><div className="rules-panel rules-behavior"><h3>貓咪可能觸發的行為</h3><div className="rules-list"><div><Check size={17} /><span>玩樂區的貓咪可能會撲抓、輕咬，強度依當下心情而定。</span></div><div><Check size={17} /><span>喝茶區多為蹭人、討摸、趴坐在旁，幾乎不主動攻擊。</span></div><div><Check size={17} /><span>部分貓咪對特定道具或動作會有更明顯的反應，例如聽到大叫聲會跟著吼。</span></div><div><Check size={17} /><span>醫護站的貓咪多半安靜，偶爾會對陌生人保持觀察距離。</span></div></div></div><div className="rules-panel rules-notice"><h3>客人需遵守事項</h3><div className="rules-list"><div><Check size={17} /><span>進入玩樂區視為理解並接受被抓咬的可能性，請勿於事後究責店員。</span></div><div><Check size={17} /><span>禁止強迫貓咪互動、追逐拉扯尾巴或耳朵。</span></div><div><Check size={17} /><span>店員引導離開特定區域時請配合，通常代表貓咪需要休息。</span></div><div><Check size={17} /><span>貴重物品請隨身保管，本店不負責保管責任。</span></div><div><Check size={17} /><span>如身體不適或受傷，請立即前往醫護站或告知櫃台。</span></div></div></div></div></section>

      <footer className="footer"><div className="footer-brand"><span className="brand-mark"><Cat size={19} /></span><div><strong>月下喵舍</strong><small>FF14 · CAT RP LOUNGE</small></div></div><div className="footer-note"><MapPin size={16} /><span>營業時間、店址與最新公告<br /><b>請加入 Discord 查看</b></span></div><a className="discord-button" href="https://discord.gg/u3mV7mMDXP" target="_blank" rel="noreferrer"><MessageCircle size={17} /> discord.gg/u3mV7mMDXP</a></footer>
      {selectedCat && <div className="cat-modal-backdrop" role="presentation" onClick={() => setSelectedCat(null)}><article className="cat-modal" role="dialog" aria-modal="true" aria-label={`${selectedCat[1]}詳細介紹`} onClick={(event) => event.stopPropagation()}><button type="button" className="modal-close" onClick={() => setSelectedCat(null)} aria-label="關閉介紹"><X size={20} /></button><img src="/cat-wintermoon.png" alt={`${selectedCat[1]}的大頭照`} /><div><h2>{selectedCat[1]}</h2><span className="tag tag-cling">{selectedCat[2]}</span><p><strong>個性：</strong>{selectedCat[3]}</p><p><strong>喜好：</strong>喜歡溫柔的互動、窗邊的月光與剛好的距離。</p><p><strong>一句話：</strong>今天也請讓牠決定相遇的方式。</p></div></article></div>}
    </main>
  )
}
