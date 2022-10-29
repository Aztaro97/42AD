import { extendTheme } from "native-base";

const config = {
	useSystemColorMode: false,
	initialColorMode: "light",
};

const fontConfig = {
	Raleway: {
		200: {
			normal: "Raleway_200ExtraLight",
		},

		400: {
			normal: "Raleway_400Regular",
		},
		600: {
			normal: "Raleway_600SemiBold",
		},
		700: {
			normal: "Raleway_700Bold",
		},
	},
};

const colors = {
	primary: {
		50: "#E3F2FD",
		100: "#BBDEFB",
		200: "#90CAF9",
		300: "#64B5F6",
		400: "#42A5F5",
		500: "#2196F3",
		600: "#1E88E5",
		700: "#1976D2",
		800: "#1565C0",
		900: "#0D47A1",
	},
};

// Make sure values below matches any of the keys in `fontConfig`
const fonts = {
	heading: "Raleway",
	body: "Raleway",
	mono: "Raleway",
};

export default extendTheme({
	config,
	colors,
	fonts,
	fontConfig,
});
