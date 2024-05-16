// I don't know why link href can't parse the env variable, but other like Image component can parse the env variable. So I have to use this snippet to do that.
const src = (process.env.NODE_ENV === 'production' ? '/caotian-website/' : '/');

// const src = process.env.ASSET_PREFIX


export default src;