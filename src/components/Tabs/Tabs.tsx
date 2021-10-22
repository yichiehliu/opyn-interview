import React, { ReactElement, useState } from 'react'
import styled from 'styled-components'
import { Tab } from './Tab'

type Props = {
  initialSelectedTab?: number
  children: ReactElement[]
}

export const Tabs: React.FC<Props> = ({ children, initialSelectedTab = 0 }) => {
  const [selectedTab, setSelectedTab] = useState(initialSelectedTab)

  return (
    <>
      <Root>
        {children.map((item, index) => (
          <Tab
            key={index}
            index={index}
            setSelectedTab={setSelectedTab}
            selectedTab={selectedTab}
            onClick={item.props?.onClick}
          >
            {item.props.title}
          </Tab>
        ))}
      </Root>
      {children[selectedTab]}
    </>
  )
}

const Root = styled.div`
  display: flex;
`
