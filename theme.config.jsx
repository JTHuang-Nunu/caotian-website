import Image from 'next/image';
import src from '/components/src'
import { useRouter } from 'next/router';
// const style = {
//     imageStyle: {
//         display: 'inline-block',
//         marginRight: '0.3rem',
//     }
// }

export default {
    
    logo:
    <> 
        <Image src={`${src}assets/nunu2-transparent.svg`} width="45" height="45" alt="  "/>
        <div>
            {'\u00A0'} Nunu's Blog
        </div>
    </>
    ,
    project: { //TODO
        link: "https://github.com/JTHuang-Nunu/caotian-website",
    },
    
    chat: {
        link: 'https://medium.com/@zx6014',
        icon: (
        <img src={`${src}assets/medium-icon.svg`} width={24} height={24}/>
        )
    },
    head: ()=> {
        return (
            <>
                <link rel="icon" href={`${src}assets/nunu2-transparent.svg`} type="image/svg" />
                {/* <meta property="og:title" content="Example Title" />
                <meta property="og:description" content="This is an example description." />
                <meta property="og:image" content="https://example.com/image.jpg" />
                <meta property="og:url" content="https://example.com/page.html" />
                <meta property="og:type" content="website" />

                <meta property="og:url" content={url} />
                <meta property="og:title" content={frontMatter.title || 'Nextra'} />
                <meta
                property="og:description"
                content={frontMatter.description || 'The next site builder'}
                /> */}
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