import Image from 'next/image';
// const style = {
//     imageStyle: {
//         display: 'inline-block',
//         marginRight: '0.3rem',
//     }
// }
// const src = `${process.env.ASSET_PREFIX || ''}`
const src = process.env.NODE_ENV === 'production' ? 'caotian-website/' : ''
console.log(src)
export default {
    
    logo:
    <> 
        <Image src={`/${src}assets/nunu2-transparent.svg`} width="45" height="45" alt="  "/>
        <div>
            {'\u00A0'} Nunu's Blog
        </div>
    </>
    ,
    project: { //TODO
        link: "https://github.com/JTHuang-Nunu",
    },
    
    chat: {
        link: 'https://medium.com/@zx6014',
        icon: (
        <Image src={`/${src}assets/medium-icon.svg`} width={24} height={24}/>
        )
    },
    head: ()=> {
        return (
            <>
                <link rel="icon" href={`/${src}assets/nunu2-transparent.svg`} type="image/svg" />
            </>
        )
    },
    feedback: {
        content: "Have any Question? Feel free to ask me",
        // uselink:"https://github.com/mkrtchian/reading-notes/blob/main",
    },
    //TODO("edit this page")
    docsRepositoryBase: "https://github.com/mkrtchian/reading-notes/blob/main",
    footer: {
        text: (
        <span>
            MIT {new Date().getFullYear()} ©{' '}
            <a href="https://nextra.site" target="_blank">
            Nextra
            </a>
            .
        </span>
        )
    }
}