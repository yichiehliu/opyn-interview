import React, { useCallback } from 'react'
import styled from 'styled-components'

interface TabProps {
  selectedTab?: number
  index: number
  setSelectedTab?: (index: number) => void
  onClick?: (event: React.MouseEvent<HTMLButtonElement, MouseEvent>) => void
}

export const Tab: React.FC<TabProps> = ({
  index,
  children,
  setSelectedTab,
  selectedTab,
  onClick,
}) => {
  const onTabClick = useCallback(
    e => {
      setSelectedTab(index)
      {
        onClick && onClick(e)
      }
    },
    [setSelectedTab, index, onClick],
  )
  return (
    <Root onClick={onTabClick} selectedTab={selectedTab} index={index}>
      {children}
    </Root>
  )
}

const Root = styled.button<{ selectedTab: number; index: number }>`
  width: 210px;
  height: 45px;
  outline: none;
  border: none;

  letter-spacing: 0.1em;
  text-transform: uppercase;
  font-size: 0.75rem;

  background-color: ${({ selectedTab, index }) =>
    index === selectedTab ? 'var(--white)' : '#F8F8FB'};
  border-right: ${({ selectedTab, index }) =>
    index === selectedTab && index === 0 && '1px solid #D4D3D7'};
  border-left: ${({ selectedTab, index }) =>
    index === selectedTab && index === 1 && '1px solid #D4D3D7'};
  border-bottom: ${({ selectedTab, index }) => index !== selectedTab && '1px solid #D4D3D7'};

  cursor: pointer;
`

export const TabContent = styled.div`
  padding: 0 16px 16px;
`
