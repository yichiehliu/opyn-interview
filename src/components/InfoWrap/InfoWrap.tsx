import React, { FC } from 'react'
import styled, { css } from 'styled-components'
import { ReactComponent as InfoSvg } from '@images/info.svg'

interface InfoWrapProps {
  align?: 'left' | 'center' | 'right'
  className?: string
  fontColor?: string
  svgColor?: string
  style?: React.CSSProperties
}

export const InfoWrap: FC<InfoWrapProps> = ({
  align,
  className,
  style,
  fontColor = 'var(--primary)',
  svgColor = 'var(--primary)',
  children,
}) => {
  return (
    <Root style={style} className={className} fontColor={fontColor} align={align}>
      {children}
      <InfoSvg fill={svgColor} />
    </Root>
  )
}

const Root = styled.div<{ align: string; fontColor: string }>`
  display: flex;
  justify-content: ${props => props.align};
  align-items: center;
  color: ${props => props.fontColor};

  font-size: 0.75rem;
  & > :last-child {
    display: flex;
    align-items: center;
    cursor: pointer;
    margin-left: 5px;
  }
`

export const InputInfoWrap = styled(InfoWrap)`
  text-transform: uppercase;
  letter-spacing: 0.1em;
  font-weight: 500;
`
