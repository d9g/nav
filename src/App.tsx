import React, { useState } from 'react'

import './App.css'
import ArrayLink from '../src/components/ArrayLink'
import GithubCorner from '../src/components/GithubCorner'
import Search from '../src/components/Search'
import Footer from '../src/components/Footer'
import SideBar from '../src/components/SideBar'
import * as Read from './data/links/read'
import * as Tool from './data/links/tool'
const App: React.FC = () => {
  const [category, setCategory] = useState('all')
  const handleToSetCategory = (category: string) => {
    setCategory(category)
  }
  interface OptionValue {
    label: string
    value: string
    title?: string
  }

  let options: Array<OptionValue> = []
  interface OptionsValue {
    [key: string]: Array<OptionValue>
  }
  const Links: OptionsValue = { ...Read, ...Tool }

  if (category === 'all') {
    for (let link in Links) {
      options = options.concat(Links[link])
    }
  } else {
    options = Links[category]
  }

  const Cateogries = Object.keys(Links)
  return (
    <div>
      <GithubCorner />
      <div className='App ' id='layout'>
        <div className='pure-g'>
          <div id='menu'>
            <SideBar setCategory={handleToSetCategory} cateogries={Cateogries}>
              <Search options={options} />
            </SideBar>
          </div>
          <div id='main'>

            <ArrayLink title='阅读' links={options} />
            {/* <ArrayLink title='社区' links={Read.WebpackLinks} />
            <ArrayLink title='教程' links={Read.TutorialLinks} />
            <ArrayLink title='收集' links={Read.BookLinks} />
            <ArrayLink title='代码' links={Tool.CodeLinks} />
            <ArrayLink title='文件处理' links={Tool.FileLinks} />
            <ArrayLink title='图片处理' links={Tool.ImageLinks} />
            <ArrayLink title='资源' links={Tool.SourceLinks} />
            <ArrayLink title='Git' links={Read.GitLinks} />
            <ArrayLink title='Webpack' links={Read.WebpackLinks} />
            <ArrayLink title='CSS' links={Read.CssLinks} />
            <ArrayLink title='Github仓库' links={Read.GithubRepoLinks} />
          <ArrayLink title='Github相关' links={Tool.GithubLinks} /> */}
          </div>
        </div>
      </div>
      <Footer />
    </div>
  )
}

export default App
