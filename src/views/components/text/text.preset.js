import { color } from "../../../constant/theme/colors";
import { typography } from "../../../constant/theme/typography";


const BASE = {
	fontFamily: typography.primary,
	fontSize: 16,
	color: color.white,
}
const BASE_BOLD = {
	fontFamily: typography.primaryBold,
	fontSize: 16,
	color: color.white,
}
const BOLD = {
	fontFamily: typography.secondary,
	color: color.white,
}

export const presets = {
	default: BASE,
	bold: BOLD,
	h1: {
		...BOLD,
		fontSize:32,
	},
	
	h2: {
		...BOLD,
		fontSize:28,
	},
	
	h3: {
		...BASE_BOLD,
		fontSize:24,
	},
	
	h4: {
		...BASE_BOLD,
		fontSize:14,
	},
	
}