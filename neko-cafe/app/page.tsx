'use client'

import { useState } from 'react'
import { ArrowUpRight, Camera, Cat, Check, Coffee, ConciergeBell, PawPrint, Sparkles, Stethoscope, Syringe, Utensils, X } from 'lucide-react'

const DiscordIcon = ({ size = 20 }: { size?: number }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
    <path d="M20.317 4.3698a19.7913 19.7913 0 00-4.8851-1.5152.0741.0741 0 00-.0785.0371c-.211.3753-.4447.8648-.6083 1.2495-1.8447-.2762-3.68-.2762-5.4868 0-.1636-.3933-.4058-.8742-.6177-1.2495a.077.077 0 00-.0785-.037 19.7363 19.7363 0 00-4.8852 1.515.0699.0699 0 00-.0321.0277C.5334 9.0458-.319 13.5799.0992 18.0578a.0824.0824 0 00.0312.0561c2.0528 1.5076 4.0413 2.4228 5.9929 3.0294a.0777.0777 0 00.0842-.0276c.4616-.6304.8731-1.2952 1.226-1.9942a.076.076 0 00-.0416-.1057c-.6528-.2476-1.2743-.5495-1.8722-.8923a.077.077 0 01-.0076-.1277c.1258-.0943.2517-.1923.3718-.2914a.0743.0743 0 01.0776-.0105c3.9278 1.7933 8.18 1.7933 12.0614 0a.0739.0739 0 01.0785.0095c.1202.099.246.1981.3728.2924a.077.077 0 01-.0066.1276 12.2986 12.2986 0 01-1.873.8914.0766.0766 0 00-.0407.1067c.3604.698.7719 1.3628 1.225 1.9932a.076.076 0 00.0842.0286c1.961-.6067 3.9495-1.522 6.0023-3.0294a.077.077 0 00.0313-.0552c.5004-5.177-.8382-9.6739-3.5485-13.6604a.061.061 0 00-.0312-.0286zM8.02 15.3312c-1.1825 0-2.1569-1.0857-2.1569-2.419 0-1.3332.9555-2.4189 2.1569-2.4189 1.2108 0 2.1757 1.0952 2.1568 2.419 0 1.3332-.956 2.419-2.1568 2.419zm7.9748 0c-1.1825 0-2.1569-1.0857-2.1569-2.419 0-1.3332.9554-2.4189 2.1569-2.4189 1.2108 0 2.1757 1.0952 2.1568 2.419 0 1.3332-.946 2.419-2.1568 2.419z" />
  </svg>
)

const cats = [
  ['01', '冬近月', '撒嬌', '喜歡靠在身邊，用呼嚕交換摸摸。'],
  ['02', '敬請期待', '高冷', '詳細介紹即將公開，敬請期待。'],
  ['03', '敬請期待', '調皮', '詳細介紹即將公開，敬請期待。'],
  ['04', '敬請期待', '貪吃', '詳細介紹即將公開，敬請期待。'],
  ['05', '敬請期待', '療癒', '詳細介紹即將公開，敬請期待。'],
  ['06', '敬請期待', '慵懶', '詳細介紹即將公開，敬請期待。'],
  ['07', '敬請期待', '好奇', '詳細介紹即將公開，敬請期待。'],
  ['08', '敬請期待', '傲嬌', '詳細介紹即將公開，敬請期待。'],
  ['09', '敬請期待', '健談', '詳細介紹即將公開，敬請期待。'],
  ['10', '敬請期待', '撒嬌', '詳細介紹即將公開，敬請期待。'],
  ['11', '敬請期待', '調皮', '詳細介紹即將公開，敬請期待。'],
  ['12', '敬請期待', '貪吃', '詳細介紹即將公開，敬請期待。'],
]

const menuGroups = [
  { title: '本日套餐', icon: Utensils, items: [['本日套餐', '甜點 + 飲料，內容每日更換', '30,000 Gil']] },
  { title: '貓咪互動道具', icon: Sparkles, items: [['小魚乾', '純餵食', '30,000 Gil'], ['貓咪交響樂', '貓咪會在你身旁大聲鳴叫，音量與時長依貓咪心情而定。｜購買後獲得一張貓爪信物卡，交給任一在場貓咪即可兌換', '100,000 Gil'], ['特殊服務', '每隻貓咪內容不同，請洽現場說明。｜購買後獲得一張貓爪信物卡，交給任一在場貓咪即可兌換', '300,000 Gil']] },
  { title: '醫護站服務', icon: Syringe, items: [['傷口包紮', '被貓咪抓咬弄傷了嗎？來這裡讓我們細心包紮，順便附上一句安慰。', '50,000 Gil'], ['喵喵健康針', '可愛版健康針劑，守護你今晚不生病，還會附贈一張逗趣貼紙。｜購買後獲得一張貓爪信物卡，交給任一在場貓咪即可兌換', '100,000 Gil']] },
  { title: '周邊商品・現場拍攝', icon: Camera, note: '取照方式：於 Discord 群內領取照片。若不希望照片公開於群內，請提前告知攝影的店員。', items: [['貓咪合影', '', '300,000 Gil']] },
]

const personalityDetails = [
  { tag: '全部', desc: '查看店內全部 12 隻貓咪，讓緣分自己決定。', icon: '/tag-quanbu.png' },
  { tag: '撒嬌', desc: '喜歡窩在你手邊，摸久了會發出呼嚕聲，是最容易黏上你的類型。', icon: '/tag-sajiao.png' },
  { tag: '高冷', desc: '不太主動，但願意讓你靜靜坐在旁邊，是需要耐心的類型。', icon: '/tag-gaoleng.png' },
  { tag: '調皮', desc: '偶爾會抓一下、咬一下純屬玩鬧，互動最有隨機感的一群。', icon: '/tag-tiaopi.png' },
  { tag: '貪吃', desc: '看到貓條就衝過來，是最容易被貓用品吸引的類型。', icon: '/tag-tanchi.png' },
  { tag: '療癒', desc: '安靜地陪在你身邊，光是存在就很有治癒感。', icon: '/tag-liaoyu.png' },
  { tag: '慵懶', desc: '大部分時間都在打盹，偶爾抬頭看你一眼又睡著了。', icon: '/tag-yonglan.png' },
  { tag: '好奇', desc: '對任何新奇的東西都充滿興趣，可能會一直盯著你的隨身物品。', icon: '/tag-haoqi.png' },
  { tag: '傲嬌', desc: '嘴上嫌你煩，尾巴卻誠實地繞著你的手，偶爾會輕輕咬一口。', icon: '/tag-aojiao.png' },
  { tag: '健談', desc: '很愛用叫聲跟你「聊天」，彷彿在回應你說的每一句話。', icon: '/tag-jiantan.png' },
]

const personalityTagClass = {
  撒嬌: 'cling',
  高冷: 'cool',
  調皮: 'play',
  貪吃: 'food',
  療癒: 'heal',
  慵懶: 'lazy',
  好奇: 'curious',
  傲嬌: 'cool',
  健談: 'chatty',
}

export default function Page() {
  const [activeTag, setActiveTag] = useState('全部')
  const [selectedCat, setSelectedCat] = useState<(typeof cats)[number] | null>(null)
  const visibleCats = activeTag === '全部' ? cats : cats.filter(([, , personality]) => personality === activeTag)

  return (
    <main className="site-shell">
      <nav className="topbar" aria-label="主要導覽">
        <a href="#top" className="brand"><span className="brand-mark"><Cat size={19} /></span><span>貓尾草</span></a>
        <div className="nav-links"><a href="#about">關於店內</a><a href="#cats">貓咪名冊</a><a href="#menu">菜單與價目</a></div>
        <a className="nav-cta" href="https://discord.gg/u3mV7mMDXP" target="_blank" rel="noreferrer">加入 Discord <ArrowUpRight size={15} /></a>
      </nav>

      <section className="hero" id="top">
        <div className="hero-copy">
          <p className="eyebrow"><span className="eyebrow-line" /> EORZEA · CAT RP LOUNGE</p>
          <h1>讓貓咪<br /><em>選擇</em>你。</h1>
          <p className="hero-desc">一間沒有指名服務的貓咪 RP 店。<br />今天遇見誰，就把時間留給誰。</p>
          <div className="hero-actions"><a href="#menu" className="button button-dark">查看菜單與消費項目 <ArrowUpRight size={16} /></a><a href="#cats" className="text-link">認識 12 隻貓咪 <ArrowUpRight size={14} /></a></div>
        </div>
        <div className="hero-visual" aria-label="貓咪店內插畫區域">
          <div className="orbit orbit-one" /><div className="orbit orbit-two" /><div className="cat-silhouette"><Cat size={182} strokeWidth={1.1} /></div>
          <div className="float-note note-one"><span>12</span><small>隻貓咪</small></div><div className="float-note note-two"><span>RP</span><small>互動式體驗</small></div>
          <div className="stamp">EST.<br /><strong>∞</strong><br />KITTENS</div>
        </div>
      </section>

      <section className="intro section" id="about"><div className="section-label">01 / INSIDE THE HOUSE</div><div className="intro-grid"><div><h2>每一個角落，<br /><em>都有一種相遇。</em></h2></div><div className="intro-copy"><p>我們把店內分成四個區域，讓每種性格的貓咪，都有舒服自在的舞台。</p></div></div>
        <div className="room-grid" id="rooms"><article className="room-card room-counter"><span className="room-number">01</span><div className="room-icon"><ConciergeBell size={22} /></div><h3>櫃台</h3><p>報到、入場與今日菜單，從這裡開始你的貓咪邂逅。</p><small>想加購道具或周邊，也是來這裡找我們就對了。</small></article><article className="room-card room-play"><span className="room-number">02</span><div className="room-icon"><PawPrint size={22} /></div><h3>玩樂區</h3><p>活潑貓咪的聚集地。互動感強烈，撲、抓、追逐都可能發生。</p><small>這裡玩得比較野，踏進來前先做好心理準備喔。</small></article><article className="room-card room-tea"><span className="room-number">03</span><div className="room-icon"><Coffee size={22} /></div><h3>喝茶區</h3><p>性格溫和、不會主動攻擊的貓咪所在。安靜喝茶、聊天，或單純被療癒。</p><small>放心坐下吧，這裡的貓咪只想蹭蹭你、討摸摸。</small></article><article className="room-card room-med"><span className="room-number">04</span><div className="room-icon"><Stethoscope size={22} /></div><h3>醫護站</h3><p>為客人處理貓咪互動造成的小傷口，也提供貓咪的日常健康關照。</p><small>手上有被抓咬的痕跡嗎？來這裡讓我們幫你包紮一下。</small></article></div>
      </section>

      <section className="cats-section section" id="cats"><div className="section-heading"><div><div className="section-label">02 / THE CATS</div><h2>今天，誰會坐在<br /><em>你的身邊？</em></h2></div><p>店內共有 12 隻貓咪。<br />沒有指名服務，一切交給命運與貓咪心情。</p></div><div className="tag-intro"><div className="tag-intro-heading"><span className="tag-intro-badge">標籤介紹</span><p>點選性格，篩選今晚可能坐在你身邊的貓咪。</p></div><div className="tag-intro-grid" role="group" aria-label="依性格篩選貓咪">{personalityDetails.map(({ tag, desc, icon }) => <button type="button" className={`tag-option${tag === '全部' ? ' tag-option-all' : ''}${activeTag === tag ? ' active' : ''}`} onClick={() => setActiveTag(tag)} key={tag}><span className="tag-option-icon"><img src={icon} alt={`${tag}性格圖示`} /></span><strong>{tag}</strong><p>{desc}</p></button>)}</div></div><div className="cat-grid">{visibleCats.map(([number, name, personality, desc]) => <button type="button" className="cat-card" key={number} onClick={() => setSelectedCat([number, name, personality, desc])}><img src="/cat-wintermoon.png" alt={`${name}的照片`} className="cat-photo" /><div>{name !== '敬請期待' && <span className={`tag tag-${personalityTagClass[personality] || 'cling'}`}>{personality}</span>}<h3>{name}</h3><p>{desc}</p></div></button>)}</div></section>

      <section className="menu-section section" id="menu"><div className="menu-header"><div className="section-label light-label">03 / TODAY'S OFFERINGS</div><h2>菜單與<br /><em>消費項目</em></h2><p>所有服務項目請至櫃台詢問與購買。內容與供應狀況以現場公告為準。</p><div className="menu-entry-note"><ConciergeBell size={18} /> 入店前請先向店外攤位購買一份「本日套餐」即可入場</div><a className="menu-discord-link" href="https://discord.gg/u3mV7mMDXP" target="_blank" rel="noreferrer"><DiscordIcon size={18} /> 加入 Discord</a></div><div className="menu-list">{menuGroups.map(({ title, icon: Icon, items, note }) => <div className="menu-group" key={title}><div className="menu-group-title"><div className="menu-icon"><Icon size={19} /></div><h3>{title}</h3></div>{note && <p className="menu-group-note">{note}</p>}{items.map(([itemTitle, desc, price]) => <div className="menu-item" key={itemTitle}><div className="menu-name"><h3>{itemTitle}</h3>{desc && <p>{desc.split('｜').map((line, index) => <span className={index === 1 ? 'menu-note' : ''} key={line}>{line}</span>)}</p>}</div><strong>{price}</strong></div>)}</div>)}</div></section>

      <section className="rules section"><div className="rules-copy"><div className="section-label">04 / CAT BEHAVIOR & RULES</div><h2>先讀懂貓咪，<br /><em>再開始相處。</em></h2><p>每隻貓咪都有自己的情緒與界線。請先了解可能發生的互動，再享受今晚的相遇。</p></div><div className="rules-panels"><div className="rules-panel rules-behavior"><h3>貓咪可能觸發的行為</h3><div className="rules-list"><div><Check size={17} /><span>玩樂區的貓咪比較調皮，可能會抓傷你、突然衝過來或跳到你身上，甚至趁機叼走你的點心。</span></div><div><Check size={17} /><span>喝茶區的貓咪個性安靜許多，歡迎輕輕撫摸，但請不要用力拍打或抓弄牠們。</span></div><div><Check size={17} /><span>點了貓咪交響樂時，附近的貓咪可能會忍不住跟著合唱，純屬牠們的社交禮儀。</span></div><div><Check size={17} /><span>部分貓咪對小魚乾特別沒有抵抗力，可能會立刻衝過來討食，請小心手上的道具。</span></div><div><Check size={17} /><span>醫護站沒有固定駐點的貓咪，偶爾會有貓咪路過，順道安撫一下受傷的客人。</span></div></div></div><div className="rules-panel rules-notice"><h3>客人需遵守事項</h3><div className="rules-list"><div><Check size={17} /><span>本店為純粹的貓咪互動空間，客人不需要進行角色扮演即可入店。</span></div><div><Check size={17} /><span>請尊重每一隻貓咪的意願，不強迫牠們與你互動或觸摸。</span></div><div><Check size={17} /><span>貓咪就是貓咪，請勿對牠們有任何不當、色情意圖的言行。</span></div><div><Check size={17} /><span>請勿餵食店內提供以外的食物或異物給貓咪，維護牠們的健康。</span></div><div><Check size={17} /><span>請勿追逐、抱起或強行帶離貓咪，讓牠們保有自由活動的空間。</span></div><div><Check size={17} /><span>歡迎自由拍照，但請隱藏你的角色 ID；若想與貓咪合影，請購買店內的拍攝服務。直播或錄影請先向櫃台詢問。</span></div><div><Check size={17} /><span>如有任何不當言行，店家保留請客人離場的權利，以保障貓咪與其他客人的安全。</span></div></div></div></div></section>

      <footer className="footer" id="visit">
        <div className="footer-top">
          <div className="footer-brand"><span className="brand-mark"><Cat size={19} /></span><div><strong>貓尾草</strong><small>FF14 · CAT RP LOUNGE</small></div></div>
          <a className="discord-button discord-button-large" href="https://discord.gg/u3mV7mMDXP" target="_blank" rel="noreferrer"><DiscordIcon size={20} /> 加入 Discord</a>
        </div>
        <p className="footer-headline">營業時間、地點與最新公告，請見 Discord 公告。</p>
      </footer>
      {selectedCat && <div className="cat-modal-backdrop" role="presentation" onClick={() => setSelectedCat(null)}><article className="cat-modal" role="dialog" aria-modal="true" aria-label={`${selectedCat[1]}詳細介紹`} onClick={(event) => event.stopPropagation()}><button type="button" className="modal-close" onClick={() => setSelectedCat(null)} aria-label="關閉介紹"><X size={20} /></button><img src="/cat-wintermoon.png" alt={`${selectedCat[1]}的大頭照`} /><div><h2>{selectedCat[1]}</h2><span className={`tag tag-${personalityTagClass[selectedCat[2]] || 'cling'}`}>{selectedCat[2]}</span><p><strong>個性：</strong>{selectedCat[3]}</p><p><strong>喜好：</strong>喜歡溫柔的互動、窗邊的月光與剛好的距離。</p><p><strong>一句話：</strong>今天也請讓牠決定相遇的方式。</p></div></article></div>}
    </main>
  )
}
