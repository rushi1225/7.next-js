import Image from 'next/image'
import profile from '../../../public/next.svg'
import windowimg from '../../../public/window.svg'
const ImgComponents = () => {
    return (
        <div>
            <h1>Img Optimization in next js</h1>
            {/* img using import in next-js using comp */}
            <Image src={profile} alt='profile img' />
            <br />
            {/* html img tag but use next-js img using import is better */}
            <img src={windowimg.src} height={200} width={200} alt="window img" />
            <br />

            {/* url image -> change next-config.js add domains  */}
            <Image src="https://media.istockphoto.com/id/517188688/photo/mountain-landscape.jpg?s=612x612&w=0&k=20&c=A63koPKaCyIwQWOTFBRWXj_PwCrR4cEoOw2S9Q7yVl8=" width={400} height={400}></Image>
        </div>
    )
}

export default ImgComponents
