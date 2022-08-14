
import React from 'react'
import { presets } from './text.preset'

export default function Text({ children, preset = 'default', style }) {
	const textStyles = {...presets[preset], ...style}
	return (

		<p style={textStyles}>{children}</p>
	)
}